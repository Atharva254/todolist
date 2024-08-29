import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./Components/todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Todo List';
}
