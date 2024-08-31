import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskType } from '../../models/TaskType';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoListConstants } from '../../contants/TodoListConstants';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  public classRef = TodosComponent;
  static tasks: Task[];
  localTasksItem: string | null;
  constructor() {
    this.localTasksItem = localStorage.getItem(TodoListConstants.tasksListLocalItemName);
    if(this.localTasksItem === null){
      TodosComponent.tasks = []
    }else{
      TodosComponent.tasks = JSON.parse(this.localTasksItem);
    }
  }
  /**
   * Method to add task to list
   * @param taskToBeAdded Task to be added to list
   */
  addTaskToList(taskToBeAdded: Task) {
    console.log('adding task');
    TodosComponent.tasks.push(taskToBeAdded);
    localStorage.setItem(TodoListConstants.tasksListLocalItemName, JSON.stringify(TodosComponent.tasks))
  }

  /**
   * Method to delete task from list
   * @param taskToBeDeleted Task to be removed from list
   */
  deleteTaskFromList(taskToBeDeleted: Task) {
    const indexOfTask = TodosComponent.tasks.indexOf(taskToBeDeleted);
    TodosComponent.tasks.splice(indexOfTask, 1);
    localStorage.setItem(TodoListConstants.tasksListLocalItemName, JSON.stringify(TodosComponent.tasks))
  }

  ngOnInit(): void {}
}
