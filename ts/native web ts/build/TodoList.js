"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const uuid_1 = require("uuid");
class TodoList {
    constructor() {
        this.todos = []; //hier muss man keinen typ mehr angeben, ts weiß es
    }
    note(description, data) {
        const id = (0, uuid_1.v4)();
        const todo = {
            id,
            description,
            status: 'open',
            data
        };
        this.todos.push(todo);
        return id;
    }
    edit(id, description) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {
            throw new Error("Todo not found.");
        }
        todo.description = description;
    }
    tickOff(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {
            throw new Error("Todo not found.");
        }
        todo.status = "done";
    }
    discard(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {
            throw new Error("Todo not found.");
        }
        todo.status = "discarded";
    }
    getAllTodos() {
        return this.todos;
    }
    getOpenTodos() {
        return this.todos.filter(todo => todo.status === "open");
    }
    getDiscardedTodos() {
        return this.todos.filter(todo => todo.status === "discarded");
    }
    getClosedTodos() {
        return this.todos.filter(todo => todo.status === "done");
    }
}
exports.TodoList = TodoList;
