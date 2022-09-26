import {TodoList} from "./TodoList";
import { Metadata } from "Metadata";

const todoList=new TodoList<Metadata>();

const assigneeGabrielRatz={
assignee:"@gabrielRatz"
}

todoList.note("Code aufräumen",assigneeGabrielRatz)
todoList.note("UI ergänzen",assigneeGabrielRatz)
const improveErrorHandlingId= todoList.note('Felerbehandlung verbessern',assigneeGabrielRatz)


todoList.edit(improveErrorHandlingId,"Fehlerbehandlung verbessern")
todoList.tickOff(improveErrorHandlingId);

const showOpenTodos=function(todoList:TodoList<unknown>){
  console.log(todoList.getOpenTodos);
  
}

showOpenTodos(todoList)
