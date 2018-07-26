import { PonyModel } from './pony.model';

export interface RaceModel {
id: Number ;
name: string ;
startInstant: String ;
ponies: Array<PonyModel> ;
}
