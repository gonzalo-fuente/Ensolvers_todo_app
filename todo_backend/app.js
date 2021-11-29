const express = require('express');
const { sequelize, Todo } = require('./models');
const cors = require('cors');

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());


app.get('/health', (req, res) => {
   res.send({health:'The API is running as expected'})
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