import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import ItemSocialGrid from "../../Shared/ItemSocial/ItemSocialGrid";
import ItemSocialText from "../../Shared/ItemSocial/ItemSocialText";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse md:flex-row items-center justify-center gap-38">
          <div className="w-min items-center md:w-6/12 md:px-12 animate-fade-down animate-once animate-duration-[2000ms] animate-ease-in-out">
            <h2 className="text 3xl md:text-4xl text-center md:text-left">
              Hello! I am
            </h2>
            <h1 className="text-4xl md:text-6xl text-green-400 font-semibold text-center md:text-left">
              Ruhul Amin
            </h1>
            <h3 className="py-1 text-sm font-semibold md:text-xl text-center md:text-left">
              Front End Developer
            </h3>
            <p className="py-1 text-xs md:text-base text-center md:text-left">
              As a front-end developer, I always try to design artistically and
              functionally that leaving a lasting impression on users.
            </p>
            <div>
              <Link
                to="/contact"
                className="btn outline-none bg-green-500 text-white rounded-sm w-32 mr-4 my-3 ml-4 md:ml-0 font-semibold hover:bg-white hover:border-green-500 hover:text-green-500">
                Hire Me
              </Link>
              <Link
                to="/projects"
                className="btn btn-outline border-green-500 text-green-500 rounded-sm w-32 mr-4 my-3 ml-4 md:ml-0 font-semibold hover:bg-green-500 hover:text-white">
                Explore
              </Link>
            </div>
            <ItemSocialGrid></ItemSocialGrid>
          </div>
          <div className="flex justify-center items-center w-44 h-44 md:w-80 md:h-80 rounded-full">
            <div>
              <img
                src={logo}
                alt="heroImg"
                className="w-36 h-36 md:w-64 md:h-64 rounded-full animate-fade-up animate-once animate-duration-[2000ms] animate-ease-in-out"
              />
            </div>
          </div>
        </div>
        <ItemSocialText></ItemSocialText>
      </div>
    </>
  );
};

export default Banner;
