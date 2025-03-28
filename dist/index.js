import { ChromeGrimpanFactory } from "./GrimpanFactory";
function main() {
    const factory = ChromeGrimpanFactory;
    const grimpan = factory.createGrimpan();
    const grimpanMenu = factory.createGrimpanMenu(grimpan);
    grimpan.initialize();
    grimpanMenu.initializeMenu();
}
main();
