import "./TopProducts.css";

function TopProducts() {
  return (
    <div className="top-products-root">
      <div className="top-products-header">
        <div className="top-products-title">Top products</div>
        <div className="top-products-calender">May - June 2021</div>
      </div>
      <div className="top-products-content">
        <img
          className="top-product-piechart"
          src="./piechart.svg"
          alt="pie-chart"
        />
        <div className="top-products-details">
          <div className="top-product-info">
            <div className="indicator indicator-info1"></div>
            <div className="info-tiltle-percent">
              <div className="info-title">Basic Tees</div>
              <p className="info-percent">55%</p>
            </div>
          </div>
          <div className="top-product-info">
            <div className="indicator indicator-info2"></div>
            <div className="info-tiltle-percent">
              <div className="info-title">Custom Short Pants</div>
              <p className="info-percent">31%</p>
            </div>
          </div>
          <div className="top-product-info">
            <div className="indicator indicator-info2"></div>
            <div className="info-tiltle-percent">
              <div className="info-title">Super Hoodies</div>
              <p className="info-percent">14%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
