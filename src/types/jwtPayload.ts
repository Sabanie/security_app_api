import type { Plant, Role } from "./enums";

export interface MyJwtPayload {
  id: string;
  role: Role;
  name: string;
  plant: Plant;
}
