const numParticles = 100;
const positions = new Array(numParticles);
const spacing = 8;
const amplitude = 15;
const freq = 2;
let waveSpeed = 1.5;
let time = 0;

const longCanvas = document.getElementById("longitudinalCanvas");
const longCtx = longCanvas.getContext("2d");

const speedSlider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");

// スライダーのイベントで速度変更
speedSlider.addEventListener("input", () => {
  waveSpeed = parseFloat(speedSlider.value);
  speedValue.textContent = waveSpeed.toFixed(1);
});

// 粒子の初期位置を設定
for (let i = 0; i < numParticles; i++) {
  positions[i] = i * spacing;
}

function animate() {
  requestAnimationFrame(animate);
  time += 0.02;

  longCtx.clearRect(0, 0, longCanvas.width, longCanvas.height);

  const centerY = longCanvas.height / 2;

  // 疎密波の表示（粒子の横方向振動）
  for (let i = 0; i < numParticles; i++) {
    const phase = (i / numParticles) * 2 * Math.PI;
    const dx = amplitude * Math.sin(2 * Math.PI * freq * time - phase * waveSpeed);
    const x = positions[i] + dx;

    longCtx.beginPath();
    longCtx.arc(x, centerY, 3, 0, Math.PI * 2);
    longCtx.fillStyle = "blue";
    longCtx.fill();
  }
}

animate();
