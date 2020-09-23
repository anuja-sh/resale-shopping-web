import { Component, OnInit } from '@angular/core';

import { ResaleService } from '../services/resale.service';
import { Car } from '../model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {

  carList: Car[] = [];
  constructor(private resaleService: ResaleService) { }

  ngOnInit(): void {

    this.resaleService.getAllCarsOfWareHouse().subscribe(data => {

      //  this.carList = data;

      this.carList = data.map((item) => {
        item.isAddedToCart = false;
        return item;
      });
    });
  }
}
