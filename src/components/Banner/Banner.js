import "./Baneer.css";

function Banner() {
  return (
    <div className="banner-root">
      <h1 className="banner-title">Board.</h1>
      <div className="banner-navigation">
        <div className="banner-tab active-tab">Dashboard</div>
        <div className="banner-tab">Transactions</div>
        <div className="banner-tab">Schedules</div>
        <div className="banner-tab">Users</div>
        <div className="banner-tab">Settings</div>
      </div>
      <div className="banner-footer">
        <div className="banner-footer-tab">Help</div>
        <div className="banner-footer-tab">Contact Us</div>
      </div>
    </div>
  );
}

export default Banner;
