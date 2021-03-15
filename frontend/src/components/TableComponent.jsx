import React from "react";
import "./table.css";

const TableHeader = ({ data }) => {
  // console.log("THE DATA", data);
  return (
    <>
      <tr>
        {data.map((item, index) => {
          console.log("EACH ITEM FROM HEAD", item);
          // if (
          //   item === "_id" ||
          //   item === "createdAt" ||
          //   item === "updatedAt" ||
          //   item === "_v"
          // ) {
          //   return <></>;
          // }
          return (
            <th key={index} scope="col">
              {item}
            </th>
          );
        })}
      </tr>
    </>
  );
};

const TableBody = ({ data }) => {
  const TableData = ({ vals }) => {
    return (
      <>
        {vals.map((item, index) => (
          <td key={index}>{item}</td>
        ))}
      </>
    );
  };
  return (
    <>
      {data.map((item, index) => (
        <tr key={index}>
          <TableData vals={item} />
        </tr>
      ))}
    </>
  );
};

function TableComponent({ prod }) {
  if (prod === undefined) {
    return <></>;
  } else {
    console.log("THE OG DATA", prod);
    //Getting the keys --> for header
    var s = prod[0];
    var keys = [];
    //Creating the array of keys
    for (var k in s) {
      keys.push(k);
    }
    //Creating an array-of-values ---> for table-data
    let array_of_values = [];
    let i = 0;
    for (var x in prod) {
      x = prod[i];
      var values = [];
      for (var prod_data_val in x) {
        values.push(x[prod_data_val]);
      }
      //push entire array of values in the bigger array of values
      array_of_values.push(values);
      i++;
    }
    // console.log("Array-of-values \n", array_of_values);
    // console.log("KEYS", keys);
    return (
      <div id="collapse1">
        <table className="table">
          <thead className="thead-class">
            <TableHeader data={keys} />
          </thead>
          <tbody>
            <TableBody data={array_of_values} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;

/**
 * <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>

      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>

      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
 */
