import React, {Component} from 'react'
import moviesApi from './moviesApi'

class Results extends Component {
    constructor() {
        super()

        this.state = {
            movies: {}
        }
    }

    search(query) {
        moviesApi.search(query)
            .then(movies => {
                console.log(movies)

                this.setState({
                    movies
                })
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    componentWillMount() {
        const query = this.props.match.params.query

        if (query) {
            this.search(query)
        }
    }

    componentWillReceiveProps(props) {
        const query = props.match.params.query

        if (query) {
            this.search(query)
        }
    }

    render() {
        return <ul>
            {
                this.state.movies.results ? this.state.movies.results.map(function (movie) {
                    return <li key={movie.id}>{movie.title}</li>
                }) : null
            }
        </ul>
    }
}

export default Results