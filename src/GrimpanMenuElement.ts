import {GrimpanMenu} from "./GrimpanMenu";
import Grimpan from "./Grimpan";

abstract class GrimpanMenuElementBuilder {
	btn!: GrimpanMenuElement;
	build() {
		return this.btn;
	}
}

export abstract class GrimpanMenuElement {
	protected _menu: GrimpanMenu;
	protected _name: string;

	protected constructor(menu: GrimpanMenu, name: string) {
		this._menu = menu;
		this._name = name;
	}
	abstract draw(): void;
}

export class GrimpanMenuInput extends GrimpanMenuElement {
	private _value?: string | number;
	private _onChanged?: () => void;

	private constructor(menu: GrimpanMenu, name: string, value?: string | number, onChanged?: () => void) {
		super(menu, name);
		this._value = value;
		this._onChanged = onChanged;
	}

	override draw() {
		const btn = document.createElement('input');
		btn.textContent = this._name;
		btn.type = 'color';
		if (this._onChanged) {
			btn.addEventListener('change', this._onChanged);
		}
		this._menu.dom.append(btn);
	}

	static Builder = class GrimpanMenuInputBuilder extends GrimpanMenuElementBuilder {
		private _btn: GrimpanMenuInput;
		constructor(menu: GrimpanMenu, name: string) {
			super()
			this._btn = new GrimpanMenuInput(menu, name);
		}

		setValue(value: string | number) {
			this._btn._value = value
			return this;
		}

		setChanged(onChanged: () => void) {
			this._btn._onChanged = onChanged;
		}
	}
}

export class GrimpanMenuButton extends GrimpanMenuElement {
	private _active?: boolean;
	private _onClick?: () => void;

	private constructor(menu: GrimpanMenu, name: string, active?: boolean, onClick?: () => void) {
		super(menu, name);
		this._active = active;
		this._onClick = onClick;
	}

	override draw() {
		const btn = document.createElement('input');
		btn.textContent = this._name;
		btn.type = 'color';
		if (this._onClick) {
			btn.addEventListener('click', this._onClick);
		}
		this._menu.dom.append(btn);
	}

	static Builder = class GrimpanMenuButtonBuilder extends GrimpanMenuElementBuilder {
		private _btn: GrimpanMenuButton;

		constructor(menu: GrimpanMenu, name: string) {
			super();
			this._btn = new GrimpanMenuButton(menu, name);
		}

		setActive(value: boolean) {
			this._btn._active = value;
			return this;
		}

		setOnClick(value: () => void) {
			this._btn._onClick = value;
			return this;
		}
	}
}