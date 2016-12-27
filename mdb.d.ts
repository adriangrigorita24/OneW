interface OnewMDB {
    init(): void;

    datePicker(options?: any): void;
    timePicker(options?: any): void;

    modalInit(options?: any): void;
    modalAction(action: string): void;

    tooltipInit(options?: any): void;
    tooltipAction(action: string, selector?: string): void;

    selectInit(selector?: string): void;
    selectDestroy(selector?: string): void;

    sideNavInit(options?: any): void;
    sideNavAction(action?: any): void;

    tagChipInit(data: any[], selector?: string): void;
    tagChipAction(action: string): void;
    tagChipPlaceholder(placeholder: string, secondaryPlaceholder: string): void;

    characterCounter(): void;

    dropdownInit(action?: string): void;

    tabsInit(action: string): void;

    lightbox(): void;

    collapse(options?: any): void;
}

declare let OnewMDB: OnewMDB;

declare module "onewmdb" {
    export = OnewMDB;
}