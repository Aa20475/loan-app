import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubmitApplicationComponent } from './submit-application/submit-application.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponentComponent } from './form-component/form-component.component';
import { RenderDirective } from './directives/render.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubmitApplicationComponent,
    ViewApplicationComponent,
    HeaderComponent,
    FooterComponent,
    FormComponentComponent,
    RenderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
