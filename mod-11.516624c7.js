const t=document.querySelector(".fetch"),e=document.querySelector(".list"),n=document.querySelector(".add"),o=document.querySelector(".form-wrapper");n.style.display="none";function l(){fetch("http://localhost:4040/books").then((t=>t.json())).then((o=>{const l=o.map((({id:t,title:e,author:n,genres:o,rating:l})=>`\n    <li id=${t}>ID: ${t}\n    <p>Book Title:<span class='title'>${e}</span></p>\n    <p>Author:<span class='author'>${n}</span></p>  \n    <p>Rating:<span class ='rating'> ${l}</span></p> \n    <button class="delete">Delete</button>\n    <button class="edit">Edit</button>\n    </li>\n    `)).join("");e.innerHTML=l,t.style.display="none",n.style.display="inline";document.querySelectorAll(".delete").forEach((t=>{t.addEventListener("click",r)}));document.querySelectorAll(".edit").forEach((t=>t.addEventListener("click",c)))})).catch((t=>console.log(t)))}function a(t="",e="",n=""){return`<form>\n    <label>\n    Title:\n    <input type = 'text' name='title' value="${t}"/>\n    </label>\n    <label>\n    Author:\n    <input type = 'text' name='author' value="${e}"/>\n    </label>\n    <label>\n    Rating:\n    <input type = 'text' name='rating' value="${n}"/>\n    </label>\n    <button>Save button</button>\n    </form>\n    `}function r(t){const e=t.target.parentNode.id;fetch(`http://localhost:4040/books/${e}`,{method:"DELETE"}).then((()=>{console.log("Post deleted"),l()})).catch((t=>console.log("Error:",t)))}function c(t){const e=t.target.parentNode.id,n=t.target.parentNode.querySelector(".title").textContent;console.log(n);const r=t.target.parentNode.querySelector(".author").textContent,c=t.target.parentNode.querySelector(".rating").textContent;o.innerHTML=a(n,r,c);const s=document.querySelector("form");s.addEventListener("submit",(t=>{t.preventDefault();const n={title:t.target.elements.title.value,author:t.target.elements.author.value,rating:t.target.elements.rating.value},o={method:"PATCH",body:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch(`http://localhost:4040/books/${e}`,o).then((()=>{l(),s.innerHTML=""})).catch((t=>console.log(t)))}))}t.addEventListener("click",l),n.addEventListener("click",(function(){o.innerHTML=a();const t=document.querySelector("form");t.addEventListener("submit",(e=>{e.preventDefault();const n={title:e.target.elements.title.value,author:e.target.elements.author.value,rating:e.target.elements.rating.value},o={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("http://localhost:4040/books",o).then((()=>{l(),t.innerHTML=""})).catch((t=>console.log(t)))}))}));
//# sourceMappingURL=mod-11.516624c7.js.map
