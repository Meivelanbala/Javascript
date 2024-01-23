//global Scope
/*sum=0//sum is declared globally
for(var i=0;i<10;i++){
    sum+=i
    //console.log(sum)
}
console.log(sum)
//While Loop
i=0
while( i<10){
    sum+=i
    i++
}
console.log(sum)
//do...while
i=0

do{
    sum+=i
    i++
}while(i<10)
console.log(sum)*/

//Local Scope
//let->It holds the accessibility till the program ends
//var->It holds the accessibility outside the block as well
//for(let i=0;i<5;i++)
/*for(var i=0;i<5;i++)
{
    console.log(i)
}
console.log(i+11)*/


//Block Scope
var a=10;
console.log(a)
{
    let a=5;
    let b=5;
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)