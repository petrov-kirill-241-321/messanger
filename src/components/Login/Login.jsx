import React from "react";
import s from "./Login.module.css";
import { FormLogin } from "../Form/FormLogin/FormLogin";

export const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px" }} className={s.title}>
        Вы не авторизованы
      </h1>
      <FormLogin />
    </div>
  );
};
