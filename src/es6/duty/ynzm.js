// 进入页面时切换导航栏焦点,所有子页面都必须要有！！！这段代码
let home = document.getElementsByClassName("nav_home")[0];
let onPage = document.getElementsByClassName("nav_duty")[0];
let logo_bg = document.getElementById("log_bg");
function navBarchange(event) {
    let e = event || window.event;
    home.classList.remove("active");
    onPage.classList.add("active_duty");
    logo_bg.style.backgroundColor = "rgb(113, 189, 228)";
}
window.addEventListener("load",navBarchange,false);

// 分割线
var openButton = document.getElementsByClassName('view_more')[0];
var target = $('.block_wrap_1');
var sign = true;
openButton.addEventListener('click', function () {
    target.toggleClass("showWord");
    if (sign) openButton.innerText = "收起";else openButton.innerText = "了解更多";
    sign = !sign;
}, false);