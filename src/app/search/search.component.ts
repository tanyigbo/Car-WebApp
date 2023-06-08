import { Component, OnInit } from '@angular/core';
import { MakeService } from '../services/manufacter-services/make.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  protected makeList: any;
  protected manufature: string = "";
  protected model: string = "";
  constructor(private makeService: MakeService) {

  }

  ngOnInit(): void {
    this.makeService.getAllManufactures().subscribe((manufaturers: any) => {
      this.makeList = manufaturers.data;
    })

  }
}
