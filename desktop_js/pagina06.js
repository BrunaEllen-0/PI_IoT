document.addEventListener("DOMContentLoaded", () => {
  iniciarRelogioSincronizacao();
  configurarSelecaoEquipa();
  configurarSelecaoPrioridade();
  configurarBotoesAcao();
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
  setInterval(atualizarHorario, 1000);
}

/**
 * 2. SELEÇÃO INTERATIVA DE EQUIPA
 */
function configurarSelecaoEquipa() {
  const opcoesEquipa = document.querySelectorAll(".team-option");

  opcoesEquipa.forEach((opcao) => {
    opcao.addEventListener("click", () => {
      // Ignora equipas ocupadas/desativadas
      if (opcao.classList.contains("disabled")) return;

      // Remove o estado ativo de todas as opções
      opcoesEquipa.forEach((opt) => opt.classList.remove("active"));

      // Adiciona o estado ativo à opção selecionada
      opcao.classList.add("active");

      // Marca o radio button correspondente
      const radioInput = opcao.querySelector('input[type="radio"]');
      if (radioInput) {
        radioInput.checked = true;
      }
    });
  });
}

/**
 * 3. SELETOR DE PRIORIDADE DO DESPACHO
 */
function configurarSelecaoPrioridade() {
  const botoesPrioridade = document.querySelectorAll(".priority-btn");

  botoesPrioridade.forEach((botao) => {
    botao.addEventListener("click", () => {
      // Remove todas as classes de destaque anteriores
      botoesPrioridade.forEach((btn) => {
        btn.classList.remove("active-critica", "active");
      });

      // Aplica a classe correspondente ao nível de prioridade selecionado
      const textoPrioridade = botao.textContent.trim().toUpperCase();
      if (textoPrioridade === "CRÍTICA") {
        botao.classList.add("active-critica");
      } else {
        botao.classList.add("active");
      }
    });
  });
}

/**
 * 4. BOTÕES DE AÇÃO (CONFIRMAR E CANCELAR)
 */
function configurarBotoesAcao() {
  const btnConfirmar = document.querySelector(".btn-confirm");
  const btnCancelar = document.querySelector(".btn-cancel");

  if (btnConfirmar) {
    btnConfirmar.addEventListener("click", () => {
      const equipaAtiva = document.querySelector(".team-option.active .team-details h3");
      const nomeEquipa = equipaAtiva ? equipaAtiva.textContent : "Equipa selecionada";

      // Exemplo de confirmação de envio do despacho
      alert(`✅ Despacho confirmado com sucesso!\n\n${nomeEquipa} foi acionada e os alertas automáticos foram enviados.`);
    });
  }

  if (btnCancelar) {
    btnCancelar.addEventListener("click", () => {
      if (confirm("Deseja cancelar o acionamento da equipa?")) {
        window.history.back();
      }
    });
  }
}
/**
 * SELETOR DE PRIORIDADE DO DESPACHO
 */
function configurarSelecaoPrioridade() {
  const botoesPrioridade = document.querySelectorAll(".priority-btn");

  botoesPrioridade.forEach((botao) => {
    botao.addEventListener("click", () => {
      // Remove a seleção de todos os botões
      botoesPrioridade.forEach((btn) => btn.classList.remove("active", "active-critica"));

      // Adiciona o destaque vermelho ao botão clicado
      botao.classList.add("active");
    });
  });
}
