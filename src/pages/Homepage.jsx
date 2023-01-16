import { useEffect } from "react";
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

  useEffect(() => {
    if (entities.length < 1) {
      dispatch(getImages());
    }
  }, [entities]);

  return (
    <Layout aditionalStyles="min-h-screen min-w-screen">
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
          entities.map((item) => {
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
