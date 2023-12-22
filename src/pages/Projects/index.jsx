import { Link } from "react-router-dom";
import { projects } from "../../constants/index";
import { arrow } from "../../assets/icons";
import CTA from "../../components/CTA";
const ProjectsPage = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>All of my projects for you</p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={index}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back roundex-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex  justify-center items-center">
                <img
                  src={project.iconUrl}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 flex items-center"
                >
                  Link
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain ml-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default ProjectsPage;
