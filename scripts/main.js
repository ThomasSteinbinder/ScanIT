const KILO = Math.pow(1024, 1);
const MEGA = Math.pow(1024, 2);
const GIGA = Math.pow(1024, 3);
const TERA = Math.pow(1024, 4);
const PETA = Math.pow(1024, 5);
const EXA = Math.pow(1024, 6);
const ZETTA = Math.pow(1024, 7);
const YOTTA = Math.pow(1024, 8);

let autoClickWorker;
let randomEventWorker;
let myGame = new game();

let stickImg;
let clickLabel;
let perSecLabel;

function onLoad() {
    stickImg = document.getElementById("stick");
    clickLabel = document.getElementById('clicksLabel')
    perSecLabel = document.getElementById('perSecLabel');
    stickImg.addEventListener("click", imageClickAnimation, false);
    updatePerSecLabel();
    setInterval(function() { window.document.title = formatClicks(myGame.clicks); }, 1000);

    autoClickWorker = new Worker('autoClickWorker.js');
    autoClickWorker.onmessage = function(e) {
        myGame.tick();
        updateClickCounter()
    };

    updatePerSecLabel();
    randomEventWorker = new Worker('randomEventWorker.js');
    // randomEventWorker.postMessage("test");
    randomEventWorker.onmessage = function(e) {
        // alert("random event: " + e.data);
    }

    createAvailableAutoclicker();
    // setUpDialogueWindow();
    // showDialogue(introDialogue());
}

function formatClicks(unformatted) {
    if (unformatted < KILO) {
        return unformatted.toFixed(2) + " Byte";
    } else if (unformatted < MEGA) {
        return (unformatted / KILO).toFixed(2) + " KB";
    } else if (unformatted < GIGA) {
        return (unformatted / MEGA).toFixed(2) + " MB";
    } else if (unformatted < TERA) {
        return (unformatted / GIGA).toFixed(2) + " GB";
    } else if (unformatted < PETA) {
        return (unformatted / TERA).toFixed(2) + " TB";
    } else if (unformatted < EXA) {
        return (unformatted / PETA).toFixed(2) + " Peta Byte";
    } else if (unformatted < ZETTA) {
        return (unformatted / EXA).toFixed(2) + " Exa Byte";
    } else if (unformatted < YOTTA) {
        return (unformatted / ZETTA).toFixed(2) + " Zetta Byte";
    } else if (unformatted < Math.pow(1024, 9)) {
        return (unformatted / YOTTA).toFixed(2) + " Yotta Byte";
    }
}

function createAvailableAutoclicker() {

    let container = document.getElementById('autoClicker');

    for (let i = 0; i < myGame.exisitingAutoClickers.length; i++) {

        let div = document.createElement("div");
        div.style.userSelect = "none";
        div.className = "singleAutoClicker"
        div.style.width = "380px";
        let tbl = document.createElement("table");
        tbl.style.width = "100%";

        let row = document.createElement("tr");
        let row2 = document.createElement("tr");

        let cellImg = document.createElement("td");
        var cellImgImage = document.createElement("img");
        cellImg.style.width = "60px";
        cellImgImage.src = myGame.exisitingAutoClickers[i].imgSource;
        cellImgImage.style.width = "100%";
        cellImg.appendChild(cellImgImage);
        cellImg.rowSpan = 2;

        let cellName = document.createElement("td");
        var cellNameText = document.createTextNode(myGame.exisitingAutoClickers[i].name);
        cellName.style.fontSize = "25px";
        cellName.style.fontWeight = "bold";
        cellName.appendChild(cellNameText);

        let cellPrice = document.createElement("td");
        cellPrice.className = "cellPriceLabel";
        var cellPriceText = document.createTextNode(myGame.exisitingAutoClickers[i].basePrice);
        cellPrice.appendChild(cellPriceText);

        let cellHeld = document.createElement("td");
        cellHeld.className = "cellHeldLabel";
        var cellHeldText = document.createTextNode(myGame.myAutoClickers[i]);
        cellHeld.style.textAlign = "right";
        cellHeld.style.fontSize = "55px";
        cellHeld.appendChild(cellHeldText);
        cellHeld.rowSpan = 2;

        row.appendChild(cellImg);
        row.appendChild(cellName);
        row2.appendChild(cellPrice)
        row.appendChild(cellHeld);

        tbl.appendChild(row)
        tbl.appendChild(row2)
        div.appendChild(tbl)
        div.setAttribute("onclick", "buyAutoClicker(" + i + ");");
        div.style.marginBottom = "20px";
        container.appendChild(div);

        // Tooltip:

        let tooltip = document.createElement("span");
        tooltip.className = "tooltip";
        tooltip.innerHTML = myGame.exisitingAutoClickers[i].description + "<br>" +
            "Scans " + formatClicks(myGame.exisitingAutoClickers[i].perSec) + " data /sec for you!";
        div.appendChild(tooltip);
    }
    updateAutoClickerUI();
}

