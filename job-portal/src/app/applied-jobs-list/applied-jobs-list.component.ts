import { Component, OnInit } from '@angular/core';
import { JobsStateService } from '../store/services/jobs-state.service';
import { jobDetails, AppStore, appliedJobDetails } from '../store/models/app.model';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-applied-jobs-list',
  templateUrl: './applied-jobs-list.component.html',
  styleUrls: ['./applied-jobs-list.component.css']
})
export class AppliedJobsListComponent implements OnInit {
  jobs: jobDetails[] = [];
  jobsSubscribe: Subscription;
  constructor(private JobsStateService: JobsStateService, private store: Store<AppStore>) {
  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.JobsStateService.getAppliedJobsList().then((response: any) => {
      this.jobsSubscribe = this.store.subscribe((stores: AppStore) => {
        this.jobs = stores.jobsList;//.appliedJobs
        console.log(this.jobs);
      });
    });
  }

  public ngOnDestroy() {
    if (this.jobsSubscribe) {
      this.jobsSubscribe.unsubscribe();
    }
  }

}
