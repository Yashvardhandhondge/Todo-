const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://yashvardhandhondge:Yash2005%40@cluster0.jowv6cy.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

app.use('/api', taskRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
