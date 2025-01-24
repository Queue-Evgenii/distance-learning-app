import { LoginDto } from "@/models/dto/LoginDto";
import { apiClient } from "../index";

export const login = (data: LoginDto) => apiClient.post("user/login", data);
