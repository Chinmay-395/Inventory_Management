import React from "react";
import { Redirect } from "react-router-dom";
import CreateForm from "../components/CreateForm";
import { toast } from "react-toastify";
import FormSuccess from "../components/FormSuccess";
function ProductFormPage() {
  console.log("THIS IS FORM");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="Home">
      <div className="container-fluid mt-5">
        <div className="shadow p-3 mb-5 bg-white rounded">
          {/***** THE FORM *******/}
          {!isSubmitted ? (
            <CreateForm submitForm={submitForm} />
          ) : (
            // <FormSuccess/>
            <>
              <Redirect to="/product" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductFormPage;
