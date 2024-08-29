import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskType } from '../../models/TaskType';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/Task';

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

  @Output() taskAdd: EventEmitter<Task> = new EventEmitter();

  onSubmit() {
    const task = new Task();
    task.serialNo = '3';
    task.completed = false;
    task.title = this.title;
    task.description = this.description;
    task.type = TaskType.Learning;

    this.taskAdd.emit(task);
  }

  taskTypes: string[];

  constructor() {
    this.taskTypes = Object.values(TaskType) as string[];
  }
  ngOnInit(): void {}
}
