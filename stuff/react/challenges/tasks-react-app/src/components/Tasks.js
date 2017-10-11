import React, {Component} from 'react'
import AddTask from './AddTask'
import Todos from './Todos'
import Dones from './Dones'
import './Tasks.css'

class Tasks extends Component {
    constructor() {
        super()

        this.state = {
            tasks: []
        }
    }

    onCreateTask = (text) => {
        const task = {
            id: Date.now(),
            text,
            done: false
        }

        this.setState(function(prevState) {
            return {
                tasks: prevState.tasks.concat(task)
            }
        })
    }

    onMarkTaskDone = (id) => {
        const tasks = this.state.tasks.map(function(task) {
            if (task.id === id) task.done = true

            return task
        })

        this.setState({
            tasks
        })
    }

    onRemoveTask = (id) => {
        const tasks = this.state.tasks.filter(function(task) {
            return task.id !== id
        })

        this.setState({
            tasks
        })
    }

    render() {
        return <div className="tasks-main">
            <h1>Tasks List</h1>
            <AddTask onCreateTask={this.onCreateTask}/>
            <Todos tasks={this.state.tasks} onMarkTaskDone={this.onMarkTaskDone}/>
            <Dones tasks={this.state.tasks} onRemoveTask={this.onRemoveTask}/>
        </div>
    }
}

export default Tasks


