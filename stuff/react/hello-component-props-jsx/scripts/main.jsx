class Hello extends React.Component {
    render() {
        console.log(this.props)
        return <h1>Hello, {this.props.to}, {this.props.to2}!</h1>
    }
}


ReactDOM.render(<Hello to="James" to2="Mary"/>, document.getElementById('root'))