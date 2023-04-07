import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Brand" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Variant" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="number" placeholder="Year" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Model" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="number" placeholder="Kms Driven" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Province" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="number" placeholder="Mobile no." required />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Get Best Price</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
