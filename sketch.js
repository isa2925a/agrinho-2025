let carX = 0;
let angle = 0;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER);
}

function draw() {
  // Gradiente de fundo representando céu
  let sky1 = color(135, 206, 235);
  let sky2 = color(176, 224, 230);
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(sky1, sky2, inter);
    stroke(c);
    line(0, y, width, y);
  }

  // Campo
  drawCountryside();
  
  
  // Estrada conectando
  drawRoad();
  
  // Elemento de conexão (caminhão em movimento)
  drawMovingTruck();
  
  // Sol animado
  drawSun();
  
  // Texto do tema
  drawBanner();
}

function drawCountryside() {
  // Campos agrícolas
  fill(34, 139, 34);
  rect(0, height/2, width/2, height/2);
  
  // Fazenda
  fill(139, 69, 19);
  rect(100, 250, 80, 60);
  fill(210);
  triangle(100, 250, 180, 250, 140, 200);
  
  // Árvore
  fill(139, 69, 19);
  rect(250, 270, 20, 40);
  fill(0, 100, 0);
  ellipse(260, 250, 50, 60);
  
  // Animação moinho de vento
  drawWindmill(350, 270);
}

function drawCity() {
  // Prédios
  fill(105, 105, 105);
  rect(width/2 + 50, 150, 60, 200);
  rect(width/2 + 150, 180, 50, 170);
  rect(width/2 + 250, 160, 70, 190);
  
  // Janelas
  fill(255, 255, 0);
  for(let y = 160; y < 340; y += 30) {
    for(let x = width/2 + 60; x < width/2 + 100; x += 20) {
      rect(x, y, 10, 15);
    }
  }
}

function drawRoad() {
  // Estrada principal
  fill(50);
  rect(0, height-80, width, 80);
  
  // Linhas divisórias
  fill(255, 255, 0);
  for(let x = 0; x < width; x += 60) {
    rect(x, height-45, 40, 10);
  }
}

function drawMovingTruck() {
  // Animação do caminhão
  fill(255, 0, 0);
  rect(carX, height-110, 60, 30);
  fill(0);
  ellipse(carX+15, height-80, 30, 30);
  ellipse(carX+45, height-80, 30, 30);
  carX += 2;
  if(carX > width) carX = -60;
}

function drawSun() {
  // Sol animado
  fill(255, 215, 0);
  noStroke();
  angle += 0.02;
  let sunX = width/4 + cos(angle) * 10;
  let sunY = 100 + sin(angle) * 10;
  ellipse(sunX, sunY, 60, 60);
}

function drawWindmill(x, y) {
  // Torre do moinho
  fill(139);
  rect(x, y, 10, 50);
  
  // Pás animadas
  push();
  translate(x+5, y);
  rotate(angle * 3);
  for(let i = 0; i < 4; i++) {
    fill(255);
    rect(0, 0, 40, 10);
    rotate(HALF_PI);
  }
  pop();
}

function drawBanner() {
  // Faixa com o título
  fill(255, 50);
  rect(0, 20, width, 60);
  fill(0);
  textSize(24);
  textStyle(BOLD);
  text("Festejando a Conexão Campo-Cidade", width/2, 60);
}

function mouseClicked() {
  // Adiciona elementos ao clicar
  if(mouseX < width/2) {
    // Adiciona árvore no campo
    fill(0, random(100, 200), 0);
    ellipse(mouseX, mouseY, 30, 40);
  } else {
    // Adiciona janela na cidade
    fill(random(200, 255), random(200, 255), 0);
    rect(mouseX, mouseY, 10, 15);
  }
}