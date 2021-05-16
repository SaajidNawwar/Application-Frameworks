import React from 'react';
import PostListItem from './PostListItem';
import Post from './Post';
import { Link } from 'react-router-dom';

export default class Posts extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        post: null
       };
    }



    selectPost(post) {
        this.setState({post: post})
    }
       
    render() {
        const {posts} = this.props;
            return <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Select</th>
                                </tr>
                            </thead>

                            <tbody>
                                {posts.map(post => {
                                return <PostListItem key={post.id.toString()} post={post} selectPost={ this.selectPost.bind(this,post)} />
                                })}
                            </tbody>
                        </table>

                        <div>
                            {this.state.post ? <Post post={this.state.post} editable={false}/> : ''}
                        </div>
                                
                        <Link to="/posts/add">Add</Link>

                    </div>;
        }
       }
       