import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../model/car'
import { WareHouse } from '../model/wareHouse';
import { ResaleService } from '../services/resale.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: Car;
  wareHouse: WareHouse;
  isCollapsed: boolean = true;

  constructor(private resaleService: ResaleService) { }

  ngOnInit(): void {
  }

  getDateAdded(dateAdded) {
    const date = new Date(dateAdded);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }
  getWareHouseDetails(carId) {
    this.resaleService.getWareHouseDetails(carId).subscribe(data => {
      this.isCollapsed = !this.isCollapsed;
      this.wareHouse = data;
    });

  }

  getMapLocation(lat, long) {
    return `http://www.google.com/maps/place/${lat},${long}`;
  }
}
