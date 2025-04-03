import Grimpan from "./Grimpan";
import {GrimpanMenuButton, GrimpanMenuInput} from "./GrimpanMenuElement";

export abstract class GrimpanMenu {
	grimpan: Grimpan;
	dom: HTMLElement;

	protected constructor(grimpan: Grimpan, dom: HTMLElement) {
		this.grimpan = grimpan;
		this.dom = dom;
	}

	abstract initializeMenu(types: BtnType[]): void

	static getInstance(grimpan: Grimpan, dom: HTMLElement) {
	}
}

export class IEGrimpanMenu extends GrimpanMenu {
	private static grimpanMenu: IEGrimpanMenu

	override initializeMenu(types: BtnType[]): void {
	}

	static override getInstance(grimpan: Grimpan, dom: HTMLElement) {
		if (!this.grimpanMenu) {
			this.grimpanMenu = new IEGrimpanMenu(grimpan, dom);
		}
		return this.grimpanMenu;
	}
}

export type BtnType = 'back' | 'forward' | 'color' | 'pipette' | 'pen' | 'circle' | 'rectangle' | 'eraser' | 'save';

export class ChromeGrimpanMenu extends GrimpanMenu {
	private static grimpanMenu: ChromeGrimpanMenu;

	override initializeMenu(types: BtnType[]): void {
		types.forEach(this.drawButtonByType);
	}

	drawButtonByType(type: BtnType) {
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


	static override getInstance(grimpan: Grimpan, dom: HTMLElement) {
		if (!this.grimpanMenu) {
			this.grimpanMenu = new ChromeGrimpanMenu(grimpan, dom);
		}
		return this.grimpanMenu;
	}
}