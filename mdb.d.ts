interface OnewMDB {
    init(): void;
    datePicker(): void;
}

declare let OnewMDB: OnewMDB;

declare module "onewmdb" {
    export = OnewMDB;
}