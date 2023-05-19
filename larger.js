var r=require('readline-sync')

var num1=r.question('Enter two numbers')
var num2=r.question('')

console.log('You have entered : '+num1+' '+num2)

if(num1>num2)
{
    console.log('The larger number is '+num1)
}else if(num1===num2){
    console.log('The two numbers are same')
}
else
{
    console.log('The larger number is '+num2)
}