const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fontSize = 16;
const columns = Math.floor(window.innerWidth / fontSize);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let customWords = [];



let matrix = [];

for (let i = 0; i < columns; i++) {
  matrix.push(Math.floor(Math.random() * canvas.height / 2) * -1);
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < matrix.length; i++) {
    const char = charSet[Math.floor(Math.random() * charSet.length)];
    ctx.fillText(char, i * fontSize, matrix[i] * fontSize);
    matrix[i]++;
    if (matrix[i] * fontSize > canvas.height && Math.random() > 0.975) {
      matrix[i] = 0;
    }
  }
}

setInterval(draw, 50);
