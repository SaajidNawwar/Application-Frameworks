import React from 'react';
import PostListItem from './PostListItem';
import Post from "./Post";

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {posts} = this.props;
        return <div>
            <table border="2">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {posts.map(post => {
                    return <PostListItem key={post.id.toString()} post={post} selectPost={post=>this.selectPost(post)}/>
                })}
                </tbody>
            </table>
            <div>
                {this.state.post ? <Post post={this.state.post}/> : ''}
            </div>
        </div>;
    }
}