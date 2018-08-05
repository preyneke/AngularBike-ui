import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  template: `
    <div class="container">
      <div class="row">
        <a class="btn btn=primary" routerLink="/admin">Back to List</a>
      </div>
      <div>
        <div class="form-group">
          <label>Buyer Name</label>
          <div class="form-control">{{bikeReg.name}}</div>
        </div>
        <div class="form-group">
          <label>Email</label>
          <div class="form-control">{{bikeReg.email}}</div>
        </div>
        <div class="form-group">
          <label>Phone</label>
          <div class="form-control">{{bikeReg.phone}}</div>
        </div>
        <div class="form-group">
          <label>Bike Model</label>
          <div class="form-control">{{bikeReg.model}}</div>
        </div>
        <div class="form-group">
          <label>Bike Serial Number</label>
          <div class="form-control">{{bikeReg.serialNumber}}</div>
        </div>
        <div class="form-group">
          <label>Purchase Price</label>
          <div class="form-control">{{bikeReg.purchasePrice}}</div>
        </div>
        <div class="form-group">
          <label>Purchase Date</label>
          <div class="form-control">{{bikeReg.purchaseDate}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public bikeReg;
  constructor(private bikeService: BikeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
this.getBikeReg(this.route.snapshot.params.id);

  }
  getBikeReg(id: number) {
    this.bikeService.getBike(id).subscribe(
      data => {
        this.bikeReg = data;
      },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }

}
