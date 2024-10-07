import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  public todos = signal<string[]>([]);

  public value = model('');

  public addTodo(): void {
    if (!this.value() || this.todos().includes(this.value())) {
      return;
    }
    this.todos.set([...this.todos(), this.value()]);
    this.value.set('');
  }

  public remove(index: number): void {
    this.todos.set(this.todos().filter((_, i) => i !== index));
  }
}
