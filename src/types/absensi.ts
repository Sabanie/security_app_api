import { Plant, Kendaraan } from "./enums";
import type { IEmployee } from "./employee";

export interface IAbsensi {
  id: string;
  nopol?: string;
  plant: Plant;
  employeeId: string;
  employee: IEmployee;
  kendaraan: Kendaraan;
  keterangan?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
