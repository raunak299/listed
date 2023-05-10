import "./DashboardHeader.css";
import { useHistory } from "react-router-dom";
function DashboardHeader() {
  const history = useHistory();

  const handleNavigation = () => {
    history.push("./authentication");
  };

  return (
    <div className="dashboard-header-root">
      <div className="dashboard-title">Dashboard</div>
      <div className="dashboard-navbar">
        <div className="dashboard-searchbar">
          <input
            className="dashboard-search"
            type="text"
            placeholder="Search..."
          />
          <img
            className="dashboard-search-icon"
            src="./search.svg"
            alt="search"
          />
        </div>
        <img className="dashboard-notification" src="./bell.svg" alt="svg" />
        <img
          className="avatar"
          src="./profilepic.png"
          alt=""
          onClick={handleNavigation}
        />
      </div>
    </div>
  );
}

export default DashboardHeader;
