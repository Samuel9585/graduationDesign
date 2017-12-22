"use strict";

// 进入页面时切换导航栏焦点,所有子页面都必须要有！！！这段代码
var home = document.getElementsByClassName("nav_home")[0];
var onPage = document.getElementsByClassName("nav_product")[0];
var logo_bg = document.getElementById("log_bg");
function navBarchange(event) {
    var e = event || window.event;
    home.classList.remove("active");
    onPage.classList.add("active_product");
    logo_bg.style.backgroundColor = "rgb(235, 107, 100)";
}
window.addEventListener("load", navBarchange, false);

// 分割线
var page_wrap = document.getElementsByClassName("page_wrap")[0];
function bgChange(event) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    if (target.classList.contains("water_title_wrap")) {
        var p = target.getAttribute("index");
        var className = "mask_" + p;
        var dom = document.getElementsByClassName(className)[0];
        dom.classList.add("hover");
    }
}
function leaveChange(event) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var p = target.getAttribute("index");
    var className = "mask_" + p;
    var dom = document.getElementsByClassName(className)[0];
    dom.classList.remove("hover");
}
page_wrap.addEventListener("mouseover", bgChange, false);
var mask = document.getElementsByClassName("water_title_wrap");
for (var i = 0; i < mask.length; i++) {
    mask[i].addEventListener("mouseleave", leaveChange, false);
}