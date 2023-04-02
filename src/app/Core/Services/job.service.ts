import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from 'src/app/Shared/Job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

   constructor(private http:HttpClient) { }
    getAllJobs():Observable<Job[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Ocp-Apim-Subscription-Key', 'bea765af5e044b8caf4e3b414918a808');
    return this.http.get<Job[]>("https://hrm.azure-api.net/recruiting/api/jobs", {
      headers: {'Ocp-Apim-Subscription-Key':'bea765af5e044b8caf4e3b414918a808'}
    });
  }
}
