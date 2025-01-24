import { UserRole } from "../enums/UserRole";

export interface UserDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: UserRole;
  group_id: string;
}
