# Project Name
Node.js to-do list w/ PostgreSQL

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

/*
TODO: Front end allows a user to create a to-do item
TODO: Store todo item in db
TODO: update DOM to display new item
TODO: complete and delete buttons
TODO: complete button makes todo isComplete = true in DB
TODO: complete button applies completed CSS class
TODO: completed CSS class clearly shows to-do as complete
TODO: disable completed button or add a checkbox for completed items
TODO: deleted items removed from DB
TODO: DOM updates on deleted todo
TODO: CSS stylings

DB schema: table todos (text, submitted, is_complete)
id SERIAL NOT NULL
text: varchar
submitted: Date
is_compete: Boolean

Node schema: todo object{
    text: String
    dateSubmitted: Date
    isComplete: boolean

}


Optional TODOS i would like to complete just for me because i will actually use this app (todoist is driving me crazy)
TODO: child tasks attached to parent tasks
TODO: task due dates
TODO: tasks complete this week
TODO: DB refreshes weekly
TODO: task categories
TODO: sort tasks by category
TODO: native app rather than website