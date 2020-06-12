import React from "react";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length === 0) {
    errors.title = "Minimum be 2 characters or more";
  }

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length === 0) {
    errors.description = "Minimum be 2 characters or more";
  }

  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.title === "" && values.title === undefined) {
    warnings.title = "Please Enter Valid Title";
  }

  if (values.description === "" && values.description === undefined) {
    warnings.description = "Please Enter Valid Description";
  }

  return warnings;
};

const renderField = ({
  placeholder,
  input,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className="form-control"
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let AddTaskForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="col-sm-12">
      <div className="card  text-white bg-dark border-warning">
        <div className="card-header border-warning">
          <h2>{"Task Manager"}</h2>
        </div>
        <div className="card-body ">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Field
                name="title"
                type="text"
                placeholder="Title"
                component={renderField}
              />
            </div>

            <div className="form-group">
              <Field
                name="description"
                type="text"
                placeholder="Description"
                component={renderField}
              />
            </div>

            <div className="d-flex justify-content-center ">
              <div className="row">
                <div className="col-auto">
                  <button
                    type="submit"
                    disabled={pristine || submitting}
                    className="btn btn-outline-secondary"
                  >
                    ADD TASK
                  </button>
                </div>
                <div className="col=auto">
                  <button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                    className="btn btn-outline-secondary"
                  >
                    CLEAR TASK
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddTaskForm = reduxForm({
  form: "addTaskForm", // a unique identifier for this form
  validate,
  warn
})(AddTaskForm);

export default AddTaskForm;
