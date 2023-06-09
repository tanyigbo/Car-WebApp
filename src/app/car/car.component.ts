import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car-services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  protected modelName: any;
  protected car: any;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((details: any) => {
      this.modelName = details.model;
      this.getCarInfo()
    })    
  }

  getCarInfo(): void {
    this.carService.getCarByModel(this.modelName.replace(" ", "_"))
      .subscribe((data: any) => {
        this.car = data.data; 
        console.log(this.car);            
      })
  }

}
