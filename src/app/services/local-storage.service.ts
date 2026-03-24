import { Injectable, input, signal, WritableSignal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageKey = 'tasks';
  tasks: WritableSignal<Task[]> = signal(this.getTasks());

  getTasks(): Task[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  createTask(task: Task) {
    const updatedTasks = [...this.tasks(), task];
    localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks));
    this.tasks.set(updatedTasks);
  }
  
  updateTask(updatedTask: Task) {
    const updatedTasks = this.tasks().map((task) =>
      task.id === updatedTask.id ? updatedTask : task,
    );

    localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks));
    this.tasks.set(updatedTasks);
  }
}
