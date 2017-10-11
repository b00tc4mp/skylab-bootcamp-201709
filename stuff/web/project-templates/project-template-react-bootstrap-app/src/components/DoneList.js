import React, {Component} from 'react'

class DoneList extends Component {
    render() {
        return <div className="todolist">
            <h1>Already Done</h1>
            <ul id="done-items" className="list-unstyled">
                {
                    this.props.tasks.map(task => {
                        if (task.done)
                            return <li key={task.id}>
                                {task.text}
                                <button onClick={() => this.props.onRemoveTask(task.id)} className="remove-item btn btn-default btn-xs pull-right">
                                    <span className="glyphicon glyphicon-remove" />
                                </button>
                            </li>
                    })
                }
            </ul>
        </div>
    }
}

export default DoneList