import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './@ui/components/footer/footer.module';
import { HeaderModule } from './@ui/components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonService } from 'src/@shell/services/common.service';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,

    HeaderModule,
    FooterModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CommonService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
