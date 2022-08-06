import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConductorComponent } from './conductor/conductor.component';
import { UsermapComponent } from './usermap/usermap.component';
import { UseranalysisComponent } from './useranalysis/useranalysis.component';

@NgModule({
  declarations: [
    AppComponent,
    ConductorComponent,
    UsermapComponent,
    UseranalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
