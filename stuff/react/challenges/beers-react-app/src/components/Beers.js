import React, {Component} from 'react'
import beersApi from './beersApi'

class Beers extends  Component {
    constructor() {
        super()

        this.state = {
            query: '',
            beers: [],
            beer: {}
        }
    }

    onQueryInput = (event) => {
        const query = event.target.value

        this.setState({
            query
        })
    }

    onSearchSubmit = (event) => {
        event.preventDefault()

        const query = this.state.query

        if (query.length) {
            beersApi.searchBeers(query)
                .then(beers => {
                    this.setState({
                        query: '',
                        beers,
                        beer: {}
                    })
                })
                .catch(function(err) {
                    console.error(err)
                })
        }
    }

    onBeerClick(id) {
        beersApi.getBeer(id)
            .then(beer => {
                this.setState({
                    beer
                })
            })
            .catch(function(err) {
                console.error(err)
            })
    }

    render() {
        return <div>
            <form onSubmit={this.onSearchSubmit}>
                <input type="text" onChange={this.onQueryInput} value={this.state.query}/>
                <input type="submit"/>
            </form>
            <ul>
                {
                    this.state.beers.map(beer => {
                        return <li key={beer.id}><a href="#" onClick={() => this.onBeerClick(beer.id)}>{beer.name}</a></li>
                    })
                }
            </ul>
            {
                this.state.beer.id? <p><h1>{this.state.beer.name}</h1>{this.state.beer.style.description}</p> : undefined
            }

        </div>
    }
}

export default Beers