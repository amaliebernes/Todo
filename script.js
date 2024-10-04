 let userInput = document.querySelector ("#user-input");



 let todoListElement = document.querySelector("todo-list");

 function handleSubmit (event) {


event.preventDefault(); //forhindere nettsiden å laste inn på nytt (refresh)

    console.log("Form Submitted");

    console.log("Creating Todo Object...");
createTodoObject(userInput);
 }
 
userInput.addEventListener("submit", handleSubmit);

function createTodoObject(form) {

    console.log(form);

   let todo = form.querySelector("#todo");
   console.log (todo);

   let todoValue = todo.value;
   console.dir(todoValue);
  

}
 