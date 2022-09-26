"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoList_1 = require("./TodoList");
const todoList = new TodoList_1.TodoList();
const assigneeGabrielRatz = {
    assignee: "@gabrielRatz"
};
todoList.note("Code aufräumen", assigneeGabrielRatz);
todoList.note("UI ergänzen", assigneeGabrielRatz);
const improveErrorHandlingId = todoList.note('Felerbehandlung verbessern', assigneeGabrielRatz);
todoList.edit(improveErrorHandlingId, "Fehlerbehandlung verbessern");
todoList.tickOff(improveErrorHandlingId);
const showOpenTodos = function (todoList) {
    console.log(todoList.getOpenTodos);
};
showOpenTodos(todoList);
