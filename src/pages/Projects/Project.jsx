const Project = ({ project }) => {
  const { title, des, img, liveLink, gitLink } = project;
  return (
    <>
      <div>
        <div className="card h-full w-80 md:w-96 border border-green-300 rounded-none hover:shadow-green-500 hover:shadow-xl">
          <figure>
            <img
              src={img}
              alt="projects"
              className="w-96 h-full hover:scale-105"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{des}</p>
            <div className="card-actions justify-end">
              <a
                target="_blank"
                rel="noreferrer"
                href={gitLink}
                className="btn btn-outline border-green-500 text-green-500 rounded-sm w-32 mr-4 my-3 ml-4 md:ml-0 font-semibold hover:bg-green-500 hover:text-white">
                Github
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={liveLink}
                className="btn outline-none bg-green-500 text-white rounded-sm w-32 mr-4 my-3 ml-4 md:ml-0 font-semibold hover:bg-white hover:text-green-500">
                live view
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
