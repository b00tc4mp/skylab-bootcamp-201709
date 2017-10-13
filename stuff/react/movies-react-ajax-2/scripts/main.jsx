class App extends React.Component {
    constructor() {
        super()

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get('https://facebook.github.io/react-native/movies.json')
            .then(({data: {movies}}) => {
                console.log(movies)
                this.setState({movies})
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    render() {
        return <div>
            <h1>hello</h1>
            <ul>
                {
                    this.state.movies.map(function (movie, index) {
                        return <li key={index}>{movie.title} ({movie.releaseYear})</li>
                    })
                }
            </ul>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))