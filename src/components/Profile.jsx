import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { BsFillPersonFill } from "react-icons/bs";

const Profile = ({ addstyles }) => {
  const { user, logout } = UserAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      setShowModal(false);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <button
        className={`bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm p-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${addstyles}`}
        type="button"
        onClick={() => setShowModal(true)}
      >
        <BsFillPersonFill className="w-8 h-8" /> {addstyles && <p>Mi cuenta</p>}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-10 right-2 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    Mi cuenta
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                {Object.entries(user).length !== 0 ? (
                  <>
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        Email: {user.email}
                      </p>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleLogout}
                      >
                        Cerrar sesión
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Regresar
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="my-4 text-slate-500 text-lg text-center leading-relaxed">
                      No has iniciado sesión aun.
                    </p>
                    <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-slate-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Regresar
                      </button>
                      <button
                        onClick={() => setShowModal(false)}
                        className="bg-emerald-500 text-white active:bg-emerald-600
                      font-bold uppercase text-sm px-6 py-3 rounded shadow
                      hover:shadow-lg outline-none focus:outline-none mr-1 mb-1
                      ease-linear transition-all duration-150"
                      >
                        <NavLink to="/sing-in">Iniciar sesión</NavLink>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Profile;
