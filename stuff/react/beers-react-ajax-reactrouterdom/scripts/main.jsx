const {Component} = React
const {
    HashRouter,
    Route,
    Link,
    withRouter,
    Switch
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

        this.props.history.push('/beers/search/' + query)
    }

    render() {
        return <div>
            <form onSubmit={this.onSearchSubmit}>
                <input type="text" onChange={this.onQueryInput}/>
                <input type="submit"/>
            </form>
        </div>
    }
}

const RoutedSearch = withRouter(Search)

class Beers extends Component {
    constructor() {
        super()

        this.state = {
            beers: []
        }
    }

    searchBeers(query) {
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
        console.log('component did mount')
        this.searchBeers(this.props.match.params.query)
    }

    componentWillReceiveProps(props) {
        console.log('component will receive props', props)
        this.searchBeers(props.match.params.query)
    }

    render() {
        return <div>
            <ul>
                {
                    this.state.beers.map(function (beer) {
                        return <li key={beer.id}><Link to={'/beers/' + beer.id}>{beer.name}</Link></li>
                    })
                }
            </ul>
        </div>
    }
}

class Beer extends Component {
    constructor() {
        super()

        this.state = {
            beer: {}
        }
    }

    componentDidMount() {
        beersApi.getBeer(this.props.match.params.id)
            .then(beer => {
                console.log(beer)
                this.setState({beer})
            })
            .catch(function (err) {
                console.error(err)
            })
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
                <Switch>
                    <Route exact path="/" component={RoutedSearch}/>
                    <Route path="/beers/search/:query" component={Beers}/>
                    <Route path="/beers/:id" component={Beer}/>
                </Switch>
            </div>
        </HashRouter>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))