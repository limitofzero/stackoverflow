import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableItemComponent } from './components/table-item/table-item.component';
import { AnsweredComponent } from './components/answered/answered.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { TagComponent } from './components/tag/tag.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TableComponent,
    TableItemComponent,
    AnsweredComponent,
    TagListComponent,
    TagComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
