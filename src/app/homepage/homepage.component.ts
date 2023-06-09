import { Component,OnInit } from '@angular/core';
import { MakeService } from '../services/manufacter-services/make.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  protected makeList:any;

  constructor(private makeService:MakeService){}

  ngOnInit(): void {
    this.makeService.getAllManufactures().subscribe((makes:any)=>{
      this.makeList = makes.data;     
    });
  }
}
