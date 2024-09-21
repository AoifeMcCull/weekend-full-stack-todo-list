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
    taskTable.innerHTML = `
    <thead>
        <th>task</th>
        <th>completed</th>
    </thead>`;
    for (let task of taskArray){
        let comepleteString = checkComplete(task) //empty if task is complete, otherwise button that onclicks completeTask
        taskTable.innerHTML += `
        <tr>
            <td>${task.text}</td>
            <td>${task.isComplete}</td>
            <td>${comepleteString}</td>
            <td><button onClick = deleteTask(event)>Delete</button></td>
        </tr>`
    }
}

function checkComplete(task){
    if(!task.isComplete) return '<button onclick=completeTask(event)>Complete</button>'
    else return ''
}

function deleteTask(event){
    console.log(event.target)
    let parentRow = event.target.parentElement.parentElement
    let ttable = document.getElementById("taskTable")
    ttable.deleteRow(parentRow.rowIndex)
    //TODO: REPLACE WITH AXIOS DELETE AND THEN JUST RELOAD THE PAGE
}


getTasks()