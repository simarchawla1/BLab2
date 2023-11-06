const express = require('express');
const app =express();
const port= 3000;
const books= require('./books');
app.use(express.json());
app.get('/api/books',(req,res) =>{
    res.json(books);
}
);
app.listen(port, () => {
    console.log('server is running on port ${port}');
});