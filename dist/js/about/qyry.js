"use strict";

// 进入页面时切换导航栏焦点,所有子页面都必须要有！！！这段代码

var home = document.getElementsByClassName("nav_home")[0];
var onPage = document.getElementsByClassName("nav_about")[0];
var logo_bg = document.getElementById("log_bg");
function navBarchange(event) {
    var e = event || window.event;
    home.classList.remove("active");
    onPage.classList.add("active_about");
    logo_bg.style.backgroundColor = "#f39e38";

    // 页面额外任务
    $(".scroller_0").show();
}
window.addEventListener("load", navBarchange, false);

// 分割线
var openButton = document.getElementsByClassName('view_more')[0];
var target = $('.block_view_more_1');
var sign = true;
openButton.addEventListener('click', function () {
    target.toggleClass("showWord");
    if (sign) openButton.innerText = "收起";else openButton.innerText = "了解更多";
    sign = !sign;
}, false);

// 水滴点击变大
var changTarget = $(".tab_item");
var data_title = $(".data_title");
changTarget.click(function () {
    changTarget.removeClass("normal");
    $(this).addClass("normal");

    var changed_year = $(this).find("b")[0].innerText;
    data_title[0].innerText = changed_year;

    var showClass = null;
    switch (changed_year) {
        case "2016":
            showClass = ".scroller_0";
            break;
        case "2015":
            showClass = ".scroller_1";
            break;
        case "2014":
            showClass = ".scroller_2";
            break;
        case "2013":
            showClass = ".scroller_3";
            break;
        case "2012":
            showClass = ".scroller_4";
            break;
        default:
            showClass = ".scroller_0";
    }

    $(".scroller_wrap").hide();
    $(showClass).show();
    console.log($(showClass)[0]);
});