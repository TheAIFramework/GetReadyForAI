import { Component, OnInit } from '@angular/core';
import { ApiService } from "@shared/services/api.service";
import { Resource } from "@shared/models/resource";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  resources?: Resource[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getResources().subscribe(value => this.resources = value);
  }

}
