var http=require('http')
var fs=require('fs')
var url=require('url')//used to get url path

http.createServer(function(req,res){

    var q=url.parse(req.url,true)  //pathname or url is taked into q and check it with (q.pathname==='/')   ,,,, true is used here to display the url data as objects thats written in if else case
   // console.log(q.pathname)

    if(q.pathname==='/'){
        fs.readFile('samplehtml.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname==='/signup'){
        fs.readFile('signup.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname==='/submit'){
        res.writeHead(404,{'Content-Type':'text/html'})

        console.log(q.query) //used to get the url data

        res.write('submit worked')
        res.write('<h1>'+q.query.firstname+'<h1>')
        res.end()
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('error')
        res.end()
    }
}).listen(4000,function(){
    console.log('Server started')
})