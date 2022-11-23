import React, { Component } from "react";

import TodoForm from "../component/TodoForm";
import TodoTable from "../component/TodoTable";

class HomePage extends Component {

    state = {
        todos : []
    }

    onSaveTodo = (todo) => {
        console.log(todo)
        const { todos } = this.state
        this.setState({
            todos : [... todos, todo]
        })
    }

    onDeleteTodo = (element) => {
        const todo_index = element.currentTarget.dataset.index
        const {todos} = this.state
        const result_todos = todos.filter((todo, index) => index !== parseInt(todo_index))
        this.setState({
            todos : result_todos
        })
    }

    render() {
        const {todos} = this.state
        return (
            <div className="container">
                <div className="row m-5">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <TodoForm onSaveTodo={this.onSaveTodo} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <TodoTable todos={todos} onDeleteTodo={this.onDeleteTodo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;