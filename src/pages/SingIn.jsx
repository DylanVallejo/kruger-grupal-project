import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import { UserAuth } from "../context/AuthContext";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { singin } = UserAuth();
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
      await singin(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  return (
    <Layout aditionalStyles="text-center text-white  min-h-screen min-w-screen">
      <div className="flex flex-col items-center justify-center my-10 md:my-24">
        <h1 className="my-4 text-4xl">Inicia sesión</h1>
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
            Iniciar sesión
          </button>
        </form>
        <p>
          ¿Todavía no tienes cuenta? Crea una{" "}
          <NavLink
            to="/sing-up"
            className="text-slate-300 underline underline-offset-1"
          >
            aquí
          </NavLink>
        </p>
      </div>
    </Layout>
  );
};

export default SingIn;
