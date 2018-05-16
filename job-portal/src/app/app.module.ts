import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store/app.store.module';
import { JobsStateService } from './store/services/jobs-state.service';
import { ApiService } from 'src/app/store/services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecentJobsComponent } from './recent-jobs/recent-jobs.component';
import { JobsDetailComponent } from './jobs-detail/jobs-detail.component';
import { AppliedJobsListComponent } from './applied-jobs-list/applied-jobs-list.component';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecentJobsComponent,
    JobsDetailComponent,
    AppliedJobsListComponent
  ],
  imports: [
    StoreDevtoolsModule.instrument(instrumentOptions),
    StoreLogMonitorModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppStoreModule.forRoot()
  ],
  providers: [JobsStateService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
