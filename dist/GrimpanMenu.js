export class GrimpanMenu {
    grimpan;
    constructor(grimpan) {
        this.grimpan = grimpan;
    }
    static getInstance(grimpan) { }
}
export class IEGrimpanMenu extends GrimpanMenu {
    static grimpanMenu;
    initializeMenu() { }
    static getInstance(grimpan) {
        if (!this.grimpanMenu) {
            this.grimpanMenu = new IEGrimpanMenu(grimpan);
        }
        return this.grimpanMenu;
    }
}
export class ChromeGrimpanMenu extends GrimpanMenu {
    static grimpanMenu;
    initializeMenu() { }
    static getInstance(grimpan) {
        if (!this.grimpanMenu) {
            this.grimpanMenu = new ChromeGrimpanMenu(grimpan);
        }
        return this.grimpanMenu;
    }
}
