import { GrimpanMenuButton, GrimpanMenuInput } from "./GrimpanMenuElement";
export class GrimpanMenu {
    grimpan;
    dom;
    constructor(grimpan, dom) {
        this.grimpan = grimpan;
        this.dom = dom;
    }
    static getInstance(grimpan, dom) {
    }
}
export class IEGrimpanMenu extends GrimpanMenu {
    static grimpanMenu;
    initializeMenu(types) {
    }
    static getInstance(grimpan, dom) {
        if (!this.grimpanMenu) {
            this.grimpanMenu = new IEGrimpanMenu(grimpan, dom);
        }
        return this.grimpanMenu;
    }
}
export class ChromeGrimpanMenu extends GrimpanMenu {
    static grimpanMenu;
    initializeMenu(types) {
        types.forEach(this.drawButtonByType);
    }
    drawButtonByType(type) {
        switch (type) {
            case 'back':
                const btn = new GrimpanMenuButton.Builder(this, '뒤로').build();
                btn.draw();
                return btn;
            case 'forward': {
                const btn = new GrimpanMenuButton.Builder(this, '앞으로').build();
                btn.draw();
                return btn;
            }
            case 'color': {
                const btn = new GrimpanMenuInput.Builder(this, '컬러').build();
                btn.draw();
                return btn;
            }
            case 'pipette': {
                const btn = new GrimpanMenuButton.Builder(this, '스포이드').build();
                btn.draw();
                return btn;
            }
            case 'eraser': {
                const btn = new GrimpanMenuButton.Builder(this, '지우개').build();
                btn.draw();
                return btn;
            }
            case 'pen': {
                const btn = new GrimpanMenuButton.Builder(this, '펜').build();
                btn.draw();
                return btn;
            }
            case 'circle': {
                const btn = new GrimpanMenuButton.Builder(this, '원').build();
                btn.draw();
                return btn;
            }
            case 'rectangle': {
                const btn = new GrimpanMenuButton.Builder(this, '사각형').build();
                btn.draw();
                return btn;
            }
            case 'save': {
                const btn = new GrimpanMenuButton.Builder(this, '저장').build();
                btn.draw();
                return btn;
            }
            default:
                throw new Error(`알 수 없는 타입 ${type}`);
        }
    }
    static getInstance(grimpan, dom) {
        if (!this.grimpanMenu) {
            this.grimpanMenu = new ChromeGrimpanMenu(grimpan, dom);
        }
        return this.grimpanMenu;
    }
}
