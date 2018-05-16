import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { JobsDetailComponent } from './jobs-detail/jobs-detail.component';
import { AppliedJobsListComponent } from './applied-jobs-list/applied-jobs-list.component';
import { RecentJobsComponent } from 'src/app/recent-jobs/recent-jobs.component';


const routes: Routes = [
  { path: '', redirectTo: '/recentJobs', pathMatch: 'full' },
  { path: 'recentJobs', component: RecentJobsComponent },
  { path: 'detail/:id', component: JobsDetailComponent},
  { path: 'appliedJobs', component: AppliedJobsListComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
