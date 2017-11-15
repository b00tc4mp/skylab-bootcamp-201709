const {Component} = React
const {
    NavLink,
    Route,
    HashRouter
} = ReactRouterDOM

const usersApi = {
    users: [
        {id: 1, name: 'James', detail: 'I am James'},
        {id: 2, name: 'Mary', detail: 'I am Mary'},
        {id: 3, name: 'John', detail: 'I am John'}
    ],

    all: function() {
        return this.users
    },

    get: function(id) {
        for(let i = 0; i <this.users.length; i++) {
            const user = this.users[i]

            if (user.id == id)
                return user
        }
    }
}


class HomePage extends Component {
    render() {
        return <div>Home Page</div>
    }
}

class UsersPage extends Component {
    render() {
        return <div>Users Page
            <ul>
                {
                    usersApi.all().map(function (user) {
                        return <li key={user.id}>
                            <NavLink to={'/users/' + user.id}>{user.name}</NavLink>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

class UserDetail extends Component {
    render() {
        return <h1>{usersApi.get(this.props.match.params.id).detail}</h1>
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
        return <HashRouter>
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
                    <Route path="/users/:id" component={UserDetail}/>
                </main>
            </div>
        </HashRouter>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))