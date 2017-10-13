class TodoContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            text: '',
            items: [] // { id: <date>, text: <text> }
        }
    }


    handleSubmit = (event) => {
        event.preventDefault()

        if (!this.state.text.length)
            return;

        const item = {
            id: Date.now(),
            text: this.state.text
        }

        this.setState(function(prevState) {
            return {
                items: prevState.items.concat(item),
                text: ''
            }
        })
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (<div>
            <h3>TODO list</h3>
            <TodoList items={this.state.items}/>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.text} onChange={this.handleChange}/>
                <button>Add</button>
            </form>
        </div>)
    }
}

class TodoList extends React.Component {
    render() {
        return <ul>
            {this.props.items.map(function(item) {
                return <li key={item.id}>{item.text}</li>
            })}
        </ul>
    }
}

ReactDOM.render(<TodoContainer/>, document.getElementById('root'))