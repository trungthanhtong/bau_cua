import { ToDoListDarkTheme } from "../../JSS/Theme/ToDoListDarkTheme"
import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from "../types/ToDoListTypes"
import {arrTheme} from '../../JSS/Theme/ThemeManager'

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList: [
        {id:'task-1', taskName:'task 1', done:false},
        {id:'task-2', taskName:'task 2', done:true},
        {id:'task-3', taskName:'task 3', done:false},
    ],
    taskEdit: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case add_task: {
            if (action.newTask.taskName.trim() === '') {
                alert('Task is empty!')
                return {...state}
            }
            let taskListUpdate = [...state.taskList];
            // console.log(taskListUpdate);
            state.taskList = [...taskListUpdate, action.newTask];
            console.log(taskListUpdate);
            return {...state}
        }

        case change_theme: {
            let index = arrTheme.findIndex(item => item.id == action.themeID);
            if (index !== -1) {
                state.themeToDoList = arrTheme[index].theme;
            }
            return {...state}
        }

        case done_task: {
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex(item => item.id === action.taskID) ;
            if (index !== -1) {
                taskListUpdate[index].done = true;
            }           
            // state.taskList = [...taskListUpdate]
            return {...state, taskList: taskListUpdate}
        }

        case delete_task: {
            // let taskListUpdate = [...state.taskList];
            // let index = taskListUpdate.findIndex(item => item.id === action.taskDeleteID);
            // if (index !== -1) {
            //     taskListUpdate.slice(index, 1);
            // }
            // taskListUpdate = taskListUpdate.filter(item => item.id !== action.taskID);
            return {...state, taskList: state.taskList.filter(item => item.id !== action.taskID)};
        }

        case edit_task: {
            return {...state, taskEdit: action.task}
        }

        case update_task: {
            state.taskEdit = {...state.taskEdit, taskName: action.taskName}
            let taskListUpdate = state.taskList;
            let index = taskListUpdate.findIndex(task => task.id === state.taskEdit.id);
            if (index !== -1) {
                taskListUpdate[index].taskName = action.taskName;
            }
            return {...state, taskList: taskListUpdate}
        }
        default: return {...state}
    }

}
