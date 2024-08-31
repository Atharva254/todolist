import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskType } from '../../models/TaskType';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/Task';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent implements OnInit {
  title: string;
  description: string;
  taskType: TaskType;

  public taskTypes = Object.values(TaskType);
  @Output() taskAdd: EventEmitter<Task> = new EventEmitter();

  onSubmit() {
    const task = new Task();
    task.serialNo = TodosComponent.tasks.length+1;
    task.completed = false;
    task.title = this.title;
    task.description = this.description;
    task.type = this.taskType;

    this.taskAdd.emit(task);
  }
  
  constructor() {
  }
  ngOnInit(): void {
    console.log("Task type",TaskType.h);
  }
}
