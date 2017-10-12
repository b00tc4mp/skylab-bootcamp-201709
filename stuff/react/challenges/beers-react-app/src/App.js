import React, { Component } from 'react'
import beersApi from './components/beersApi'

class App extends Component {
    constructor() {
        super()

        this.state = {
            beers: []
        }
    }

    searchBeers = () => {
        beersApi.searchBeers('mahou')
            .then(res => {
                console.log(res)
                // TODO update state
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    render() {
        return <div>
            <button onClick={this.searchBeers}>Search Mahou beers</button>
        </div>
    }
}

/*
<ul>
                {
                    this.state.movies.map(function (movie, index) {
                        return <li key={index}>{movie.title} ({movie.releaseYear})</li>
                    })
                }
            </ul>
 */

export default App