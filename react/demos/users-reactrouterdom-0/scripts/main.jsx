const { Component } = React
const {
    Link,
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
                        <Link to="/">Home</Link>
                        <Link to="/users">Users</Link>
                        <Link to="/private">Private</Link>
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