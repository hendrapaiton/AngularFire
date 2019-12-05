import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TodosComponent} from './todos/todos.component';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
