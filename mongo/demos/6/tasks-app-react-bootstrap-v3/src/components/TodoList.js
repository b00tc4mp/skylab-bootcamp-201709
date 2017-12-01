import React, {Component} from 'react'

class TodoList extends Component {
    handleAddTask = (event) => {
        if (event.key.toLowerCase() === 'enter') {
            const text = event.target.value

            event.target.value = ''

            if (text.length) {
                this.props.onAddTask(text)
            }
        }
    }

    markTaskDone = (event) => {
        const id = event.target.value

        setTimeout(() => this.props.onMarkTaskDone(id), 100)
    }

    render() {
        return <div className="todolist not-done">
            <h1>Todos</h1>
            <input onKeyPress={this.handleAddTask} type="text" className="form-control add-todo" placeholder="Add todo" />
            <button onClick={this.props.onMarkAllTasksDone} id="checkAll" className="btn btn-success">Mark all as done</button>
            <hr />
            <ul id="sortable" className="list-unstyled">
                {
                    this.props.tasks.map(task => {
                        if (!task.done)
                            return <li key={task.id} className="ui-state-default">
                                <div className="checkbox">
                                    <label>
                                        <input onChange={this.markTaskDone} value={task.id} type="checkbox" />{ task.text }</label>
                                </div>
                            </li>
                    })
                }
            </ul>
            <div className="todo-footer">
                <strong><span className="count-todos" />{
                    this.props.tasks.reduce(function(accum, task) {
                        return !task.done? ++accum : accum
                    }, 0)
                }</strong> Items Left
            </div>
        </div>
    }
}

export default TodoList