import { Pipe, PipeTransform } from '@angular/core';
import { project } from '../model/project';

@Pipe({
  name: 'projectStatus',
})
export class ProjectStatusPipe implements PipeTransform {
  transform(projects: project[], selectedStatus: string): project[] {
    if (!projects || !selectedStatus || selectedStatus === 'All') {
      return projects;
    }
    return projects.filter(
      (project) => project.status.toLowerCase() === selectedStatus.toLowerCase()
    );
  }
}
