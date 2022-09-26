import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges, OnDestroy {
  message = '';
  remainingTime: number;

  @Input()
  seconds = 10;

  @Output()
  finish = new EventEmitter<boolean>();
  private intervalId = 0;

  constructor() {
  }

  clearTime() {
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    this.reset();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTime();
    this.message = `Holding at Time-${this.remainingTime} seconds`;
  }

  reset() {
this.clearTime();
this.remainingTime = this.seconds;
this.message = `Click start button to start the Countdown`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('seconds' in changes){
      let v = changes.seconds.currentValue;
      v = typeof v === 'undefined' ? 10 : v ;
      const vFixed = Number(v);
      this.seconds = Number.isNaN(vFixed) ? 10 : vFixed;
    }
  }

  ngOnDestroy(): void {
    this.clearTime();
  }

  private countDown() {
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTime();
        this.finish.emit(true);
      } else {
        this.message = `Time-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
