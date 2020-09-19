import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPanelContainerComponent } from './search/containers/search-panel-container/search-panel-container.component';
import { AnswerContainerComponent } from './answers/containers/answer-container/answer-container.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
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
    loadChildren: () => import('./results/results.module').then(m => m.ResultsModule),
    data: { animation: 'Results' },
    canActivate: [ AuthGuard ]
  },
  {
    path: 'answers',
    loadChildren: () => import('./answers/answers.module').then(m => m.AnswersModule),
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
