import PortfolioModel from "../PortfolioModel";
import HomeView from "../views/homeView";

interface HomePresenterProps {
  model: PortfolioModel;
}

function HomePresenter(props: HomePresenterProps) {
  return <HomeView model={props.model} />;
}

export default HomePresenter;
