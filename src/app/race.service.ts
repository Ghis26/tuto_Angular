import { Injectable} from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';
import { RaceModel } from './models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor() {}

  list(): Observable<Array<RaceModel>> {
    return of([
      {name: 'Lyon'},
      {name: 'Los Angeles'},
      {name: 'Sydney'},
      {name: 'Tokyo'},
      {name: 'Casablanca'}
    ]);
  }
}
