import { PonyModel } from './pony.model';

export interface RaceModel {
name: String ;
id: Number ;
startInstant: String ;
ponies: Array<PonyModel> ;
}
