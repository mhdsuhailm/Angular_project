import { Pipe, PipeTransform } from '@angular/core';
import { project } from '../model/project';

@Pipe({
  name: 'teamSize',
})
export class TeamSizePipe implements PipeTransform {
  transform(projects: project[], minSize: number, maxSize: number): project[] {
    if (!projects || minSize == null || maxSize== null) {
      return projects;
    }
     return projects.filter((p) => {
       return p.teamSize >= minSize && p.teamSize <= maxSize;
     });
    // return projects.filter(
      
    //   (project) => +project.teamSize >= minSize && +project.teamSize <= maxSize
    // );
  }
}
