import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPanelContainerComponent } from './search/containers/search-panel-container/search-panel-container.component';
import { AnswerContainerComponent } from './answers/containers/answer-container/answer-container.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
    data: { animation: 'Auth' },
    canActivate: [ LoginGuard ]
  },
  {
    path: '',
    component: SearchPanelContainerComponent,
    data: { animation: 'Search' },
    canActivate: [ AuthGuard ]
  },
  {
    path: 'results',
    loadChildren: './results/results.module#ResultsModule',
    data: { animation: 'Results' },
    canActivate: [ AuthGuard ]
  },
  {
    path: 'answers',
    loadChildren: './answers/answers.module#AnswersModule',
    data: { animation: 'Answers' },
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
