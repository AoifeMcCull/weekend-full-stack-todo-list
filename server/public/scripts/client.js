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
        console.log('rendering task:', task)
        let comepleteString = checkComplete(task) //empty if task is complete, otherwise button that onclicks completeTask
        let tasksDate = task.date
        taskTable.innerHTML += `
        <tr>
            <td>${task.task}</td>
            <td>${tasksDate.toISOString()}</td>
            <td>${task.isComplete}</td>
            <td>${comepleteString}</td>
        </tr>`
    }
}

function checkComplete(task){
    if(task.isComplete) return '<button onclick=completeTask(event)>Complete</button>'
    else return ''
}

getTasks()