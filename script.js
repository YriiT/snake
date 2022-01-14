const ITEMS = 1600;
const FOOD = 'food'

const LEFT_DIR = 37;
const UP_DIR = 38;
const RIGHT_DIR = 39;
const DOWN_DIR = 40;

let FPS = 120;
function random(maxValue = 1) {
    return Math.floor(Math.random() * maxValue)
}

const body = document.getElementById('body');
let foodPosition = 1;




function crElement(element, className, id, text) {
    const el = document.createElement(element);
    el.className = className;
    if (text) {
        el.innerText = text;
    }
    if (id) {
        el.id = id;
    }
    return el;
}

function createPixels() {
    let items = new Array(1600);
    for (let i = 1; i <= ITEMS; i++) {
        items[i - 1] = crElement('div', 'pixel', `pixel_${i}`)
    }
    return items;
}

const pixels = createPixels();

function createFood() {
    const foodElement = pixels[foodPosition];
    if (foodElement.classList.contains(FOOD)) {
        foodElement.classList.remove(FOOD);
    }
    foodPosition = random(ITEMS);
    pixels[foodPosition].classList.add(FOOD)
}

let currentDirection = LEFT_DIR;

// const isUpDir = currentDirection === UP_DIR;
// const isDownDir = currentDirection === DOWN_DIR;
// const isLeftDir = currentDirection === LEFT_DIR;
// const isRightDir = currentDirection === RIGHT_DIR;

function isReversDirection(direction) {
    return currentDirection === UP_DIR && direction === DOWN_DIR
        || currentDirection === DOWN_DIR && direction === UP_DIR
        || currentDirection === LEFT_DIR && direction === RIGHT_DIR
        || currentDirection === RIGHT_DIR && direction === LEFT_DIR
}

function changeDirection(direction) {
    if (direction !== currentDirection && !isReversDirection(direction)) {
        currentDirection = direction
    }
}

let snakeHeadPosition = 700;
let shoSnakeBodyTime = 200;

function moveSnake() {
    if (currentDirection === UP_DIR) {
        snakeHeadPosition = snakeHeadPosition - 40;
    }
    if (currentDirection === DOWN_DIR) {
        snakeHeadPosition = snakeHeadPosition + 40;
    }
    if (currentDirection === LEFT_DIR) {
        snakeHeadPosition = snakeHeadPosition - 1;
    }
    if (currentDirection === RIGHT_DIR) {
        snakeHeadPosition = snakeHeadPosition + 1;
    }
    snakeHeadOnLastBoardPixel(snakeHeadPosition);

    const nextSnakeHeadPixel = pixels[snakeHeadPosition];

    if (nextSnakeHeadPixel.classList.contains('snake_body')) {
        clearInterval(moveSnake)
        alert('пиздец')
        window.location.reload();
    }

    nextSnakeHeadPixel.classList.add('snake_body');



    setTimeout(() => {
        nextSnakeHeadPixel.classList.remove('snake_body');
    }, shoSnakeBodyTime);

    if (snakeHeadPosition === foodPosition) {
        shoSnakeBodyTime = shoSnakeBodyTime + FPS;
        createFood();
    }


}

function changeDirectionListener(e) {

    if (e.keyCode > 36 && e.keyCode < 41){
        console.log(e.keyCode);
        changeDirection(e.keyCode)
    }
}

function snakeHeadOnLastBoardPixel(headPosition) {
    if (currentDirection === UP_DIR && headPosition < 0) {
        snakeHeadPosition = snakeHeadPosition + 1600
    }
    if (currentDirection === DOWN_DIR && headPosition > 1600) {
        snakeHeadPosition = snakeHeadPosition - 1600
    }
    if (currentDirection === LEFT_DIR && (headPosition % 40 === 39 || headPosition < 0)) {
        snakeHeadPosition = snakeHeadPosition + 40
    }
    if (currentDirection === RIGHT_DIR && headPosition % 40 === 0) {
        snakeHeadPosition = snakeHeadPosition - 40
    }
}
setInterval(moveSnake, FPS);
window.addEventListener('keydown', changeDirectionListener)

createFood();
moveSnake();
const container = crElement('div', 'container');
const section = crElement('section', 'section');

container.append(...pixels);
section.append(container);
body.append(section);
