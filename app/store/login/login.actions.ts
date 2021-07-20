import { createAction } from "@reduxjs/toolkit";

export const recoverPassword = createAction("[Recover password]");
export const recoverPasswordSuccess = createAction("[Recover password] success");
export const recoverPasswordFail =
    createAction("[Recover password] fail", (error: any) => ({payload: error}));