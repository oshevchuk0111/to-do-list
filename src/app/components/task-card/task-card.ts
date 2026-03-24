import { Component, inject, input } from '@angular/core';
import { Task } from '../../models/task.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  task = input.required<Task>();

  private localStorageService = inject(LocalStorageService);

  toggleDone() {
    const updatedTask: Task = { ...this.task(), isDone: !this.task().isDone };
    this.localStorageService.updateTask(updatedTask);
  }
}
