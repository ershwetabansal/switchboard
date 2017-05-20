import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './components/app.component';
import { OperatorService } from './services/operator.service';
import { AppRoutingModule } from './routes/app-routing.module';
import { OperatorComponent } from './components/operators.component';
import { OperatorAddComponent } from './components/operator-add.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    OperatorAddComponent,
    OperatorComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [OperatorService]
})

export class AppModule { }
