import type { Plant, Role } from "./enums";
import type { IGuest } from "./guest";
import type { ISuratMasuk } from "./suratMasuk";
import type { ISuratKeluar } from "./suratKeluar";

export interface IUser {
  id: string;
  departement: string;
  name: string;
  plant: Plant;
  username: string;
  password: string;
  role: Role;
  refresh_token: string;
  createdAt: Date;
  updatedAt: Date;
  guests?: IGuest[];
  surat_keluar_pengirim?: ISuratKeluar[];
  surat_keluar_tujuan?: ISuratKeluar[];
  surat_masuk?: ISuratMasuk[];
  tujuan_masuk?: ISuratMasuk[];
}
