import Grimpan from "./Grimpan";
import ChromeGrimpan from "./ChromeGrimpan";
import IEGrimpan from "./IEGrimpan";
import {ChromeGrimpanMenu} from "./GrimpanMenu";

export abstract class AbstractGrimpanFactory {
	static createGrimpan() {
		throw new Error('하위 클래스에서 구현 필요');
	}

	static createGrimpanMenu(grimPan: Grimpan, dom: HTMLElement) {
		throw new Error('하위 클래스에서 구현 필요');
	}
}

export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
	static override createGrimpan(): Grimpan {
		return ChromeGrimpan.getInstance();
	}

	static override createGrimpanMenu(grimpan: ChromeGrimpan, dom: HTMLElement) {
		return ChromeGrimpanMenu.getInstance(grimpan, dom);
	}
}

export class IEGrimpanFactory extends AbstractGrimpanFactory {
	static override createGrimpan(): Grimpan {
		return IEGrimpan.getInstance();
	}

	static override createGrimpanMenu(grimpan: IEGrimpan, dom: HTMLElement) {
		return ChromeGrimpanMenu.getInstance(grimpan, dom);
	}
}