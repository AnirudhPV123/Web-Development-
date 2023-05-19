/*class 

class Hello{

    hello(num1,num2){
        console.log("sum="+(num1+num2))
    }
}

let hey=new Hello()
hey.hello(10,20)
*/


/*class using 

class Hello{

    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }

    hello(){
        console.log("sum="+(this.num1+this.num2))
    }
}

let hey=new Hello(10,20)
hey.hello()
*/


/* inheritance...

class sample{
    sampleHello(){
        console.log('This is sample hello')
    }
}


class Hello extends sample{

    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }

    hello(){
        console.log("sum="+(this.num1+this.num2))
    }
}

let hey=new Hello(10,20)
hey.hello()

hey.sampleHello()
*/


/* arrow funtion...

function add(a,b){
    return a+b
}

console.log(add(10,20))

//or we can use simple step

let add1=(a,b) => a+b

console.log(add1(10,30))
*/