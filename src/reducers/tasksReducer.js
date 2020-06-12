const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          complete: false
        }
      ];

    case 'MARK_COMPLETE_TASK':
      return state.map(task =>
        task.id === action.payload.id ? { ...task, complete: !task.complete } : task
      );

    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload.id);

    default:
      return state;
  }
}

export default tasks;