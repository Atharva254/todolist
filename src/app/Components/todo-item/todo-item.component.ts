import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task;
  @Output() taskDelete: EventEmitter<Task> = new EventEmitter();
  ngOnInit(): void {}

  onClick(task: Task) {
    this.taskDelete.emit(task);
  }
}
