interface Tabbable {
    init():any;
}

declare var Tabbable:Tabbable;

declare module "Tabbable" {
    export = Tabbable;
}
