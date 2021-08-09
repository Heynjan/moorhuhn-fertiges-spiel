//crosshair
class crosshair {
    crosshair;
    constructor() {
        console.log("crosshair");

        this.getElements();
        this.createListeners();
    }
    getElements() {
        this.crosshair = document.getElementById('crosshair');
    }
    createListeners() {
        document.addEventListener('mousemove', (e) =>{
            this.mouseMoveHandler(e);
        });
    }
    mouseMoveHandler(e) {
        this.crosshair.style.left = e.pageX-60 + 'px';
        this.crosshair.style.top = e.pageY-60 + 'px';
    }
}