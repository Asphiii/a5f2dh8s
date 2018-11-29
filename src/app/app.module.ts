import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { RouterModule } from '@angular/router';

import * as routes from './routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HomepageComponent,
    RouterModule.forRoot(routes.appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
