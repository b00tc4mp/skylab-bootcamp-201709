import React, {Component} from 'react'
import AddTask from './AddTask'
import Todos from './Todos'
import Dones from './Dones'

class Tasks extends Component {
    render() {
        return <div>
            <AddTask/>
            <Todos/>
            <Dones/>
        </div>
    }
}

export default Tasks


