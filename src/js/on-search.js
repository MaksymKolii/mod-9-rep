// export default function onSearch(e){
//     e.preventDefault()
//     const options ={

//         headers:{
//             Authorization: '6be54aba098d4ee4bc21992dc9b3c0d5'
//         }
//     }
    
//     const searchQuery = e.currentTarget.elements.query.value;
  
//     const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page1`;
//     fetch(url, options)
//     .then(resolve => resolve.json())
//     .then(console.log())
// }