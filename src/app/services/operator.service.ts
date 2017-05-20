import { Injectable } from '@angular/core';
import { Operator } from '../models/operator';
import { OPERATORS } from '../mock-operators';

@Injectable()
export class OperatorService {
    operators: Operator[] = OPERATORS;
    addOperator(operator: Operator): void {
        this.operators.push(operator)
    }
    setOperators(operators: Operator[]): void {
        this.operators = this.operators
    }
    getOperators(): Promise<Operator[]> {
        return new Promise(resolve => {
        console.log(this.operators)
            setTimeout(() => resolve(this.operators), 2000);
        });
    }
}