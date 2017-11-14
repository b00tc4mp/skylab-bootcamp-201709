import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            query: ''
        }
    }

    onQueryInput = (event) => {
        this.setState({query: event.target.value})
    }

    onSearchSubmit = (event) => {
        event.preventDefault()

        const query = this.state.query

        if (query.length) {
            this.props.history.push('/search/' + query);
        }
    }

    render() {
        return <form onSubmit={this.onSearchSubmit}>
            <input type="text" onChange={this.onQueryInput} value={this.state.query}/>
            <input type="submit"/>
        </form>
    }
}

export default withRouter(Search)