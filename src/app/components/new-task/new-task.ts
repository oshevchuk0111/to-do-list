import { Component, inject, output } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  cancel = output<void>();
  enteredTitle = '';
  enteredDescription = '';

  private localStorageService = inject(LocalStorageService);
  private router = inject(Router);

  onCancel() {
    this.router.navigate(['/list']);
  }

  onCreateTask() {
    const newTask: Task = {
      id: Date.now().toString(),
      title: this.enteredTitle,
      description: this.enteredDescription,
      isDone: false,
    };

    this.localStorageService.createTask(newTask);

    this.enteredTitle = '';
    this.enteredDescription = '';

    this.cancel.emit();
  }
}
