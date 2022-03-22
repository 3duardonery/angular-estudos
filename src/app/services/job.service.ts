import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Job } from '../models/job';
import { JobResult } from '../models/job-result';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private _url: string = environment.url;
  private _key: string = environment.apiKey;

  constructor(private _http: HttpClient) { }

  getJobsByTitle(search: string, per_page: number, page: number): Observable<JobResult> {
    return this._http.get<JobResult>(`${this._url}+${search}+in%3Atitle`,
    { params: 
      { 
        per_page: per_page, 
        page: page 
      }, 
      headers: {
        'Authorization': this._key
      }
    });
  }

  getJobsWithPagination(per_page: number, page: number) {
    return this._http.get<JobResult>(
      this._url, 
      { params: 
        { 
          per_page: per_page, 
          page: page 
        }, 
        headers: {
          'Authorization': this._key
        }
      });
  }
}
