!function(){const e=document.querySelector(".js-start"),o=document.querySelector(".js-stop");let t=null;e.addEventListener("click",(()=>{t=setInterval((()=>{console.log(`I love async JS!  ${Math.random()}`)}),1e3)})),o.addEventListener("click",(()=>{clearInterval(t),console.log(`Interval with id ${t} has stopped!`)}));const l=new Date;console.log("Date: ",l),console.log("getDate(): ",l.getDate()),console.log("getDay(): ",l.getDay()),console.log("getMonth(): ",l.getMonth()),console.log("getFullYear(): ",l.getFullYear()),console.log("getHours(): ",l.getHours()),console.log("getMinutes(): ",l.getMinutes()),console.log("getSeconds(): ",l.getSeconds()),console.log("getMilliseconds(): ",l.getMilliseconds()),console.log("getUTCDate(): ",l.getUTCDate()),console.log("getUTCDay(): ",l.getUTCDay()),console.log("getUTCMonth(): ",l.getUTCMonth()),console.log("getUTCFullYear(): ",l.getUTCFullYear()),console.log("getUTCHours(): ",l.getUTCHours()),console.log("getUTCMinutes(): ",l.getUTCMinutes()),console.log("getUTCSeconds(): ",l.getUTCSeconds()),console.log("getUTCMilliseconds(): ",l.getUTCMilliseconds())}();
//# sourceMappingURL=01-gallery.d8a7edd6.js.map
