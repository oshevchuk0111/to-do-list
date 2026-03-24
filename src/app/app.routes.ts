import { Routes } from '@angular/router';
import { TasksList } from "./components/tasks-list/tasks-list";
import { NewTask } from './components/new-task/new-task';

export const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: TasksList},
  {path: 'create-task', component: NewTask},
  {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
