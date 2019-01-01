
const todos = (state = [], action) => {
    // for first time state [], then dispatcher explicitly calls
    //  FETCH_TODOS which will set the state here
    switch(action.type){
        case 'FETCH_TODOS': {
            return action.data;
        }
        // call this function once the remote has successfully updated todo to toggle todo state   
        case 'TOGGLE_TODO':
            return state.map(todo => {
                return (todo._id === action.data._id) ? {...todo, isDone: !todo.isDone}: todo;
            });

         case 'ADD_TODO':
            console.log(action);

            return [
                action.data,
                ...state
              ]
       
        default:
            return state;    
}
}
export default todos;
