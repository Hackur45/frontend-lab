import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentProfileComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'practital_4';
}
