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