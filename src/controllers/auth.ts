import type { MyJwtPayload } from "../types/jwtPayload";
import { prisma } from "../prisma";
import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";

// custom payload jwt

export interface AuthRequest extends Request {
  user?: MyJwtPayload;
}

// Registrasi user

export const register = async (req: Request, res: Response) => {
  try {
    const {
      departement,
      name,
      plant,
      username,
      password,
      role,
      refresh_token,
    } = req.body;

    // Validasi input
    if (!departement || !name || !plant || !username || !password || !role) {
      return res.status(400).json({ message: "Semua field wajib diisi!" });
    }

    // Cek apakah username sudah digunakan
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Username sudah digunakan!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru
    const newUser = await prisma.user.create({
      data: {
        departement,
        name,
        plant,
        username,
        password: hashedPassword,
        role,
        refresh_token,
      },
    });

    return res.status(201).json({
      message: "Registrasi berhasil!",
      user: {
        id: newUser.id,
        name: newUser.name,
        username: newUser.username,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Registrasi gagal!" });
  }
};

// Login user
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username dan password wajib diisi!" });
    }

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Username tidak ditemukan!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password salah!" });
    }

    // Generate JWT
    const accessToken = jwt.sign(
      {
        id: user.id,
        name: user.name,
        role: user.role,
        plant: user.plant,
      },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: "15s" }
    );

    const refreshToken = jwt.sign(
      {
        id: user.id,
        name: user.name,
        role: user.role,
        plant: user.plant,
      },
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: "1d" }
    );

    // Simpan refresh token di DB
    await prisma.user.update({
      where: { id: user.id },
      data: { refresh_token: refreshToken },
    });

    // set cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: "Login berhasil!",
      accessToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan server!" });
  }
};

// logout
export const logout = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      return res.status(400).json({ message: "Tidak ada refresh token!" });
    }

    // Cari user berdasarkan refresh token
    const user = await prisma.user.findFirst({
      where: { refresh_token: refreshToken },
    });

    if (!user) {
      // Hapus cookie meskipun user tidak ditemukan
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      return res.status(200).json({ message: "Logout berhasil!" });
    }

    // Hapus refresh token dari DB
    await prisma.user.update({
      where: { id: user.id },
      data: { refresh_token: "" },
    });

    // Hapus cookie
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({ message: "Logout berhasil!" });
  } catch (error) {
    console.error("Error logout:", error);
    return res.status(500).json({ message: "Terjadi kesalahan server!" });
  }
};

// refresh token

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res
        .status(401)
        .json({ message: "Refresh token tidak ditemukan!" });
    }

    // Cari user berdasarkan refresh token
    const user = await prisma.user.findFirst({
      where: { refresh_token: refreshToken },
    });

    if (!user) {
      return res.status(403).json({ message: "Refresh token tidak valid!" });
    }

    // Verifikasi refresh token (synchronous)
    try {
      const decoded = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET as string
      ) as MyJwtPayload;

      // Generate access token baru (durasi lebih wajar)
      const accessToken = jwt.sign(
        {
          id: user.id,
          name: user.name,
          role: user.role,
          plant: user.plant,
        },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn: "15m" } // best practice: 15 menit
      );

      return res.json({
        message: "Access token diperbarui!",
        accessToken,
      });
    } catch (err) {
      return res.status(403).json({ message: "Refresh token tidak valid!" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan server!" });
  }
};

// me
// Controller untuk endpoint /me
export const meController = (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({
      user: null,
      message: "Tidak ada user login atau token tidak valid",
    });
  }

  // Kirim payload user yang sudah di-decode dari JWT
  res.json({
    user: {
      id: req.user.id,
      role: req.user.role,
      name: req.user.name,
      plant: req.user.plant,
    },
  });
};
