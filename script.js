var positionXOfObject1 = 0;
var positionYOfObject1 = 0;
var randomPosition = 0;
var xa, ya, xa1, ya1 = 0;
var xb, yb, xb1, yb1 = 0;
var touch = 0;
var directionOfMoving = "right";
var timmer = 50;
var objectSizeWidth, objectSizeHeight = 0;
var snake = {
    color: "red",
    blocks: [{
        type: "big",
        color: "green"
    },{
        type: "small",
        color: "blue"
    }]
};

console.log(snake.blocks);

listenKeyDown();

function listenKeyDown() {
    onkeydown = function (event) {
        randomPosition = Math.floor(Math.random() * 600);
        if (event.key === "a") {
            directionOfMoving = "left";
        }
        if (event.key === "d") {
            directionOfMoving = "right";
        }
        if (event.key === "s") {
            directionOfMoving = "down";
        }
        if (event.key === "w") {
            directionOfMoving = "up";
        }
        if (event.key === "p") {
            directionOfMoving = "stopped";
        }
        //console.log(event,xa,ya,xa1,ya1,touch)
        //console.log(event,xb,yb,xb1,yb1)
    };
}

setInterval(function () {
    if (directionOfMoving === "right") {
        moveRight();
        checkTouch();
    }
    if (directionOfMoving === "left") {
        moveLeft();
        checkTouch();
    }
    if (directionOfMoving === "down") {
        moveTop();
        checkTouch();
    }
    if (directionOfMoving === "up") {
        moveDown();
        checkTouch()
    }
}, timmer);

function moveLeft() {
    positionXOfObject1 -= 10;
    document.getElementById('stique').style.left = positionXOfObject1 + "px";
}
function moveRight() {
    positionXOfObject1 += 10;
    document.getElementById('stique').style.left = positionXOfObject1 + "px";
}

function moveTop() {
    positionYOfObject1 += 10;
    document.getElementById('stique').style.top = positionYOfObject1 + "px";
}

function moveDown() {
    positionYOfObject1 -= 10;
    document.getElementById('stique').style.top = positionYOfObject1 + "px";
}

function checkTouch() {
    xa = document.getElementById('stique').getBoundingClientRect().x;
    ya = document.getElementById('stique').getBoundingClientRect().y;
    xa1 = document.getElementById('stique').getBoundingClientRect().x + document.getElementById('stique').getBoundingClientRect().width;
    ya1 = document.getElementById('stique').getBoundingClientRect().y + document.getElementById('stique').getBoundingClientRect().height;
    xb = document.getElementById('point').getBoundingClientRect().x;
    yb = document.getElementById('point').getBoundingClientRect().y;
    xb1 = document.getElementById('point').getBoundingClientRect().x + document.getElementById('point').getBoundingClientRect().width;
    yb1 = document.getElementById('point').getBoundingClientRect().y + document.getElementById('point').getBoundingClientRect().height;

    if (
        ((xb > xa) && (xb < xa1) && (yb > ya) && (yb < ya1) ||
            (xb > xa) && (xb < xa1) && (yb1 > ya) && (yb1 < ya1) ||
            (xb1 > xa) && (xb1 < xa1) && (yb > ya) && (yb < ya1) ||
            (xb1 > xa) && (xb1 < xa1) && (yb1 > ya) && (yb1 < ya1))
    ) {
        touch += 1;
        console.log(event, "попал-попал!!");
        s = task1(23, 10);
        c = task2(10, 4);
        console.log(s, c);
        createObjectInRandomPoint();
        objectSizeWidth = document.getElementById('stique').getBoundingClientRect().width + 10;
        objectSizeHeight = document.getElementById('stique').getBoundingClientRect().height + 10;
        document.getElementById('stique').style.width = objectSizeWidth + "px";
        document.getElementById('stique').style.height = objectSizeHeight + "px";
        //document.location.href = "game2.html";

    }

}

function createObjectInRandomPoint() {
    document.getElementById('point').style.left = randomPosition + "px";
    randomPosition = Math.floor(Math.random() * 500);
    document.getElementById('point').style.top = randomPosition + "px";
}

var s = 0;
var c = 0;



function task1(height, width) {
    return height * width;
}

function task2(heightC, dC) {
    return Math.PI * (Math.pow((dC / 2), 2)) * heightC;
}
