var database = [
    {
        username: "bergony",
        password: "superSecret"
    }
]

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learn"
    },
    {
        username: "Sally",
        timeline: "JavaScript is so cool"
    }
]

var userNamePronpt = prompt("What is your username")
var passwordPronpt = prompt("What is your password")

function signIn(username, password){
    if(username === database[0].username && password === database[0].password){
        console.log(newsFeed)
    }else{
        alert("Sorry wrong username and password")
    }
}

signIn(userNamePronpt, passwordPronpt)


//Function declartion
function newFunction(){

}

//function expression
var newFunction = function() {

};

// expresion
1+3;
var a = 2 ;
return true;

// Calling or invoking a funtion
alert()
newFunction(paran1, paran2)

// assign a variable
var a = true;

// Funtion vs method
function thisIsAFunction(){

}

var obj = {
    thisIsAMethod: function() {

    }
}

thisIsAFunction()
obj.thisIsAMethod()