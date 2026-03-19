import { Routes } from '@angular/router';
import { TasksList } from "./components/tasks-list/tasks-list";
import { CreateTask } from './components/create-task/create-task';

export const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: TasksList},
  {path: 'create-task', component: CreateTask},
];
