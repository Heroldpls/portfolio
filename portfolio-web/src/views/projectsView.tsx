import PortfolioModel from "../PortfolioModel";

interface ProjectsViewProps {
  model: PortfolioModel;
}

function ProjectsView(props: ProjectsViewProps) {
  console.log("Projects view");
  return (
    <div>
      <h1>Projects</h1>
      <h1>Projects2</h1>
    </div>
  );
}

export default ProjectsView;
