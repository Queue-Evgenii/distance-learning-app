import { Module } from "vuex";
import { UserState } from "../models/UserState";
import { State as RootState } from "@/store/index";
import { UserDto } from "@/models/dto/UserDto";
import { UserApi } from "@/api/modules/user";

const userModule: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    user(state: UserState): UserDto | null {
      return state.user;
    },
  },
  mutations: {
    setUser(state: UserState, user: UserDto) {
      state.user = user;
    },
    clearUser(state: UserState) {
      state.user = null;
    }
  },
};

export default userModule;
