import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions';


class Todos extends Component {

    render() {
        const {_id,userName, todo, isDone } = this.props.todo;
        return (
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header" style={{
                            textDecoration: isDone ? 'line-through' : 'none'
                        }} onClick={(e) => this.props.toggleTodo(_id,isDone)} > {todo}</div>
                        <div className="meta">Owner</div>
                        <div className="description">
                            {userName}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

const mapStateToProps = (state, ownProps) => {
    return state;
}

export default connect(mapStateToProps,{toggleTodo})(Todos);