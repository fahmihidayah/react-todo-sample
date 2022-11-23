import React, { Component } from "react";

class TodoForm extends Component {

    state = {
        title : '',
        description : ''
    }

    onClickSubmit = (e) => {
        e.preventDefault()

        this.props.onSaveTodo(this.state)
    }

    onChangeText = (e) => {
        const {name, value} = e.target
        
        this.setState({ [name]:value })
    }

    render() {
        const {title, description} = this.state
        return (
            <form onSubmit={this.onClickSubmit}>
                <div class="mb-3">
                    <label for="titleField" className="form-label">Title</label>
                    <input name="title" type="text" className="form-control" id="titleField" value={title} onChange={this.onChangeText} />
                </div>
                <div class="mb-3">
                    <label for="descriptionField" className="form-label">Description</label>
                    <textarea name="description" className="form-control" id="descriptionField" value={description} onChange={this.onChangeText}/>
                </div>
                
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

        )
    }
}

export default TodoForm;