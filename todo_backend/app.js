const express = require('express');
const { sequelize, Todo } = require('./models');

const app = express();
// Init Middleware
app.use(express.json({
   extended: false
}));


app.get('/', (req, res) => {
   res.send('The API is running as expected, WELL DONE!!!')
});

// Define Routes
app.use('/api/todos', require('./routes/todos'));


// Start Server and synchronise Database
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
   console.log(`Server started on port ${PORT}`);
   await sequelize.authenticate()
   console.log('Database Successfully Connected...')
});