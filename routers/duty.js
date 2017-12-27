var router = require('koa-router')();

router.prefix('/duty');
router.get('/',async function (ctx,next) {
    await ctx.render('dutyPage');
});


module.exports = router;