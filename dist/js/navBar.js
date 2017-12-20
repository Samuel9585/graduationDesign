$(function() {
    let hoverLi = $('.main_nav');
    let logo_site = $('#log_bg');
    let oldCol = logo_site.css("background-color");

    hoverLi.on('mouseover', ">li:not(.active)", function() {
        let col = null;
        let colorArr = ["rgba(243, 158, 56,.85)", "rgba(235, 107, 100,.85)", "rgba(113, 189, 228,.85)", "rgba(38, 161, 58,.85)"];
        if ($(this).hasClass("nav_about")) {
            col = colorArr[0];
        } else if ($(this).hasClass("nav_product")) {
            col = colorArr[1];
        } else if ($(this).hasClass("nav_duty")) {
            col = colorArr[2];
        } else if ($(this).hasClass("nav_news")) {
            col = colorArr[3];
        }
        logo_site.css({
            "background-color": col
        });
    });
    hoverLi.on('mouseleave', ">li", function() {
        let target = $(this).find(".sub_nav");
        logo_site.css({
            "background-color": oldCol,
        });
    });
});