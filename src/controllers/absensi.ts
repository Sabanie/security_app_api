import { Request, Response } from "express";
import { prisma } from "../prisma";

export const createAbsensi = async (req: Request, res: Response) => {
  try {
    const { nopol, plant, employeeId, kendaraan, keterangan } = req.body;

    // validasi employee
    const employee = await prisma.employee.findUnique({
      where: {
        id: employeeId,
      },
    });

    if (!employee) {
      return res.status(404).json({
        success: false,
        error: "Karyawan tidak ditemukan",
      });
    }

    const absensi = await prisma.absensi.create({
      data: {
        nopol,
        plant,
        employeeId,
        kendaraan,
        keterangan,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Absensi berhasil ditambahkan",
      data: absensi,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan server",
    });
  }
};

export const getAllAbsensi = async (req: Request, res: Response) => {
  try {
    const { plant, search = "", page = "1", limit = "7", tanggal } = req.query;

    const currentPage = parseInt(page as string, 10);
    const perPage = parseInt(limit as string, 10);

    const whereClause: any = {};

    // filter berdasarkan plant jika ada
    if (plant) {
      whereClause.plant = plant;
    }

    // Search nama karyawan
    if (search) {
      whereClause.employee = {
        name: {
          contains: search as string,
          mode: "insensitive",
        },
      };
    }
    // filter tanggal
    if (tanggal) {
      const startDate = new Date(tanggal as string);
      const endDate = new Date(tanggal as string);

      endDate.setHours(23, 59, 59, 999);

      whereClause.createdAt = {
        gte: startDate,
        lte: endDate,
      };
    }

    const absensi = await prisma.absensi.findMany({
      include: {
        employee: true,
      },
      where: whereClause,
      skip: (currentPage - 1) * perPage,
      take: perPage,
      orderBy: { createdAt: "desc" },
    });

    const total = await prisma.absensi.count({ where: whereClause });

    res.json({
      success: true,
      data: absensi,
      meta: {
        total,
        page: currentPage,
        limit: perPage,
      },
    });
  } catch (error) {
    console.error("Error fetching Absensi:", error);
    res.status(500).json({ success: false, error: "Failed to fetch Absensi" });
  }
};

export const getAbsensiById = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;
    const absensi = await prisma.absensi.findUnique({
      where: { id },
      include: {
        employee: true,
      },
    });

    if (!absensi) {
      return res.status(404).json({
        success: false,
        error: "Data absensi tidak ditemukan",
      });
    }

    return res.status(200).json({
      success: true,
      data: absensi,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan server",
    });
  }
};

export const updateAbsensi = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;
    const { nopol, plant, kendaraan, keterangan, isActive } = req.body;

    const absensi = await prisma.absensi.findUnique({
      where: { id },
    });

    if (!absensi) {
      return res.status(404).json({
        success: false,
        error: "Data absensi tidak ditemukan",
      });
    }

    const updatedAbsensi = await prisma.absensi.update({
      where: { id },
      data: {
        nopol,
        plant,
        kendaraan,
        keterangan,
        isActive,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Data absensi berhasil diperbarui",
      data: updatedAbsensi,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan server",
    });
  }
};

export const deleteAbsensi = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;
    const absensi = await prisma.absensi.update({
      where: { id },
      data: {
        isActive: false,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Data absensi berhasil dinonaktifkan",
      data: absensi,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan server",
    });
  }
};

export const absensiKeluar = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;

    const absensi = await prisma.absensi.findUnique({
      where: { id },
    });

    if (!absensi) {
      return res.status(404).json({
        success: false,
        message: "Data absensi tidak ditemukan",
      });
    }

    if (!absensi.isActive) {
      return res.status(400).json({
        success: false,
        message: "Karyawan sudah melakukan absensi keluar",
      });
    }

    const updatedAbsensi = await prisma.absensi.update({
      where: { id },
      data: {
        isActive: false,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Absensi keluar berhasil",
      data: updatedAbsensi,
    });
  } catch (error) {
    console.error("Error absensi keluar:", error);

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server",
    });
  }
};
