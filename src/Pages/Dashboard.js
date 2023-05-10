import Banner from "../components/Banner/Banner";
import Chart from "../components/Chart/Chart";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DataCard from "../components/DataCard/DataCard";
import Schedule from "../components/Schedule/Schedule";
import TopProducts from "../components/TopProducts/TopProducts";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-root">
      <div className="dashboard-page-container">
        <div className="dashboard-page-banner">
          <Banner />
        </div>
        <div className="dashboard-page-main">
          <div className="dashboard-page-content">
            <DashboardHeader />
            <div className="dashboard-data-page-cards">
              <DataCard
                dataIconPath="./camera.svg"
                background="#DDEFE0"
                title="Total Revenues"
                number="$2,129,430"
              />
              <DataCard
                dataIconPath="./pin.svg"
                background="#F4ECDD"
                title="Total Transactions"
                number="1,150"
              />
              <DataCard
                dataIconPath="./like.svg"
                background="#EFDADA"
                title="Total Likes"
                number="9,721"
              />
              <DataCard
                dataIconPath="./user.svg"
                background="#DEE0EF"
                title="Total Users"
                number="892"
              />
            </div>
            <div className="dashboard-page-data-chart">
              <Chart />
            </div>
            <div className="dashboard-product-schedule-cards">
              <div className="dashboard-page-products-card">
                <TopProducts />
              </div>
              <div className="dashboard-page-schedule-card">
                <Schedule />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
