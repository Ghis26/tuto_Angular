import { PonyModel } from './pony.model';

export interface RaceModel {
id: number ;
name: string ;
startInstant: String ;
ponies: Array<PonyModel> ;
betPonyId?: number;
}
