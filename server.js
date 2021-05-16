const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const HomeRoutes = require('../back-end/routes/home.router');
const PostsRoutes = require('../back-end/routes/post.routes');
require('./dal');


const app = new Koa();
app.use(cors());


app.use(bodyParser());

app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());
 
app.use(PostsRoutes.routes())
    .use(PostsRoutes.allowedMethods());



app.use(ctx => {
 ctx.body = 'Hello';
});
 

app.listen(3001, err => {
    if (err) {
        console.log(err);
        return;
    }
});

console.log('Application is running on port 3001...');