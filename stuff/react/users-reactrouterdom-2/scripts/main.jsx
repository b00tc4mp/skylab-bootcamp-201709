const { Component } = React
const {
    NavLink,
    Route,
    BrowserRouter
} = ReactRouterDOM

class HomePage extends Component {
    render() {
        return <div>Home Page</div>
    }
}

class UsersPage extends Component {
    render() {
        return <div>Users Page</div>
    }
}

class PrivatePage extends Component {
    render() {
        return <div>Private Page</div>
    }
}

function PrivateMessage() {
    return <h1>Hello, World!</h1>
}

class App extends Component {
    render() {
        return <BrowserRouter>
            <div>
                <header>
                    <nav>
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        <NavLink to="/users" activeClassName="active">Users</NavLink>
                        <NavLink to="/private" activeClassName="active">Private</NavLink>
                    </nav>
                    <Route path="/private" component={PrivateMessage}/>
                </header>
                <main>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/users" component={UsersPage}/>
                    <Route path="/private" component={PrivatePage}/>
                </main>
            </div>
        </BrowserRouter>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))