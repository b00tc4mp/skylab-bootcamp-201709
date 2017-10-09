function Clock(props) {
    return <div>
        <h1>Clock</h1>
        <h2>Times is {props.date.toLocaleTimeString()}</h2>
    </div>
}

setInterval(function() {
    ReactDOM.render(<Clock date={new Date()}/>, document.getElementById('root'))
}, 1000)
