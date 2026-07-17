import { Plant, Kendaraan } from "./enums.js";
import type { IEmployee } from "./employee.js";

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
