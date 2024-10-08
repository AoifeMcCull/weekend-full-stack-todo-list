const express = require('express');
const todoRouter = require('./routes/todos.router.js');
const app = express();
app.use(express.json())
app.use(express.static('server/public'));
app.use('/todos', todoRouter);
let PORT = process.env.PORT || 5001;

// Do not modify this!
if (process.env.NODE_ENV == 'test') {
  PORT = 5002;
}


app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});
