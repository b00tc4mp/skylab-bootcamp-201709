class HelloWorld extends React.Component {
    handleClick() {
        console.log('Hello, World!')
    }

    render() {
        return <button onClick={this.handleClick}>Hello, World!</button>
    }
}


ReactDOM.render(<HelloWorld/>, document.getElementById('root'))