var blockSize = 20;
var timmer = 100;
var apple = null;
var directionOfMoving = "right"; //Изначальное направление движения
var rand = function (min, max) {
    k = Math.floor(Math.random() * (max - min) + min);
    return (Math.round(k / blockSize) * blockSize);
};
var createNewApple = function () {
    apple = [rand(0, 800), rand(0, 600)]; //Передаем размеры поля
};
var snake = {
    color: "red",
    blocks: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 40, y: 0 }]
};
var gP = document.getElementById('gP'); //Достаем canvas
var gC = gP.getContext('2d'); //Устанавливаем двумерный контекст 
gP.width = innerWidth; //Сохранем четкость изображения, выставив полную ширину экрана
gP.height = innerHeight; //То же самое, но только с высотой

createNewApple();
listenKeyDown();

function listenKeyDown() {
    onkeydown = function (event) {
        switch (event.key) {
            case "a":
                if (directionOfMoving != "right") directionOfMoving = "left";
                break;
            case "d":
                if (directionOfMoving != "left") directionOfMoving = "right";
                break;
            case "s":
                if (directionOfMoving != "up") directionOfMoving = "down";
                break;
            case "w":
                if (directionOfMoving != "down") directionOfMoving = "up";
                break;
            case "p":
                directionOfMoving = "stopped";
                break;
        }
    };
};

function reMove(xValue, yValue) {
    snake.blocks.push({ x: xValue, y: yValue });
};

function checkMoving() {
    if (directionOfMoving != "stopped") {
        snake.blocks.splice(0, 1);
        var tailOfSnake = snake.blocks[0], headOfSnake = snake.blocks[snake.blocks.length - 1];
        moveTheSnake(headOfSnake.x, headOfSnake.y);
        if (isCollision()) {
            createNewApple();
            snake.blocks.unshift(tailOfSnake);
        }
    }
};

function isCollision() {
    return apple[0] == snake.blocks[snake.blocks.length - 1].x && apple[1] == snake.blocks[snake.blocks.length - 1].y
};

function moveTheSnake(headX, headY) {
    if (directionOfMoving === "left") {
        if (headX <= 0) {
            reMove(800, Math.round(headY / blockSize) * blockSize);
        }
        else reMove(headX - blockSize, Math.round(headY / blockSize) * blockSize);
    }
    if (directionOfMoving === "right") {
        if (headX >= 800) {
            reMove(0, Math.round(headY / blockSize) * blockSize);
        }
        else reMove(headX + blockSize, Math.round(headY / blockSize) * blockSize);
    }
    if (directionOfMoving === "up") {
        if (headY <= 0) {
            reMove(Math.round(headX / blockSize) * blockSize, 600);
        }
        else reMove(Math.round(headX / blockSize) * blockSize, headY - blockSize);
    }
    if (directionOfMoving === "down") {
        if (headY >= 600) {
            reMove(Math.round(headX / blockSize) * blockSize, 0);
        }
        else reMove(Math.round(headX / blockSize) * blockSize, headY + blockSize);
    }

};

setInterval(function () {
    checkMoving();
    gC.clearRect(0, 0, gP.width, gP.height);   //очищаем канвас
    gC.fillStyle = "red";                   //устанавливаем цвет для точки
    gC.fillRect(...apple, blockSize, blockSize);//отрисовываем точку размера blockSize
    gC.fillStyle = "black";                 //устанавливаем цвет для змеи
    snake.blocks.forEach(function (index) {
        gC.fillRect(index.x, index.y, blockSize, blockSize); //отрисовываем поблочно змею
    });
}, timmer);