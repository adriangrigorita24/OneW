interface MDB {
    init(): void;
    datePicker(): void;
}

declare let MBD: MDB;

declare module "mdb" {
    export = MDB;
}