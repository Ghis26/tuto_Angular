export interface PonyModel {
    id: number;
    name: String;
    color: String;
}

export interface PonyWithPositionModel extends PonyModel {
   position: number;
}
