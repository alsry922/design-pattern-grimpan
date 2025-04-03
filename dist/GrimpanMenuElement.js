class GrimpanMenuElementBuilder {
    btn;
    build() {
        return this.btn;
    }
}
export class GrimpanMenuElement {
    _menu;
    _name;
    constructor(menu, name) {
        this._menu = menu;
        this._name = name;
    }
}
export class GrimpanMenuInput extends GrimpanMenuElement {
    _value;
    _onChanged;
    constructor(menu, name, value, onChanged) {
        super(menu, name);
        this._value = value;
        this._onChanged = onChanged;
    }
    draw() {
        const btn = document.createElement('input');
        btn.textContent = this._name;
        btn.type = 'color';
        if (this._onChanged) {
            btn.addEventListener('change', this._onChanged);
        }
        this._menu.dom.append(btn);
    }
    static Builder = class GrimpanMenuInputBuilder extends GrimpanMenuElementBuilder {
        _btn;
        constructor(menu, name) {
            super();
            this._btn = new GrimpanMenuInput(menu, name);
        }
        setValue(value) {
            this._btn._value = value;
            return this;
        }
        setChanged(onChanged) {
            this._btn._onChanged = onChanged;
        }
    };
}
export class GrimpanMenuButton extends GrimpanMenuElement {
    _active;
    _onClick;
    constructor(menu, name, active, onClick) {
        super(menu, name);
        this._active = active;
        this._onClick = onClick;
    }
    draw() {
        const btn = document.createElement('input');
        btn.textContent = this._name;
        btn.type = 'color';
        if (this._onClick) {
            btn.addEventListener('click', this._onClick);
        }
        this._menu.dom.append(btn);
    }
    static Builder = class GrimpanMenuButtonBuilder extends GrimpanMenuElementBuilder {
        _btn;
        constructor(menu, name) {
            super();
            this._btn = new GrimpanMenuButton(menu, name);
        }
        setActive(value) {
            this._btn._active = value;
            return this;
        }
        setOnClick(value) {
            this._btn._onClick = value;
            return this;
        }
    };
}
