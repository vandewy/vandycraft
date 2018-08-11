import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../projectcard';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  projectcard: ProjectCard = {
    id: 1,
    title: 'Radar Simulator',
    description: 'simulator',
    link: 'link',
    link_description: 'link description'
  };

  constructor() { }

  ngOnInit() {
  }

}
