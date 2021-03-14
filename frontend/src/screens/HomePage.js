import React from "react";
import SubNavBar from "../components/SubNavBar";
import TableComponent from "../components/TableComponent";
function HomePage() {
  // By default the home-page will have all the scollable tables
  // The sub-Navbar will only appear in the PRODUCT/LOCATION/Product_movement
  return (
    <div className="Home">
      {/* <h1>Home</h1> */}
      <div className="container-fluid mt-5">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <TableComponent />
        </div>

        <div className="shadow p-3 mb-5 bg-white rounded">
          <TableComponent />
        </div>

        <div className="shadow p-3 mb-5 bg-white rounded">
          <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
