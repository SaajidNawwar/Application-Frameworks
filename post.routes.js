const Router = require('@koa/router');
const { createPost, getPosts, getPost, deletePost, updatePost} = require('../api/posts.api');

const router = new Router({
    prefix: '/posts'
   });
   router.get('/', async ctx => {
    ctx.body = await getPosts();
   }); 
   router.post('/', async ctx => {
    let post = ctx.request.body;
    post = await createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
   });

   router.post('/:id', async ctx => {
    let id = ctx.params.id;
    let name = ctx.request.body.name;
    let description = ctx.request.body.description;
    let postedDate = new Date();

    
    let post = await updatePost(id,{name, description, postedDate} );
    ctx.response.status = 201;
    ctx.body = post;
   });

   router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getPost(id);
   });

   router.delete('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await deletePost(id);
   });
   

module.exports = router;