import type { Plant } from "./enums.js";
import type { IUser } from "./user.js";

export interface ISuratKeluar {
  id: string;
  namaPengirimId?: string;
  tujuanInternalId?: string;
  tujuanEksternal?: string;
  satpam: string;
  kurir?: string;
  plant: Plant;
  isDelivered: boolean;
  keterangan?: string;
  createdAt: Date;
  updatedAt: Date;
  namaPengirim?: IUser;
  tujuanInternal?: IUser;
}
