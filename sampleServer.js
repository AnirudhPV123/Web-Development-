/* server hosting basic...


var http=require('http')

http.createServer(call).listen(4000)

function call(req,res){
    res.write('Anirudh')
    res.end()
}
*/


/* just wirte the function inside ...

var http=require('http')
http.createServer(function(req,res){
    res.write('Anirudh.P.V')
    res.end()
}).listen(4000)
*/

var http=require('http')

var fs=require('fs')  //library to read html file

http.createServer(function(req,res){

    if(req.url==='/'){

    fs.readFile('samplehtml.html',function(err,data){  //used to read html file and also use callback to work the next step only after completing the html ,,, and also "data" argument is passed
        res.writeHead(200,{'Content-Type':'text/html'})  //200 is a standard protocol and these step is used to identy the whether it is html file or not
        res.write(data)//argument

        res.write('server worked')
        res.end()
    })}
    else if(req.url==='/login'){
        res.write('login')
        res.end()
    }else{
        res.write('error')
        res.end()
    }

}).listen(4000,function(){
    console.log('Server started')
})