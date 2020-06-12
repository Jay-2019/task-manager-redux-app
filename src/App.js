import React from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AddTask, FilterTasks, ListFilterTasks } from "./components/index";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card  text-white bg-dark border-danger text-center w-75">
          <div className="card-body">
            < AddTask />
            <ListFilterTasks />
          </div>
          <div className="card-footer border-danger text-muted">
            <FilterTasks />
          </div>
        </div>
      </header>
    </div>

  );
}



export default connect()(App);
