

const r1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
const r2 =/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

// const icon = <img src="data:image/png;base64,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"/>
   
function isMobileBrowser (a) {
    return r1.test(a)||r2.test(a.substr(0,4))
};

const IS_MOBILE = isMobileBrowser(navigator.userAgent || navigator.vendor || window.opera)

const ITEMS = 1600;
const FOOD = 'food'

const LEFT_DIR = 37;
const UP_DIR = 38;
const RIGHT_DIR = 39;
const DOWN_DIR = 40;

const FPS = 120;


function random(maxValue = 1) {
    return Math.floor(Math.random() * maxValue)
}

const body = document.getElementById('body');
let foodPosition = 1;


function createElement(element, className, id, text) {
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
        items[i - 1] = createElement('div', 'pixel', `pixel_${i}`)
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

function isReversDirection(direction) {
    return currentDirection === UP_DIR && direction === DOWN_DIR
        || currentDirection === DOWN_DIR && direction === UP_DIR
        || currentDirection === LEFT_DIR && direction === RIGHT_DIR
        || currentDirection === RIGHT_DIR && direction === LEFT_DIR
}

function changeDirection(direction) {
    if (direction !== currentDirection && !isReversDirection(direction)) {
        setTimeout(()=> {
            currentDirection = direction
        }, 100)
    }
}

let snakeHeadPosition = 700;
let shoSnakeBodyTime = 190;

function moveSnake() {
    switch(currentDirection){
        case(UP_DIR):{
            snakeHeadPosition = snakeHeadPosition - 40;
        } break;
        case(DOWN_DIR):{
            snakeHeadPosition = snakeHeadPosition + 40;
        } break;
        case(LEFT_DIR):{
            snakeHeadPosition = snakeHeadPosition - 1;
        } break;
        case(RIGHT_DIR):{
            snakeHeadPosition = snakeHeadPosition + 1;
        } break;
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

function createButtons(node){
    const buttons = [
        { key: 'left', value: LEFT_DIR },
        { key: 'right', value: RIGHT_DIR },
        { key: 'up', value: UP_DIR },
        { key: 'down', value: DOWN_DIR }
        ].map(el => {
        const img = new Image(34, 34);
        img.src = './arrow-up.svg'
        const btn = createElement('div', `button ${el.key}`);
        
        function onClick () {
            changeDirection(el.value)
        }

        btn.append(img);
        btn.onclick = onClick

        return btn;
    })

    const buttonContainer = createElement('div', 'buttonContainer')
    buttonContainer.append(...buttons)
    node.append(buttonContainer)
}

setInterval(moveSnake, FPS);
window.addEventListener('keydown', changeDirectionListener)

createFood();
moveSnake();
const container = createElement('div', 'container');
const section = createElement('section', 'section');


container.append(...pixels);
section.append(container);
console.log(IS_MOBILE)
if(IS_MOBILE){
    createButtons(section)
}
body.append(section);
