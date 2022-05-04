import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './@ui/components/footer/footer.module';
import { HeaderModule } from './@ui/components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonSerivce } from 'src/@shell/services/common.service';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,

    HeaderModule,
    FooterModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CommonSerivce,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
