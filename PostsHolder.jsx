import React from 'react';
import Posts from './Posts';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PostsFunctional from './PostsFunctional';
import AddPost from './AddPost';
import axios from 'axios';

export default class PostsHolder extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {
        posts: []
    }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/posts/')
          .then(response => {
            this.setState({ posts: [...response.data] })
          })
          .catch((error) => {
            console.log(error);
          })
    }
    
    addNewPost({name, description}) {
         const post = {
            name,
            description
        }

        axios.post('http://localhost:3001/posts/', post)
            .then(res => console.log(res.data));

            axios.get('http://localhost:3001/posts/')
            .then(response => {
              this.setState({ posts: [...response.data] })
            })
            .catch((error) => {
              console.log(error);
            })

        //this.setState({posts: [...this.state.posts,post]}); 
        //this.push({id: this.length + 1, name, description});
    }
    
       
    render() {

        /* const posts = [
            {
            id: 1,
            name: 'React',
            description: 'Best UI library'
            }, {
            id: 2,
            name: 'Node',
            description: 'Server side JS'
            }
           ]; */
           
           
    return <Switch>
                <Route exact path="/posts">
                    <PostsFunctional posts={this.state.posts} />
                </Route>
                <Route path="/posts/add">
                            <AddPost save = {this.addNewPost.bind()}/>
                </Route>
            </Switch>
        
    }
   }
   