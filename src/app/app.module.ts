// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuPageComponent } from './components/menu-page/menu-page.component';



@NgModule({
  declarations: [AppComponent,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent,], // Specify the root component here
})
export class AppModule {}
