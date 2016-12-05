interface Checkbox {
    init(): void;
}

declare var Checkbox: Checkbox;

declare module "checkbox" {
    export = Checkbox;
}
