var router = require('koa-router')();

router.prefix('/product');
router.get('/',async function (ctx,next) {
    await ctx.render('productPage');
});


module.exports = router;