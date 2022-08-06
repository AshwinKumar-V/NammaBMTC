import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConductorComponent } from './conductor/conductor.component';
import { UsermapComponent } from './usermap/usermap.component';
import { UseranalysisComponent } from './useranalysis/useranalysis.component';
import { AdminanalysisComponent } from './adminanalysis/adminanalysis.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConductorComponent,
    UsermapComponent,
    UseranalysisComponent,
    AdminanalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
