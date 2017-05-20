import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { OperatorAddComponent } from '../components/operator-add.component'
import { OperatorComponent } from '../components/operators.component'

const appRoutes: Routes = [
    {
        path: 'add',
        component: OperatorAddComponent
    },
    {
        path: '',
        component: OperatorComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}