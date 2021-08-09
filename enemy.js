class Enemy {

    enemyImg;
    enemyDiv;
    xSpeed = 1;
    ySpeed = 1;
    clickHandlerRef;
    removed = false;

    constructor(hitHandler, enemyImg) {
        this.enemyImg = enemyImg;
        this.hitHandler = hitHandler;
        this.init();
    }

    init() {
        this.render();
        this.setX(Math.floor(Math.random() * this.getBodyWidth()));
        this.setY(Math.floor(Math.random() * this.getBodyHeight()));
        this.startMove();
        this.addHitDetection();
    }

    render() {
        this.enemyDiv = document.createElement('div');
        this.enemyDiv.classList = 'enemy-image';
        this.enemyDiv.innerHTML = `
            <img src="${this.enemyImg}" alt="enemy" width="100px">
        `
        document.body.appendChild(this.enemyDiv)
    }

    hide() {
        this.enemyDiv.style.display = 'none';
    }

    show() {
        this.enemyDiv.style.display = 'block';
    }

    startMove() {
        this.intervalID = setInterval(() => {
            this.move()
            setInterval(+10)
        }, 40 )
    }

    stopMove() {
        clearInterval(this.intervalID);
    }

    move() {
        let x = this.getX();
        let y = this.getY();

        x += this.xSpeed;
        y += this.ySpeed;

        if (x > this.getBodyWidth() || x < 0) this.xSpeed *= -1;
        if (y > this.getBodyHeight() || y < 0) this.ySpeed *= -1;

        this.setY(y);
        this.setX(x);
    }

    setX(x) {
        this.enemyDiv.style.left = x + 'px';
    }

    setY(y) {
        this.enemyDiv.style.top = y + 'px';
    }

    getX() {
        return parseInt(this.enemyDiv.style.left.replace('px', ''));
    }

    getY() {
        return parseInt(this.enemyDiv.style.top.replace('px', ''));
    }

    getBodyWidth() {
        return window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth ||
            document.body.offsetWidth;
    }

    getBodyHeight() {
        return window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight ||
            document.body.offsetHeight;
    }

    clickHandler() {
        this.hitHandler(this);
        this.removeFromStage();
    }

    removeFromStage() {
        if (!this.removed) {
            this.stopMove();
            this.enemyDiv.removeEventListener('click', this.clickHandlerRef)
            document.body.removeChild(this.enemyDiv);
            this.removed = true;
        }
    }
    addHitDetection() {
        this.clickHandlerRef = this.clickHandler.bind(this);
        this.enemyDiv.addEventListener('click', this.clickHandlerRef)
    }
}
document.addEventListener('click', (e) => {
    shooteffect.play();
    console.log('shot')
})