import React, {Component} from 'react'
import './AddTasks.css'

class AddTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    onCreateTask = (event) => {
        event.preventDefault()

        this.props.onCreateTask(this.state.text)

        this.setState({
            text: ''
        })
    }

    onTextChange = (event) => {
        const text = event.target.value

        if (text.length) {
            this.setState({
                text
            })
        }
    }

    render() {
        return <div className="add-task-main">
            <h2>Add Task</h2>
            <form onSubmit={this.onCreateTask}>
                <input onChange={this.onTextChange} name="text" type="text" value={this.state.text}/>
                <input type="submit" value="add"/>
            </form>
        </div>
    }
}

export default AddTask