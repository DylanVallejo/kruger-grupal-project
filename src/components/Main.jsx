import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../features/data/dataSlice";
import styles from "../components/styles/Main.module.css";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Main() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getImages());
    console.log(entities);
  }, []);

  const navigate = useNavigate();

  return (
    <div className={styles.gradiente}>
      <div className="px-5 py-5 content-center p-6 shadow-2xl">
        {loading !== true ? (
          entities.map((item) => {
            return (
              <div
                className=" flex  m-5 flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-white-100 dark:border-gray-400 dark:bg-gray-20 dark:hover:bg-purple-200 "
                key={item.id}
              >
                <div className=" flex flex-col justify-between p-10 leading-normal">
                  <h2 className="font-bold text-s mb-2">{item.title}</h2>
                  <p className="leading-5 px-1 py-1">{item.date}</p>
                  {/* text base eliminar? */}
                  <p className="leading-5 px-1 py-1" text-base>
                    {item.explanation.slice(0, 200)}...
                  </p>
                  <figcaption> {item.copyright}</figcaption>
                  {/* <div>
                                      <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' onClick={ () => {navigate(`one-star/${item.title}`)} }> DETALLES</button> */}
                  {/* onClick={()=>{navigate('api/'+ key._id)} */}
                  {/* </div> */}
                  <button
                    onClick={() => {
                      navigate(`one-star/${item.title}`);
                    }}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-white-100 rounded-md group-hover:bg-opacity-0">
                      Detalles
                    </span>
                  </button>
                </div>
                <div className="h-300 w-200 md:rounded-r-lg  object-fill box-content">
                  <img
                    className="flex-none  relative md:rounded-r-lg  "
                    alt={item.title}
                    src={item.hdurl}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Main;
