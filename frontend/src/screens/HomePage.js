import React from "react";
import { connect } from "react-redux";
import TableComponent from "../components/TableComponent";
import { fetchProduct } from "../redux/products/productActionCreator";

function HomePage(props) {
  // By default the home-page will have all the scollable tables
  // The sub-Navbar will only appear in the PRODUCT/LOCATION/Product_movement

  React.useEffect(() => {
    console.log("THE USE EFFECT");
    props.fetchProduct();
    console.log("FETCHING USER DATA", props.product_data);
  }, []);

  return (
    <div className="Home">
      <div className="container-fluid mt-5">
        <div className="shadow p-3 mb-5 bg-white rounded">
          {props.product_data.isLoading ? (
            <p>LOADING</p>
          ) : (
            <TableComponent prod={props.product_data.products} />
          )}
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

const mapStateToProps = (state) => {
  return {
    product_data: state.product_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: () => dispatch(fetchProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
