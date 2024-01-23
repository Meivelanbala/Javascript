//---->set
/* Set is defined as collection of unique elements or data
To add elements in set ->variable namae.add(value) */

//How to create set 
//set eg1
fruits= new Set("applle","mango","orange")
console.log(fruits)  //It will take only the first string ie)applle, and give output that are unique(refer output -> a p l e)

//eg2
fruits= new Set(["applle","mango","orange"])
console.log(fruits)  //It will take all the elements, and give all the elements as output(refer output),this is becoz of square bracket[]

//eg3
fruits= new Set(["applle","mango","orange"])
fruits.add("banana")
fruits.add("orange")
fruits.add("mango")
console.log(fruits)   //Here even we add orange and mango newly to the list it will print (apple,mango,orange,banana)refer o/p ,it will not give 2 orange and 2 mango but it will take banana because it is new

//printing using forin an forof loop

//-------------------------------------------------------------------------------------------------------------------

//---->Map
/* Map means it is a key value pair  */
mapeg= new Map([
    ["fName","Mei"],
    ["lName","velan"],
])           //Syntax to define map
mapeg.set( "phone_no","9790447922")               //to add new elements to Map 
mapeg.delete( "phone_no","9790447922")              //to delete that element in Map 
console.log(mapeg)               //It will map the key wilth value(refer output)
console.log(mapeg.has("fName"))   //It will give true as output ,because "has" will check fname is present in mapeg or not,it will present so give true as output
console.log(mapeg.has("lastName")) //It will give false as output ,because "has" will check lastname is present in mapeg or not,it will not present so give false as output
