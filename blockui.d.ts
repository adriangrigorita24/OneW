interface BlockUI {
    init(): void;
    block(el: HTMLElement, size: number): void;
    unblock(el: HTMLElement): void;
    getElement(selector: string): HTMLElement|HTMLElement[];
    findElement(selector: string): HTMLElement|HTMLElement[];
}

declare var BlockUI: BlockUI;

declare module "blockui" {
    export = BlockUI;
}