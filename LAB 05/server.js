const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const HomeRoutes = require('../labsheet05/routes/home.router');
const PostsRoutes = require('../labsheet05/routes/post.routes');

// Creation of Koa application
const app = new Koa();

// Registering the body parser 
//BodyParser is used to identify which type of data is used (middleware )
app.use(BodyParser());

// Registering routes
// If prefixes match any of the routes then the code in the specific routes are executed
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());
 
app.use(PostsRoutes.routes())
    .use(PostsRoutes.allowedMethods());


// If neither of the routes match then this is executed
app.use(ctx => {
 ctx.body = 'Hello';
});
 

app.listen(3000, err => {
    if (err) {
        console.log(err);
        return;
    }
});

console.log('Application is running on port 3000....');