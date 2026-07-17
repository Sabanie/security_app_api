import type { Plant } from "./enums";
import type { IUser } from "./user";

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
