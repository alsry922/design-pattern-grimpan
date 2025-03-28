import Grimpan from "./Grimpan";
class IEGrimpan extends Grimpan {
    static instance;
    initialize() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new IEGrimpan(document.getElementById('canvas'));
        }
        return this.instance;
    }
}
export default IEGrimpan;
