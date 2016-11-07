interface Tabbable {
    init(): void;
    clipboard(): void;
    download(): void;
}

declare var DebugButton: DebugButton;

declare module "debug-button" {
    export = DebugButton;
}
