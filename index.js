function randomNumber(){
  return Math.floor(Math.random()*256)
}

function randomColorCode(){
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

const colorCodeEl = document.querySelector('.color-code');

const boxes = document.querySelectorAll('.box')

let correctAnswer;
let score = 0;
document.querySelector('.score').textContent = `SCORE: ${score}`;
function newStage() {
  const colorCodes = [randomColorCode(),randomColorCode(),randomColorCode()]; //
  boxes.forEach((el, index) => {
    el.style.backgroundColor = colorCodes[index];
}); //

correctAnswer = Math.floor(Math.random()*3); //

colorCodeEl.textContent = colorCodes[correctAnswer]; //
}

boxes.forEach((el,index) => {
  el.addEventListener('click', () => {
    el.classList.add('large');
    if(correctAnswer === index){
      score++;
      document.querySelector('.modal.right').classList.add('show');
    } else {
      document.querySelector('.modal.wrong .score').textContent = `SCORE: ${score}`;
      document.querySelector('.modal.wrong').classList.add('show');
      score = 0;
    }
    document.querySelector('.score').textContent = `SCORE: ${score}`;
  })
})

document.querySelector('.modal.right .close').addEventListener('click', () => {
  newStage();
  boxes.forEach(el => {
    el.classList.remove('large');
  })
  document.querySelector('.modal.right').classList.remove('show');
})

document.querySelector('.modal.wrong .close').addEventListener('click', () => {
  newStage();
  boxes.forEach(el => {
    el.classList.remove('large');
  })
  document.querySelector('.modal.wrong').classList.remove('show');
})


newStage();




