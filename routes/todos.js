'use strict';
var express = require('express');
var router = express.Router();
var todoService = require('../services/todoService');

/* GET all */
router.get('/', todoService.getAllTodos);
router.get('/name/:uname', todoService.getTodoByName);
router.get('/:id',todoService.getById);
router.post('/', todoService.createTodos);
router.put('/:id', todoService.updateTodoFull);
router.patch('/:id', todoService.updateTodoPartial);
router.delete('/:id', todoService.deleteTodo);


module.exports = router;