const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");
const status = document.querySelector("#status");

const pile = [
{ x: 70,  y: 250, color: "#e7a3b5", name: "bun" },
{ x: 140, y: 262, color: "#f2c14e", name: "chick" },
{ x: 210, y: 248, color: "#8fb9a8", name: "frog" },
{ x: 275, y: 266, color: "#d98b6c", name: "fox" },
{ x: 150, y: 214, color: "#c9b6e4", name: "cloud" },
{ x: 230, y: 220, color: "#f0e6d2", name: "dumpling" }
];

let clawX = 200;
const speed = 16;

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#d7ebe3";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#c4b49a";
ctx.fillRect(0, 290, canvas.width, 40);

pile.forEach(p => {
ctx.fillStyle = p.color;
ctx.beginPath();
ctx.arc(p.x, p.y, 26, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = "#3a2e28";
ctx.fillRect(p.x - 4, p.y - 2, 3, 3);
ctx.fillRect(p.x + 4, p.y - 2, 3, 3);
  });

ctx.strokeStyle = "#62483e";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(clawX, 0);
ctx.lineTo(clawX, 54);
ctx.stroke();

ctx.fillStyle = "#735446";
ctx.fillRect(clawX - 16, 50, 32, 10);
ctx.beginPath();
ctx.moveTo(clawX - 14, 60);
ctx.lineTo(clawX - 22, 86);
ctx.lineTo(clawX - 6, 78);
ctx.fill();
ctx.beginPath();
ctx.moveTo(clawX + 14, 60);
ctx.lineTo(clawX + 22, 86);
ctx.lineTo(clawX + 6, 78);
ctx.fill();
}

function move(dir) {
clawX += dir * speed;
if (clawX < 30) clawX = 30;
if (clawX > 370) clawX = 370;
status.textContent = "lined up";
draw();
}

document.querySelector("#left").addEventListener("click", () => move(-1));
document.querySelector("#right").addEventListener("click", () => move(1));

document.querySelector("#drop").addEventListener("click", () => {
status.textContent = "drop is next. it just sits there for now";
});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") move(-1);
  if (e.key === "ArrowRight") move(1);
  if (e.key === " ") {
    e.preventDefault();
    status.textContent = "drop is next. it just sits there for now";
  }
});

draw();
