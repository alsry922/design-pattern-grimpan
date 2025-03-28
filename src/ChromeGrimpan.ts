import Grimpan from "./Grimpan";

class ChromeGrimpan extends Grimpan {
	private static instance: ChromeGrimpan;

	override initialize() {}

	static override getInstance() {
		if (!this.instance) {
			this.instance = new ChromeGrimpan(document.getElementById('canvas'));
		}
		return this.instance;
	}
}

export default ChromeGrimpan;