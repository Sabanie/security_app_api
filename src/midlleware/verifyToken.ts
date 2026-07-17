import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import type { Role, Plant } from "../types/enums";

// custom payload jwt
interface MyJwtPayload extends JwtPayload {
  id: string;
  role: Role;
  name: string;
  plant: Plant;
}

// extend Request
export interface AuthRequest extends Request {
  user?: MyJwtPayload;
}

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) {
      return res.status(401).json({ message: "Token tidak ditemukan!" });
    }

    const secret = process.env.REFRESH_TOKEN_SECRET as string;
    // type decode agar sesuai payload custom
    const decoded = jwt.verify(token, secret) as MyJwtPayload;

    // Simpan payload user di request agar bisa dipakai di controller
    req.user = decoded;

    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(403).json({ message: "Token tidak valid!" });
  }
};
