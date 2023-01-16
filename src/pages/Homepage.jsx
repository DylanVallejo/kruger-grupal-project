import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../features/data/dataSlice";
import styles from "../styles/Main.module.css";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PlanetCard from "../components/PlanetCard";
import Layout from "../components/Layout";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Homepage = () => {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.data);
  
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (entities.length < 1) {
      dispatch(getImages());
    }
  }, [entities]);

  return (

    <Layout aditionalStyles="min-h-screen min-w-screen">

    <div className="gradiente min-h-screen min-w-screen ">
      <form className="flex py-2 px-5 w-400" >
        <input onChange={e=>setSearch(e.target.value)} type="text" id="simple-search" className="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-800 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
        {/* <button className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
      </form>

      {/* <Carousel responsive={responsive}>
        <div className="py-2 px-2 bg-[url('https://smd-prod.s3.amazonaws.com/ciencia-pink/s3fs-public/styles/background_image_file_size/public/thumbnails/image/Twitter_1.png?itok=tOBkMZ0g')] object-scale-down h-48 w-96 bg-auto bg-no-repeat bg-center  bg-cover"></div>
        <div className="py-2 px-2 bg-[url('https://stsci-opo.org/STScI-01GA6KKWG229B16K4Q38CH3BXS.png')] object-scale-down h-48 w-96 bg-auto bg-no-repeat bg-center  bg-cover"></div>
        <div className="py-2 px-2 bg-[url('https://smd-prod.s3.amazonaws.com/ciencia-pink/s3fs-public/styles/background_image_file_size/public/thumbnails/image/Twitter_1.png?itok=tOBkMZ0g')] object-scale-down h-48 w-96 bg-auto bg-no-repeat bg-center  bg-cover"></div>
        <div className="py-2 px-2 bg-[url('https://smd-prod.s3.amazonaws.com/ciencia-pink/s3fs-public/styles/background_image_file_size/public/thumbnails/image/Twitter_1.png?itok=tOBkMZ0g')] object-scale-down h-48 w-96 bg-auto bg-no-repeat bg-center  bg-cover"></div>
      </Carousel>
      ; */}
      <div
        className={`px-5 py-5 content-center p-6 shadow-2xl ${styles.gallery}`}
      >
        {loading !== true ? (
        entities.filter((val)=>{
          if (search === " " ){
            return <Loading />
          }else if (val.title.toLowerCase().includes(search.toLowerCase())){
            return val
          }}).map((item) => {
            return <PlanetCard item={item} key={item.title} />;
          })
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};

export default Homepage;
