import { combineReducers } from 'redux';
// import tasksReducer from './tasksReducer';
import { tasks, filterTasks } from './index';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  tasks: tasks,
  filterTasks: filterTasks,
  form: formReducer

})

export default rootReducer