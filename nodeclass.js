var express = require("express")
var app=express()
app.get("/",function(req,res){
    res.send("Hello World")
})



app.get("/r/:anyname",function(req,res){
    var subreq=req.params.anyname
    res.send("welcome to subreq"+subreq.toUpperCase())
})




var port= process.env.PORT || 1600
app.listen(port, ()=>console.log(`Listening on port ${port}`))