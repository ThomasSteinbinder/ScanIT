class autoClicker {
    constructor(id, name, perSec, basePrice, held, imgSource, description) {
        if (this.constructor === autoClicker) {
            throw new TypeError('Abstract class "autoClicker" cannot be instantiated directly.');
        }
        this.id = id;
        this.name = name;
        this.perSec = perSec;
        this.basePrice = basePrice;
        this.held = held;
        this.imgSource = imgSource;
        this.description = description;
    }
}

class scanStation1 extends autoClicker {
    constructor() {
        super(1,
            "Scanstation notebook",
            1,
            100,
            0,
            "img/notebook.png",
            "An old notebook with a slow dual core mobile CPU.");
    }
}

class scanStation2 extends autoClicker {
    constructor() {
        super(2,
            "Scanstation tower",
            40,
            KILO,
            0,
            "img/pc.png",
            "A mucked out workstation of a colleague. Quad core CPU inside.");
    }
}

class scanStation3 extends autoClicker {
    constructor() {
        super(3,
            "Scanstation server",
            MEGA,
            MEGA * 100,
            0,
            "img/server.png",
            "server text");
    }
}