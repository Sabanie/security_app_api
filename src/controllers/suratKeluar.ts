import type { Request, Response } from "express";
import { prisma } from "../prisma";
import type { MyJwtPayload } from "../types/jwtPayload";

interface AuthRequest extends Request {
  user?: MyJwtPayload;
}

export const createSuratKeluar = async (req: Request, res: Response) => {
  try {
    const {
      namaPengirimId,
      tujuanInternalId,
      tujuanEksternal,
      perusahaanEksternal,
      satpam,
      kurir,
      plant,
      keterangan,
    } = req.body;

    const surat = await prisma.surat_Keluar.create({
      data: {
        tujuanEksternal: tujuanEksternal || null,
        perusahaanEksternal: perusahaanEksternal || null,
        satpam,
        kurir: kurir || null,
        plant,
        keterangan: keterangan || null,

        ...(namaPengirimId && {
          namaPengirim: { connect: { id: namaPengirimId } },
        }),
        ...(tujuanInternalId && {
          tujuanInternal: { connect: { id: tujuanInternalId } },
        }),
      },
      include: {
        namaPengirim: true,
        tujuanInternal: true,
      },
    });

    res.status(201).json(surat);
  } catch (error) {
    console.error("Error createSuratKeluar:", error);
    res.status(500).json({ error: "Gagal membuat surat keluar" });
  }
};

export const getAllSuratKeluar = async (req: Request, res: Response) => {
  try {
    const { plant, search = "", page = "1", limit = "7" } = req.query;

    const currentPage = parseInt(page as string, 10);
    const perPage = parseInt(limit as string, 10);

    const whereClause: any = {
      OR: [
        {
          tujuanEksternal: {
            contains: search as string,
            mode: "insensitive",
          },
        },
        {
          perusahaanEksternal: {
            contains: search as string,
            mode: "insensitive",
          },
        },
      ],
    };

    // filter berdasarkan plant jika ada
    if (plant) {
      whereClause.plant = plant;
    }

    const suratKeluar = await prisma.surat_Keluar.findMany({
      where: whereClause,
      skip: (currentPage - 1) * perPage,
      take: perPage,
      orderBy: { createdAt: "desc" },
      include: {
        namaPengirim: true,
        tujuanInternal: true,
      },
    });

    const total = await prisma.surat_Keluar.count({ where: whereClause });

    res.json({
      success: true,
      data: suratKeluar,
      meta: {
        total,
        page: currentPage,
        limit: perPage,
      },
    });
  } catch (error) {
    console.error("Error fetching guests:", error);
    res.status(500).json({ success: false, error: "Failed to fetch guests" });
  }
};

export const getSuratKeluarByPicId = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const userPicId = req.user?.id;

    if (!userPicId) {
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }

    const surat = await prisma.surat_Keluar.findMany({
      where: {
        namaPengirimId: userPicId,
        isDelivered: false,
      },
      include: {
        namaPengirim: true,
        tujuanInternal: true,
      },
    });
    if (!surat)
      return res.status(404).json({ error: "Surat keluar tidak ditemukan" });
    res.json(surat);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil surat masuk" });
  }
};

export const updateSuratKeluar = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "Guest ID diperlukan" });
    }

    const updatedSuratKeluar = await prisma.surat_Keluar.update({
      where: { id },
      data: {
        isDelivered: true,
      },
    });

    return res.json({
      success: true,
      data: updatedSuratKeluar,
    });
  } catch (error) {
    res.status(500).json({ error: "Gagal mengupdate surat masuk" });
  }
};

export const updateMailItems = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;
    const { kurir, satpam } = req.body;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "ID wajib diberikan" });
    }
    // Ambil data lama dulu
    const existingMail = await prisma.surat_Keluar.findUnique({
      where: { id },
    });
    if (!existingMail) {
      return res
        .status(404)
        .json({ success: false, error: "Guest tidak ditemukan" });
    }

    // Update hanya field yang dikirim, kalau kosong pakai nilai lama
    const updatedMail = await prisma.surat_Keluar.update({
      where: { id },
      data: {
        kurir: kurir ?? existingMail.kurir,
        satpam: satpam ?? existingMail.satpam,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Data tamu berhasil diupdate!",
      data: updatedMail,
    });
  } catch (error) {
    console.error("Error updating guest items:", error);
    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan saat mengupdate data surat!",
    });
  }
};

export const getMailById = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "ID wajib diberikan" });
    }

    const mail = await prisma.surat_Keluar.findUnique({ where: { id } });

    if (!mail) {
      return res
        .status(404)
        .json({ success: false, error: "surat tidak ditemukan" });
    }

    return res.json({ success: true, data: mail });
  } catch (error) {
    console.error("Error fetching guest:", error);
    return res
      .status(500)
      .json({ success: false, error: "Terjadi kesalahan server" });
  }
};
