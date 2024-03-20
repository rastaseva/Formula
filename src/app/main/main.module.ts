import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './components/main/main.component';
import {MainRoutingModule} from './main-routing.module';
import {CentreComponent} from './components/centre/centre.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
  ],
  declarations: [
    MainComponent,
    CentreComponent
  ]
})
export class MainModule {
}
