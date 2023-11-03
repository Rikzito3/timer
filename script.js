document.addEventListener("DOMContentLoaded", function () {
  const timerDiv = document.querySelector(".timer");
  const totalTempoP = document.querySelector(".total");

  const iniciarBtn = document.querySelector(".iniciar");
  const pararBtn = document.querySelector(".parar");
  const imagemIniciar = document.querySelector(".iniciar img");
  const originalSvg =
    '<svg fill="rgb(65, 65, 228)" viewBox="0 0 16 16" class="comecar"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>';

  let timer;
  let totalSegundos = 600;
  let segundos = totalSegundos;
  let isRunning = false;

  atualizarDisplay();

  iniciarBtn.addEventListener("click", function () {
    if (!timer) {
      iniciarBtn.innerHTML =
        '<img class="pausar" src="assets/pause-fill.svg" alt="Pausar">';
      if (!isRunning) {
        totalSegundos = 600;
        segundos = totalSegundos;
      }
      timer = setInterval(atualizarTimer, 1000);
    } else {
      iniciarBtn.innerHTML = originalSvg;
      clearInterval(timer);
      timer = null;
    }
    isRunning = !isRunning;
  });

  pararBtn.addEventListener("click", function () {
    iniciarBtn.innerHTML = originalSvg;
    clearInterval(timer);
    timer = null;
    totalSegundos = 0;
    segundos = totalSegundos;
    atualizarDisplay();
    isRunning = false;
  });

  function atualizarTimer() {
    if (segundos > 0) {
      segundos--;
      atualizarDisplay();
    } else {
      clearInterval(timer);
      timer = null;
      segundos = totalSegundos;
      atualizarDisplay();
      isRunning = false;
    }
  }

  function atualizarDisplay() {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    timerDiv.textContent = `${pad(minutos)}:${pad(segundosRestantes)}`;
    totalTempoP.textContent = `Total: ${formatarTempo(totalSegundos)}`;
  }

  function pad(valor) {
    return valor < 10 ? `0${valor}` : valor;
  }

  function formatarTempo(totalSegundos) {
    const totalMinutos = Math.floor(totalSegundos / 60);
    const totalSegundosRestantes = totalSegundos % 60;
    return `${pad(totalMinutos)}:${pad(totalSegundosRestantes)}`;
  }
});
