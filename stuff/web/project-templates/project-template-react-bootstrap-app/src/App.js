import React, { Component } from 'react'
import uuid from 'uuid/v4'
import TodoList from './components/TodoList'
import DoneList from './components/DoneList'

class App extends Component {
    constructor() {
        super()

        this.state = {
            tasks: []
        }
    }

    addTask = (text) => {
        const task = {
            id: uuid(),
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
                if (task.id === id)
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
                return task.id !== id
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

export default App