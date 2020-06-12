
const filteredTasks = (state = [], action) => {

    switch (action.type) {

        case "ACTIVE_TASKS":
            return action.payload.tasks.filter(task => !task.complete);

        case "COMPLETED_TASKS":
            return action.payload.tasks.filter(task => task.complete);

        case "ALL_TASKS":
            return action.payload.tasks;


        default:
            return state;
    }

};
export default filteredTasks;
