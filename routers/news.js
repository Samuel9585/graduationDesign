var router = require('koa-router')();

router.prefix('/news');
router.get('/',async function (ctx,next) {
    await ctx.render('newsPage');
});
router.get('/gccg',async function(ctx,next){
	await ctx.render('news_gccg');
});

module.exports = router;