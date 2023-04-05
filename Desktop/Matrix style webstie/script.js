const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const wordList = ['love', 'dumplings', 'heart', 'affection', 'devotion', 'admiration', 'adoration', 'passion', 'fondness', 'warmth', 'tenderness', 'caring', 'sweetheart', 'beloved', 'cherished', 'darling', 'dear', 'valentine', 'hug', 'kiss'];

let x = 0;
let y = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0F0';
  ctx.font = '20px Arial';
  for(let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    const xPos = x + i * 20;
    const yPos = y + i * 20;
    ctx.fillText(word, xPos, yPos);
  }
  x -= 1;
  y += 1;
  if(x < -canvas.width) {
    x = 0;
  }
  if(y > canvas.height) {
    y = 0;
  }
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', function() {
  resizeCanvas();
  setInterval(draw, 50);
});

function addWord() {
  const newWord = prompt('Enter a new word:');
  if(newWord) {
    wordList.push(newWord);
  }
}
