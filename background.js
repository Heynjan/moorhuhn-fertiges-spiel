class Background {
    backgroundImg;
    bgDiv;

    constructor(backgroundImg) {
        this.backgroundImg = backgroundImg;
        this.init ();
    }

    init() {
        /**
         <div class="background-image">
         <img src="http://placekitten.com/1920/1080" alt="bg">
         </div>
         */
        this.bgDiv = document.createElement( 'div' );
        this.bgDiv.classList = 'background-image';
        this.bgDiv.innerHTML = `
            <img  src="${this.backgroundImg}" alt="bg">
        `;
        document.body.appendChild( this.bgDiv )
    }

    hide () {
        this.bgDiv.style.display = 'none';
    }

    show () {
        this.bgDiv.style.display = 'block';
    }
}