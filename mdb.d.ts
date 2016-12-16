interface OnewMDB {
    init(): void;
    datePicker(): void;
    materialSelect():void;
    characterCounter():void;
}

declare let OnewMDB: OnewMDB;

declare module "onewmdb" {
    export = OnewMDB;
}