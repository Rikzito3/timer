document.addEventListener("DOMContentLoaded", function () {
  const timerDiv = document.querySelector(".timer");
  const totalTempoP = document.querySelector(".total");

  const iniciarBtn = document.querySelector(".iniciar");
  const pararBtn = document.querySelector(".parar");

  let timer;
  let totalSegundos = 600;
  let segundos = totalSegundos;

  atualizarDisplay();

  iniciarBtn.addEventListener("click", function () {
    if (!timer) {
      timer = setInterval(atualizarTimer, 1000);
    } else {
      clearInterval(timer);
      timer = null;
    }
  });

  pararBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    segundos = 0;
    atualizarDisplay();
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
