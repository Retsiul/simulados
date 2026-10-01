function embaralhar(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function criarRodada(materia) {
  return materia.map((questao) => {
    const opcoesOriginais = [...questao.opcoes];

    return {
      ...questao,
      opcoes: embaralhar(opcoesOriginais),
      respostaCorreta: opcoesOriginais[Number(questao.correta) - 1],
      respostasErradas: [],
      respondida: false,
    };
  });
}

const btnMatematica = document.querySelector("#btnMatematica");
const btnPortugues = document.querySelector("#btnPortugues");
const btnHistoria = document.querySelector("#btnHistoria");

const containerQuestoes = document.querySelector("#questoes");

function mostrarQuestoes(materia) {
  const rodada = criarRodada(materia);

  containerQuestoes.innerHTML = "";

  rodada.forEach((questao, index) => {
    const divQuestao = document.createElement("div");

    function renderizarQuestao(feedbackTexto = "") {
      divQuestao.innerHTML = `
        <h3>${index + 1}. ${questao.pergunta}</h3>

        <div class="opcoes">
          ${questao.opcoes
            .map(
              (opcao, i) => `
                <button
                  data-resposta="${opcao}"
                  ${
                    questao.respostasErradas.includes(opcao) ||
                    questao.respondida
                      ? "disabled"
                      : ""
                  }
                >
                  ${String.fromCharCode(65 + i)}) ${opcao}
                </button>
              `,
            )
            .join("")}
        </div>

        <p class="feedback">${feedbackTexto}</p>
      `;

      const botoes = divQuestao.querySelectorAll("button");

      botoes.forEach((botao) => {
        botao.addEventListener("click", () => {
          const resposta = botao.dataset.resposta;

          // Descobre a letra da resposta correta
          const indiceCorreto = questao.opcoes.indexOf(questao.respostaCorreta);

          const letraCorreta = String.fromCharCode(65 + indiceCorreto);

          if (resposta === questao.respostaCorreta) {
            questao.respondida = true;

            renderizarQuestao(
              `<p
              style="display:flex;
                 flex-direction:column;
                 gap:10px;
                 line-height:32px;
              width:fit-content;
              border:solid 1px blue;
                padding: 10px 16px;">✓ Correto! A resposta é ${letraCorreta}</br>${questao.gabarito} </p>`,
            );
          } else {
            questao.respostasErradas.push(resposta);

            questao.opcoes = embaralhar(questao.opcoes);

            renderizarQuestao(
              `<p
              style="display:flex;
              flex-direction:column;
              width:fit-content;
              border:solid 1px red;
                padding: 10px 16px;">
              ✗ Errado! A resposta correta era ${letraCorreta}
              </p>`,
            );
          }
        });
      });
    }

    containerQuestoes.appendChild(divQuestao);

    renderizarQuestao();
  });
}

btnMatematica.addEventListener("click", () => {
  mostrarQuestoes(matematica);
});

btnPortugues.addEventListener("click", () => {
  mostrarQuestoes(portugues);
});

btnHistoria.addEventListener("click", () => {
  mostrarQuestoes(historia);
});
