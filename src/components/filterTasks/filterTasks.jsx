import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  activeTasks,
  completedTasks,
  allTasks
} from "../../actions/filterAction";

function FilterTasks(props) {
  const { activeTasks, completedTasks, allTasks, tasks } = props;

  useEffect(() => {
    allTasks(tasks);
  }, [tasks, allTasks]);

  const handleClick = event => {
    switch (event.target.innerText) {
      case "Active Tasks":
        return activeTasks(tasks);

      case "Completed Tasks":
        return completedTasks(tasks);

      case "All Tasks":
        return allTasks(tasks);

      default:
        return null;
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-auto">
            <button
              className="btn btn-outline-success"
              onClick={event => handleClick(event)}
            >
              Active Tasks
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-outline-danger"
              onClick={event => handleClick(event)}
            >
              Completed Tasks
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-outline-warning"
              onClick={event => handleClick(event)}
            >
              All Tasks
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    activeTasks: tasks => dispatch(activeTasks(tasks)),
    completedTasks: tasks => dispatch(completedTasks(tasks)),
    allTasks: tasks => dispatch(allTasks(tasks))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTasks);
