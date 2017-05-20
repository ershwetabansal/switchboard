import { Component } from '@angular/core';
import { Operator } from '../models/operator';
import { OperatorService } from '../services/operator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl:'/app/partials/operator.form.html'
})
export class OperatorAddComponent {
  constructor(private operatorService: OperatorService, private router: Router) { }
  operator: Operator = new Operator();
  addOperator(): void {
    this.operatorService.addOperator(this.operator)
    this.router.navigate(['/']);
  }
}
