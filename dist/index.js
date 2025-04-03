import { ChromeGrimpanFactory } from "./GrimpanFactory";
function main() {
    const factory = ChromeGrimpanFactory;
    const grimpan = factory.createGrimpan();
    const grimpanMenu = factory.createGrimpanMenu(grimpan, document.querySelector('#canvas'));
    grimpan.initialize();
    grimpanMenu.initializeMenu(['back', 'forward', 'color', 'pipette', 'pen', 'circle', 'rectangle', 'eraser', 'save']);
}
main();
