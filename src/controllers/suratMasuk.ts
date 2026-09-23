// controllers/suratMasukController.ts
import type { Request, Response } from "express";
import { prisma } from "../prisma";
import type { MyJwtPayload } from "../types/jwtPayload";
import { Plant } from "../types/enums";
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

export const suratMasukMonthlyByWeek = async (req: Request, res: Response) => {
  try {
    const { month, year, plant } = req.query;

    // default: bulan & tahun sekarang
    const now = new Date();
    const targetMonth = month
      ? parseInt(month as string, 10) - 1
      : now.getMonth(); // JS month 0-11
    const targetYear = year ? parseInt(year as string, 10) : now.getFullYear();

    // awal bulan
    const startOfMonth = new Date(targetYear, targetMonth, 1, 0, 0, 0, 0);
    // akhir bulan
    const endOfMonth = new Date(
      targetYear,
      targetMonth + 1,
      0,
      23,
      59,
      59,
      999
    );

    // ambil semua surat masuk dalam bulan tsb, filter plant jika ada
    const suratMasuk = await prisma.surat_Masuk.findMany({
      where: {
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
        ...(plant ? { plant: plant as Plant } : {}), // filter plant jika ada
      },
      orderBy: { createdAt: "asc" },
    });

    // hitung jumlah per minggu
    const weeklyCounts = [0, 0, 0, 0]; // minggu ke-1 sampai ke-4

    suratMasuk.forEach((surat) => {
      const day = surat.createdAt.getDate();
      const weekIndex = Math.floor((day - 1) / 7); // 0-3
      if (weekIndex >= 0 && weekIndex < 4) {
        weeklyCounts[weekIndex]++;
      }
    });

    res.json({
      success: true,
      data: [
        { week: 1, count: weeklyCounts[0] },
        { week: 2, count: weeklyCounts[1] },
        { week: 3, count: weeklyCounts[2] },
        { week: 4, count: weeklyCounts[3] },
      ],
      meta: {
        month: targetMonth + 1,
        year: targetYear,
        plant: plant || "ALL", // tampilkan ALL kalau tidak ada filter
        total: suratMasuk.length,
      },
    });
  } catch (error) {
    console.error("Error fetching surat masuk by week:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch surat masuk by week" });
  }
};

export const suratMasukToday = async (req: Request, res: Response) => {
  try {
    const { plant } = req.query;

    // ambil tanggal hari ini
    const now = new Date();
    const startOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0,
      0
    );
    const endOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59,
      999
    );

    // query surat masuk hanya untuk hari ini, filter plant jika ada
    const suratMasuk = await prisma.surat_Masuk.findMany({
      where: {
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
        ...(plant ? { plant: plant as Plant } : {}), // filter plant opsional
      },
    });

    res.json({
      success: true,
      data: {
        date: now.toISOString().split("T")[0], // format YYYY-MM-DD
        count: suratMasuk.length,
      },
      meta: {
        plant: plant || "ALL",
      },
    });
  } catch (error) {
    console.error("Error fetching today's surat masuk:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch today's surat masuk",
    });
  }
};
