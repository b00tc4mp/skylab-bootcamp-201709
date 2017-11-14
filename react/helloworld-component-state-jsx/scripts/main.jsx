class HelloWorld extends React.Component {
    constructor() {
        super()

        this.state = {
            clicks: 0
        }

        //this.handleClick = this.handleClick.bind(this) // alternative to arrow function

        // this.handleClick = function() { // another alternative (do not recommend)
        //     this.setState(function(prevState) {
        //         return {
        //             clicks: prevState.clicks + 1
        //         }
        //     })
        //
        //     console.log('Hello, World!')
        // }.bind(this)
    }

    handleClick = () => {
        this.setState(function(prevState) {
            return {
                clicks: prevState.clicks + 1
            }
        })

        console.log('Hello, World!')
    }


    render() {
        return <button onClick={this.handleClick}>Hello, World! ({this.state.clicks})</button>
    }
}


ReactDOM.render(<HelloWorld/>, document.getElementById('root'))