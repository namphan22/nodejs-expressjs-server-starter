const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    res.send('hello nam phan');
});
app.listen(5000,()=>{
    console.log('Server is running!');
});

