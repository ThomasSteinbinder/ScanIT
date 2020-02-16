class game {
    constructor() {
        this.initializeGame();
    }

    initializeGame() {
        this.clicks = 0;
        this.perClick = 1;
        this.perSec = 0;
        this.exisitingAutoClickers = [
            new scanStation1(),
            new scanStation2(),
            new scanStation3()
        ];
        this.myAutoClickers = new Array(this.exisitingAutoClickers.length).fill(0);

        this.loadingActive = false;
    }

    getGameData() {
        return new gameData(this.clicks, this.perClick, this.perSec,
            this.exisitingAutoClickers, this.myAutoClickers);
    }

    loadGame(gameData) {
        this.loadingActive = true;
        this.clicks = gameData.clicks;
        this.perClick = gameData.perClick;
        this.perSec = gameData.perSec;
        this.exisitingAutoClickers = gameData.exisitingAutoClickers;
        this.myAutoClickers = gameData.myAutoClickers;
        this.loadingActive = false;
    }

    newGame() {
        this.loadingActive = true;
        this.initializeGame();
        this.loadingActive = false;
    }

    click() {
        this.clicks += this.perClick;
    }

    buyAutoClicker(id) {
        if (this.exisitingAutoClickers[id].basePrice <= this.clicks) {
            this.clicks -= this.exisitingAutoClickers[id].basePrice;
            this.myAutoClickers[id] += 1;
            this.exisitingAutoClickers[id].basePrice = Math.floor(myGame.exisitingAutoClickers[id].basePrice * 1.15);
            this.perSec += this.exisitingAutoClickers[id].perSec;
        }
    }

    tick() {
        if (this.loadingActive)
            return;
        this.clicks += this.perSec / 10;
    }
}