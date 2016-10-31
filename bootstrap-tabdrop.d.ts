///<reference path="../jquery/jquery.d.ts" />

interface jQTabdropStatic {
    defaults?: any;
    Constructor?: any;
    (): void;
    (option: any): void;
}

interface JQueryStatic {
    tabdrop?: jQTabdropStatic;
}

interface JQuery {
    tabdrop(option?: any): JQuery;
}