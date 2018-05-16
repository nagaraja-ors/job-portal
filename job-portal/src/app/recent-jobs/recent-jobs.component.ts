
import { Component, OnInit } from '@angular/core';
import { JobsStateService } from '../store/services/jobs-state.service';
import { jobDetails, AppStore } from '../store/models/app.model';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-jobs',
  templateUrl: './recent-jobs.component.html',
  styleUrls: ['./recent-jobs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentJobsComponent implements OnInit {
  jobs: jobDetails[] = [];
  jobsSubscribe:Subscription;

  constructor(private ref: ChangeDetectorRef, private router: Router,
    private JobsStateService: JobsStateService,private store: Store<AppStore>,) { }

  ngOnInit() {
    this.getJobs();    
  }

  getJobs(): void {
    this.JobsStateService.getJobsList().then((response: any) => {
      this.jobsSubscribe = this.store.subscribe((stores: AppStore) => {
          this.jobs = stores.jobsList;
          this.ref.detectChanges();
       // debugger;
      });
    });
  }

  showDetails(id) {
    this.router.navigate(['detail', id]);
  }

  public ngOnDestroy() {
    if (this.jobsSubscribe) {
    this.jobsSubscribe.unsubscribe();
  }
  }

  
}
