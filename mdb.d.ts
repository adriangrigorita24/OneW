interface OnewMDB {
    init(): void;
    datePicker(): void;
    materialSelect():void;
    characterCounter();
}

declare let OnewMDB: OnewMDB;

declare module "onewmdb" {
    export = OnewMDB;
}