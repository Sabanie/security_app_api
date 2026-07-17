import type { Plant } from "./enums";
import type { IUser } from "./user";

export interface ISuratMasuk {
  id: string;
  perusahaanPengirim: string;
  namaPengirimInternalId?: string;
  namaPengirimEksternal?: string;
  tujuanId?: string;
  satpam: string;
  kurir?: string;
  plant: Plant;
  isAccepted: boolean;
  keterangan?: string;
  createdAt: Date;
  updatedAt: Date;
  namaPengirimInternal?: IUser;
  tujuan?: IUser;
}
