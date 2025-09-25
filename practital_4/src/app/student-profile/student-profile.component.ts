import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  student = {
    name: 'John Doe',
    course: 'B.Tech',
    marks: 85,
    age: 21,
    email: 'john.doe@example.com',
    attendance: 92,   // in percentage
    address: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India'
    }
  };
}

