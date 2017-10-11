class App extends React.Component {
    constructor() {
        super()

        this.state = {
            movies: []
        }
    }

    loadMovies = () => {
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
            <button onClick={this.loadMovies}>Load movies</button>
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