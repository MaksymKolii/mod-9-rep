let i=null;const t={notification:document.querySelector(".js-alert")};function e(){t.notification.classList.remove("js-visible")}t.notification.addEventListener("click",(function(){e(),clearTimeout(i)})),t.notification.classList.add("js-visible"),i=setTimeout((()=>{e(),console.log("Закрываем алерт автоматическиБ чтоб не висел")}),3e3);
//# sourceMappingURL=03-feedback.c118fcc5.js.map
