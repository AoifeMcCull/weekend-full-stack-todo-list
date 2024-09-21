console.log('JS is sourced!');

//TODO: DELETE TEMP DATA FOR FRONTEND TESTING
let response = [{
    task: "remove this test data",
    date: new Date(),
    isComplete: false,
},
{
    task: "foo",
    date: new Date(),
    isComplete: false
},
{
    task:"feed the cat",
    date: new Date('September 20, 24 16:20:01'),
    isComplete: true
}
]
//TODO: DELETE TEMP DATA ABOVE

function getTasks(){
    //axios goes here

    renderTasks(response);
}

function renderTasks(taskArray){
    let taskTable = document.getElementById("taskRows");
    console.log(taskTable)
    taskTable.innerHTML = '';
    for (let task of taskArray){
        let comepleteString = checkComplete(task) //empty if task is complete, otherwise button that onclicks completeTask
        let tasksDate = task.date
        taskTable.innerHTML += `
        <tr>
            <td>${task.task}</td>
            <td>${tasksDate.toISOString()}</td>
            <td>${task.isComplete}</td>
            <td>${comepleteString}</td>
            <td><button onClick = deleteTask(event)>Delete</button></td>
        </tr>`
    }
}

function checkComplete(task){
    if(task.isComplete) return '<button onclick=completeTask(event)>Complete</button>'
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