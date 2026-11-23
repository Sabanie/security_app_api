import { Request, Response } from "express";
import { prisma } from "../prisma";
import { Plant } from "../types/enums";
import PDFDocument from "pdfkit";

export const createAbsensi = async (req: Request, res: Response) => {
  try {
    const { nopol, plant, employeeId, kendaraan, keterangan } = req.body;

    // validasi employee
    const employee = await prisma.employee.findUnique({
      where: {
        id: employeeId,
      },
    });
    const activeAbsensi = await prisma.absensi.findFirst({
      where: {
        employeeId,
        isActive: true,
      },
    });

    if (!employee) {
      return res.status(404).json({
        success: false,
        error: "Karyawan tidak ditemukan",
      });
    }
    if (activeAbsensi) {
      return res.status(400).json({
        success: false,
        error: "Karyawan belum pulang",
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
    const { plant, search = "", cursor, limit = "15", tanggal } = req.query;

    const perPage = parseInt(limit as string, 10);

    const whereClause: any = {};
    console.log(search);

    // Search employee name
    if (search) {
      whereClause.employee = {
        nama: {
          contains: search as string,
          mode: "insensitive",
        },
      };
    }

    // Filter plant
    if (plant) {
      whereClause.plant = plant;
    }

    // Filter tanggal
    if (tanggal) {
      const date = new Date(tanggal as string);

      if (isNaN(date.getTime())) {
        return res.status(400).json({
          success: false,
          message: "Format tanggal tidak valid",
        });
      }

      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);

      whereClause.checkInAt = {
        gte: startDate,
        lte: endDate,
      };
    } else {
      const today = new Date();

      const startDate = new Date(today);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(today);
      endDate.setHours(23, 59, 59, 999);

      whereClause.checkInAt = {
        gte: startDate,
        lte: endDate,
      };
    }

    const absensi = await prisma.absensi.findMany({
      where: whereClause,
      include: {
        employee: true,
      },
      take: perPage + 1,
      ...(cursor && {
        cursor: {
          id: String(cursor),
        },
        skip: 1,
      }),
      orderBy: {
        checkInAt: "asc",
      },
    });

    let nextCursor = null;

    if (absensi.length > perPage) {
      const nextItem = absensi.pop();
      nextCursor = nextItem?.id;
    }

    return res.json({
      success: true,
      data: absensi,
      nextCursor,
      hasMore: !!nextCursor,
    });
  } catch (error) {
    console.error("Error fetching Absensi:", error);

    return res.status(500).json({
      success: false,
      error: "Failed to fetch Absensi",
    });
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
        checkOutAt: new Date(),
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

export const absensiMonthlyByWeek = async (req: Request, res: Response) => {
  try {
    const { month, year, plant } = req.query;

    const now = new Date();

    const targetMonth = month
      ? parseInt(month as string, 10) - 1
      : now.getMonth();

    const targetYear = year ? parseInt(year as string, 10) : now.getFullYear();

    const startOfMonth = new Date(targetYear, targetMonth, 1, 0, 0, 0, 0);

    const endOfMonth = new Date(
      targetYear,
      targetMonth + 1,
      0,
      23,
      59,
      59,
      999
    );

    const absensis = await prisma.absensi.findMany({
      where: {
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
        ...(plant ? { plant: plant as Plant } : {}),
      },
    });

    const lastDay = new Date(targetYear, targetMonth + 1, 0).getDate();

    const dailyData = [];

    for (let day = 1; day <= lastDay; day++) {
      const count = absensis.filter((employe) => {
        const absensiDate = employe.createdAt;

        return (
          absensiDate.getDate() === day &&
          absensiDate.getMonth() === targetMonth &&
          absensiDate.getFullYear() === targetYear
        );
      }).length;

      const formattedDate = `${targetYear}-${String(targetMonth + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;

      dailyData.push({
        day,
        date: formattedDate,
        count,
      });
    }

    res.json({
      success: true,
      data: dailyData,
      meta: {
        month: targetMonth + 1,
        year: targetYear,
        plant: plant || null,
        totalAbsensi: absensis.length,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Failed to fetch monthly guests",
    });
  }
};

export const exportPDF = async (req: Request, res: Response) => {
  const { plant, search = "", tanggal } = req.query;
  const [year, month, day] = (tanggal as string).split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const whereClause: any = {};

  // search nama
  if (search) {
    whereClause.employee = {
      nama: {
        contains: search as string,
        mode: "insensitive",
      },
    };
  }

  // filter plant
  if (plant) {
    whereClause.employee = {
      ...whereClause.employee,
      plant: plant as string,
    };
  }

  // filter tanggal
  if (tanggal) {
    const date = new Date(tanggal as string);

    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    whereClause.checkInAt = {
      gte: startDate,
      lte: endDate,
    };
  }

  try {
    const data = await prisma.absensi.findMany({
      where: whereClause,
      include: {
        employee: true,
      },
      orderBy: {
        checkInAt: "asc",
      },
    });

    if (!data.length) {
      return res.status(404).json({
        success: false,
        error: "Data absensi tidak ditemukan",
      });
    }

    const firstDate = data[0].checkInAt;
    const lastDate = data[data.length - 1].checkInAt;

    const periodeAwal = new Date(firstDate).toLocaleDateString("id-ID");

    const periodeAkhir = new Date(lastDate).toLocaleDateString("id-ID");

    const formatFileDate = (date: Date) => {
      const d = String(date.getDate()).padStart(2, "0");
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const y = date.getFullYear();

      return `${d}-${m}-${y}`;
    };

    const fileName = `laporan-absensi-${formatFileDate(
      firstDate
    )}_sd_${formatFileDate(lastDate)}.pdf`;

    const doc = new PDFDocument({
      size: "A4",
      margin: 40,
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

    doc.pipe(res);
    // Judul
    doc.fontSize(18).font("Helvetica-Bold").text("LAPORAN ABSENSI KARYAWAN", {
      align: "center",
    });

    doc.moveDown();

    doc
      .fontSize(10)
      .font("Helvetica")
      .text(`Tanggal cetak : ${new Date().toLocaleDateString("id-ID")}`);
    doc.moveDown();

    doc
      .fontSize(10)
      .fillColor("black")
      .text(`Periode: ${periodeAwal} s/d ${periodeAkhir}`);

    doc.moveDown();

    // Ukuran kolom
    const startX = 40;
    let startY = doc.y;

    const colNo = 40;
    const colNama = 100;
    const colKendaraan = 100;
    const colNopol = 80;
    const colCheckIn = 80;
    const colCheckOut = 80;

    // Header
    const drawTableHeader = (y: number) => {
      doc.rect(startX, y, 480, 25).fill("#2563eb");

      doc.fillColor("white").font("Helvetica-Bold").fontSize(9);

      doc.text("No", startX + 10, y + 7);
      doc.text("Nama", startX + colNo + 10, y + 7);
      doc.text("Kendaraan", startX + colNo + colNama + 10, y + 7);
      doc.text("NoPol", startX + colNo + colNama + colKendaraan + 10, y + 7);
      doc.text(
        "Jam Masuk",
        startX + colNo + colNama + colKendaraan + colNopol + 10,
        y + 7
      );
      doc.text(
        "Jam Keluar",
        startX + colNo + colNama + colKendaraan + colNopol + colCheckIn + 10,
        y + 7
      );
    };
    drawTableHeader(startY);
    startY += 25;
    // DATA
    data.forEach((item, index) => {
      if (startY > 730) {
        doc.addPage();
        startY = 50;
        drawTableHeader(startY);
        startY += 25;
      }

      const bgColor = index % 2 === 0 ? "#f8fafc" : "#ffffff";

      doc.rect(startX, startY, 480, 25).fill(bgColor);

      doc.strokeColor("#d1d5db").rect(startX, startY, 480, 25).stroke();

      doc.fillColor("black");
      doc.font("Helvetica").fontSize(8);

      // No
      doc.text(String(index + 1), startX + 10, startY + 7);

      // Nama
      doc.text(item.employee?.nama || "-", startX + colNo + 10, startY + 7, {
        width: colNama - 15,
      });

      // Kendaraan
      doc.text(
        item.kendaraan || "-",
        startX + colNo + colNama + 10,
        startY + 7,
        {
          width: colKendaraan - 15,
        }
      );

      // Nopol
      doc.text(
        item.nopol || "-",
        startX + colNo + colNama + colKendaraan + 10,
        startY + 7,
        {
          width: colNopol - 15,
        }
      );

      // Jam Masuk
      doc.text(
        item.checkInAt
          ? new Date(item.checkInAt).toLocaleTimeString("id-ID")
          : "-",
        startX + colNo + colNama + colKendaraan + colNopol + 10,
        startY + 7
      );

      // Jam Keluar
      doc.text(
        item.checkOutAt
          ? new Date(item.checkOutAt).toLocaleTimeString("id-ID")
          : "-",
        startX + colNo + colNama + colKendaraan + colNopol + colCheckIn + 10,
        startY + 7
      );
      startY += 25; // WAJIB
    });

    // FOOTER (DI LUAR FOREACH)
    doc.y = startY + 20;

    doc
      .font("Helvetica-Bold")
      .fontSize(10)
      .fillColor("black")
      .text(`Total Data : ${data.length}`, {
        align: "left",
      });

    doc.end();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Gagal Export PDF",
    });
  }
};
