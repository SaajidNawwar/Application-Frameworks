const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const HomeRoutes = require('../Lab 6/routes/home.router');
const PostsRoutes = require('../Lab 6/routes/post.routes');
require('./dal');


const app = new Koa();

app.use(bodyParser());


app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());
 
app.use(PostsRoutes.routes())
    .use(PostsRoutes.allowedMethods());



app.use(ctx => {
 ctx.body = 'Hello ';
});
 

app.listen(3000, err => {
    if (err) {
        console.log(err);
        return;
    }
});

console.log('Application is running on port 3000...');