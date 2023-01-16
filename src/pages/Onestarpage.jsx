import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { BsPersonCircle, BsFillCalendarDateFill } from "react-icons/bs";

const Onestarpage = () => {
  const { titleStar } = useParams();
  const { entities } = useSelector((state) => state.data);

  return (
    <div className="gradiente md:h-screen md:px-20">
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
              className="h-full text-white md:flex  mx-auto md:items-center md:justify-around md:gap-20"
            >
              <div className="md:w-1/2">
                <img
                  src={detalles.hdurl}
                  alt={detalles.title}
                  className="w-full md:h:60 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h1 className="md:text-7xl md:my-7">{detalles.title}</h1>

                <div className="flex items-center justify-between md:my-7 md:text-xl">
                  <p className="flex gap-2 items-center">
                    <BsPersonCircle />
                    {detalles.copyright}
                  </p>
                  <p className="flex gap-2 items-center">
                    <BsFillCalendarDateFill />
                    {detalles.date}
                  </p>
                </div>

                <p className="md:mr-15 md:text-lg leading-relaxed">
                  {detalles.explanation}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Onestarpage;
