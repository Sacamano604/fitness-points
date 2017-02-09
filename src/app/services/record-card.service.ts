import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecordCardService {

  constructor(private _http: Http ) { }
    getActivities() {
      return this._http.get('http://localhost:8888/fitness-points/src/app/services/record-card.php?action=activities')
        .map(res => res.json());
    }
    getFitnessActivities() {
      return this._http.get('http://localhost:8888/fitness-points/src/app/services/record-card.php?action=fitnessActivities')
      .map(res => res.json());
    }
    getPersonalDevActivities() {
      return this._http.get('http://localhost:8888/fitness-points/src/app/services/record-card.php?action=personalDevActivities')
      .map(res => res.json());
    }
    getVolunteerActivities() {
      return this._http.get('http://localhost:8888/fitness-points/src/app/services/record-card.php?action=volunteerActivities')
      .map(res => res.json());
    }




  }
