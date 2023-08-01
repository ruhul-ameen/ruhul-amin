import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Blog from "../../Blog/Blog";
import Projects from "../../Projects/Projects";

import Banner from "../Banner/Banner";
import TestimonialSlider from "../../Shared/Testimonial/TestimonialSlider";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="flex justify-center items-start">
        {" "}
        <hr className="text-green-400 bg-green-400 h-0.5 w-2/3 " />
      </div>
      <About></About>
      <div className="flex justify-center items-start">
        {" "}
        <hr className="text-green-400 bg-green-400 h-0.5 w-2/3 " />
      </div>
      <Projects></Projects>
      <div className="flex justify-center items-start">
        {" "}
        <hr className="text-green-400 bg-green-400 h-0.5 w-2/3 " />
      </div>
      <Blog></Blog>
      <div className="flex justify-center items-start">
        {" "}
        <hr className="text-green-400 bg-green-400 h-0.5 w-2/3 " />
      </div>
      <TestimonialSlider></TestimonialSlider>
      <div className="flex justify-center items-start">
        {" "}
        <hr className="text-green-400 bg-green-400 h-0.5 w-2/3 " />
      </div>
      <Contact></Contact>
    </>
  );
};

export default Home;
