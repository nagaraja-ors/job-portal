import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/app.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class JobsStateService {

  constructor(private http: HttpClient, private apiService: ApiService, public store: Store<AppStore>) { }

  public getJobsList() {
    return this.apiService.get('joblist').then((response: any) => {
      this.store.dispatch({type: 'LOAD_JOBS_LIST', payload: response});
    });
  }

  public getAppliedJobsList() {
    return this.apiService.get('appliedJobs').then((response: any) => {
      this.store.dispatch({type: 'LOAD_APPLIEDJOBS_LIST', payload: response});
    });
  }

  public postJob(data){
    return this.apiService.post('postJob', data).then((response: any) => {
      this.store.dispatch({type: 'LOAD_APPLIEDJOBS_LIST', payload: response});
    })
  }

  public searchHeroes(term: string): Observable<any> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    // return this.http.get(`joblist/?name=${term}`).pipe(
    //   tap(_ => this.log(`found heroes matching "${term}"`)),
    //   catchError(this.handleError<Hero[]>('searchHeroes', []))
    // );
  }

}
