import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllTodosAsync } from '../actions';
import Todo from './Todo'
import { VisibilityFilters } from '../actions'

class TodoListNew extends Component {
    componentDidMount(){
        // call the action- which will then call the dispatch to another action which will provide the
        // state to values
        this.props.getAllTodosAsync();
    }

    render(){
        return (
            <div className="ui raised very padded text container segment">  
            {this.props.todos.map(todo => (
                 
              <Todo key={todo._id} todo ={todo}  />
              
            )) }
            </div>    
        );
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.isDone)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.isDone)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

  const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  })
  

// pass mapStatetoProps and mapDispatchToProps/action to the component
export default connect(mapStateToProps,{getAllTodosAsync})(TodoListNew);