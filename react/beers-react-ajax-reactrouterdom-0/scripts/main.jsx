const {Component} = React
const {
    HashRouter,
    Switch,
    Route,
    Link,
    withRouter
} = ReactRouterDOM

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
            this.props.history.push('/beers/search/' + query);
        }
    }

    render() {
        return <div>
            <form onSubmit={this.onSearchSubmit}>
                <input type="text" onChange={this.onQueryInput} value={this.state.query}/>
                <input type="submit" value="search"/>
            </form>
        </div>
    }
}

const RoutingSearch = withRouter(Search)

class Beers extends Component {
    constructor() {
        super()

        this.state = {
            beers: []
        }
    }

    searchBeers(query) {
        console.log('Beers-> searchBeers ' + query)

        beersApi.searchBeers(query)
            .then(beers => {
                console.log(beers)
                this.setState({beers})
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    componentDidMount() {
        console.log('Beers -> componentDidMount')

        this.searchBeers(this.props.match.params.query)
    }

    componentWillUnmount() {
        console.log('Beers -> componentWillUnmount')
    }

    render() {
        return this.state.beers.length ? <ul>
            {
                this.state.beers.map(function (beer) {
                    return <li key={beer.id}>
                        <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
                    </li>
                })
            }
        </ul> : null
    }
}

class Beer extends Component {
    constructor() {
        super()

        this.state = {
            beer: {}
        }
    }

    loadBeer(id) {
        beersApi.getBeer(id)
            .then(beer => {
                console.log(beer)
                this.setState({beer})
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    componentDidMount() {
        console.log('Beer -> componentDidMount')

        this.loadBeer(this.props.match.params.id)
    }

    componentWillUnmount() {
        console.log('Beer -> componentWillUnmount')
    }

    render() {
        return this.state.beer.id ? <div>
            <h1>{this.state.beer.name}</h1>
            <p>{this.state.beer.style.description}</p>
        </div> : null
    }
}

class App extends Component {
    render() {
        return <HashRouter>
            <div>
                <Link to="/"><h1>Beers</h1></Link>
                <Switch>
                    <Route exact path="/" component={RoutingSearch}/>
                    <Route path="/beers/search/:query" component={Beers}/>
                    <Route path="/beers/:id" component={Beer}/>
                </Switch>
            </div>
        </HashRouter>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))