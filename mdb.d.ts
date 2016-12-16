interface OnewMDB {
    init(): void;
    datePicker(): void;
    materialSelect():void;
    countCharacters():void;
}

declare let OnewMDB: OnewMDB;

declare module "onewmdb" {
    export = OnewMDB;
}