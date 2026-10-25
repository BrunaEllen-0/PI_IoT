document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o relógio em tempo real
  iniciarRelogioSincronizacao();

  // Exemplo de inicialização com dados (você pode alterar estes valores)
  atualizarCabosMonitorados(312, 360);
  atualizarStatusGeral({ normais: 41, alerta: 5, criticos: 2 });
  atualizarSensores({ corrente: 184, vibracao: 176, bateriaBaixa: 7, offline: 3 });
});

/**
 * 1. RELÓGIO DE SINCRONIZAÇÃO EM TEMPO REAL
 */
function iniciarRelogioSincronizacao() {
  const syncTimeElement = document.querySelector(".sync-time");

  function atualizarHorario() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    if (syncTimeElement) {
      syncTimeElement.textContent = `${horas}:${minutos}:${segundos}`;
    }
  }

  atualizarHorario();
  setInterval(atualizarHorario, 1000); // Atualiza a cada 1 segundo
}

/**
 * 2. ATUALIZAR GRÁFICO CIRCULAR (DONUT) DE CABOS MONITORADOS
 * @param {number} cobertos - Quilômetros de cabos cobertos
 * @param {number} total - Quilômetros totais da rede
 */
function atualizarCabosMonitorados(cobertos, total) {
  const porcentagem = Math.round((cobertos / total) * 100);
  const graus = Math.round((porcentagem / 100) * 360);

  // Atualiza os números no centro do gráfico
  const numberEl = document.querySelector(".chart-center .number");
  const labelEl = document.querySelector(".chart-center .label");
  const footerEl = document.querySelector(".chart-footer");
  const donutChart = document.querySelector(".donut-chart");

  if (numberEl) numberEl.textContent = cobertos;
  if (labelEl) labelEl.textContent = `de ${total} km cobertos`;
  if (footerEl) footerEl.textContent = `${porcentagem}% da rede prioritária com sensoriamento ativo`;

  // Atualiza visualmente o círculo (CSS conic-gradient)
  if (donutChart) {
    donutChart.style.background = `conic-gradient(#2EB4AF 0deg ${graus}deg, #1E293B ${graus}deg 360deg)`;
  }
}

/**
 * 3. ATUALIZAR CARD DE STATUS GERAL
 * @param {Object} status - Objeto contendo { normais, alerta, criticos }
 */
function atualizarStatusGeral({ normais, alerta, criticos }) {
  const normaisEl = document.querySelector(".text-success");
  const alertaEl = document.querySelector(".data-list .text-warning");
  const criticosEl = document.querySelector(".data-list .text-danger");

  if (normaisEl) normaisEl.textContent = normais;
  if (alertaEl) alertaEl.textContent = alerta;
  if (criticosEl) criticosEl.textContent = criticos;
}

/**
 * 4. ATUALIZAR CARD DE SENSORES EM CAMPO
 * @param {Object} sensores - Objeto com os totais de cada tipo de sensor
 */
function atualizarSensores({ corrente, vibracao, bateriaBaixa, offline }) {
  const items = document.querySelectorAll(".cards-grid .status-card:nth-child(3) .item-value");

  if (items.length >= 4) {
    items[0].innerHTML = `${corrente} <small>ativos</small>`;
    items[1].innerHTML = `${vibracao} <small>ativos</small>`;
    items[2].innerHTML = `${bateriaBaixa} <small>unidades</small>`;
    items[3].innerHTML = `${offline} <small>unidades</small>`;
  }
}
