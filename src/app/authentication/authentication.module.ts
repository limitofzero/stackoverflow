import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabCardComponent } from './components/tab-card/tab-card.component';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { RoutingModule } from './routing/routing.module';
import { MainComponent } from './components/main/main.component';
import { ForgotContainerComponent } from './containers/forgot-container/forgot-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpContainerComponent } from './containers/sign-up-container/sign-up-container.component';

@NgModule({
  declarations: [
    TabCardComponent,
    LoginContainerComponent,
    MainComponent,
    ForgotContainerComponent,
    SignUpContainerComponent
  ],
  imports: [
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class AuthenticationModule { }
