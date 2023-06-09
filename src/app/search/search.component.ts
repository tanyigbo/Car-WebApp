import { Component, OnInit } from '@angular/core';
import { MakeService } from '../services/manufacter-services/make.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  protected makeList: any;
  protected carList: any;
  protected manufaturer: string = "";
  protected model: string = "";
  constructor(private makeService: MakeService) {

  }

  /**
  * Manufacture Service to retrieve all manufacturer's data
  */
  ngOnInit(): void {
    this.makeService.getAllManufactures().subscribe((data: any) => {
      this.makeList = data.data;
    })
  }

  /**
   * Uses selected manufacturer and 
   * Manufacture Service to retrieve all cars by manufacturer
   * 
   * Activated by selecting manufacturer
   * Populates Model search bar
   */
  getModels(): void {
    this.makeService.getAllCarsByManufacturer(this.manufaturer).subscribe((data: any) => {
      this.carList = data.data;
    })
  }
}
