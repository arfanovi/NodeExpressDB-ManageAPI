const mongoose = require('mongoose');
// const { type } = require('os');
// const { title } = require('process');


const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, default: Date.now},
})



const Blog = mongoose.model('blog', blogSchema)

module.exports = Blog;