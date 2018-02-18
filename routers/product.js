var router = require('koa-router')();

router.prefix('/product');
router.get('/',async function (ctx,next) {
    await ctx.render('productPage');
});

router.get('/brand',async function(ctx,next){
	await ctx.render('product_brand');
});

router.get('/mall',async function(ctx,next){
	await ctx.render('product_mall');
});


module.exports = router;