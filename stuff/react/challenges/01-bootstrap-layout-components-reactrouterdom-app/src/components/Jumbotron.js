import React, { Component } from 'react'

class Jumbotron extends Component {

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

export default Jumbotron