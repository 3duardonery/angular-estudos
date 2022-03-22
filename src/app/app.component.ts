import { Component, OnInit } from '@angular/core';
import { Job } from './models/job';
import { JobResult } from './models/job-result';
import { JobService } from './services/job.service';

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

  isLoading: boolean = false;
  totalPages: number = 0;
  current_page: number = 1;
  jobs: Job[] = [];
  jobsResult: JobResult = { total_count: 0, incomplete_results: false, items: []};

  private _keyEnterCode: number = 13;

  constructor(private _jobsService: JobService) {}

  ngOnInit(): void {
     this.getJobsPerPage(this.current_page);    
  }

  getJobsPerPage(page: number): void {
    this.isLoading = true;  
    this._jobsService.getJobsWithPagination(10, page).subscribe(
      (data) => { 
        this.jobsResult = data; 
        this.isLoading = false;
        this.totalPages = Math.ceil(this.jobsResult.total_count / 10);
      }
    );
  }

  getJobsByTitle(query: string): void {
    this.current_page = 1;
    this.isLoading = true;  
    this._jobsService.getJobsByTitle(query, 10, this.current_page).subscribe(
      (data) => { 
        this.jobsResult = data; 
        this.isLoading = false;
        this.totalPages = Math.ceil(this.jobsResult.total_count / 10);
      }
    );
  }

  openPage(url: string): void {
    console.log('Parent:', url);
    
    window.open(url, '_blank');
  }

  handlePageClick(page: number): void {
    this.getJobsPerPage(page);
  }

  handleInputSearch(event: any): void {
    const query = event.target.value
    if (event.keyCode == this._keyEnterCode){
      this.getJobsByTitle(query);
    }
  }
}
