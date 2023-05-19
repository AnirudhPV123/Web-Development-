
/*
var date=new Date()

console.log('hello')
for(i=0;i<10000;i++){
    console.log('running')
}

var diff=new Date()-date
console.log(diff)
*/


/* synchronous...

function longTask(checkingTime){
    date=new Date()
    while((new Date()-date)<=checkingTime){

    }
}

console.log('Task started')
longTask(4000)
console.log('Task ended')
*/

/* asynchronous...

function longTask(checkingTime){
    date=new Date()
    while((new Date()-date)<=checkingTime){

    }
}

function showEnd(){
    console.log('Task ended')
}

console.log('Task started')
setTimeout(showEnd,4000)

console.log('Task started')
setTimeout(showEnd,4000)

console.log('Task started')
setTimeout(showEnd,4000)
*/






/*callback making...

var hello=function(data){
    console.log('Data:'+data)
}

var hey=function(callback){
    callback('Anirudh')
}

hey(hello)
*/


/* example of callback...

var hello=function(data){
    console.log('Data:'+data)

    for(i=1;i<=5;i++){
        console.log('hello function')
    }
}

var hey=function(callback){
    for(i=1;i<=10;i++){
        console.log('started')
    }

    callback('Anirudh')
    
    console.log('ended')
}

hey(hello)
*/






