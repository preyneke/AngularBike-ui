import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <form [formGroup]="bikeform" (ngSubmit)="submitRegistration()" novalidate>
        <div *ngIf="validMessage != ''">
          <h3 class="has-info">{{validMessage}}</h3>
        </div>
        <div class="form-group">
          <label>Buyer Name</label>
          <input type="text" class="form-control" formControlName="name" required autofocus/>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" formControlName="email" required/>
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" formControlName="phone" required/>
        </div>
        <div class="form-group">
          <label>Bike Model</label>
          <select class="form-control" formControlName="model" required>
            <option value="">Please select a bike</option>
            <option *ngFor="let m of models"
                    [value]="m">
              {{m}}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>Bike Serial Number</label>
          <input type="text" class="form-control" formControlName="serialNumber" required/>
        </div>
        <div class="form-group">
          <label>Purchase Price</label>
          <input type="text" class="form-control" formControlName="purchasePrice" required/>
        </div>
        <div class="form-group">
          <label>Purchase Date</label>
          <input type="text" class="form-control" formControlName="purchaseDate" required/>
        </div>

        <button type="submit" class="btn btn-primary" >Submit</button>
      </form>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Globo MTB 29 Full Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Blade'
  ];
  bikeform: FormGroup;
  validMessage = '';

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email:  new FormControl('', Validators.required),
      phone:  new FormControl('', Validators.required),
      model:  new FormControl('', Validators.required),
      serialNumber:  new FormControl('', Validators.required),
      purchasePrice:  new FormControl('', Validators.required),
      purchaseDate:  new FormControl('', Validators.required),
      contact: new FormControl()

    });
  }

  submitRegistration(){
    if(this.bikeform.valid){
      this.validMessage = 'Your bike registration has been submited, thank you!';
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data =>{
          this.bikeform.reset();
          return true;
        },
        error =>{
          console.error('Please compleate the form');
          return throwError(error);
        }
      )
    } else{
      this.validMessage = 'Please compleate the form';
    }
  }

}
