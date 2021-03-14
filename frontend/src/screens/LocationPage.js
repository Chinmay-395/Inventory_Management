import React from "react";
import SubNavBar from "../components/SubNavBar";
import TableComponent from "../components/TableComponent";
function LocationPage() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <div className="container-fluid mt-5">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <SubNavBar />
        </div>

        <div className="shadow p-3 mb-5 bg-white rounded">
          <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default LocationPage;
