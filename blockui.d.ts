interface BlockUI {
    init(): void;
}

declare var BlockUI: BlockUI;

declare module "blockui" {
    export = BlockUI;
}