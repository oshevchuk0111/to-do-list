import { Component, inject, signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskCard } from '../task-card/task-card';
import { LocalStorageService } from '../../services/local-storage.service';

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

  private localStorageService = inject(LocalStorageService);

  allTasks = this.localStorageService.getTasks();

}
