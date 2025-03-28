import Grimpan from "./Grimpan";

export abstract class GrimpanMenu {
	protected grimpan: Grimpan;
	protected constructor(grimpan: Grimpan) {
		this.grimpan = grimpan;
	}

	abstract initializeMenu(): void

	static getInstance(grimpan: Grimpan) {}
}

export class IEGrimpanMenu extends GrimpanMenu {
	private static grimpanMenu: IEGrimpanMenu

	override initializeMenu(): void {}

	static override getInstance(grimpan: Grimpan) {
		if (!this.grimpanMenu) {
			this.grimpanMenu = new IEGrimpanMenu(grimpan);
		}
		return this.grimpanMenu;
	}
}

export class ChromeGrimpanMenu extends GrimpanMenu {
	private static grimpanMenu: ChromeGrimpanMenu;

	override initializeMenu(): void {}

	static override getInstance(grimpan: Grimpan) {
		if (!this.grimpanMenu) {
			this.grimpanMenu = new ChromeGrimpanMenu(grimpan);
		}
		return this.grimpanMenu;
	}
}