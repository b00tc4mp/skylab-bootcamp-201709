class App extends React.Component {
    constructor() {
        super()

        this.state = {
            tasks: []
        }
    }

    addTask = (text) => {
        const task = {
            id: Date.now(),
            text,
            done: false
        }

        this.setState(function (prevState) {
            return {
                tasks: prevState.tasks.concat(task)
            }
        })
    }

    markAllTasksDone = () => {
        this.setState(function(prevState) {
            const tasks = prevState.tasks.map(function(task) {
                task.done = true

                return task
            })

            return {
                tasks
            }
        })
    }

    markTaskDone = (id) => {
        this.setState(function(prevState) {
            const tasks = prevState.tasks.map(function(task) {
                if (task.id == id)
                    task.done = true

                return task
            })

            return {
                tasks
            }
        })
    }

    removeTask = (id) => {
        this.setState(function(prevState) {
            const tasks = prevState.tasks.filter(function(task) {
                return task.id != id
            })

            return {
                tasks
            }
        })
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <TodoList
                        tasks={this.state.tasks}
                        onAddTask={this.addTask}
                        onMarkAllTasksDone={this.markAllTasksDone}
                        onMarkTaskDone={this.markTaskDone}
                    />
                </div>
                <div className="col-md-6">
                    <DoneList
                        tasks={this.state.tasks}
                        onRemoveTask={this.removeTask}
                    />
                </div>
            </div>
        </div>
    }
}

class TodoList extends React.Component {
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

class DoneList extends React.Component {
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

ReactDOM.render(<App/>, document.getElementById('root'))