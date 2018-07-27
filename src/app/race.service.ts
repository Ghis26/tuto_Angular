import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RaceModel } from './models/race.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private http: HttpClient) {}

  list(): Observable<Array<RaceModel>> {
    const params = { status: 'PENDING' };
    return this.http.get<Array<RaceModel>>('http://ponyracer.ninja-squad.com/api/races', { params });
  }
}
