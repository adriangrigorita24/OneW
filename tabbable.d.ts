interface Tabbable {
    init(): void;
}

declare var Tabbable: Tabbable;

declare module "tabbable" {
    export = Tabbable;
}