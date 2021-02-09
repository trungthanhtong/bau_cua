import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from "../types/ToDoListTypes";

export const addTaskAction = (newTask) => ({
    type: add_task,
    newTask
});


export const changeTheme = (themeID) => ({
    type: change_theme,
    themeID
});

export const doneTask = (taskID) => ({
    type: done_task,
    taskID,
})

export const deleteTask = taskID => ({
    type: delete_task,
    taskID,
})

export const editTask = task => ({
    type: edit_task,
    task,
})

export const updateTask = taskName => ({
    type: update_task,
    taskName,
})
