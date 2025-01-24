import { UserDto } from "@/models/dto/UserDto";
import { LoginDto } from "@/models/dto/LoginDto";
import { Api } from "../index";
import { TokenDto } from "@/models/dto/TokenDto";

export class UserApi extends Api {
  constructor() {
    super("user/");
  }

  fetchUser = () => {
    return this.getRequest<UserDto>("me");
  };

  login = (payload: LoginDto) => {
    return this.postRequest<TokenDto, LoginDto>("login", payload);
  };

  createUser = (payload: UserDto) => {
    return this.postRequest<UserDto, UserDto>("create", payload);
  };
}
