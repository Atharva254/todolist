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
  addTaskToList(taskToBeAdded: Task) {
    console.log('adding task');
    this.tasks.push(taskToBeAdded);
  }
  deleteTaskFromList(taskToBeDeleted: Task) {
    const indexOfTask = this.tasks.indexOf(taskToBeDeleted);
    this.tasks.splice(indexOfTask, 1);
  }

  tasks: Task[];
  constructor() {
    this.tasks = [
      {
        serialNo: '1',
        title: 'Complete this app',
        description: 'Complete this angular app',
        completed: false,
        type: TaskType.Learning,
      },
      {
        serialNo: '2',
        title: 'Learn angular',
        description: 'Learn more angular concepts',
        completed: false,
        type: TaskType.Learning,
      },
    ];
  }
  ngOnInit(): void {}
}
