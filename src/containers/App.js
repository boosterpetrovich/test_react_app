import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TopMenu from '../components/TopMenu'
import Home from '../containers/Home'
import Toys from '../containers/Toys'
import NoMatch404 from '../containers/NoMatch404.js'

const App = () => (
    <Router>
        <div id="wrapper">
            <TopMenu />
            <Route exact path="/" component={Home} />
            <Route exact path="/toys" component={Toys} />
        </div>
    </Router>
)

export default App
