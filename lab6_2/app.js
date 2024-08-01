const express = require('express'); 
const app = express(); 
 
app.use(express.static('public')); //create folder public for place file html 
 
app.get('/', (req, res) => { 
  res.send('hello world'); 
}); 
 
app.listen(3000, () => { 
  console.log('Server is running on port 3000'); 
}); 
