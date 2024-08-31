import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskType } from '../../models/TaskType';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  public classRef = TodosComponent;
  static tasks: Task[] = [
    {
      serialNo: 1,
      title: 'Complete this app',
      description: 'Complete this angular app',
      completed: false,
      type: TaskType.l,
    },
    {
      serialNo: 2,
      title: 'Exercise',
      description: 'Full body workout',
      completed: false,
      type: TaskType.h,
    },
    {
      serialNo: 3,
      title: 'Travel',
      description: 'Travel to places',
      completed: false,
      type: TaskType.t,
    },
  ];
  addTaskToList(taskToBeAdded: Task) {
    console.log('adding task');
    TodosComponent.tasks.push(taskToBeAdded);
  }
  deleteTaskFromList(taskToBeDeleted: Task) {
    const indexOfTask = TodosComponent.tasks.indexOf(taskToBeDeleted);
    TodosComponent.tasks.splice(indexOfTask, 1);
  }

  ngOnInit(): void {}
}
