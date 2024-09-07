const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.json());


const blogRoutes = require('./routes/blogRoutes')
app.use('/api/blogs', blogRoutes)

const connectionString = 'mongodb://localhost:27017/blog_db'

mongoose.connect(connectionString, {
    useNewURLParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log('Error', error))

app.get('/',(req, res) =>{
    res.send('Hello bd')
})

const port = 1000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})