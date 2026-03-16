import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { TaskCard } from "./components/task-card/task-card";
import { TasksList } from './components/tasks-list/tasks-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TaskCard, TasksList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('todo');
}
