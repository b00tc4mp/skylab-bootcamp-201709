import React, {Component} from 'react'
import {HashRouter, Link, Route} from 'react-router-dom'
import Popular from './Popular'
import Upcoming from './Upcoming'
import TopRated from './TopRated'
import Search from './Search'
import Results from './Results'

class Movies extends Component {

    render() {
        return <HashRouter>
            <div>
                <nav>
                    <Link to="/popular">Popular</Link>
                    <Link to="/upcoming">Upcoming</Link>
                    <Link to="/now-playing">NowPlaying</Link>
                    <Link to="/top-rated">TopRated</Link>
                </nav>
                <Search/>
                <Route path="/search/:query" component={Results}/>
                <Route path="/popular" component={Popular}/>
                <Route path="/upcoming" component={Upcoming}/>
                <Route path="/now-playing" component={TopRated}/>
                <Route path="/top-rated" component={TopRated}/>
            </div>
        </HashRouter>
    }
}

export default Movies