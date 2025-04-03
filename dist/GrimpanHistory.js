class HistoryStack extends Array {
    clone() {
        return this.slice();
    }
}
export class GrimpanHisotry {
    grimpan;
    stack;
    getStack() {
        return this.stack.clone();
    }
    constructor(grimpan) {
        this.grimpan = grimpan;
        this.stack = new HistoryStack();
    }
}
