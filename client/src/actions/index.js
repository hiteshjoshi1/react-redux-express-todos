import TodoService from '../services/TodoService';
// regular action
export const addTodo = (todoName) => {
    return  {
        type: 'ADD_TODO',
        todoName:todoName
    }
}

// simplified full version
// export const addTodoAsync = (todoName) => {
//     return async function(dispatch, getState) {
//         const result = await TodoService.post('/',{
//             userName:'Hitesh',
//             todo: todoName,
//             isDone: false
//         });
//         console.log(result)
//         dispatch({type:'ADD_TODO',todoName})

//     }
// }


// above full function is equivalent to this. Note that getState is removed as it is not required

export const addTodoAsync = (todoName) => 
     async dispatch  => {
        const result = await TodoService.post('/',{
            userName:'Hitesh',
            todo: todoName,
            isDone: false
        });
        let data  = result.data;
        dispatch({type:'ADD_TODO',data})
    }


export const getAllTodosAsync = () => {
    return async (dispatch) => {
        const result = await TodoService.get('/');
        let data = result.data;
        dispatch({type:'FETCH_TODOS',data})
    }
}

export const toggleTodo =  (id,isDone)  => {
    return async (dispatch) => {
     const result = await TodoService.patch('/'+id, {
            isDone: !isDone
        })
        console.log(result);
        let data = result.data;
        dispatch({type:'TOGGLE_TODO',data});
    }
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

  export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
  
