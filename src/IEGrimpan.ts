import Grimpan from "./Grimpan";

class IEGrimpan extends Grimpan {
	private static instance: IEGrimpan;

	override initialize() {}

	static override getInstance() {
		if (!this.instance) {
			this.instance = new IEGrimpan(document.getElementById('canvas'));
		}
		return this.instance;
	}
}

export default IEGrimpan;