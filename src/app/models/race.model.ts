import { PonyModel, PonyWithPositionModel } from './pony.model';

export interface RaceModel {
id: number ;
name: string ;
startInstant: String ;
ponies: Array<PonyModel> ;
betPonyId?: number;
}

export interface LiveRaceModel {
 ponies: Array<PonyWithPositionModel>
}