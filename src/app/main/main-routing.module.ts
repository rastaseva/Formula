import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CentreComponent } from './components/centre/centre.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: null,
    },
    children: [
      {
        path: '',
        redirectTo: 'centre',
        pathMatch: 'full'
      },
      {
        path: 'centre',
        component: CentreComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
