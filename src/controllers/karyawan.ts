import type { Request, Response } from "express";
import { prisma } from "../prisma";

// tambahkan karyawan

export const createKaryawan = async (req: Request, res: Response) => {
  try {
    const { nama, motor1, motor2, mobil1 } = req.body;

    // validasi
    if (!nama) {
      return res.status(400).json({
        success: false,
        error: "field nama harus di isi",
      });
    }

    // simpan data karywan
    const newKaryawan = await prisma.employee.create({
      data: {
        nama,
        motor1,
        motor2,
        mobil1,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Data karyawan berhasil di tambahkan",
      data: newKaryawan,
    });
  } catch (error) {
    console.error("error saat menambahkan karyawan:", error);
    res.status(500).json({
      success: false,
      error: "terjadi kesalahan saat menambahkan karyawan",
    });
  }
};
// ambil data seluruh karyawan
export const getAllKaryawan = async (req: Request, res: Response) => {
  try {
    const { plant, search = "", page = "1", limit = "15" } = req.query;
    const currentPage = parseInt(page as string, 10);
    const perPage = parseInt(limit as string, 10);
    const whereClause: any = {
      OR: [
        {
          nama: {
            contains: search as string,
            mode: "insensitive",
          },
        },
        {
          motor1: {
            contains: search as string,
            mode: "insensitive",
          },
        },
        {
          motor2: {
            contains: search as string,
            mode: "insensitive",
          },
        },
        {
          mobil1: {
            contains: search as string,
            mode: "insensitive",
          },
        },
      ],
    };

    if (plant) {
      whereClause.plant = plant;
    }

    const karyawan = await prisma.employee.findMany({
      where: whereClause,
      skip: (currentPage - 1) * perPage,
      take: perPage,
    });

    const total = await prisma.employee.count({ where: whereClause });
    res.json({
      success: true,
      data: karyawan,
      meta: {
        total,
        page: currentPage,
        limit: perPage,
      },
    });
  } catch (error) {
    console.error("error fetching Karyawan:", error);
    res.status(500).json({
      success: false,
      error: "Gagal fetching Karyawan",
    });
  }
};
// update data karyawan
export const updateKaryawan = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;
    const { nama, motor1, motor2, mobil1 } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "Id wajib ada",
      });
    }
    const existingKaryawan = await prisma.employee.findUnique({
      where: { id },
    });
    if (!existingKaryawan) {
      return res.status(400).json({
        sucess: false,
        error: "Karyawan tidak ditemukan",
      });
    }

    const updateKaryawan = await prisma.employee.update({
      where: { id },
      data: {
        nama: nama ?? existingKaryawan.nama,
        motor1: motor1 ?? existingKaryawan.motor1,
        motor2: motor2 ?? existingKaryawan.motor2,
        mobil1: mobil1 ?? existingKaryawan.mobil1,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Data Karyawan berhasil diupdate!",
      data: updateKaryawan,
    });
  } catch (error) {
    console.error("Error updating employe items:", error);
    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan saat mengupdate data karyawan!",
    });
  }
};

// hapus data karyawan
export const deleteKaryawan = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;
    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "ID wajib diberikan" });
    }

    const deleteKaryawan = await prisma.employee.delete({
      where: { id },
    });
    return res.status(200).json({
      success: true,
      message: "Data tamu berhasil diupdate!",
    });
  } catch (error) {
    console.error("Error updating guest items:", error);
    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan saat mengupdate data tamu!",
    });
  }
};
