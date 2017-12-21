// 进入页面时切换导航栏焦点
let home = document.getElementsByClassName("nav_home")[0];
let onPage = document.getElementsByClassName("nav_about")[0];
let logo_bg = document.getElementById("log_bg");
function navBarchange(event) {
    let e = event || window.event;
    home.classList.remove("active");
    onPage.classList.add("active_about");
    logo_bg.style.backgroundColor = "#f39e38";
}
window.addEventListener("load",navBarchange,false);