var mongoose = require('mongoose');
var Todos = require('../models/todoModels');
var logger = require('../logger');

async function getAllTodos(req,res,next){
    try {
        const results = await Todos.find({});
        return res.send(results);
    }
    catch (err) {
        console.log("Could not get ALl todos", err);
        return next(err);
    }  
}

async function getTodoByName(req,res,next){
    try {
        const result = await Todos.find({userName:{ $regex : new RegExp(req.params.uname, "i") } });
        return res.send(result);
    }
    catch(err){
        console.log("Could not get todos",err);
        return next(err);
    }
}


async function getById(req,res,next){
    try {
        const result = await Todos.findById({_id:req.params.id});
        return res.send(result);
    }
    catch(err){
        console.log("Could not todo by Id",err);
        return next(err);
    }       
}

async function createTodo(req,res,next){
    var todo = Todos({
        userName:req.body.userName,
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
    });
    try{
    const result = await todo.save();
    return res.send(result);    
    }
    catch(err){
        console.log("Could not Create todo by Id",err);
        return next(err);
    }  
}

async function updateTodoFull(req,res,next){
        try {
            const result = await Todos.findOneAndUpdate({ _id: req.params.id }, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            return res.send(result);
        }
        catch (err) {
           logger.error("Todo Updation failed", err);
            return next(err);
        }

}

async function updateTodoPartial(req,res,next){
    const { todo, isDone, hasAttachment } = req.body;
    try {
        let todoObj = {};
        if(todo)  todoObj['todo']=todo;
        if(hasAttachment) todoObj['hasAttachment']=hasAttachment;
        todoObj['isDone']=isDone;
        console.log(todoObj);
        const result = await Todos.findOneAndUpdate({ _id: req.params.id }, todoObj );
        return res.send(result);
    }
    catch (err) {
       logger.error("Todo Updation failed", err);
        return next(err);
    }

}


async function deleteTodo(req, res, next){
        try {
            const result = await Todos.findByIdAndDelete({ _id: req.params.id });
            return res.send(result);
        }
        catch (err) {
            console.log(err);
            return next(err);
        }
    }


async function deleteTodo(req, res, next){
        try {
            const result = await Todos.findOneAndDelete({ _id: req.params.id });
            return res.send(result);
        }
        catch (err) {
            console.log("Todo Deletion failed", err);
            return next(err);
        }

}

module.exports = {
getAllTodos : getAllTodos,
getTodoByName: getTodoByName,
getById:getById,
createTodos:createTodo,
updateTodoFull:updateTodoFull,
updateTodoPartial:updateTodoPartial,
deleteTodo:deleteTodo
}

