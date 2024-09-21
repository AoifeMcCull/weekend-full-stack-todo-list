const router = require('express').Router();
const pool = require('../modules/pool');

//TODO: get all tasks

router.get("/", (req, res) => {
    let queryText = ' SELECT * from "todos" ORDER BY ("isComplete" is false) DESC;';
    pool
        .query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log("error getting todos", error);
            res.sendStatus(500)
        })
})


//TODO:add a new todo to db
router.post("/", (req, res) => {
    let newTodo = req.body;
    console.log('adding todo', newTodo)
    let queryText = ` insert into "todos"("text") VALUES ($1);`;
    pool
        .query(queryText, [newTodo.text])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error adding new todo', error);
            res.sendStatus(500);
        })
})

//TODO: update a task to show that it is done

//TODO: remove a task


module.exports = router;
