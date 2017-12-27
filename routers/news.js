var router = require('koa-router')();

router.prefix('/news');
router.get('/',async function (ctx,next) {
    await ctx.render('newsPage');
});


module.exports = router;