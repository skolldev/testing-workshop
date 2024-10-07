import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent old', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CounterComponent],
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should increment the counter', () => {
    component.increment = jest.fn();
    component.increment();
    expect(component.increment).toHaveBeenCalled();
  });

  it('should decrement the counter', () => {
    component.decrement();
    expect(component.counter()).toBe(-1);
  });
});
