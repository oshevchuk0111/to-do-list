import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskCard } from "../task-card/task-card";

@Component({
  selector: 'app-tasks-list',
  imports: [TaskCard],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.scss',
})
export class TasksList {
  tasks = signal<Task[]>([
    {
      id: '1',
      title: 'Sleep',
      description: 'Go to sleep!',
      isDone: false,
    },
    {
      id: '2',
      title: 'Learn',
      description: 'Learn Angular',
      isDone: false,
    },
  ]);
}
