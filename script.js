let userInput = document.querySelector("#user-input");

userInput.addEventListener("submit", handleSubmit);

let todoListElement = document.querySelector("#todo-list");

let storedTodos = localStorage.getItem("todos");
let convertedTodos = JSON.parse(storedTodos);

let todos;

if (storedTodos === null) {
  todos = [];
  // Viss det er første besøk på siden, lag en ny liste
} else {
  // Hvis det var noe lagret i localStorage, bruk det
  todos = convertedTodos;
}

renderTodos();

//dette er det som kommer til å skje nåe brukeren trykker på knappen

function handleSubmit(event) {
  event.preventDefault(); //forhindere nettsiden å laste inn på nytt (refresh)

  let newTodo = createTodoObject(userInput);



  todos.push(newTodo);

  
  let jsonTodos = JSON.stringify(todos);
  localStorage.setItem("todos", jsonTodos);

  userInput.reset();

  renderTodos();
}

// Denne leser av et form element
// Og lager et js objekt for gjøremålene

function createTodoObject(form) {
  let todo = form.querySelector("#todo");

  let todoValue = todo.value;

  let todoObject = {
    title: todoValue,
    //createdAt: "2024"
  };


  return todoObject;
}

function createTodoCard(todoObject) {
  //lag alle elementene

  let todoCard = document.createElement("li");
  let titleElement = document.createElement("h2");
  let deleteButton = document.createElement("button");
  

  //sett de sammen til et

  todoCard.append(titleElement);
   todoCard.append(deleteButton);


  //konfigruer elementene med korrekt verdier
  todoCard.className ="bg-green-200 w-full flex justify-between";
  titleElement.className ="underline";
  deleteButton.className ="bg-blue-500 px-4 py-2 rounded hover:bg-blue-300";

  titleElement.textContent = todoObject.title;
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
 

   //Fjern todo object fra todos listen




let filteredTodos = todos.filter((todo) => {

if (todo.title === todoObject.title) {
return false

}

else {
return true

}

})



todos = filteredTodos;
let jsonTodos = JSON.stringify(todos);
localStorage.setItem("todos", jsonTodos);

renderTodos();

  });

  return todoCard;
}

//Denne har jobben å oppdatere HTML
function renderTodos() {
  
  todoListElement.innerHTML = "";

  todos.forEach((todo, index) => {
    //Først lag det nye html gjøremål
    let newTodoCard = createTodoCard(todo);

    // Legg det nye html element til listen

    todoListElement.append(newTodoCard);
  });
}
