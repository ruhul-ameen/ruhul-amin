import Project from "./Project";
import carDoctor from "../../assets/projects/car-doctor.png";
import emaJhon from "../../assets/projects/ema-jhon.png";
import panda from "../../assets/projects/panda-e-commerce.png";
import edu from "../../assets/projects/proedu.png";
import ItemSocialText from "../Shared/ItemSocial/ItemSocialText";

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
      <div className="flex justify-center items-center my-24">
        <h5 className="text-center text-4xl uppercase bg-clip-text text-transparent bg-gradient-to-l from-cyan-400 to-green-400 animate-jump-in">
          Projects
        </h5>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ruhul-ameen?tab=repositories">
          <button className="btn border-green-500 text-green-500 rounded-sm bg-transparent hover:bg-green-500 hover:text-white my-20 uppercase">
            More Projects
          </button>
        </a>
      </div>
      <ItemSocialText></ItemSocialText>
    </>
  );
};

export default Projects;
