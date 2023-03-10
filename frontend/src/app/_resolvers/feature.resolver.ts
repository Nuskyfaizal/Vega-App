import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KeyValuePair } from '../Models/vehicle';
import { VehicleService } from '../_services/vehicle.service';

@Injectable({
  providedIn: 'root',
})
export class FeatureResolver {
  constructor(private vehicleService: VehicleService, private router: Router) {}

  resolve(): Observable<KeyValuePair[]> {
    return this.vehicleService.getFeatures().pipe(
      catchError((error) => {
        console.log(error + 'Problem retrieving data');
        return of(null);
      })
    );
  }
}
