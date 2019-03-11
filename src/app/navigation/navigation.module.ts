import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationContainerComponent } from './containers/navigation-container/navigation-container.component';

@NgModule({
  declarations: [
    NavigationContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationContainerComponent
  ]
})
export class NavigationModule { }
