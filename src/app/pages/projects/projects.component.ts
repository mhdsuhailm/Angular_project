import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { project } from '../../model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projectslist: project[] = [];

  minTeamSize: number = 0;
  maxTeamSize: number = 10;
  selectedStatus = 'All';

  constructor(private api1: ApiService) {}

  ngOnInit() {
    this.api1.getServices1().subscribe({
      next: (result: project[]) => (this.projectslist = result),

      error: (error) => console.log(error),
    });
  }
  // ngOnInit() {
  //   this.api1.getServices1().subscribe({
  //     next: (result: project[]) => {
  //       this.projectslist = result;
  //       console.log('Projects List:', this.projectslist); // ✅ Debugging Step
  //     },
  //     error: (error) => console.log('API Error:', error),
  //   });
  // }
}
