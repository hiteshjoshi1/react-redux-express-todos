import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodoAsync } from '../actions'


class AddTodo extends Component {
    render(){
    let input

  return (
    <div>
    {/* <div class="ui raised very padded text container segment"> */}
    <div className="ui relaxed grid text container segment">
    <div className="column row">
    <div className="column">
      <form className ="ui form"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
        //   dispatch(addTodo(input.value))
          this.props.addTodoAsync(input.value);
          input.value = ''
        }}
      >
        <div className="field">
        <input ref={node => (input = node)} />
        </div>
        
        <button className="ui button" type="submit">Add Todo</button>
      </form>
      </div>
      </div>
      </div>
      <div className="ui divider"></div>
    </div>
    
  )
}
}


const mapStateToProps = (state, ownProps) => {
    return state;
}


export default connect(mapStateToProps,{addTodoAsync})(AddTodo);