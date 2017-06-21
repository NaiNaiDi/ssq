const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public/www.dztchu.com/')))

app.get('/',function(req,res){
    console.log(res.sendfile);
    var fileName = "public/www.dztchu.com/index.htm";
    res.sendfile(fileName);
})
app.listen(8080, () => {
    console.log(`App listening at port  80`)
})