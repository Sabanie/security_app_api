import type { Plant, Role } from "./enums.js";

export interface MyJwtPayload {
  id: string;
  role: Role;
  name: string;
  plant: Plant;
}
