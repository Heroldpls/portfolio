import PortfolioModel from "../PortfolioModel";
import ProjectsView from "../views/projectsView";

interface ProjectsPresenterProps {
  model: PortfolioModel;
}

function ProjectsPresenter(props: ProjectsPresenterProps) {
  return <ProjectsView model={props.model} />;
}

export default ProjectsPresenter;
