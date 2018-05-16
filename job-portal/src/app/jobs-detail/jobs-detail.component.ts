import { AppStore } from '../store/models/app.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../shared/validation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsStateService } from '../store/services/jobs-state.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as $ from 'jquery';

@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.css']
})
export class JobsDetailComponent implements OnInit {
  public jobForm: FormGroup;

  public model = {
    "name": undefined, "phoneNo": undefined,
    "experience": undefined, "email": undefined,
    "description": undefined, "jobId": undefined
  };

  public jobId;
  public jobDetail;
  public jobsSubscribe: Subscription;
  showSuccess = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store<AppStore>,
    private route: ActivatedRoute, private JobsStateService: JobsStateService) {
    this.jobId = this.route.snapshot.paramMap.get('id');

  }

  public ngOnInit() {
    this.jobsSubscribe = this.store.subscribe((stores: any) => {
      if (this.jobId) {
        this.jobDetail = stores.jobsList.jobs.filter((t) => {
          return this.jobId === t._id
        });
        console.log(this.jobDetail);
      }

    });
    this.jobForm = this.formBuilder.group({
      name: [this.model.name, Validators.required],
      phoneNo: [this.model.phoneNo, Validators.required],
      experience: [this.model.experience, Validators.required],
      email: [this.model.email, [Validators.required]],//, ValidationService.emailValidator
      description: [this.model.description, Validators.required],
      jobId: [this.model.jobId]
    });
  }

  public onSubmit(form: FormGroup) {
    //this.model.jobId = this.jobId;
    const data = this.jobForm.value;
    data.jobId = this.jobId;
    console.log("form.controls", this.model, data);
    this.JobsStateService.postJob(data)
      .then(res => {
        //open modal
        let that = this; 
        $('#show-success').fadeIn('20000',function(){
          $(this).fadeOut('slow');
          that.router.navigateByUrl('appliedJobs');
        })
      },
      err => {
        //open modal
        // this.errors = err.error;
        // this.isSubmit = false;
      });
  }

}
