import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-admin',
  template: `
    <div class="container">
  <table class="table table-bordered table-inverse">
    <tr>
      <th>Owner Name</th>
      <th>Email</th>
      <th>Model</th>
      <th class="text-right">Purchase Price</th>
    </tr>
    <tr *ngFor="let bike of bikes">
      <td>
        {{bike.name}}
      </td>
      <td>
        {{bike.email}}
      </td>
      <td>
        {{bike.model}}
      </td>
      <td class="text-right">
        {{bike.purchasePrice}}
      </td>
    </tr>
  </table>
</div>
  `,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

public bikes;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
  this.getBikes();
  }
  
  getBikes(){
  this.bikeService.getBikes().subscribe(
  data =>{ this.bikes = data},
  err => console.error(err),
  () => console.log('bikes loaded')
  );
  }

}
