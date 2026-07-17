import type { IAbsensi } from "./absensi.js";

export interface IEmployee {
  id: string;
  nama: string;
  motor1?: string;
  motor2?: string;
  mobil1?: string;
  createdAt: Date;
  updatedAt: Date;
  absensi?: IAbsensi[];
}
