var router = require('koa-router')();
router.prefix('/about');
router.get('/',async function (ctx,next) {
    await ctx.render('aboutPage');
});
router.get('/jtjs',async function (ctx,next) {
    await ctx.render('jtjs');
});



module.exports = router;