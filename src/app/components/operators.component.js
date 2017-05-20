"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operator_service_1 = require("../services/operator.service");
var OperatorComponent = (function () {
    function OperatorComponent(operatorService) {
        this.operatorService = operatorService;
        this.operators = [];
    }
    OperatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operatorService.getOperators().then(function (operators) {
            console.log(operators);
            _this.operators = operators;
        });
    };
    return OperatorComponent;
}());
OperatorComponent = __decorate([
    core_1.Component({
        template: "\n    <table>\n        <tr *ngFor=\"let operator of operators\">\n            <td>{{ operator.name }}</td>\n            <td>{{ operator.location }}</td>\n            <td>{{ operator.phone }}</td>\n        </tr>\n    </table>\n    ",
        providers: [operator_service_1.OperatorService]
    }),
    __metadata("design:paramtypes", [operator_service_1.OperatorService])
], OperatorComponent);
exports.OperatorComponent = OperatorComponent;
//# sourceMappingURL=operators.component.js.map