console.log('JS is sourced!');



function getTasks(){
    //axios goes here
    axios({
        method: "GET",
        url: "/todos"
    })
        .then(function (response) {
            console.log("get /todos response", response.data);
            renderTasks(response.data)
        })
        .catch(function(error){
            console.error('error in GET /todos', error)
        })
}

function submitTodo(event){
    event.preventDefault();
    console.log('submit button clicked');
    let todo = {};
    todo.text = document.getElementById("taskIn").value;
    addTodo(todo);
    document.getElementById("taskIn").value = ''
}


function addTodo(todoToAdd) {
	axios({
		method: "POST",
		url: "/todos",
		data: todoToAdd,
	})
		.then(function (response) {
			console.log("addTodo()", response.data);
			getTasks();
		})
		.catch(function (error) {
			console.log("Error in POST", error);
			alert("Unable to add todo at this time. Please try again later.");
		});
}


function renderTasks(taskArray){
    console.log(taskArray)
    let taskTable = document.getElementById("taskRows");
    taskTable.innerHTML = ``;
    for (let task of taskArray){
        let row = buildRow(task)
        let comepleteString = checkComplete(task) //empty if task is complete, otherwise button that onclicks completeTask
        taskTable.innerHTML += `
        ${row}
            <td>${task.text}</td>
            <td>${comepleteString}</td>
            <td><button data-testid = "deleteButton" onClick = deleteTask(${task.id})>Delete</button></td>
        </tr>`
    }
}

function buildRow(task){ //adds a TR with either completed class or no class
    console.log('building row')
    if(task.isComplete){
        return`<tr class=completed data-testid="toDoItem">`
    }
    else {
        return`<tr data-testid=toDoItem>`
    }
}

//if the task isn't complete, make a button to complete it
function checkComplete(task){
    if(!task.isComplete) return `<button onclick=finishTask(${task.id}) data-testid = "completeButton">Complete</button>`
    else return '<p>☑</p>'
}

function deleteTask(taskId) {
	axios
		.delete(`/todos/${taskId}`)
		.then((response) => {
			getTasks();
		})
		.catch((error) => {
			console.log("error:", error);
			alert("error deleting task");
		});
}

function finishTask(taskId) {
	axios
		.put(`/todos/finish/${taskId}`)
		.then((response) => {
			getTasks();
		})
		.catch((error) => {
			console.log("error:", error);
			alert("error finishing task");
		});
}


getTasks()