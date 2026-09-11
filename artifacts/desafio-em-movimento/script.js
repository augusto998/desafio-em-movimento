(() => {
  "use strict";

  const questions = [
    { category: "MATEMÁTICA", difficulty: "facil", text: "Quanto é 20% de 200?", options: ["20", "40", "60", "80"], correct: 1, explanation: "20% de 200 é igual a 40." },
    { category: "MATEMÁTICA", difficulty: "facil", text: "Uma equipe marcou 18 pontos em 3 rodadas iguais. Qual foi a média por rodada?", options: ["5 pontos", "6 pontos", "7 pontos", "9 pontos"], correct: 1, explanation: "18 dividido por 3 é igual a 6 pontos por rodada." },
    { category: "MATEMÁTICA", difficulty: "facil", text: "Uma pista tem 400 m. Quantas voltas completam 2,4 km?", options: ["4 voltas", "5 voltas", "6 voltas", "8 voltas"], correct: 2, explanation: "2.400 dividido por 400 é igual a 6 voltas." },
    { category: "MATEMÁTICA", difficulty: "medio", text: "Uma camiseta esportiva custa R$ 80 e está com 25% de desconto. Qual é o preço final?", options: ["R$ 20", "R$ 55", "R$ 60", "R$ 75"], correct: 2, explanation: "25% de R$ 80 é R$ 20; portanto, R$ 80 menos R$ 20 é R$ 60." },
    { category: "MATEMÁTICA", difficulty: "medio", text: "Se 3 atletas percorrem 12 km juntos, quantos quilômetros cada um percorre em média?", options: ["3 km", "4 km", "6 km", "9 km"], correct: 1, explanation: "12 dividido por 3 é igual a 4 km por atleta, em média." },
    { category: "MATEMÁTICA", difficulty: "medio", text: "Uma turma teve 16 acertos em 20 perguntas. Qual foi a porcentagem de acerto?", options: ["60%", "70%", "80%", "90%"], correct: 2, explanation: "16 dividido por 20, vezes 100, resulta em 80%." },
    { category: "MATEMÁTICA", difficulty: "medio", text: "Um cronômetro marca 2 minutos e 30 segundos. Quantos segundos são ao todo?", options: ["130 s", "140 s", "150 s", "230 s"], correct: 2, explanation: "2 minutos são 120 segundos; 120 mais 30 é igual a 150." },
    { category: "MATEMÁTICA", difficulty: "dificil", text: "Uma pista oval tem 250 m. Qual distância é percorrida em 12 voltas?", options: ["2 km", "2,5 km", "3 km", "3,5 km"], correct: 2, explanation: "250 vezes 12 é igual a 3.000 m, ou 3 km." },
    { category: "MATEMÁTICA", difficulty: "dificil", text: "As notas de um atleta foram 7, 8, 9 e 10. Qual é a média dessas notas?", options: ["7,5", "8", "8,5", "9"], correct: 2, explanation: "A soma é 34; 34 dividido por 4 é igual a 8,5." },
    { category: "MATEMÁTICA", difficulty: "dificil", text: "Uma equipe aumentou seu tempo de treino de 40 para 50 minutos. Qual foi o aumento percentual?", options: ["10%", "20%", "25%", "30%"], correct: 2, explanation: "O aumento foi de 10 minutos; 10 dividido por 40 é 25%." },

    { category: "EDUCAÇÃO FÍSICA", difficulty: "facil", text: "Qual é um benefício comum da atividade física regular?", options: ["Diminuir a disposição", "Melhorar a saúde", "Impedir o descanso", "Substituir a alimentação"], correct: 1, explanation: "A atividade física regular contribui para a saúde física e mental." },
    { category: "EDUCAÇÃO FÍSICA", difficulty: "facil", text: "Qual atitude é mais segura durante um alongamento?", options: ["Fazer movimentos bruscos", "Prender a respiração", "Respeitar os limites do corpo", "Alongar apenas um lado"], correct: 2, explanation: "Respeitar os limites do corpo torna o movimento mais seguro." },
    { category: "EDUCAÇÃO FÍSICA", difficulty: "facil", text: "Qual capacidade física está ligada a sustentar um esforço por mais tempo?", options: ["Resistência", "Flexibilidade", "Velocidade", "Agilidade"], correct: 0, explanation: "Resistência é a capacidade de manter um esforço por determinado período." },
    { category: "EDUCAÇÃO FÍSICA", difficulty: "medio", text: "Qual sistema transporta oxigênio para os músculos durante o exercício?", options: ["Digestório", "Cardiovascular", "Ósseo", "Tegumentar"], correct: 1, explanation: "O sistema cardiovascular leva sangue e oxigênio aos músculos." },
    { category: "EDUCAÇÃO FÍSICA", difficulty: "medio", text: "No voleibol, quantos toques uma equipe pode dar antes de enviar a bola para o outro lado?", options: ["1", "2", "3", "4"], correct: 2, explanation: "A regra permite até 3 toques por equipe." },
    { category: "EDUCAÇÃO FÍSICA", difficulty: "medio", text: "Qual atividade desenvolve principalmente a flexibilidade?", options: ["Alongamento", "Sprint", "Arremesso", "Salto vertical"], correct: 0, explanation: "O alongamento trabalha a amplitude dos movimentos e a flexibilidade." },
    { category: "EDUCAÇÃO FÍSICA", difficulty: "medio", text: "O que é importante fazer antes de uma atividade mais intensa?", options: ["Aquecimento", "Ficar imóvel", "Pular refeições", "Evitar água"], correct: 0, explanation: "O aquecimento prepara o corpo gradualmente para o esforço." },
    { category: "EDUCAÇÃO FÍSICA", difficulty: "dificil", text: "Em uma corrida, qual combinação ajuda a controlar a intensidade do esforço?", options: ["Respiração e percepção de esforço", "Apenas a torcida", "Somente a velocidade final", "Prender a respiração"], correct: 0, explanation: "Respiração e percepção de esforço ajudam a ajustar o ritmo com segurança." },
    { category: "EDUCAÇÃO FÍSICA", difficulty: "dificil", text: "Qual modalidade usa uma raquete e uma peteca?", options: ["Handebol", "Badminton", "Basquete", "Atletismo"], correct: 1, explanation: "No badminton, a peteca é golpeada com uma raquete." },
    { category: "EDUCAÇÃO FÍSICA", difficulty: "dificil", text: "Força, velocidade, resistência e flexibilidade são exemplos de quê?", options: ["Regras", "Capacidades físicas", "Equipamentos", "Posições"], correct: 1, explanation: "Elas são capacidades físicas treinadas em diferentes atividades." },

    { category: "MISTA", difficulty: "facil", text: "Uma pessoa caminhou 2 km pela manhã e 3 km à tarde. Qual distância percorreu?", options: ["1 km", "4 km", "5 km", "6 km"], correct: 2, explanation: "2 mais 3 é igual a 5 km." },
    { category: "MISTA", difficulty: "facil", text: "Um time venceu 3 de 5 partidas. Qual foi seu aproveitamento?", options: ["30%", "40%", "60%", "80%"], correct: 2, explanation: "3 vitórias em 5 partidas correspondem a 60%." },
    { category: "MISTA", difficulty: "facil", text: "Para começar uma corrida, qual atitude combina cálculo e cuidado?", options: ["Ignorar o percurso", "Conhecer a distância e aquecer", "Correr sem beber água", "Acelerar sem parar"], correct: 1, explanation: "Conhecer a distância ajuda a planejar e aquecer prepara o corpo." },
    { category: "MISTA", difficulty: "medio", text: "Um atleta percorreu 2 km em 10 minutos. Qual foi sua velocidade média em km/h?", options: ["6 km/h", "10 km/h", "12 km/h", "20 km/h"], correct: 2, explanation: "10 minutos são 1/6 de hora; 2 dividido por 1/6 é igual a 12 km/h." },
    { category: "MISTA", difficulty: "medio", text: "A frequência cardíaca de uma pessoa foi 70 bpm em repouso e 110 bpm após exercício. Qual foi o aumento?", options: ["30 bpm", "40 bpm", "50 bpm", "180 bpm"], correct: 1, explanation: "110 menos 70 é igual a 40 batimentos por minuto." },
    { category: "MISTA", difficulty: "medio", text: "Uma aula tem 50 minutos. Se 10 minutos são de aquecimento, qual porcentagem sobra para a parte principal?", options: ["20%", "40%", "70%", "80%"], correct: 3, explanation: "Sobram 40 minutos; 40 dividido por 50 é 80%." },
    { category: "MISTA", difficulty: "medio", text: "Quatro amigos fizeram 15 agachamentos cada. Quantos agachamentos fizeram juntos?", options: ["19", "45", "60", "75"], correct: 2, explanation: "4 vezes 15 é igual a 60 agachamentos." },
    { category: "MISTA", difficulty: "dificil", text: "Uma corredora percorre 400 m em 2 minutos. Mantendo o ritmo, quanto percorre em 15 minutos?", options: ["2 km", "2,5 km", "3 km", "3,5 km"], correct: 2, explanation: "15 minutos têm 7,5 períodos de 2 minutos; 7,5 vezes 400 m é 3.000 m." },
    { category: "MISTA", difficulty: "dificil", text: "Um treino tem 5 blocos de 4 minutos de esforço e 2 minutos de descanso. Qual é a duração total?", options: ["20 min", "25 min", "30 min", "35 min"], correct: 2, explanation: "Cada bloco dura 6 minutos; 5 vezes 6 é igual a 30 minutos." },
    { category: "MISTA", difficulty: "dificil", text: "Em um grupo de 25 alunos, 20 praticam algum esporte. Qual porcentagem pratica esporte?", options: ["60%", "70%", "80%", "90%"], correct: 2, explanation: "20 dividido por 25, vezes 100, resulta em 80%." }
  ];

  const physicalChallenges = [
    "Faça 10 polichinelos, respeitando seu ritmo.",
    "Faça 10 agachamentos com atenção à postura.",
    "Mantenha o equilíbrio em uma perna por 15 segundos."
  ];

  const phases = [
    { name: "AQUECIMENTO", difficulty: "facil", count: 3, points: 100, time: 10 },
    { name: "DESAFIO", difficulty: "medio", count: 4, points: 150, time: 10 },
    { name: "FINAL", difficulty: "dificil", count: 3, points: 200, time: 15 }
  ];

  const state = {
    view: "inicio",
    player: "",
    question: 0,
    score: 0,
    streak: 0,
    maxStreak: 0,
    correct: 0,
    seconds: 0,
    timer: null,
    answered: false,
    physicalOpen: false,
    bonus: false,
    sound: true,
    answerTimes: [],
    gameQuestions: []
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  }

  function buildGameQuestions() {
    const deck = phases.flatMap((phase) => shuffle(questions.filter((item) => item.difficulty === phase.difficulty)).slice(0, phase.count));
    return deck.map((question, index) => {
      if (index === 1 || index === 5 || index === 8) {
        return { ...question, challenge: physicalChallenges[index === 1 ? 0 : index === 5 ? 1 : 2] };
      }
      return question;
    });
  }

  function currentPhase() {
    if (state.question < 3) return phases[0];
    if (state.question < 7) return phases[1];
    return phases[2];
  }

  function showView(view) {
    state.view = view;
    $$(".view").forEach((section) => {
      const active = section.id === `view-${view}`;
      section.hidden = !active;
      section.classList.toggle("is-visible", active);
    });
    $$(".nav-link").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
    if (view === "ranking") renderRanking();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function startGame() {
    const input = $("#player-name");
    const name = input.value.trim();
    if (!name) {
      input.focus();
      $("#name-hint").textContent = "Digite um nome para entrar na pista.";
      $("#name-hint").style.color = "var(--coral-dark)";
      input.animate([{ transform: "translateX(-4px)" }, { transform: "translateX(4px)" }, { transform: "translateX(0)" }], { duration: 220 });
      return;
    }
    state.player = name.slice(0, 20);
    state.question = 0;
    state.score = 0;
    state.streak = 0;
    state.maxStreak = 0;
    state.correct = 0;
    state.answerTimes = [];
    state.gameQuestions = buildGameQuestions();
    $("#game-player").textContent = state.player;
    showView("jogo");
    renderQuestion();
  }

  function renderQuestion() {
    clearInterval(state.timer);
    state.answered = false;
    state.physicalOpen = false;
    state.bonus = false;
    const question = state.gameQuestions[state.question];
    const phase = currentPhase();
    $("#round-number").textContent = String(state.question + 1).padStart(2, "0");
    $("#phase-name").textContent = phase.name;
    $("#progress-label").textContent = `${state.question + 1} de 10`;
    $("#progress-fill").style.width = `${((state.question + 1) / 10) * 100}%`;
    $("#question-category").textContent = question.category;
    $("#question-index").textContent = `PERGUNTA ${String(state.question + 1).padStart(2, "0")} · ${phase.points} PONTOS`;
    $("#question-text").textContent = question.text;
    $("#score-value").textContent = String(state.score).padStart(3, "0");
    $("#streak-value").textContent = state.streak;
    $("#answer-feedback").textContent = "";
    $("#answer-feedback").className = "answer-feedback";
    $("#next-question").disabled = true;
    $("#next-question").innerHTML = state.question === 9 ? "Ver resultado <span aria-hidden=\"true\">↗</span>" : "Próxima <span aria-hidden=\"true\">→</span>";
    $("#physical-toggle").disabled = true;
    $("#physical-toggle").innerHTML = "Adicionar desafio físico <span aria-hidden=\"true\">+</span>";
    $("#complete-physical").disabled = true;
    $("#complete-physical").textContent = "Marcar como feito ✓";
    $("#bonus-earned").hidden = true;
    $("#physical-panel").classList.remove("is-open");
    $("#movement-copy").textContent = "O desafio aparece depois da sua resposta.";

    const options = $("#options");
    options.innerHTML = "";
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option";
      button.dataset.index = index;
      button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-copy">${option}</span>`;
      button.addEventListener("click", () => answerQuestion(index));
      options.appendChild(button);
    });

    state.seconds = phase.time;
    state.currentLimit = phase.time;
    updateTimer();
    state.timer = window.setInterval(() => {
      state.seconds -= 1;
      updateTimer();
      if (state.seconds <= 0) {
        clearInterval(state.timer);
        answerQuestion(-1);
      }
    }, 1000);
  }

  function updateTimer() {
    const timer = $("#timer");
    timer.textContent = String(state.seconds).padStart(2, "0");
    timer.classList.toggle("is-danger", state.seconds <= 3);
    timer.setAttribute("aria-label", `${state.seconds} segundos restantes`);
  }

  function answerQuestion(selected) {
    if (state.answered) return;
    state.answered = true;
    clearInterval(state.timer);
    const question = state.gameQuestions[state.question];
    const phase = currentPhase();
    const isCorrect = selected === question.correct;
    state.answerTimes.push(state.currentLimit - Math.max(state.seconds, 0));

    $$(".option").forEach((option, index) => {
      option.disabled = true;
      if (index === question.correct) option.classList.add("is-correct");
      if (index === selected && !isCorrect) option.classList.add("is-wrong");
    });

    const feedback = $("#answer-feedback");
    if (isCorrect) {
      state.correct += 1;
      state.streak += 1;
      state.maxStreak = Math.max(state.maxStreak, state.streak);
      state.score += phase.points;
      let comboMessage = "";
      if (state.streak === 3) {
        state.score += 50;
        comboMessage = " 🔥 COMBO! +50 pontos.";
      } else if (state.streak === 5) {
        state.score += 100;
        comboMessage = " 🔥🔥 SUPER COMBO! +100 pontos.";
      }
      feedback.textContent = `✅ CORRETO! +${phase.points} pontos.${comboMessage} ${question.explanation}`;
      feedback.className = "answer-feedback correct";
      $("#streak-pill").animate([{ transform: "scale(1.06)" }, { transform: "scale(1)" }], { duration: 280 });
    } else {
      state.streak = 0;
      const correctAnswer = question.options[question.correct];
      feedback.textContent = selected === -1
        ? `⏰ TEMPO ESGOTADO! A resposta correta era ${correctAnswer}. ${question.explanation}`
        : `❌ INCORRETO! A resposta correta era ${correctAnswer}. ${question.explanation}`;
      feedback.className = "answer-feedback wrong";
    }

    $("#score-value").textContent = String(state.score).padStart(3, "0");
    $("#streak-value").textContent = state.streak;
    $("#physical-toggle").disabled = !question.challenge;
    $("#next-question").disabled = false;
  }

  function nextQuestion() {
    if (!state.answered) return;
    if (state.question === 9) {
      finishGame();
      return;
    }
    state.question += 1;
    renderQuestion();
  }

  function togglePhysical() {
    const question = state.gameQuestions[state.question];
    if (!state.answered || !question.challenge) return;
    state.physicalOpen = !state.physicalOpen;
    const panel = $("#physical-panel");
    panel.classList.toggle("is-open", state.physicalOpen);
    if (state.physicalOpen) {
      $("#movement-copy").textContent = question.challenge;
      $("#complete-physical").disabled = state.bonus;
      $("#physical-toggle").textContent = "Desafio aberto −";
    } else {
      $("#movement-copy").textContent = "O desafio aparece depois da sua resposta.";
      $("#complete-physical").disabled = true;
      $("#physical-toggle").innerHTML = "Adicionar desafio físico <span aria-hidden=\"true\">+</span>";
    }
  }

  function completePhysical() {
    if (!state.physicalOpen || state.bonus) return;
    state.bonus = true;
    state.score += 25;
    $("#score-value").textContent = String(state.score).padStart(3, "0");
    $("#complete-physical").disabled = true;
    $("#complete-physical").textContent = "Desafio concluído ✓";
    $("#bonus-earned").hidden = false;
    showToast("Bônus de movimento: +25 pontos!");
  }

  function resultMessage() {
    if (state.score >= 1500) return ["🏆 Você é um campeão!", "RITMO<br />DE CAMPEÃO"];
    if (state.score >= 1000) return ["🔥 Excelente desempenho!", "DESEMPENHO<br />EXCELENTE"];
    if (state.score >= 500) return ["👏 Bom trabalho!", "BOM<br />TRABALHO"];
    return ["💪 Continue treinando!", "CONTINUE<br />EM MOVIMENTO"];
  }

  function finishGame() {
    const percentage = Math.round((state.correct / 10) * 100);
    const record = saveScore();
    const ranking = getRanking();
    const rank = Math.max(1, ranking.findIndex((item) => item.id === record.id) + 1);
    const [message, medal] = resultMessage();
    $("#final-player").textContent = state.player;
    $("#final-score").textContent = String(state.score).padStart(3, "0");
    $("#final-correct").textContent = `${state.correct}/10`;
    $("#final-errors").textContent = 10 - state.correct;
    $("#final-percentage").textContent = `${percentage}%`;
    $("#final-streak").textContent = state.maxStreak;
    $("#final-rank").textContent = `#${rank}`;
    $("#result-subtitle").textContent = message;
    $("#result-medal b").innerHTML = medal;
    showView("resultado");
  }

  function readStoredRanking() {
    try {
      const stored = JSON.parse(localStorage.getItem("desafio-ranking") || "[]");
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  }

  function getRanking() {
    return readStoredRanking().sort((a, b) => b.points - a.points || b.timestamp - a.timestamp).slice(0, 10);
  }

  function saveScore() {
    const stored = readStoredRanking();
    const timestamp = Date.now();
    const record = {
      id: `${timestamp}-${Math.random().toString(36).slice(2)}`,
      name: state.player,
      points: state.score,
      correct: state.correct,
      percentage: Math.round((state.correct / 10) * 100),
      maxStreak: state.maxStreak,
      date: new Date(timestamp).toLocaleDateString("pt-BR"),
      timestamp
    };
    stored.push(record);
    const sorted = stored.sort((a, b) => b.points - a.points || b.timestamp - a.timestamp).slice(0, 10);
    localStorage.setItem("desafio-ranking", JSON.stringify(sorted));
    const best = Number(localStorage.getItem("desafio-melhor-pontuacao") || 0);
    if (state.score > best) localStorage.setItem("desafio-melhor-pontuacao", String(state.score));
    return record;
  }

  function renderRanking() {
    const leaderboard = $("#leaderboard");
    leaderboard.innerHTML = "";
    const ranking = getRanking();
    if (!ranking.length) {
      leaderboard.innerHTML = '<div class="ranking-empty"><strong>A pista ainda está livre.</strong><span>Jogue uma partida para registrar a primeira marca neste navegador.</span></div>';
      return;
    }
    ranking.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = `rank-row${item.name === state.player ? " is-you" : ""}`;
      const initials = item.name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();
      const badge = index === 0 ? "1º LUGAR" : index === 1 ? "2º LUGAR" : index === 2 ? "3º LUGAR" : "";
      row.innerHTML = `<span class="rank-number">${String(index + 1).padStart(2, "0")}</span><span class="rank-name"><span class="avatar">${initials}</span>${item.name}${item.name === state.player ? " · você" : ""}</span><span class="rank-detail">${item.correct}/10 · ${item.percentage}%</span><strong class="rank-points">${item.points}<small> pts</small></strong><span class="rank-badge">${badge}</span>`;
      leaderboard.appendChild(row);
    });
  }

  $$(".nav-link, [data-view]").forEach((button) => button.addEventListener("click", (event) => {
    const view = event.currentTarget.dataset.view;
    if (view) {
      event.preventDefault();
      showView(view);
    }
  }));
  $("#start-game").addEventListener("click", startGame);
  $("#player-name").addEventListener("keydown", (event) => { if (event.key === "Enter") startGame(); });
  $("#next-question").addEventListener("click", nextQuestion);
  $("#physical-toggle").addEventListener("click", togglePhysical);
  $("#complete-physical").addEventListener("click", completePhysical);
  $("#play-again").addEventListener("click", () => { $("#player-name").value = state.player; showView("inicio"); startGame(); });
  $("#clear-ranking").addEventListener("click", () => {
    if (!getRanking().length) {
      showToast("O ranking já está vazio.");
      return;
    }
    if (window.confirm("Tem certeza que deseja limpar o ranking salvo neste navegador?")) {
      localStorage.removeItem("desafio-ranking");
      localStorage.removeItem("desafio-melhor-pontuacao");
      renderRanking();
      showToast("Ranking limpo.");
    }
  });
  $("#sound-toggle").addEventListener("click", (event) => {
    state.sound = !state.sound;
    event.currentTarget.classList.toggle("is-muted", !state.sound);
    event.currentTarget.setAttribute("aria-pressed", String(state.sound));
    event.currentTarget.setAttribute("aria-label", state.sound ? "Desligar sons" : "Ligar sons");
  });
  window.addEventListener("beforeunload", () => clearInterval(state.timer));
  renderRanking();
})();