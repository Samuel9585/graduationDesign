let koa = require('koa')
    ,app = new koa()
    ,views = require('koa-views')
    ,swig = require('swig')
    ,serve = require('koa-static');

var index = require('./routers/index');
var about = require('./routers/about');
var product = require('./routers/product');
var duty = require('./routers/duty');
var news = require('./routers/news');

app.use(serve(__dirname + '/dist'));
app.use(views(__dirname + '/src/swig', {
    map: {
      html: 'swig'
    }
  }));


app.use(async function (ctx,next){
    var start = new Date;
    await next();
    var ms = new Date - start;
    console.log('%s %s - %s', ctx.method, ctx.url, ms);
    });

app.use(index.routes());
app.use(about.routes());
app.use(product.routes());
app.use(duty.routes());
app.use(news.routes());

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
    });

app.listen(3200);