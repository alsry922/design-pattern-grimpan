import Grimpan from "./Grimpan";

interface Clonable {
	clone(): Clonable;
}

class HistoryStack extends Array implements Clonable {
	clone() {
		return this.slice() as HistoryStack;
	}
}

export abstract class GrimpanHisotry {
	grimpan: Grimpan;
	stack: HistoryStack;

	protected constructor(grimpan: Grimpan) {
		this.grimpan = grimpan;
		this.stack = new HistoryStack();
	}

	getStack() {
		return this.stack.clone();
	}

	setStack(stack: HistoryStack) {
		this.stack = stack.clone();
	}
}