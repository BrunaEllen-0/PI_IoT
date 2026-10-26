document.addEventListener("DOMContentLoaded", () => {
  iniciarRelogioSincronizacao();
  configurarSelecaoEquipa();
  configurarSelecaoPrioridade();
  configurarBotoesAcao();
});

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
  setInterval(atualizarHorario, 1000);
}

function configurarSelecaoEquipa() {
  const opcoesEquipa = document.querySelectorAll(".team-option");

  opcoesEquipa.forEach((opcao) => {
    opcao.addEventListener("click", () => {
      if (opcao.classList.contains("disabled")) return;

      opcoesEquipa.forEach((opt) => opt.classList.remove("active"));
      opcao.classList.add("active");

      const radioInput = opcao.querySelector('input[type="radio"]');
      if (radioInput) {
        radioInput.checked = true;
      }
    });
  });
}

function configurarSelecaoPrioridade() {
  const botoesPrioridade = document.querySelectorAll(".priority-btn");

  botoesPrioridade.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoesPrioridade.forEach((btn) => btn.classList.remove("active-critica", "active"));

      const textoPrioridade = botao.textContent.trim().toUpperCase();
      if (textoPrioridade === "CRÍTICA") {
        botao.classList.add("active-critica");
      } else {
        botao.classList.add("active");
      }
    });
  });
}

function configurarBotoesAcao() {
  const btnConfirmar = document.querySelector(".btn-confirm");
  const btnCancelar = document.querySelector(".btn-cancel");

  if (btnConfirmar) {
    btnConfirmar.addEventListener("click", () => {
      const equipaAtiva = document.querySelector(".team-option.active");

      if (equipaAtiva) {
        const tituloElemento = equipaAtiva.querySelector(".team-details h3");
        const descricaoElemento = equipaAtiva.querySelector(".team-details p");
        const distVal = equipaAtiva.querySelector(".dist-val");
        const distTime = equipaAtiva.querySelector(".dist-time");

        const nomeEquipa = tituloElemento ? tituloElemento.textContent.trim() : "Equipe selecionada";
        
        let composicao = descricaoElemento ? descricaoElemento.textContent.trim() : "";
        composicao = composicao.replace("• Disponível", "").trim();

        const distTexto = distVal ? distVal.textContent.trim() : "";
        const tempoTexto = distTime ? distTime.textContent.trim() : "";
        const distanciaFinal = `${distTexto} — ${tempoTexto}`;

        const agora = new Date();
        const horaAtual = agora.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        const elNome = document.getElementById("modal-nome-equipe");
        const elResumo = document.getElementById("modal-equipe-resumo");
        const elComposicao = document.getElementById("modal-composicao");
        const elDistancia = document.getElementById("modal-distancia");
        const elHora = document.getElementById("modal-hora");

        if (elNome) elNome.textContent = nomeEquipa;
        if (elResumo) elResumo.textContent = nomeEquipa;
        if (elComposicao) elComposicao.textContent = composicao;
        if (elDistancia) elDistancia.textContent = distanciaFinal;
        if (elHora) elHora.textContent = horaAtual;
      }

      const modal = document.getElementById("modal-sucesso");
      if (modal) {
        modal.classList.remove("hidden");
      }
    });
  }

  if (btnCancelar) {
    btnCancelar.addEventListener("click", () => {
      if (confirm("Deseja cancelar o acionamento da equipe?")) {
        window.location.href = "pagina04.html";
      }
    });
  }
}

function fecharModal() {
  const modal = document.getElementById("modal-sucesso");
  if (modal) {
    modal.classList.add("hidden");
  }
}

function irParaAlertas() {
  window.location.href = "pagina04.html";
}