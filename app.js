var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, 'public/www.dztchu.com/')))

app.get('/',function(req,res){
    console.log(res.sendfile);
    var fileName = "public/www.dztchu.com/index.htm";
    res.sendfile(fileName);
})
app.listen(810, function(){
})