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

  ngOnInit(): void {
    this.makeService.getAllManufactures().subscribe((data: any) => {
      this.makeList = data.data;
    })
  }

  getModels(): void {
    this.makeService.getAllCarsByManufacturer(this.manufaturer).subscribe((data: any) => {
      this.carList = data.data;
      console.log(this.carList);
      
    })
  }
}
