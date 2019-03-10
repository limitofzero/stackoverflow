import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from '../containers/login-container/login-container.component';
import { MainComponent } from '../components/main/main.component';
import { ForgotContainerComponent } from '../containers/forgot-container/forgot-container.component';
import { SignUpContainerComponent } from '../containers/sign-up-container/sign-up-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'login', component: LoginContainerComponent },
      { path: 'sign-up', component: SignUpContainerComponent },
      { path: 'forgot', component: ForgotContainerComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
