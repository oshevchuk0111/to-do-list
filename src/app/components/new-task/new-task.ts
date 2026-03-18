import { Component, inject, output} from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';

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

  onCancel(): void {
    this.cancel.emit();
  }

  onCreateTask() {
    const newTask: Task = {
      id: Date.now().toString(),
      title: this.enteredTitle,
      description: this.enteredDescription,
      isDone: false,
    };

    this.localStorageService.createTask(newTask);
  }
}
