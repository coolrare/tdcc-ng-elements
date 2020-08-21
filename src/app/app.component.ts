import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() title = 'demo1';
  data: Course[];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Course[]>('/api/courses').subscribe(result => {
      this.data = result;
    });
  }
}

export interface Course {
  courseId: number;
  title: string;
  credits: number;
  departmentId: number;
  department: null;
  courseInstructor: any[];
  enrollment: any[];
}
