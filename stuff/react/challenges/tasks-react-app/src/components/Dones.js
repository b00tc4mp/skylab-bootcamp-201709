import React, {Component} from 'react'
import './Dones.css'

class Dones extends Component {
    render() {
        return <div className="dones-main">
            <h2>Dones</h2>
            <ul>
                {
                    this.props.tasks.map(task => {
                        if (task.done)
                            return <li key={task.id}><del>{task.text}</del> <button onClick={() => this.props.onRemoveTask(parseInt(task.id))}>✕</button></li>
                    })
                }
            </ul>
        </div>
    }
}

export default Dones