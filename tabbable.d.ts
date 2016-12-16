interface Tabbable {
    init(): void;
}

declare let Tabbable: Tabbable;

declare module "tabbable" {
    export = Tabbable;
}