//object

/*
var person={name:"Anirudh",age:17,place:"Mahe"}

for(x in person){
console.log(person[x])
}
*/


/*
var person={name:"Anirudh",age:17,place:"Mahe",display:function(){
    console.log(this.name)
}}

for(x in person){
    console.log(person[x])
    }
    

console.log(person.display())
*/


var person={name:"Anirudh",age:17,place:"Mahe",display:function(){
    console.log(this.name)
}}

person.age=23


for(x in person){
    console.log(person[x])
    }

    person.displayAge=function(){
        console.log(this.age)
    }

console.log(person.displayAge())
