import { UserDto } from "@/models/dto/UserDto";

export interface UserState {
  user: UserDto | null;
}