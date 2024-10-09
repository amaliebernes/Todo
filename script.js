

let userInput = document.querySelector("#user-input");



let todoListElement = document.querySelector("#todo-list");


let storedTodos = localStorage.getItem("todos");
let convertedTodos = JSON.parse(storedTodos);

let todos;

if (storedTodos === null) {
   todos = [];
// Viss det er første besøk på siden, lag en ny liste

}

else {

// Hvis det var noe lagret i localStorage, bruk det
   todos = convertedTodos
}


renderTodos();


//dette er det som kommer til å skje nåe brukeren trykker på knappen

function handleSubmit(event) {
   event.preventDefault(); //forhindere nettsiden å laste inn på nytt (refresh)



   console.log("Creating Todo Object...");
   let newTodo = createTodoObject(userInput);

   console.log("Append new todo list");

   todos.push(newTodo);

   console.log("Update the stord list");
   let jsonTodos = JSON.stringify(todos);
   localStorage.setItem("todos", jsonTodos);

   renderTodos();

};

userInput.addEventListener("submit", handleSubmit);

// Denne leser av et form element
// Og lager et js objekt for gjøremålene

function createTodoObject(form) {


   let todo = form.querySelector("#todo");

   let todoValue = todo.value;


   let todoObject = {

      title: todoValue,
      //createdAt: "2024"
   };

   console.log(todoObject);

   return todoObject;
}

function createTodoCard(todoObject) {

   //lag alle elementene


   let todoCard = document.createElement("li");

   let titleElement = document.createElement("h2");

   //sett de sammen til et 

   todoCard.append(titleElement);

   //konfigruer elementene med korrekt verdier

   titleElement.textContent = todoObject.title;

   return todoCard;

}


//Denne har jobben å oppdatere HTML
function renderTodos() {

   console.log("all todos to html...");
   todoListElement.innerHTML = "";

   todos.forEach((todo, index) => {

      //Først lag det nye html gjøremål 
      let newTodoCard = createTodoCard(todo);

      // Legg det nye html element til listen

      todoListElement.append(newTodoCard);



   }
   )
      ;

}
