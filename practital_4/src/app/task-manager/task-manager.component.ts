import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent {
  tasks = [
    { title: 'Task 1', completed: true },
    { title: 'Task 2', completed: false },
    { title: 'Task 3', completed: true },
    { title: 'Task 4', completed: false }
  ];
}
