//How To Declare object
//1st Way:

var customer_details ={
    "id"   :"21ECR117",
    "name" :"Meivelan",  //We have to put comma,after declaring each parameter
    "age"  :20,
    "phone":"9790447922"  //At ending object no need to put comma (we can also put comma but it is optional)
}
console.log(customer_details)


//2nd Way

var customer_details={}
customer_details ["id"]="21ECR117"
customer_details ["name"]="Meivelan"
customer_details ["age"]="20"
customer_details ["phone"]="9790447922"
console.log(customer_details)

//3rd Way:

var kec =new Object()
kec["Fees"]="1L"
kec["Hostelcount"]=10
kec["Food"]="Poor"
kec["Dep"]=12
kec["lib"]="Good"
console.log(kec)
console.log(kec.Food)     //To print food of kec alone
console.log(kec["Food"])  //Another way To print food of kec alone

