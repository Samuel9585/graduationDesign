// 进入页面时切换导航栏焦点,所有子页面都必须要有！！！这段代码
let home = document.getElementsByClassName("nav_home")[0];
let onPage = document.getElementsByClassName("nav_product")[0];
let logo_bg = document.getElementById("log_bg");
function navBarchange(event) {
    let e = event || window.event;
    home.classList.remove("active");
    onPage.classList.add("active_product");
    logo_bg.style.backgroundColor = "rgb(235, 107, 100)";
}
window.addEventListener("load", navBarchange, false);

// 分割线
let page_wrap = document.getElementsByClassName("page_wrap")[0];
function bgChange(event) {
    let e = event || window.event;
    let target = e.target || e.srcElement;
    if (target.classList.contains("water_title_wrap")) {
        let p = target.getAttribute("index");
        let className = "mask_" + p;
        let dom = document.getElementsByClassName(className)[0];
        dom.classList.add("hover");
    }

}
function leaveChange(event) {
    let e = event || window.event;
    let target = e.target || e.srcElement;
    let p = target.getAttribute("index");
    let className = "mask_" + p;
    let dom = document.getElementsByClassName(className)[0];
    dom.classList.remove("hover");

}
page_wrap.addEventListener("mouseover", bgChange, false);
let mask = document.getElementsByClassName("water_title_wrap");
for (let i = 0; i < mask.length; i++) {
    mask[i].addEventListener("mouseleave", leaveChange, false);
}
