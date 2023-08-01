import Project from "./Project";
import carDoctor from "../../assets/projects/car-doctor.png";
import emaJhon from "../../assets/projects/ema-jhon.png";
import panda from "../../assets/projects/panda-e-commerce.png";
import edu from "../../assets/projects/proedu.png";

const projects = [
  {
    id: 1,
    title: "Car Doctor",
    img: carDoctor,
    des: `"Car Doctor" is an web application where provide various car services....`,
    liveLink: "",
    gitLink: "https://github.com/ruhul-ameen/doctor-car-client",
  },
  {
    id: 2,
    title: "Ema Jhon",
    img: emaJhon,
    des: `"Ema Jhon" is an e-commerce web application which provide many types of products....`,
    liveLink: "",
    gitLink: "https://github.com/ruhul-ameen/ema-john-e-commerce",
  },
  {
    id: 3,
    title: "Panda E-commerce",
    img: panda,
    des: `"Panda E-commerce" is an e-commerce web application where you can get all kind of ....`,
    liveLink: "https://ruhul-ameen.github.io/panda-e-commerce/",
    gitLink: "https://github.com/ruhul-ameen/panda-e-commerce",
  },
  {
    id: 4,
    title: "Pro Edu",
    img: edu,
    des: `"Pro Edu" is an online education managing web application which helps to Authority.... `,
    liveLink: "https://ruhul-ameen.github.io/edu-tech/",
    gitLink: "https://github.com/ruhul-ameen/edu-tech",
  },
];
const Projects = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-4 pb-0 mb-3 mt-20">
        <h5 className=" text-center w-max px-6 py-2 text-sm text-green-500 uppercase bg-green-100">
          Projects
        </h5>
      </div>
      <div className="flex flex-col justify-center items-center md:px-32 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-20 bg-white w-11/12 md:w-full mt-6 mb-10 p-6 shadow-box-shadow py-10">
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
        <button className="btn border-green-500 text-green-500 rounded-sm bg-transparent hover:bg-green-500 hover:text-white mb-20 uppercase">
          More Projects
        </button>
      </div>
    </>
  );
};

export default Projects;
