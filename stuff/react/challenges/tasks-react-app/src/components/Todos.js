import React, {Component} from 'react'
import './Todos.css'

class Todos extends Component {
    render() {
        return <div className="todos-main">
            <h2>Todos</h2>
            <ul>
                {
                    this.props.tasks.map(task => {
                        if (task.done === false)
                            return <li key={task.id}>{task.text} <button onClick={() => this.props.onMarkTaskDone(task.id)}>✓</button></li>
                    })
                }
            </ul>
        </div>
    }
}

export default Todos