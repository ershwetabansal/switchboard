import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Operator } from '../models/operator';
import { OperatorService } from '../services/operator.service';

@Component({
  template: `
    <table>
        <tr *ngFor="let operator of operators">
            <td>{{ operator.name }}</td>
            <td>{{ operator.location }}</td>
            <td>{{ operator.phone }}</td>
        </tr>
    </table>
    `,
  providers: [OperatorService]
})

export class OperatorComponent implements OnInit {
  constructor(private operatorService: OperatorService) { }
  ngOnInit(): void {
    this.operatorService.getOperators().then((operators) => {
      console.log(operators)
      this.operators = operators;
    })
  }
  operators: Operator[] = [];
}
