import React from "react";
import { useNavigate } from "react-router-dom";

const PlanetCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="my-8 md:my-0 flex flex-col bg-white border rounded-lg shadow-md  max-w-full md:max-w-md lg:max-w-xl hover:bg-white-100 dark:border-gray-400 dark:bg-gray-20 dark:hover:bg-purple-200">
      <div className="overflow-hidden rounded-t-lg h-1/2">
        <img
          className="w-full h-full object-cover"
          alt={item.title}
          src={item.hdurl}
        />
      </div>

      <div className="m-4 flex flex-col items-stretch">
        <p className="my-1 text-sm text-indigo-500 md:text-base">
          Date: {item.date}
        </p>
        <h2 className="font-bold md:text-xl">{item.title}</h2>
        <p className="leading-6 my-1 text-sm md:text-base">
          {item.explanation.slice(0, 200)}...
        </p>
        <button
          onClick={() => {
            navigate(`one-star/${item.title}`);
          }}
          className="inline-flex items-center justify-center my-2 md:my-4 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="px-5 py-3 transition-all ease-in duration-75 dark:bg-white-100 rounded-md group-hover:bg-opacity-0">
            Más información
          </span>
        </button>
      </div>
    </div>
  );
};

export default PlanetCard;
