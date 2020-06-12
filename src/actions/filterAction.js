export const activeTasks = tasks => ({
    type: "ACTIVE_TASKS",
    payload: {
        tasks
    }
});

export const completedTasks = tasks => ({
    type: "COMPLETED_TASKS",
    payload: {
        tasks
    }
});

export const allTasks = tasks => ({
    type: "ALL_TASKS",
    payload: {
        tasks
    }
});
