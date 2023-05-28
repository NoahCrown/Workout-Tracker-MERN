const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

const workoutRoutes = require('./routes/workouts')


// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();

})

// routes
app.use('/api/workouts',workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to MongoDB Server & Server is running in port ${process.env.PORT}`);
        })
    })
    .catch((err) => console.log(err))



