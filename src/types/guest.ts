import type { Plant } from "./enums.js";
import type { IUser } from "./user.js";

export interface IGuest {
  id: string;
  name: string;
  company: string;
  phone: string;
  plateNumber: string;
  purpose: string;
  identity: string;
  plant: Plant;
  itemName?: string;
  quantity?: string;
  description?: string;
  isActive: boolean;
  isAprove: boolean;
  picId?: string;
  createdAt: Date;
  updatedAt: Date;
  pic?: IUser;
}

// Interface untuk data create (wajib field utama)
export interface IGuestCreate {
  name: string;
  company: string;
  phone: string;
  plateNumber: string;
  purpose: string;
  identity: string;
  plant: Plant; // enum DS8 | DELTAMAS
  itemName?: string;
  quantity?: string;
  description?: string;
  isActive?: boolean; // default false
  isAprove?: boolean; // default false
  picId?: string; // relasi ke User
}

// Interface untuk data update (semua optional)
export interface IGuestUpdate {
  name?: string;
  company?: string;
  phone?: string;
  plateNumber?: string;
  purpose?: string;
  identity?: string;
  plant?: Plant;
  itemName?: string;
  quantity?: string;
  description?: string;
  isActive?: boolean;
  isAprove?: boolean;
  picId?: string;
}
