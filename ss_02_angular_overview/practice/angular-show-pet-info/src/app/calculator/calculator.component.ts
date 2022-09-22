import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstOperand: number;
  operator: string;
  secondOperand: number;
  result: number;

  constructor() { }

  ngOnInit(): void {
  }

  calculation(): void {
    switch (this.operator) {
      case '+':
        this.result = this.firstOperand + this.secondOperand;
        break;
      case '-':
        this.result = this.firstOperand - this.secondOperand;
        break;
      case '*':
        this.result = this.firstOperand * this.secondOperand;
        break;
      case '/':
        this.result = this.firstOperand / this.secondOperand;
        break;
    }
  }
}
