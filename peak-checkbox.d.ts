interface Checkbox {
    init(): void;
}

declare let Checkbox: Checkbox;

declare module "checkbox" {
    export = Checkbox;
}
