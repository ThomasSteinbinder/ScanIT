class game {
    constructor() {
        this.observers = [];

        this.initializeGame();
    }

    addObserver(observerFunction) {
        this.observers.push(observerFunction);
    }

    removeObserver(observerFnToRemove) {
        this.observers = this.observers.filter(observerFunction => {
            if (observerFunction != observerFnToRemove)
                return observerFunction;
        });
    }

    notifyObservers() {
        this.observers.forEach(observer =>
            observer.call());
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
        this.existingViruses = [
            new virus1(),
            new virus2(),
            new virus3(),
            new virus4(),
            new virus5(),
            new virus6(),
            new virus7()
        ];
        this.myViruses = new Array(this.existingViruses.length).fill(false);
        this.loadingActive = false;
    }

    getGameData() {
        return new gameData(this.clicks, this.perClick, this.perSec,
            this.exisitingAutoClickers, this.myAutoClickers, this.myViruses);
    }

    loadGame(gameData) {
        this.loadingActive = true;
        this.clicks = gameData.clicks;
        this.perClick = gameData.perClick;
        this.perSec = gameData.perSec;
        this.exisitingAutoClickers = gameData.exisitingAutoClickers;
        this.myAutoClickers = gameData.myAutoClickers;
        this.myViruses = gameData.myViruses;
        this.loadingActive = false;
    }

    newGame() {
        this.loadingActive = true;
        this.initializeGame();
        this.loadingActive = false;
    }

    click() {
        this.clicks += this.perClick;
        this.notifyObservers();
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
        this.notifyObservers();
    }

    randomEvent(callback) {
        let index = Math.floor(Math.random() * this.existingViruses.length);
        callback(index);
    }

    virusClicked1(virusID) {
        this.clicks += this.existingViruses[virusID].reward;
        if (!this.myViruses[virusID]) {
            this.myViruses[virusID] = true;
        }
    }
}