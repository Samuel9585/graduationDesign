var router = require('koa-router')();

router.get('/',async function (ctx,next) {
    await ctx.render('indexPage');
});

router.get('/index',async function (ctx,next) {
  await ctx.render('indexPage');
});

module.exports = router;
