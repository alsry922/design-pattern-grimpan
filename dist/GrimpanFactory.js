import ChromeGrimpan from "./ChromeGrimpan";
import IEGrimpan from "./IEGrimpan";
import { ChromeGrimpanMenu } from "./GrimpanMenu";
export class AbstractGrimpanFactory {
    static createGrimpan() {
        throw new Error('하위 클래스에서 구현 필요');
    }
    static createGrimpanMenu(grimPan) {
        throw new Error('하위 클래스에서 구현 필요');
    }
}
export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return ChromeGrimpan.getInstance();
    }
    static createGrimpanMenu(grimpan) {
        return ChromeGrimpanMenu.getInstance(grimpan);
    }
}
export class IEGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return IEGrimpan.getInstance();
    }
    static createGrimpanMenu(grimpan) {
        return ChromeGrimpanMenu.getInstance(grimpan);
    }
}
