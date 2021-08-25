import React from "react";
import {Component} from "react";
import {Route, BrowserRouter as Router, Switch, Link, useParams} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/"/>A</li>
                        <li><Link to="/b"/>B</li>
                        <li><Link to="/c"/>C</li>
                    </ul>

                    <Switch>
                        <Route path="/">
                            <A/>
                        </Route>
                        <Route path="/b">
                            <B/>
                        </Route>
                        <Route path="/c/:id">
                            <C/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

class A extends Component {
    render() {
        return <div><h2>A Content</h2></div>
    }
}

class B extends Component {
    render() {
        return <div><h2>B Content</h2></div>
    }
}

function C(){
    let {id} = useParams()
    return <div><h2>C Content: {id}</h2></div>
}


export default Nav