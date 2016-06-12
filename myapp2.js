var express=require('express')
var app=express()
app.get('/',function (req,res) {
    var myData=["Red","Blue","Green"]
    res.render('login1.ejs',
        {
            data:myData
        })
    res.end()

})

app.listen(8080);
