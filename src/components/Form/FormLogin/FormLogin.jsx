import React, { useRef, useState } from "react";
import s from "./FormLogin.module.css";

import { useForm } from "react-hook-form";
import { authApi } from "../../../api";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(data) {
    const { email, password, rememberMe } = data;
    const resp = await authApi.logIn(email, password, rememberMe);
    console.log(resp.resultCode);

    if (resp.resultCode === 0) return navigate("/");
    if (resp.resultCode === 1) {
      setErrorMessage("Неправильный пароль или email");
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={`${s.input} ${errors.email ? s.danger : ""}`}
        {...register("email", {
          required: "обязательное поле",
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Некорректный email",
          },
        })}
        placeholder="email"
        type="email"
      />
      {errors.email && <p className={s.message}>{errors.email.message}</p>}
      <input
        className={`${s.input} ${errors.password ? s.danger : ""}`}
        {...register("password", {
          required: "обязательное поле",
        })}
        placeholder="password"
        type="password"
      />
      {errors.password && (
        <p className={s.message}>{errors.password.message}</p>
      )}

      <fieldset>
        запомнить меня
        <input {...register("rememberMe")} type="checkbox" />
      </fieldset>
      <button disabled={!isValid}>Войти</button>
      <p className={s.message}>{errorMessage}</p>
    </form>
  );
};
