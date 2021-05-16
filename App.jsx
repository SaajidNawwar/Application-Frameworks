import React from 'react';
import PostsHolder from './components/PostsHolder';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import UserContext from './components/UserContext';

export default class App extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
  user: ''
}

 }

 componentDidMount() {
   this.setState({ user: 'admin' }); 
 }

 
 render() {
    

    return <Router>
    <Switch>
        <Route path="/posts">
          <UserContext.Provider value={this.state.user}>
            <PostsHolder/>
          </UserContext.Provider>
        </Route>

        <Redirect to="/posts" />
      </Switch>
   </Router>

   
 }
}
