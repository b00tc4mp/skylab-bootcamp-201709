import React, { Component } from 'react'
import TodoList from './components/TodoList'
import DoneList from './components/DoneList'

class App extends Component {
    constructor() {
        super()

        this.state = {
            tasks: []
        }

        this.tasksLogic = new (require('./components/tasks/TasksLogic'))
    }

    loadTasks() {
        this.tasksLogic.getTasks()
            .then(({data}) => this.setState({ tasks: data }))
            .catch(console.error)
    }

    componentWillMount() {
        this.loadTasks()
    }

    addTask = (text) => {
        this.tasksLogic.addTask(text)
            .then(() => this.loadTasks())
            .catch(console.error)
    }

    markAllTasksDone = () => {
        this.tasksLogic.markAllTasksDone()
            .then(() => this.loadTasks())
            .catch(console.error)
    }

    markTaskDone = (id) => {
        this.tasksLogic.markTaskDone(id)
            .then(() => this.loadTasks())
            .catch(console.error)
    }

    removeTask = (id) => {
        this.tasksLogic.removeDoneTask(id)
            .then(() => this.loadTasks())
            .catch(console.error)
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

export default App