import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerContainerComponent } from './containers/answer-container/answer-container.component';
import { AnswerListComponent } from './components/answer-list/answer-list.component';
import { AnswerComponent } from './components/answer/answer.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AnswerContainerComponent,
    AnswerListComponent,
    AnswerComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    AnswerContainerComponent
  ]
})
export class AnswersModule { }
