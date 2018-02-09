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