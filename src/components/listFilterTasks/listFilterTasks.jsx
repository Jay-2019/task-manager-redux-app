import React from "react";
import { connect } from "react-redux";
import { markCompleteTask, deleteTask } from "../../actions/taskAction";
// import { FilterTasks } from "../../components/index";

function ListFilterTasks(props) {
  const handleChange = id => {
    props.markComplete(id);
  };

  const handleClick = id => {
    props.deleteTask(id);
  };

  const List = props.filterTasks.map((data, index) => (
    <tr key={index}>
      <td>{++index}</td>
      <td>{data.title}</td>
      <td>{data.description}</td>
      <td className="col-auto">
        <input
          type="checkbox"
          className="btn btn-outline-secondary"
          onChange={event => handleChange(data.id)}
          checked={data.complete ? "checked" : ""}
        />
      </td>
      <td className="col-auto">
        <button
          className="btn btn-outline-secondary btn-default"
          onClick={event => handleClick(data.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      {props.filterTasks.length !== 0 ? (
        <div className="card  text-white bg-dark text-center ">
          <div className="card-body">
            <table className={`table table-striped table-dark table-sm table-hover  `}>
              <thead>
                <tr>
                  <th scope="col-auto">#</th>
                  <th scope="col-auto">Title</th>
                  <th scope="col-auto">Description</th>
                  <th scope="col-auto">Status</th>
                  <th scope="col-auto">Delete</th>
                </tr>
              </thead>
              <tbody>{List}</tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  );
}

const mapStateToProps = state => {
  return {
    filterTasks: state.filterTasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    markComplete: id => dispatch(markCompleteTask(id)),
    deleteTask: id => dispatch(deleteTask(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListFilterTasks);
