import { createAction } from "@reduxjs/toolkit";
import { User } from "../../model/user/User";

export const recoverPassword = createAction("[Recover password]");
export const recoverPasswordSuccess = createAction("[Recover password] success");
export const recoverPasswordFail =
    createAction("[Recover password] fail", (error: any) => ({payload: error}));

export const recoverPasswordReset = createAction("[Recover password] reset");

export const login = createAction("[Login]");
export const loginSuccess = createAction("[Login] success", (user: User) => ({payload: user}));
export const loginFail = createAction("[Login] fail", (error: any) => ({payload: error}));