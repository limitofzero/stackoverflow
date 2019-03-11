import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationContainerComponent } from './containers/navigation-container/navigation-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigationContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationContainerComponent
  ]
})
export class NavigationModule { }
