// 主页鼠标滚轮事件
let scroll_item = document.getElementsByClassName("scroll_item")[0];
let pointBar = document.getElementsByClassName("scroll_page")[0];
let firstPage = document.getElementsByClassName("item_0")[0];

let pageNum = 0,
    up = null;
let currentClass = null,
    currentPage = null,
    oldPage,
    oldClass,
    oldPoint,
    activePoint,
    oldItem,
    newItem,
    preBg,
    nowBg,
    className,
    targetDom,
    x,
    y;


function changePage(pageNum) {
    currentClass = "scroll_page_" + pageNum;
    oldClass = scroll_item.classList.item(1);
    scroll_item.classList.remove(oldClass);
    scroll_item.classList.add(currentClass);
}

function waterMove(p) {
    x = y = p;
    for (; x >= 0; x--) {
        className = "item_" + x;
        targetDom = document.getElementsByClassName(className)[0];
        targetDom.classList.remove("waterUp");
        targetDom.classList.remove("waterDown");
        targetDom.classList.add("waterUp");
    }
    for (; y <= 4; y++) {
        className = "item_" + y;
        targetDom = document.getElementsByClassName(className)[0];
        targetDom.classList.remove("waterUp");
        targetDom.classList.remove("waterDown");
        targetDom.classList.add("waterDown");
    }

}

function scrollFun(event) {
    let e = event || window.event;
    e.stopPropagation();
    if (e.wheelDelta) {
        up = e.wheelDelta;
        if (up > 0) {
            pageNum = --pageNum < 0 ? 0 : pageNum;

            changePage(pageNum)

            oldPage = "page_" + (pageNum + 1);
            currentPage = "page_" + pageNum;
            oldPoint = document.getElementsByClassName(oldPage)[0];
            activePoint = document.getElementsByClassName(currentPage)[0];
            oldPoint.style.backgroundPosition = "100% 100%";
            activePoint.style.backgroundPosition = "0 100%";

            if (pageNum < 4) {
                pointBar.classList.remove("hide");
            }

            oldItem = "item_" + (pageNum + 1);
            newItem = "item_" + pageNum;
            preBg = document.getElementsByClassName(oldItem)[0];
            nowBg = document.getElementsByClassName(newItem)[0];
            preBg.classList.add("waterDown");
            nowBg.classList.remove("waterUp");
            nowBg.classList.remove("waterDown");
        } else if (up < 0) {
            pageNum = ++pageNum > 4 ? 4 : pageNum;

            changePage(pageNum)

            oldPage = "page_" + (pageNum - 1);
            currentPage = "page_" + pageNum;
            oldPoint = document.getElementsByClassName(oldPage)[0];
            activePoint = document.getElementsByClassName(currentPage)[0];
            oldPoint.style.backgroundPosition = "100% 100%";
            activePoint.style.backgroundPosition = "0 100%";

            if (pageNum === 4) {
                pointBar.classList.add("hide");
            }

            oldItem = "item_" + (pageNum - 1);
            newItem = "item_" + pageNum;
            preBg = document.getElementsByClassName(oldItem)[0];
            nowBg = document.getElementsByClassName(newItem)[0];
            preBg.classList.add("waterUp");
            nowBg.classList.remove("waterUp");
            nowBg.classList.remove("waterDown");
        }
    } else if (e.detail) {
        up = e.detail;
        if (up > 0) {
            pageNum = --pageNum < 0 ? 0 : pageNum;
            currentClass = "scroll_page_" + pageNum;
            oldClass = scroll_item.classList.item(1);
            scroll_item.classList.remove(oldClass);
            scroll_item.classList.add(currentClass);
        } else if (up < 0) {
            pageNum = ++pageNum > 4 ? 4 : pageNum;
            currentClass = "scroll_page_" + pageNum;
            oldClass = scroll_item.classList.item(1);
            scroll_item.classList.remove(oldClass);
            scroll_item.classList.add(currentClass);
        }
    }
}
if (document.addEventListener) {
    document.addEventListener("DOMMouseScroll", scrollFun, false);
}
window.onmousewheel = document.onmousewheel = scrollFun;
window.onload = function () {
    firstPage.classList.remove("waterDown");
};

// 给导航点绑定事件
let p = null;
function clickPoint(event) {
    let e = event || window.event;
    let target = e.target || e.srcElement;
    if (target.nodeName.toLowerCase() === "span") {
        p = parseInt(target.getAttribute("index"));

        changePage(p);

        oldPage = "page_" + pageNum;
        currentPage = "page_" + p;
        oldPoint = document.getElementsByClassName(oldPage)[0];
        activePoint = document.getElementsByClassName(currentPage)[0];
        oldPoint.style.backgroundPosition = "100% 100%";
        activePoint.style.backgroundPosition = "0 100%";
        if (+p == 4) {
            pointBar.classList.add("hide");
        } else {
            pointBar.classList.remove("hide");
        }

        
            newItem = "item_" + p;
            waterMove(p);
            nowBg = document.getElementsByClassName(newItem)[0];
            nowBg.classList.remove("waterUp");
            nowBg.classList.remove("waterDown");

        pageNum = p;

    }
}
pointBar.addEventListener("click", clickPoint, false);

