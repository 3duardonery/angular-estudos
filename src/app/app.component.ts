import { Component, OnInit } from '@angular/core';
import { Job } from './models/job';
import { JobResult } from './models/job-result';
import { Source } from './models/source';
import { JobService } from './services/job.service';
import { IFilterState, setCurrentPage } from './store/app.state';
import { Store, select } from '@ngrx/store'; 
import { map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'course_app';
  userName: string = 'eduardo_nery';
  userData = {
    email: 'email@email.com',
    role: 'administrator'
  };

  sources: Source[] = [
    {
      repository: 'frontendbr',
      project: 'vagas'
    },
    {
      repository: 'backend-br',
      project: 'vagas'
    },
    {
      repository: 'react-brasil',
      project: 'vagas'
    },
  ];

  selectedSource: string = this.sources[0].repository;

  isLoading: boolean = false;
  totalPages: number = 0;
  current_page$ = this._store.select('app').pipe(
    map(e => e.current_page)
  );
  jobs: Job[] = [];
  jobsResult: JobResult = { total_count: 0, incomplete_results: false, items: []};

  private _keyEnterCode: number = 13;

  constructor(private _jobsService: JobService, private _store: Store<{app: IFilterState}>) {}

  ngOnInit(): void {
     this.getJobsPerPage(this.sources[0].repository, this.getCurrentPage());    
  }

  getCurrentPage(): number {
    let current_page = 1;
    this.current_page$.pipe(take(1)).subscribe(d => current_page = d);
    return current_page;
  }

  getJobsPerPage(source: string, page: number): void {
    this.isLoading = true;  
    this._jobsService.getJobsWithPagination(source, 'vagas', 10, page).subscribe(
      (data) => { 
        this.jobsResult = data; 
        this.isLoading = false;
        this.totalPages = Math.ceil(this.jobsResult.total_count / 10);
      }
    );
  }

  getJobsByTitle(source: string, query: string): void {
    this.isLoading = true;  
    this._jobsService.getJobsByTitle(source, 'vagas', query, 10, this.getCurrentPage()).subscribe(
      (data) => { 
        this.jobsResult = data; 
        this.isLoading = false;
        this.totalPages = Math.ceil(this.jobsResult.total_count / 10);
      }
    );
  }

  openPage(url: string): void {
    
    window.open(url, '_blank');
  }

  handlePageClick(page: number): void {
    this.getJobsPerPage(this.selectedSource, page);
    this._store.dispatch(setCurrentPage({current_page: page}));
    console.log(this.getCurrentPage());
  }

  handleInputSearch(event: any): void {
    const query = event.target.value
    if (event.keyCode == this._keyEnterCode){
      this._store.dispatch(setCurrentPage({current_page: 1}));
      this.getJobsByTitle(this.selectedSource, query);
    }
  }

  onSourceSelected(event: any): void {
    const valueSource = event.target.value;
    this._store.dispatch(setCurrentPage({current_page: 1}));
    this.selectedSource = valueSource;
    this.getJobsPerPage(this.selectedSource, this.getCurrentPage());
  }
}
