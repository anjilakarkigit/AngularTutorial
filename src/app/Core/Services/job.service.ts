import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from 'src/app/Shared/Models/Job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}
  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(
      'https://hrm.azure-api.net/recruiting/api/jobs'
    );
  }
}
