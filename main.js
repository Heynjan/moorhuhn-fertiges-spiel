let shooteffect = new Audio('assets/Gunfire And Voices.mp3');
let winningmusik = new Audio('assets/Hero Theme.mp3');
let backgroundmusic = new Audio('assets/backgroundmusic.mp3');
let waitingmusic = new Audio('assets/waiting music.mp3');

class Main {

    background;
    numOfEnemies = 3;
    numOfHitedEnemies = 0;
    enemies = [];

    constructor() {
        this.init();
    }

    init() {
        this.addBackground();
        this.reset();
        this.begin()
    }

    addBackground() {
        this.background = new Background('assets/mohrhuhnhaus5.png');
        let counter = 0;
        setInterval(() => {
            counter++;
            this.background.show();
        },)
    }

    addEnemies() {
        for (let i = 0; i < this.numOfEnemies; i++) {
            this.enemies.push(new Enemy(enemy => {
                    this.hits(enemy);
                },
                'assets/mohrhuhn.png'));
        }
        console.log(this.enemies);
    }

    hits(enemy) {
        this.numOfHitedEnemies++;
        console.count('hit');
        this.hitcount();
        if ( this.numOfHitedEnemies !== 0 && (this.numOfHitedEnemies % 3) === 0  ) {
            this.reset();
            console.log('new chicken');
        }
        else {
            console.log('weiter spielen');
        }
        if (this.numOfHitedEnemies === 20) {
            console.log('ich habe fertig')
            this.won();
        }
    }

    pause() {
        this.enemies.forEach(enemy => enemy.stopMove());
    }

    reset() {
        this.enemies.forEach(enemy => enemy.removeFromStage());
        this.enemies = [];
        this.addEnemies();
    }
    won() {
        backgroundmusic.pause();
        console.log('backgroundmusic stop');
        clearInterval(this.gameended);
        winningmusik.play();
        console.log('winning music starts')
        if (confirm('SUPER du hast gewonnen... willst du nochmal?')) {
            this.begin();
            this.reset();
            winningmusik.pause();
            backgroundmusic.play();
            console.log('winningmusic stop');
            console.log('backgroundmusic start');
            this.numOfHitedEnemies = 0;
        }
        else{
            this.reset();
            this.begin();
            this.numOfHitedEnemies = 0;
        }
    }

    gameended = -1;
    begin() {
        clearInterval()
        let count = 0;
        this.gameended = setInterval(() => {
            console.log(count);
            count++

            if (count >= 21) {
                console.log("game ended");
                clearInterval(this.gameended);
                this.gameended = -1;
                this.enemies.forEach(enemy => enemy.removeFromStage());
                if (confirm('Deine Zeit ist leider vorbei... willst du nochmal?')) {
                    this.reset();
                    this.begin();
                    this.numOfHitedEnemies = 0;
                }
                else{
                    waitingmusic.play();
                    `<p1>0 seconds</p1>`
                }
            } else {
                document.getElementById('timer').innerHTML = `<p1>${count} seconds</p1>`;
            }
        }, 1000)
    }
    hitcount() {

        let hitcount = this.numOfHitedEnemies;
        {
            document.getElementById('hitcounter').innerHTML = `<p1>${hitcount} hits</p1>`;
        }
    }
}