import { UserDto } from "@/models/dto/UserDto";
import { apiClient } from "../index";

export const fetchUser = () => apiClient.get("user/me");

export const createUser = (data: UserDto) =>
  apiClient.post("user/create", data);
