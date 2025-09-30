import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name!: string;
  tasks = [
    {
      id: 't1',
      userId: "u1",
      title: 'Finish the course!',
      summary: 'complete evry stage and attend to the exam',
      deuDate: "2025-09-28",
      completed: false,
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Graduate!',
      summary: 'complete evry exam assignments and final exam',
      deuDate: "2025-09-29",
      completed: false,
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Graduate!',
      summary: 'complete evry exam assignments and final exam',
      deuDate: "2025-09-30",
      completed: false,
    },
  ];

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  } 
}
