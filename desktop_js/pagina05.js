document.addEventListener("DOMContentLoaded", () => {
  iniciarRelogio();
  renderizarGraficoLeituras();
});

/**
 * RELÓGIO DE SINCRONIZAÇÃO EM TEMPO REAL
 */
function iniciarRelogio() {
  const syncElement = document.querySelector(".sync-time");
  
  function atualizar() {
    const agora = new Date();
    const h = String(agora.getHours()).padStart(2, "0");
    const m = String(agora.getMinutes()).padStart(2, "0");
    const s = String(agora.getSeconds()).padStart(2, "0");
    if (syncElement) syncElement.textContent = `${h}:${m}:${s}`;
  }

  atualizar();
  setInterval(atualizar, 1000);
}

/**
 * GRÁFICO DE CORRENTE E VIBRAÇÃO (CHART.JS)
 */
function renderizarGraficoLeituras() {
  const ctx = document.getElementById("sensorReadingsChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["09/09", "11/09", "13/09", "15/09"],
      datasets: [
        {
          label: "Corrente elétrica",
          data: [60, 62, 60, 10],
          borderColor: "#2EB4AF",
          backgroundColor: "rgba(46, 180, 175, 0.1)",
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 0
        },
        {
          label: "Vibração",
          data: [5, 6, 4, 30],
          borderColor: "#F59E0B",
          backgroundColor: "transparent",
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { color: "rgba(255, 255, 255, 0.05)" },
          ticks: { color: "#64748B", font: { size: 10 } }
        },
        y: {
          min: 0,
          max: 100,
          grid: { color: "rgba(255, 255, 255, 0.05)" },
          ticks: { 
            color: "#64748B", 
            font: { size: 10 },
            callback: (val) => val + "%"
          }
        }
      }
    }
  });
}
