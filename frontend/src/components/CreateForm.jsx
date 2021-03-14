import React from "react";
import useForm from "../hooks/useForm";
import validate from "../hooks/validation";
// import { Form, Button } from "react-bootstrap";
import "./createForm.css";
function CreateForm({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        {/* * NAME FIELD * */}
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        {/* * DETAIL FIELD * */}
        <div className="form-inputs">
          <label htmlFor="details" className="form-label">
            Details
          </label>
          <input
            id="details"
            type="text"
            name="details"
            className="form-input"
            placeholder="Details"
            value={values.details}
            onChange={handleChange}
          />
          {errors.details && <p>{errors.details}</p>}
        </div>

        {/* * COMPANY FIELD * */}
        <div className="form-inputs">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            id="company"
            type="text"
            name="company"
            className="form-input"
            placeholder="Company"
            value={values.company}
            onChange={handleChange}
          />
          {errors.company && <p>{errors.company}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateForm;

/* // <Form>
    //   <Form.Group controlId="name">
    //     <Form.Label>Product name</Form.Label>
    //     <Form.Control
    //       type="text"
    //       placeholder="Enter name"
    //       value={values.name}
    //       onChange={handleChange}
    //     />
    //   </Form.Group>

    //   <Form.Group controlId="details">
    //     <Form.Label>Product details</Form.Label>
    //     <Form.Control
    //       as="textarea"
    //       rows={3}
    //       placeholder="Enter details"
    //       value={values.details}
    //       onChange={handleChange}
    //     />
    //   </Form.Group>

    //   <Form.Group controlId="company">
    //     <Form.Label>Product company</Form.Label>
    //     <Form.Control
    //       type="text"
    //       placeholder="Enter company"
    //       value={values.company}
    //       onChange={handleChange}
    //     />
    //   </Form.Group>

    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>*/
