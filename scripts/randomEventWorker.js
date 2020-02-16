// https: //www.voipshield.com/20-common-types-of-viruses-affecting-your-computer/
class virus {
    constructor(name, description, chance = 1, reward) {

        if (this.constructor === virus) {
            throw new TypeError('Abstract class "virus" cannot be instantiated directly.');
        }

        this.name = name;
        this.description = description;
        this.chance = chance;
        this.reward = reward;
    }
}



self.addEventListener('message', function(e) {
    this.console.log(e.data);
}, false);

let interval = setInterval(function() {
    rnd = Math.random();
    console.log(rnd + " - " + Date.now())
    if (rnd <= 0.1) {

        postMessage("testus maximus");
    }
}, 10000);