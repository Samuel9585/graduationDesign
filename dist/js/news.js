// 进入页面时切换导航栏焦点,所有子页面都必须要有！！！这段代码
let home = document.getElementsByClassName("nav_home")[0];
let onPage = document.getElementsByClassName("nav_news")[0];
let logo_bg = document.getElementById("log_bg");
function navBarchange(event) {
    let e = event || window.event;
    home.classList.remove("active");
    onPage.classList.add("active_news");
    logo_bg.style.backgroundColor = "rgb(38, 161, 58)";
}
window.addEventListener("load",navBarchange,false);

// 分割线
document.onclick = function(event){
    let e = event || window.event;
    console.log(e.target);
}