var database = [
  {
    username: "bergony",
    password: "superSecret",
  },
  {
    username: "jessica",
    password: "123",
  },
  {
    username: "thrall",
    password: "777",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learn",
  },
  {
    username: "Sally",
    timeline: "JavaScript is so cool",
  },
];

var userNamePronpt = prompt("What is your username");
var passwordPronpt = prompt("What is your password");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      username === database[i].username &&
      password === database[i].password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  console.log();
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry wrong username and password");
  }
}

signIn(userNamePronpt, passwordPronpt);

/* 
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

var todos = [
    "clean room",
    "brush teeth",
    "exrecise"
];

var todosLength = todos.length
for (var i=0; i < todosLength; i++){
    console.log(i);
}
function logTodos(todo, i) {
    console.log(todo,i);
}

todos.forEach(logTodos)
// var counterOne = 10;

// while(counterOne > 10){
//     console.log(counterOne);
//     counterOne--;
// }

// var counterTwo = 10;
// do{
//     console.log(counterTwo);
//     counterTwo--;
// }while(counterTwo > 10); */
