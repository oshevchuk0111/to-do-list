import { Injectable, input } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageKey = 'tasks'; 

  getTasks(): Task[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  createTask(task: Task) {
    const tasks = this.getTasks();
    tasks.push(task); 
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}
