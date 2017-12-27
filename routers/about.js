var router = require('koa-router')();
router.prefix('/about');
router.get('/',async function (ctx,next) {
    await ctx.render('aboutPage');
});



module.exports = router;