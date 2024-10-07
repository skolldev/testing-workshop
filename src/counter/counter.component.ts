import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  public counter = signal(0);

  public increment(): void {
    this.counter.set(this.counter() + 1);
  }

  public decrement(): void {
    this.counter.set(this.counter() - 1);
  }
}
