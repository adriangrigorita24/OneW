interface OnewMDB {
    init(): void;

    datePicker(options?: any): void;
    timePicker(options?: any): void;

    modalInit(options?: any):void;
    modalAction(action):void;

    tooltipInit(options?: any):void;
    tooltipAction(action, selector?: string):void;

    selectInit(selector?: string):void;
    selectDestroy(selector?: string):void;

    sideNavInit(options?: any):void;
    sideNavAction(action?: any):void;

    materialChipInit(data, selector?: string):void;
    materialChipAction(action):void;
    materialChipPlaceholder(placeholder, secondaryPlaceholder):void;

    characterCounter():void;

    dropdownInit(action?: string):void;

    tabsInit(action):void;

    lightbox():void;
}

declare let OnewMDB: OnewMDB;

declare module "onewmdb" {
    export = OnewMDB;
}