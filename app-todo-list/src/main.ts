import { bootstrapApplication } from '@angular/platform-browser';
import TodoList from './todo-list.component.js';

bootstrapApplication(TodoList)
  .catch((err) => console.error(err));
