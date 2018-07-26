import { PonyModel } from './pony.model';

export interface RaceModel {
id: Number ;
name: String ;
startInstant: String ;
ponies: Array<PonyModel> ;
}
