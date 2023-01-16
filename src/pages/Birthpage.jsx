import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";
import { FaBirthdayCake } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";

const Birthpage = () => {
  const [fetch, setFetch] = useState([]);
  const [date, setDate] = useState([]);

  const mainUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}&date=${date}&concept_tags=True`;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(mainUrl)
      .then((res) => {
        setFetch([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout aditionalStyles="min-h-screen min-w-screen">
      <div className="text-white md:my-[15%]">
        {fetch.length === 0 ? (
          <div className="text-center">
            <h1 className="my-3 text-2xl md:my-6 md:text-6xl">
              Buscador de imágenes
            </h1>
            <p className=" md:text-2xl">Ingresa tu fecha de nacimiento</p>
            <form
              onSubmit={handleSubmit}
              className="px-6 my-10 flex flex-col md:flex-row items-center justify-center gap-4 "
            >
              <input
                className="w-full text-center py-4 rounded-md bg-transparent border md:text-xl md:px-6 md:w-1/3"
                type="date"
                placeholder="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <button className="py-4 font-medium text-white bg-blue-700 rounded-lg md:px-6 md:w-1/3 md:text-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Descubrir
              </button>
            </form>
          </div>
        ) : (
          fetch.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col-reverse mb-4 md:mx-8 md:flex-row items-center justify-between gap-4 md:gap-12 md:my-[-14%]"
              >
                <div className="w-4/5 md:w-2/3">
                  <h1 className="text-left text-2xl font-bold my-3 md:my-6 md:text-5xl">
                    {item.title}
                  </h1>
                  <div className="flex items-center justify-between md:text-2xl">
                    <div className=" flex items-center gap-2 md:my-4">
                      <div className="bg-white rounded-full p-2">
                        <FaBirthdayCake className="text-pink-600" />
                      </div>
                      <p>{item.date}</p>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                      <div className="bg-white rounded-full p-2">
                        <BsFillCameraFill className="text-purple-600" />
                      </div>
                      <p>Esta es tu estrella 👉🏻</p>
                    </div>
                  </div>
                  <p className="my-4 md:mb-8 md:text-md">{item.explanation}</p>
                </div>
                <img
                  src={item.hdurl}
                  alt={item.title}
                  className="md:w-3/4 object-cover"
                  loading="lazy"
                />
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
};

export default Birthpage;
