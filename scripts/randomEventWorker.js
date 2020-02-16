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