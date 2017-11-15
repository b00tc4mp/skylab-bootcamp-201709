class OnOffButton extends React.Component {
    constructor() {
        super()

        this.state = {
            on: false
        }
    }

    handleClick = () => {
        this.setState(function(prevState) {
            return {
                on: !prevState.on
            }
        })
    }

    render() {
        return <button onClick={this.handleClick} className={this.state.on? 'on': 'off'}>{this.state.on? 'On': 'Off'}</button>
    }
}

ReactDOM.render(<OnOffButton/>, document.getElementById('root'))