import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { environment } from '../environments/environment';
import { UserMockService } from './services/user-mock.service';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    NavigationModule
  ],
  providers: [
    { provide: UserService, useClass: environment.isMock ? UserMockService : UserService }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
