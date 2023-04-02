import { Component, OnInit } from '@angular/core';
import { JobService } from '../Core/Services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

   exampleVariable:String = 'example string';
   constructor(private jobService:JobService) { }

   ngOnInit(): void {

   }

}
