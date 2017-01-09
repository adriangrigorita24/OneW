interface Onew {
    init(): void;
}

declare let Onew: Onew;

declare module "onew" {
    export = Onew;
}