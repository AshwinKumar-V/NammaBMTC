import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddETMComponent } from './admin-add-etm/admin-add-etm.component';
import { AdminanalysisComponent } from './adminanalysis/adminanalysis.component';
import { ConductorComponent } from './conductor/conductor.component';
import { UseranalysisComponent } from './useranalysis/useranalysis.component';
import { UsermapComponent } from './usermap/usermap.component';

const routes: Routes = [
    {
      path: '',
      component: UsermapComponent
    },
    {
      path: 'conductor',
      component: ConductorComponent
    },
    {
      path: 'usermap',
      component: UsermapComponent
    },
    {
      path: 'useranalysis',
      component: UseranalysisComponent
    },
    {
      path: 'adminAddETM',
      component: AdminAddETMComponent
    },
    {
      path: 'adminanalysis',
      component: AdminanalysisComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
