import React from "react";

function CreateForm() {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>Get started</h1>
        {/* * NAME FIELD * */}
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            <input type="text" className="form-input" placeholder="Name" />
          </label>
        </div>

        {/* * DETAIL FIELD * */}
        <div className="form-inputs">
          <label htmlFor="detail" className="form-label">
            <input type="text" className="form-input" placeholder="Details" />
          </label>
        </div>

        {/* * SUMMARY FIELD * */}
        <div className="form-inputs">
          <label htmlFor="summary" className="form-label">
            <input type="text" className="form-input" placeholder="Summary" />
          </label>
        </div>

        {/* * COMPANY FIELD * */}
        <div className="form-inputs">
          <label htmlFor="company" className="form-label">
            <input type="text" className="form-input" placeholder="Company" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
