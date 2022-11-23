import React, { Component } from "react";


class TodoTable extends Component {
    
    renderContnet = (todos) => {
        const {onDeleteTodo} = this.props
        return todos.map((item, index) => (<tr key={index} data-index={index}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td><a className="btn btn-danger" key={index} data-index={index} onClick={onDeleteTodo}>Delete</a></td>
        </tr>))
    }
    
    render() {
        const { todos } = this.props

        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderContnet(todos)}
                </tbody>
            </table>
        )
    }
}

export default TodoTable;