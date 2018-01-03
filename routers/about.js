var router = require('koa-router')();
router.prefix('/about');
router.get('/',async function (ctx,next) {
    await ctx.render('aboutPage');
});
router.get('/jtjs',async function (ctx,next) {
    await ctx.render('jtjs');
});
router.get('/hxjz',async function (ctx,next) {
    await ctx.render('about_hxjz');
});
router.get('/qyry',async function (ctx,next) {
    await ctx.render('about_qyry');
});


module.exports = router;