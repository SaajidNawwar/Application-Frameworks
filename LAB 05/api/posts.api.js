const uuid1 = require('uuid');

const posts = new Map();


const createPost = ({name, description}) => {
    const post = {
        id: uuid1.v4(),
        name,
        description,
        datePosted: new Date()
    }

    posts.set(post.id, post);
    return post;
}

const getPosts = () => {
    return [...posts.values()];
}

const getPost = id => {
    return posts.get(id);
}

module.exports = { createPost, getPosts, getPost };
