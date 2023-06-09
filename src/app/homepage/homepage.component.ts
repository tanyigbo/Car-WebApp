import { Component,OnInit } from '@angular/core';
import { CarService } from '../services/car-services/car.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  protected carList:any;

  constructor(private carService:CarService){}

  /**
   * Uses Car Service to retrieve all cars
   */
  ngOnInit(): void {
    this.carService.getAllCars().subscribe((cars:any)=>{
      this.carList = cars.data;     
    });
  }
}
