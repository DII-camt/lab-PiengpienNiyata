fetch('https://jsonplaceholder.typicode.com/posts/1/comments') 
  .then((response) => response.json()) 
  .then((json) => console.log(json)); 