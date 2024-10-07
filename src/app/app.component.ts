import { Component, signal } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, TodoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
