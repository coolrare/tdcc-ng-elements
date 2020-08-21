import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement, NgElementConfig } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(app): void {
    const customElement = createCustomElement(AppComponent,  { injector: this.injector } as NgElementConfig);
    customElements.define('tdcc-good', customElement);
  }
}
