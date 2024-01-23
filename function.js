//Function 
/*set of codes that perform some tasks*/
//Eg 1 ->Function without argument and without return type

function fun(){
    console.log("Function sample Example")
}
fun()  //calling fuction

//---------------------------------------------------------------------------------------------------------------------
//Function Example 2

function fun(a,b){
    console.log("Function with argument and with return type")
    for(i=a;i<=b;i++){
        if(i%2==0)
        {
            console.log("The even no's are  :"+i)
        }
        else{
            console.log("The odd no's are   :"+i)
        }
    }
}
fun(1,5)