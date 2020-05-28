import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SHARED_COMPONENTS } from './components';

@NgModule({
  declarations: [AppComponent, SHARED_COMPONENTS],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
