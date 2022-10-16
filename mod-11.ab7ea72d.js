const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"Тестовая книга по CSS",author:"Максим",genres:["CSS"],rating:9})};fetch("http://localhost:4040/books",t).then((t=>t.json())).then(console.log);
//# sourceMappingURL=mod-11.ab7ea72d.js.map
