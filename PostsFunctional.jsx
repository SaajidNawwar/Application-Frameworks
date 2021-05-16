import React, { useState , useEffect } from 'react';
import PostListItem from './PostListItem';
import Post from './Post';
import { Link } from 'react-router-dom';


const PostsFunctional = (props) => {
    const [post,setPost] = useState(null);
    const {posts} = props;

    useEffect(() => {
        console.log('Mount and update from the effect hook');
        return () => console.log("Unmount from the effect hook");
       });
       

    return ( <div>
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
                return <PostListItem key={post.id.toString()} post={post} selectPost={post => setPost(post)} />
                })}
            </tbody>
        </table>

        <div>
            {post ? <Post post={post} editable={false}/> : ''}
        </div>
                
        <Link to="/posts/add">Add</Link>

    </div> );
}
 
export default PostsFunctional;