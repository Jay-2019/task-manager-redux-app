import React from "react";
import { connect } from "react-redux";
import { reset } from "redux-form";
import { addTask } from "../../actions/taskAction";
import AddTaskForm from "./index";

function AddTask({ dispatch }) {
  const handleSubmit = values => {
    const { title, description } = values;
    dispatch(addTask(title, description));
    dispatch(reset("addTaskForm"));
  };

  return (
    <div className="container-fluid">
      <AddTaskForm onSubmit={handleSubmit} />
    </div>
  );
}

export default connect()(AddTask);
