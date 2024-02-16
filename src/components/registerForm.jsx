import React from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("username", { required: true })}
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <span className="formError">El nombre de usuario es requerido</span>
          )}
        </div>
        <div>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Correo electrónico"
          />
          {errors.email && (
            <span className="formError">
              Por favor, ingresa un correo electrónico válido
            </span>
          )}
        </div>
        <div>
          <input
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            })}
            placeholder="Contraseña"
          />
          {errors.password && (
            <span className="formError">
              La contraseña debe contener al menos 8 caracteres, incluyendo al
              menos una letra mayúscula, una letra minúscula y un número
            </span>
          )}
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
};
