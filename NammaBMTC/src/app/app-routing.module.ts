import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConductorComponent } from './conductor/conductor.component';
import { UsermapComponent } from './usermap/usermap.component';

const routes: Routes = [
    {
      path: '',
      component: ConductorComponent
    },
    {
      path: 'conductor',
      component: ConductorComponent
    },
    {
      path: 'usermap',
      component: UsermapComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
