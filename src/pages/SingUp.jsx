import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { UserAuth } from "../context/AuthContext";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <Layout aditionalStyles="text-center text-white min-h-screen min-w-screen">
      <div className="my-10 md:my-24">
        <h1 className="my-4 text-4xl">Crea una cuenta</h1>
        <form
          onSubmit={formHandler}
          className="grid place-content-center my-6 px-3 py-6 mx-auto border border-gray-200 shadow max-w-[20rem] md:max-w-[30rem] rounded-md text-center"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="self-start">
              Email
            </label>
            <input
              name="email"
              id="email"
              className="border rounded px-2 py-1 w-60 text-black md:w-80"
              onChange={emailHandler}
              value={email}
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2 my-2">
            <label htmlFor="password" className="self-start">
              Contraseña
            </label>
            <input
              className="border rounded px-2 py-1 text-black md:w-80"
              value={password}
              onChange={passwordHandler}
              type="password"
              id="password"
            />
          </div>
          <button className="bg-sky-500 p-2 rounded-lg text-white my-4">
            Registrarse
          </button>
        </form>
        <p>
          Ya tienes cuenta, ingresa{" "}
          <NavLink
            to="/sing-in"
            className="text-slate-300 underline underline-offset-1"
          >
            aquí
          </NavLink>
        </p>
      </div>
    </Layout>
  );
};

export default SingUp;
