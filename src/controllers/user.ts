import { prisma } from "../prisma.js";
import type { Request, Response } from "express";

// GET all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc", // urutkan agar hasil lebih rapi
      },
    });

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("GetUsers error:", error);
    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan saat mengambil data pengguna!",
    });
  }
};

// GET user dengan Plant DS 8
export async function getUsersDs(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany({
      where: {
        role: "USER",
        plant: "DS8",
      },
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc", // hasil lebih rapi
      },
    });

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching DS8 users:", error);
    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan saat mengambil data user DS8!",
    });
  }
}

// GET user dengan Plant deltamas
export async function getUsersDm(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany({
      where: {
        role: "USER",
        plant: "DELTAMAS",
      },
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc", // hasil lebih rapi
      },
    });

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching DS8 users:", error);
    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan saat mengambil data user DS8!",
    });
  }
}
