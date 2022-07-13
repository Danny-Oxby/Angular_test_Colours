import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ColourService } from './colour.service';
import { NumberComponent } from './number/number.component';
import { ColourComponent } from './colour/colour.component';
import { TextComponent } from './text/text.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    NumberComponent,
    ColourComponent,
    TextComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent },
      /*{ path: '', redirectTo: 'login', pathMatch: 'full' }, //alternative option*/
      { path: 'home', component: HomeComponent },
      { path: 'number', component: NumberComponent },
      { path: 'colour', component: ColourComponent },
      { path: 'text', component: TextComponent },
    ])
  ],
  providers: [ColourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
