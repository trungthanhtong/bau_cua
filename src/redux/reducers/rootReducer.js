import {combineReducers} from 'redux'
import ToDoListReducer from './ToDoListReducer'
import FakebookReducer from './FakebookReducer'
import GameBauCuaReducer from './BaiTapGameBauCuaReducer'

export const rootReducer = combineReducers({
    ToDoListReducer,
    FakebookReducer,
    GameBauCuaReducer,
})