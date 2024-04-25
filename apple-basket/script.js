const leftApple = document.getElementById('left-apple');
const rightApple = document.getElementById('right-apple');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

function clickLeft() {
    if (rightApple.innerHTML == 0) {
        alert('Right Basket is empty');
    }
    else {
        leftApple.innerHTML++;
        rightApple.innerHTML--;
    }
}

function clickRight() {
    if (leftApple.innerHTML == 0) {
        alert('Left Basket is empty');
    }
    else {
        leftApple.innerHTML--;
        rightApple.innerHTML++;
    }
}

console.log(rightApple.innerHTML);