class App extends React.Component {
    constructor() {
        super()

        this.state = {
            currentPage: 'home'
        }
    }

    handlePage(currentPage) {
        this.setState({
            currentPage
        })
    }

    handleHome = () => {
        this.handlePage('home')
    }

    handleAbout = () => {
        this.handlePage('about')
    }

    handleContact = () => {
        this.handlePage('contact')
    }

    render() {
        return <div className="container">
            <NavBar
                currentPage={this.state.currentPage}
                onHomeClick={this.handleHome}
                onAboutClick={this.handleAbout}
                onContactClick={this.handleContact}
            />
            {this.state.currentPage === 'home'? <Jumbotron/> : undefined}
            <Page currentPage={this.state.currentPage}/>
        </div>
    }
}

class NavBar extends React.Component {

    render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">React Strap</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className={this.props.currentPage === 'home'? 'active' : undefined}>
                            <a onClick={this.props.onHomeClick} href="#">Home</a>
                        </li>
                        <li className={this.props.currentPage === 'about'? 'active' : undefined}>
                            <a onClick={this.props.onAboutClick} href="#">About</a>
                        </li>
                        <li className={this.props.currentPage === 'contact'? 'active' : undefined}>
                            <a onClick={this.props.onContactClick} href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}

class Jumbotron extends React.Component {
    
    render() {
        return <div className="jumbotron">
            <h1>Navbar example</h1>
            <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work.
                It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
            <p>
                <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
            </p>
        </div>
    }
}

class HomePage extends React.Component {

    render() {
        return <div>
            <h1>Home Page</h1>
            <p>This is the home page</p>
        </div>
    }
}

class AboutPage extends React.Component {

    render() {
        return <div>
            <h1>About Page</h1>
            <p>This is the about page</p>
        </div>
    }
}

class ContactPage extends React.Component {

    render() {
        return <div>
            <h1>Contact Page</h1>
            <p>This is the contact page</p>
        </div>
    }
}

class Page extends React.Component {

    render() {
        switch (this.props.currentPage) {
            case 'home':
                return <HomePage/>
            case 'about':
                return <AboutPage/>
            case 'contact':
                return <ContactPage/>
        }
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))