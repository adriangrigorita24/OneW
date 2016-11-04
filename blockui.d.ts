interface BlockUI {
    init(): void;
    block(el: HTMLElement, size?: number): void;
    unblock(el: HTMLElement): void;
    getElement(selector: string): any;
    findElement(selector: string): any;
}

declare var BlockUI: BlockUI;

declare module "blockui" {
    export = BlockUI;
}
