import React from 'react';
import Posts from "./Posts";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PostsHolder from './components/PostsHolder';

const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'
    },
    {
        id: 2,
        name: 'Node',
        description: 'Server side JS'
    }
    ];

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Router>
            <Switch>
                <Route exact path="/">
                    <PostsHolder/>
                </Route>
            </Switch>
        </Router>
    }
}



