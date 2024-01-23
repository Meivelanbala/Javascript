//callback
 //Example -> Login submission
function loginclick(Login,db){
    setTimeout(function(){
        console.log(Login)
        db()
    },2000)

}

function database(){
    console.log("Login sucessfully")
    console.log("Thankyou!")
}

 loginclick("Login button click",database)