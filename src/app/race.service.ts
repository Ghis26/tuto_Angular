import { Injectable} from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { RaceModel } from './models/race.model';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<Array<RaceModel>> {
    return this.http.get<Array<RaceModel>>(`http://ponyracer.ninja-squad.com/api/races?status=PENDING`);
  }
}
