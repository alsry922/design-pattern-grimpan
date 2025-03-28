import Grimpan from "./Grimpan";
class ChromeGrimpan extends Grimpan {
    static instance;
    initialize() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ChromeGrimpan(document.getElementById('canvas'));
        }
        return this.instance;
    }
}
export default ChromeGrimpan;
