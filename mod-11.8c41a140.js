function o(o){const e={apple:"🍎",citrus:"🍋",banana:"🍌",grapes:"🍇"};return new Promise(((n,t)=>setTimeout((()=>n(e[o])),500)))}(async function(){try{console.time("aMakeSmoothie");const e=o("grapes"),n=o("citrus"),t=o("apple"),a=await Promise.all([e,n,t]);return console.log(a),console.timeEnd("aMakeSmoothie"),a}catch(o){console.log("Ошибка")}})().then((o=>console.log(o)));
//# sourceMappingURL=mod-11.8c41a140.js.map
