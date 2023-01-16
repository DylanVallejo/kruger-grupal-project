import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { BsPersonCircle, BsFillCalendarDateFill } from "react-icons/bs";
import Layout from "../components/Layout";

const Onestarpage = () => {
  const { titleStar } = useParams();
  const { entities } = useSelector((state) => state.data);

  return (
    <Layout aditionalStyles="min-h-screen min-w-screen">
      {entities
        .filter((item) => {
          if (item.title.toLowerCase().includes(titleStar.toLowerCase())) {
            return item;
          }
        })
        .map((detalles, index) => {
          return (
            <div
              key={index}
              className="h-full text-white mx-8 mx-auto my-8 md:my-0 md:flex md:items-center md:justify-around md:gap-20"
            >
              <div className="md:w-1/2">
                <img
                  src={detalles.hdurl}
                  alt={detalles.title}
                  className="w-full md:h:60 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-3xl my-4 md:text-7xl md:my-7">
                  {detalles.title}
                </h1>

                <div className="flex items-center justify-between text-lg md:my-7 md:text-xl">
                  <p className="flex gap-2 items-center">
                    <BsPersonCircle />
                    {detalles.copyright}
                  </p>
                  <p className="flex gap-2 items-center">
                    <BsFillCalendarDateFill />
                    {detalles.date}
                  </p>
                </div>

                <p className="text-base my-3 md:mr-15 md:text-lg leading-relaxed">
                  {detalles.explanation}
                </p>
              </div>
            </div>
          );
        })}
    </Layout>
  );
};
export default Onestarpage;
