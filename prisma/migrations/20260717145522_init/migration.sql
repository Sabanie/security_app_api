-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'SECURITYDS8', 'SECURITYDELTAMAS');

-- CreateEnum
CREATE TYPE "Plant" AS ENUM ('DS8', 'DELTAMAS');

-- CreateEnum
CREATE TYPE "Kendaraan" AS ENUM ('MOTOR', 'MOBIL', 'NONE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "departement" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "plant" "Plant" NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "identity" TEXT NOT NULL,
    "plant" "Plant" NOT NULL,
    "itemName" TEXT,
    "quantity" TEXT,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "isAprove" BOOLEAN NOT NULL DEFAULT false,
    "picId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Surat_Masuk" (
    "id" TEXT NOT NULL,
    "perusahaanPengirim" TEXT NOT NULL,
    "namaPengirimInternalId" TEXT,
    "namaPengirimEksternal" TEXT,
    "tujuanId" TEXT,
    "satpam" TEXT NOT NULL,
    "kurir" TEXT,
    "plant" "Plant" NOT NULL,
    "isAccepted" BOOLEAN NOT NULL DEFAULT false,
    "keterangan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Surat_Masuk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Surat_Keluar" (
    "id" TEXT NOT NULL,
    "namaPengirimId" TEXT,
    "tujuanInternalId" TEXT,
    "tujuanEksternal" TEXT,
    "perusahaanEksternal" TEXT,
    "satpam" TEXT NOT NULL,
    "kurir" TEXT,
    "plant" "Plant" NOT NULL,
    "isDelivered" BOOLEAN NOT NULL DEFAULT false,
    "keterangan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Surat_Keluar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "motor1" TEXT,
    "motor2" TEXT,
    "mobil1" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Absensi" (
    "id" TEXT NOT NULL,
    "nopol" TEXT,
    "plant" "Plant" NOT NULL,
    "employeeId" TEXT NOT NULL,
    "kendaraan" "Kendaraan" NOT NULL DEFAULT 'NONE',
    "keterangan" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Absensi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_picId_fkey" FOREIGN KEY ("picId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Surat_Masuk" ADD CONSTRAINT "Surat_Masuk_namaPengirimInternalId_fkey" FOREIGN KEY ("namaPengirimInternalId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Surat_Masuk" ADD CONSTRAINT "Surat_Masuk_tujuanId_fkey" FOREIGN KEY ("tujuanId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Surat_Keluar" ADD CONSTRAINT "Surat_Keluar_namaPengirimId_fkey" FOREIGN KEY ("namaPengirimId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Surat_Keluar" ADD CONSTRAINT "Surat_Keluar_tujuanInternalId_fkey" FOREIGN KEY ("tujuanInternalId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absensi" ADD CONSTRAINT "Absensi_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
