import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelContainerComponent } from './containers/search-panel-container/search-panel-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchPanelContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SearchPanelContainerComponent
  ]
})
export class SearchModule { }
