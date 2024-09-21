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
router.delete("/:id", (req, res) => {
    console.log("deleting", req.params);
    let id=req.params.id
    let queryText = `delete from "todos" where "id" = $1`
    let params = [id]

    pool
        .query(queryText, params)
        .then((result) => {
            res.sendStatus(204);
        })
        .catch((error) => {
            console.log(error)
            res.sendStatus(500);
        })
})

module.exports = router;
