let newTaskId = 0;
export const addTask = (title, description) => ({
    type: 'ADD_TASK',
    payload: {
        id: newTaskId++,
        title,
        description
    }
})

export const markCompleteTask = id => ({
    type: 'MARK_COMPLETE_TASK',
    payload: {
        id
    }

})

export const deleteTask = id => ({
    type: 'DELETE_TASK',
    payload: {
        id
    }

})