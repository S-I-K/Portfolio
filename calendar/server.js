const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('login-page'));
app.listen(port, function(){
    console.log('성공!');
});