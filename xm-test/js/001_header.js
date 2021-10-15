// 头部购物车二级页面
$(".topbar-cart .cart-mini").mouseenter(function() {
    $(".topbar-cart .cart-mini .cart-box").stop().slideDown(300)
});
$(".topbar-cart .cart-mini").mouseenter(function() {
    $(".topbar-cart .cart-mini .cart-box").stop().slideDown(300)
});
$(".topbar-cart .cart-mini").mouseleave(function() {
    $(".topbar-cart .cart-mini .cart-box").stop().slideUp(300)
});
$(".topbar-cart .cart-mini").mouseleave(function() {
    $(".topbar-cart .cart-mini .cart-box").stop().slideUp(300)
});
// 菜单栏二级页面
$(".site-header .a01,.a02,.a03,.a04,.a05,.a06,.a07,.a08").mouseenter(function() {
    $(".site-header .child-two").stop().slideDown(200)
});
$(".child-two").mouseenter(function() {
    $(".site-header .child-two").stop().slideDown(200)
});
$(".site-header .a01,.a02,.a03,.a04,.a05,.a06,.a07,.a08").mouseleave(function() {
    $(".site-header .child-two").stop().slideUp(200)
});
$(".child-two").mouseleave(function() {
    $(".site-header .child-two").stop().slideUp(200)
});