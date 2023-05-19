const express=require('express')
const path=require('path') //must be done to get the path 

const app=express()

app.use(function(req,res,next){
    console.log('default or common')  //used to do default or common funtion
    next()
})

app.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname,'signup.html'))
})

app.post('/signup',function(req,res){
    res.send('account created')
})

app.get('/about',function(req,res){
    res.send('about')
})

app.listen(2000,function(){
    console.log(__dirname)

    console.log('Server started')
})