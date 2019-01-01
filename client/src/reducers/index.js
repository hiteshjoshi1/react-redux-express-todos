import {combineReducers} from 'redux';
import  todos from './todosReducer';
import visibilityFilter from './visibilityFilter';


// combineReducers is a function of REDUX.
// It gives you a single Reducer by combining all Reducers in the application
// This Combined Reducer is then passed on to createStore method of RRDUX to create the REDUX Store
export default combineReducers({
todos:todos,
visibilityFilter:visibilityFilter

});