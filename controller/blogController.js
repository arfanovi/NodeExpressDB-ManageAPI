const { error } = require('console');
const Blog = require('../models/blog');

exports.createBlog = async (req, res) => {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog)
};


exports.getAllBlogs = async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).json(blogs)    
}


exports.getBlogById = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if(!blog) return res.status(404).json({error: 'Blog not found'});
    res.status(200).json(blog)
}

exports.updateBlog = async (req, res) => {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!blog) return res.status(404).json({error: 'Blog not found'});
    res.status(200).json(blog)
}


exports.deleteBlog = async (req, res) => {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if(!blog) return res.status(404).json({error: 'Blog not found'});
    res.status(200).json({message: 'Blog Deleted'})
}