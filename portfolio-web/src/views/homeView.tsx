import PortfolioModel from "../PortfolioModel";

interface HomeViewProps {
  model: PortfolioModel;
}

function HomeView(props: HomeViewProps) {
  console.log("Home view");
  return (
    <div>
      <h1>Home</h1>
      <h1>{props.model.projectIds}</h1>
    </div>
  );
}

export default HomeView;