function updateAutoClickerUI() {
    for (let i = 0; i < myGame.exisitingAutoClickers.length; i++) {
        document.getElementsByClassName("cellHeldLabel")[i].innerHTML = myGame.myAutoClickers[i];
        document.getElementsByClassName("cellPriceLabel")[i].innerHTML = formatClicks(myGame.exisitingAutoClickers[i].basePrice);
    }
}

function buyAutoClicker(index) {
    myGame.buyAutoClicker(index);
    updateAutoClickerUI();
    updatePerSecLabel();
}

async function imageClickAnimation(e) {

    let x = e.clientX;
    let y = e.clientY;

    let img = new Image();
    let oneOrZero = Math.random();
    if (oneOrZero > .5) {
        img.src = 'img/oneWhite.png';
    } else {
        img.src = 'img/zeroWhite.png';
    }

    img.style.position = "absolute";
    let xOffset = Math.floor((Math.random() * 10) - 12);
    let yOffset = Math.floor((Math.random() * 6) - 3);
    img.style.left = 50 + xOffset + '%';
    img.style.top = 50 + yOffset + '%';
    img.style.width = Math.floor((Math.random() * 15) - 5) + 40 + "px"


    img.className = 'zeroOrOne';
    document.getElementById('stickDiv').appendChild(img);
    await Sleep(1000);
    document.getElementById('stickDiv').removeChild(img);
}

function imageClick() {
    myGame.click();
    updateClickCounter();
}

function updateClickCounter() {
    clickLabel.innerHTML = formatClicks(myGame.clicks) + " scanned";
}

function updatePerSecLabel() {
    perSecLabel.innerHTML = "+" + formatClicks(myGame.perSec) + " scanned per second";
}

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function debugAddBytes(index) {
    switch (index) {
        case 0:
            myGame.clicks += KILO;
            break;
        case 1:
            myGame.clicks += MEGA;
            break;
        case 2:
            myGame.clicks += GIGA;
            break;
        case 3:
            myGame.clicks += TERA;
            break;
        case 4:
            myGame.clicks += PETA;
            break;
        case 5:
            myGame.clicks += EXA;
            break;
        case 6:
            myGame.clicks += ZETTA;
            break;
        case 7:
            myGame.clicks += YOTTA;
            break;
        default:
    }
    updateClickCounter();
}

function saveGame() {
    let gameData = myGame.getGameData()
    let stringifiedGame = JSON.stringify(gameData);
    // var cookie = ["game=", stringifiedGame, '; domain=.', window.location.host.toString(), '; path=/;'].join('');
    document.cookie = "gameData=" + stringifiedGame + "; max-age=86400; path=/";
    // document.cookie = cookie;
}

function loadGame() {
    var result = document.cookie.match(new RegExp("gameData" + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    myGame.loadGame(result)
        // onLoad();
}