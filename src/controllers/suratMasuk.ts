// controllers/suratMasukController.ts
import type { Request, Response } from "express";
import { prisma } from "../prisma";
import type { MyJwtPayload } from "../types/jwtPayload";

interface AuthRequest extends Request {
  user?: MyJwtPayload;
}

export const createSuratMasuk = async (req: Request, res: Response) => {
  try {
    const {
      perusahaanPengirim,
      namaPengirimInternalId,
      namaPengirimEksternal,
      tujuanId,
      satpam,
      kurir,
      plant,
      isAccepted,
      keterangan,
    } = req.body;

    const surat = await prisma.surat_Masuk.create({
      data: {
        perusahaanPengirim,
        namaPengirimEksternal,
        satpam,
        kurir,
        plant,
        isAccepted: isAccepted ?? false,
        keterangan,

        // relasi ke user
        ...(namaPengirimInternalId && {
          namaPengirimInternal: { connect: { id: namaPengirimInternalId } },
        }),
        ...(tujuanId && {
          tujuan: { connect: { id: tujuanId } },
        }),
      },

      include: {
        namaPengirimInternal: true,
        tujuan: true,
      },
    });

    res.status(201).json(surat);
  } catch (error) {
    res.status(500).json({ error: "Gagal membuat surat masuk", detail: error });
  }
};

export const getAllSuratMasuk = async (req: Request, res: Response) => {
  try {
    const { plant, search = "", page = "1", limit = "7" } = req.query;

    const currentPage = parseInt(page as string, 10);
    const perPage = parseInt(limit as string, 10);

    const whereClause: any = {
      OR: [
        {
          namaPengirimEksternal: {
            contains: search as string,
            mode: "insensitive",
          },
        },
        {
          perusahaanPengirim: {
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

    const suratMasuk = await prisma.surat_Masuk.findMany({
      where: whereClause,
      skip: (currentPage - 1) * perPage,
      take: perPage,
      orderBy: { createdAt: "desc" },
      include: {
        tujuan: true,
        namaPengirimInternal: true,
      },
    });

    const total = await prisma.surat_Masuk.count({ where: whereClause });

    res.json({
      success: true,
      data: suratMasuk,
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

export const getSuratMasukByPicId = async (req: AuthRequest, res: Response) => {
  try {
    const userPicId = req.user?.id;

    if (!userPicId) {
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }

    const surat = await prisma.surat_Masuk.findMany({
      where: {
        tujuanId: userPicId,
        isAccepted: false,
      },
      include: {
        tujuan: true,
        namaPengirimInternal: true,
      },
    });
    if (!surat)
      return res.status(404).json({ error: "Surat masuk tidak ditemukan" });
    res.json(surat);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil surat masuk" });
  }
};

export const updateSuratMasuk = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "Guest ID diperlukan" });
    }

    const updatedSuratMasuk = await prisma.surat_Masuk.update({
      where: { id },
      data: {
        isAccepted: true,
      },
    });

    return res.json({
      success: true,
      data: updatedSuratMasuk,
    });
  } catch (error) {
    res.status(500).json({ error: "Gagal mengupdate surat masuk" });
  }
};
