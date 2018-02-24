var router = require('koa-router')();

router.prefix('/duty');
router.get('/',async function (ctx,next) {
    await ctx.render('dutyPage');
});
router.get('/ynzm',async function(ctx,next){
	await ctx.render('duty_ynzm');
});
router.get('/czgy',async function(ctx,next){
	await ctx.render('duty_czgy');
})

module.exports = router;