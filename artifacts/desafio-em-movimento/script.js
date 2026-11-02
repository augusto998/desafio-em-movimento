import { questionBank } from "./question-bank.js";

(() => {
  "use strict";

  const enemSources = [
    { year: 2023, day: 1, code: "CD1", area: "linguagens-humanas" },
    { year: 2023, day: 1, code: "CD2", area: "linguagens-humanas" },
    { year: 2023, day: 2, code: "CD5", area: "natureza-matematica" },
    { year: 2023, day: 2, code: "CD6", area: "natureza-matematica" },
    { year: 2024, day: 1, code: "CD1", area: "linguagens-humanas" },
    { year: 2024, day: 1, code: "CD2", area: "linguagens-humanas" },
    { year: 2024, day: 2, code: "CD5", area: "natureza-matematica" },
    { year: 2024, day: 2, code: "CD6", area: "natureza-matematica" },
    { year: 2024, day: 2, code: "CD7", area: "natureza-matematica" },
    { year: 2025, day: 1, code: "CD1", area: "linguagens-humanas" },
    { year: 2025, day: 1, code: "CD2", area: "linguagens-humanas" },
    { year: 2025, day: 2, code: "CD5", area: "natureza-matematica" },
    { year: 2025, day: 2, code: "CD6", area: "natureza-matematica" },
    { year: 2025, day: 2, code: "CD7", area: "natureza-matematica" }
  ];

  function renderEnemSources() {
    const year = $("#enem-year").value;
    const subject = $("#enem-subject").value;
    const container = $("#enem-source-list");
    const dayBySubject = {
      filosofia: 1, historia: 1, geografia: 1, "educacao-fisica": 1,
      matematica: 2, fisica: 2, quimica: 2, biologia: 2
    };
    const filtered = enemSources.filter((source) =>
      (year === "todos" || String(source.year) === year) &&
      (subject === "todas" || subject === "interdisciplinar" || source.day === dayBySubject[subject])
    );
    container.replaceChildren();
    filtered.forEach((source) => {
      const item = document.createElement("article");
      item.className = "enem-source";
      const title = document.createElement("strong");
      title.textContent = `${source.year} · ${source.day}º dia · ${source.code}`;
      const links = document.createElement("div");
      links.className = "enem-source-links";
      [
        ["Caderno de questões", `https://download.inep.gov.br/enem/provas_e_gabaritos/${source.year}_PV_impresso_D${source.day}_${source.code}.pdf`],
        ["Gabarito oficial", `https://download.inep.gov.br/enem/provas_e_gabaritos/${source.year}_GB_impresso_D${source.day}_${source.code}.pdf`]
      ].forEach(([label, href]) => {
        const link = document.createElement("a");
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = label;
        links.appendChild(link);
      });
      item.append(title, links);
      container.appendChild(item);
    });
  }

  const questionPairs = questionBank.map((question) => [question, question]);

  const translations = {
    pt: {
      skip: "Pular para o conteúdo", start: "Início", how: "Como jogar", ranking: "Ranking",
      of: "de",
      game: "Partida", difficulty_facil: "FÁCIL", difficulty_medio: "MÉDIA", difficulty_dificil: "DIFÍCIL",
      login: "Entrar / criar perfil", guest: "Convidado", settings: "Personalize a partida", difficultyLabel: "Dificuldade", mixed: "Variada (todas)", easy: "Fácil", medium: "Média", hard: "Difícil", subjectsLabel: "Matérias (escolha uma ou mais)", math: "Matemática", physics: "Física", chemistry: "Química", biology: "Biologia", philosophy: "Filosofia", history: "História", geography: "Geografia", pe: "Educação Física", interdisciplinary: "Interdisciplinar", timeSetting: "Tempo por pergunta:", seconds: "s", localOnly: "Perfil salvo somente neste dispositivo. Use um apelido, sem dados pessoais.", localNote: "Perfil local de apresentação: não usa senha nem conta online e não sincroniza entre dispositivos.", guestName: "Convidado", chooseSubject: "Selecione pelo menos uma matéria.", tooFewQuestions: "Não há questões para esta combinação. Selecione outra matéria ou dificuldade.",
      questionSourceAuthor: "Questão autoral · não aplicada no ENEM", questionSourceYear: "Questão autoral · referência de {year}",
      accessHelp: "No modo perfil, cada apelido pode ter um único resultado no ranking deste navegador. O modo convidado não salva pontuação.",
      guestResult: "Partida de convidado: resultado não salvo no ranking.",
      mainNav: "Navegação principal", artLabel: "Ilustração abstrata de uma pista de movimento", roundLabel: "· PERGUNTA", progressLabel: "Progresso do desafio",
      timerStopped: "Resposta registrada",
      spanish: "Español", switchSpanish: "Cambiar el idioma a español", switchPortuguese: "Cambiar el idioma a portugués",
      nameLabel: "Como podemos te chamar?", namePlaceholder: "Digite seu nome ou apelido", nameHint: "Use um apelido; seu nome aparece apenas no ranking deste navegador.",
      startButton: "Começar", intro: "Um quiz de alta energia para colocar seu raciocínio em movimento. Responda no seu ritmo, acumule pontos e aprenda enquanto joga.",
      howLink: "Entenda a dinâmica", ready: "Pronto para jogar em equipe ou solo", questions: "perguntas", perRound: "por pergunta", superCombo: "super combo",
      phase: ["AQUECIMENTO", "DESAFIO", "FINAL"], points: "PONTOS", progress: "PROGRESSO", question: "PERGUNTA", options: "Opções de resposta", next: "Próxima", result: "Ver resultado",
      physical: "Desafio físico opcional", physicalOpen: "Desafio aberto", addPhysical: "Ver desafio opcional", complete: "Marcar como feito", completed: "Desafio concluído", movementPrompt: "O desafio aparece depois da sua resposta.", movementIntro: "O desafio é opcional: faça apenas se for confortável e seguro para você. Também vale descansar ou adaptar o movimento.",
      end: "FIM DE JOGO", player: "ATLETA", youLeftMark: "Você deixou<br /><span>sua marca.</span>", resultSub: "Boa leitura de jogo. Cada resposta foi um passo a mais.", playAgain: "Jogar de novo", seeRanking: "Ver ranking", yourScore: "SUA PONTUAÇÃO", pointsUnit: "pontos", correct: "acertos", errors: "erros", accuracy: "aproveitamento", bestCombo: "maior combo", position: "posição", participation: "PARTICIPAÇÃO<br />ATIVA", resultNoteTitle: "O que vale é continuar em movimento.", resultNote: "Compare sua estratégia com a turma e tente bater sua marca na próxima.",
      board: "PLACAR DA TURMA", leaderboardTitle: "Quem está<br /><span>no ritmo?</span>", live: "AO VIVO", bestMarks: "melhores marcas", clear: "Limpar ranking", emptyTitle: "A pista ainda está livre.", emptyText: "Jogue uma partida para registrar a primeira marca neste navegador.", rankingInfo: "A pontuação combina acertos, agilidade e participação no desafio opcional.", enter: "Entrar na disputa", you: "você", first: "1º LUGAR", second: "2º LUGAR", third: "3º LUGAR", pts: "pts",
      manual: "MANUAL DE BORDO", howTitle: "Jogar é simples.<br /><span>Ficar parado, não.</span>", howDescription: "Uma mistura curta de pensamento, movimento opcional e vontade saudável de superar sua própria marca.", read: "Leia a jogada", readText: "Cada rodada traz um problema de Matemática ou uma situação de Educação Física.", answerInTime: "Responda no tempo", answerText: "Escolha entre 10 e 35 segundos por pergunta. Você também pode jogar sentado ou apenas responder.", move: "Entre em movimento", moveText: "O bônus é opcional. Adapte ou ignore qualquer movimento e respeite seus limites.", readyTitle: "Pronto para a largada?", readyText: "Chame sua equipe e veja quem chega mais longe.", letsGo: "Vamos nessa", footer: "APRENDER NO RITMO",
      noName: "Digite um nome ou apelido para começar.", expired: "TEMPO ESGOTADO! A resposta correta era", incorrect: "INCORRETO! A resposta correta era", correctAnswer: "CORRETO!", combo: "🔥 COMBO! +50 pontos.", super: "🔥🔥 SUPER COMBO! +100 pontos.",
      newRecord: "Você é um campeão!", excellent: "Excelente desempenho!", good: "Bom trabalho!", keepGoing: "Continue aprendendo!",
      emptyRanking: "O ranking já está vazio.", clearConfirm: "Tem certeza de que deseja limpar o ranking salvo neste navegador?", cleared: "Ranking limpo.", clearFailed: "Não foi possível limpar os dados deste navegador.", saveFailed: "Não foi possível salvar neste navegador. O resultado será exibido sem ser registrado no ranking.", bonusToast: "Bônus opcional: +25 pontos!", rankSuffix: "º lugar", errorsStorage: "O armazenamento local não está disponível neste navegador. O jogo continua, mas o ranking não poderá ser salvo."
    },
    es: {
      skip: "Saltar al contenido", start: "Inicio", how: "Cómo jugar", ranking: "Clasificación",
      of: "de",
      game: "Partida", difficulty_facil: "FÁCIL", difficulty_medio: "MEDIA", difficulty_dificil: "DIFÍCIL",
      login: "Acceder / crear perfil", guest: "Invitado/a", settings: "Personaliza la partida", difficultyLabel: "Dificultad", mixed: "Variada (todas)", easy: "Fácil", medium: "Media", hard: "Difícil", subjectsLabel: "Materias (elige una o más)", math: "Matemáticas", physics: "Física", chemistry: "Química", biology: "Biología", philosophy: "Filosofía", history: "Historia", geography: "Geografía", pe: "Educación Física", interdisciplinary: "Interdisciplinar", timeSetting: "Tiempo por pregunta:", seconds: "s", localOnly: "Perfil guardado solo en este dispositivo. Usa un apodo, sin datos personales.", localNote: "Perfil local de presentación: no usa contraseña ni cuenta en línea y no se sincroniza entre dispositivos.", guestName: "Invitado/a", chooseSubject: "Selecciona al menos una materia.", tooFewQuestions: "No hay preguntas para esta combinación. Selecciona otra materia o dificultad.",
      questionSourceAuthor: "Pregunta original · no aplicada en el ENEM", questionSourceYear: "Pregunta original · referencia de {year}",
      accessHelp: "En modo perfil, cada apodo tiene un único resultado en la clasificación de este navegador. El modo invitado no guarda puntuaciones.",
      guestResult: "Partida como invitado/a: el resultado no se guarda en la clasificación.",
      mainNav: "Navegación principal", artLabel: "Ilustración abstracta de una pista de movimiento", roundLabel: "· PREGUNTA", progressLabel: "Progreso del desafío",
      timerStopped: "Respuesta registrada",
      spanish: "Português", switchSpanish: "Cambiar el idioma a español", switchPortuguese: "Cambiar el idioma a portugués",
      nameLabel: "¿Cómo te llamas?", namePlaceholder: "Escribe tu nombre o apodo", nameHint: "Usa un apodo; solo aparecerá en la clasificación de este navegador.",
      startButton: "Empezar", intro: "Un cuestionario dinámico para poner tu razonamiento en movimiento. Responde a tu ritmo, suma puntos y aprende mientras juegas.",
      howLink: "Conoce la dinámica", ready: "Listo para jugar en equipo o en solitario", questions: "preguntas", perRound: "por pregunta", superCombo: "súper combo",
      phase: ["CALENTAMIENTO", "DESAFÍO", "FINAL"], points: "PUNTOS", progress: "PROGRESO", question: "PREGUNTA", options: "Opciones de respuesta", next: "Siguiente", result: "Ver resultado",
      physical: "Desafío físico opcional", physicalOpen: "Desafío abierto", addPhysical: "Ver desafío opcional", complete: "Marcar como realizado", completed: "Desafío completado", movementPrompt: "El desafío aparece después de tu respuesta.", movementIntro: "El desafío es opcional: hazlo solo si te resulta cómodo y seguro. También puedes descansar o adaptar el movimiento.",
      end: "FIN DEL JUEGO", player: "JUGADOR/A", youLeftMark: "Dejaste<br /><span>tu marca.</span>", resultSub: "Buena estrategia. Cada respuesta fue un paso más.", playAgain: "Jugar de nuevo", seeRanking: "Ver clasificación", yourScore: "TU PUNTUACIÓN", pointsUnit: "pontos", correct: "aciertos", errors: "errores", accuracy: "precisión", bestCombo: "mejor racha", position: "posición", participation: "PARTICIPACIÓN<br />ACTIVA", resultNoteTitle: "Lo importante es seguir en movimiento.", resultNote: "Compara tu estrategia con el grupo e intenta superar tu marca la próxima vez.",
      board: "CLASIFICACIÓN DEL GRUPO", leaderboardTitle: "¿Quién lleva<br /><span>el ritmo?</span>", live: "ACTUALIZADO", bestMarks: "mejores marcas", clear: "Borrar clasificación", emptyTitle: "La pista aún está libre.", emptyText: "Juega una partida para registrar la primera marca en este navegador.", rankingInfo: "La puntuación combina aciertos, rapidez y participación en el desafío opcional.", enter: "Participar", you: "tú", first: "1.º LUGAR", second: "2.º LUGAR", third: "3.º LUGAR", pts: "pts",
      manual: "GUÍA DEL JUEGO", howTitle: "Jugar es sencillo.<br /><span>¡Y puedes moverte!</span>", howDescription: "Una combinación breve de pensamiento, movimiento opcional y ganas de superar tu propia marca.", read: "Lee la jugada", readText: "Cada ronda presenta un problema de Matemáticas o una situación de Educação Física.", answerInTime: "Responde a tiempo", answerText: "Elige entre 10 y 35 segundos por pregunta. También puedes jugar sentado ou simplemente responder.", move: "Ponte en movimiento", moveText: "El bono es opcional. Adapta ou ignora qualquer movimento e respeta tus limites.", readyTitle: "¿Listo para empezar?", readyText: "Invita a tu equipo y descubre quién llega más lejos.", letsGo: "¡Vamos!", footer: "APRENDER EN MOVIMIENTO",
      noName: "Escribe un nombre o apodo para empezar.", expired: "¡SE ACABÓ EL TIEMPO! La respuesta correcta era", incorrect: "¡INCORRECTO! La respuesta correcta era", correctAnswer: "¡CORRECTO!", combo: "🔥 ¡RACHA! +50 puntos.", super: "🔥🔥 ¡SÚPER RACHA! +100 puntos.",
      newRecord: "¡Eres un/a campeón/a!", excellent: "¡Excelente resultado!", good: "¡Buen trabajo!", keepGoing: "¡Sigue aprendiendo!",
      emptyRanking: "La clasificación ya está vacía.", clearConfirm: "¿Seguro que quieres borrar la clasificación guardada en este navegador?", cleared: "Clasificación borrada.", clearFailed: "No se pudieron borrar los datos de este navegador.", saveFailed: "No se pudo guardar en este navegador. El resultado se mostrará sin registrarse en la clasificación.", bonusToast: "Bono opcional: ¡+25 puntos!", rankSuffix: ".º lugar", errorsStorage: "El almacenamiento local no está disponible en este navegador. Puedes jugar, pero no se guardará la clasificación."
    }
  };

  const physicalChallenges = [
    "Faça 10 polichinelos, respeitando seu ritmo.",
    "Faça 10 agachamentos com atenção à postura.",
    "Mantenha o equilíbrio em uma perna por 15 segundos."
  ];
  const physicalChallengesEs = [
    "Haz 10 saltos de tijera, respetando tu ritmo.",
    "Haz 10 sentadillas prestando atención a la postura.",
    "Mantén el equilibrio sobre una pierna durante 15 segundos."
  ];

  const state = {
    view: "inicio",
    language: "pt",
    player: "",
    playerId: null,
    playerMode: "profile",
    guestSeen: [],
    gameFinished: false,
    question: 0,
    score: 0,
    streak: 0,
    maxStreak: 0,
    correct: 0,
    seconds: 0,
    timer: null,
    timerPaused: false,
    answered: false,
    physicalOpen: false,
    bonus: false,
    sound: true,
    answerTimes: [],
    gameQuestions: [],
    selectedAnswer: null
  };

  try {
    if (localStorage.getItem("desafio-idioma") === "es") state.language = "es";
  } catch {
    // A preferência de idioma não é necessária para iniciar o jogo.
  }

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  function t(key) {
    return translations[state.language][key];
  }

  function gameLength() {
    return state.gameQuestions.length;
  }

  function setQuestionSource(question) {
    const source = $("#question-source");
    source.textContent = question.year
      ? t("questionSourceYear").replace("{year}", String(question.year))
      : t("questionSourceAuthor");
  }

  function setText(selector, value) {
    const element = $(selector);
    if (element && value !== undefined) element.innerHTML = value;
  }

  function applyLanguage() {
    const es = state.language === "es";
    document.documentElement.lang = es ? "es" : "pt-BR";
    document.title = es ? "Desafío en Movimiento | Aprender en movimiento" : "Desafio em Movimento | Aprender no ritmo";
    $("meta[name='description']").content = es
      ? "Desafío en Movimiento: matemáticas y educación física en un juego breve y divertido."
      : "Desafio em Movimento: matemática e educação física em uma competição rápida e divertida.";
    const labels = [
      [".nav-link[data-view='inicio']", t("start")], [".nav-link[data-view='como-jogar']", t("how")],
      [".nav-link[data-view='ranking']", t("ranking")], [".game-nav-link", t("game")], ["#language-toggle", t("spanish")]
    ];
    labels.forEach(([selector, value]) => setText(selector, value));
    $("#language-toggle").setAttribute("aria-pressed", String(es));
    $("#language-toggle").setAttribute("aria-label", es ? t("switchPortuguese") : t("switchSpanish"));
    $("#sound-toggle").setAttribute("aria-label", state.sound ? (es ? "Desactivar sonidos" : "Desligar sons") : (es ? "Activar sonidos" : "Ligar sons"));
    $(".brand").setAttribute("aria-label", es ? "Desafío en Movimiento, inicio" : "Desafio em Movimento, início");
    $(".skip-link").textContent = t("skip");
    $(".main-nav").setAttribute("aria-label", t("mainNav"));
    $(".hero-art").setAttribute("aria-label", t("artLabel"));
    $("#start-title").innerHTML = es ? "Piensa.<br /><span>Muévete.</span><br />Supérate." : "Pense.<br /><span>Mexa.</span><br />Supere.";
    $(".hero-lede").textContent = t("intro");
    $(".hero-copy > .eyebrow").innerHTML = `<span class="eyebrow-line"></span> ${es ? "MATEMÁTICAS + EDUCACIÓN FÍSICA" : "MATEMÁTICA + EDUCAÇÃO FÍSICA"}`;
    $(".field-label").textContent = t("nameLabel");
    $("#player-name").placeholder = t("namePlaceholder");
    $("#name-hint").textContent = t("nameHint");
    $("#login-mode").textContent = t("login");
    $("#guest-mode").textContent = t("guest");
    $("#local-login-note").textContent = t("localNote");
    $(".game-settings h2").textContent = t("settings");
    $("label[for='difficulty-select']").textContent = t("difficultyLabel");
    const difficultyLabels = [t("mixed"), t("easy"), t("medium"), t("hard")];
    [...$("#difficulty-select").options].forEach((option, index) => { option.textContent = difficultyLabels[index]; });
    $(".subject-picker legend").textContent = t("subjectsLabel");
    const subjectLabels = { matematica: t("math"), fisica: t("physics"), quimica: t("chemistry"), biologia: t("biology"), filosofia: t("philosophy"), historia: t("history"), geografia: t("geography"), "educacao-fisica": t("pe"), interdisciplinar: t("interdisciplinary") };
    [...document.querySelectorAll(".subject-picker label")].forEach((label) => { label.lastChild.textContent = ` ${subjectLabels[label.querySelector("input").value]}`; });
    $(".time-setting").childNodes[0].textContent = t("timeSetting");
    $("#answer-time-value").textContent = `${$("#answer-time").value} ${t("seconds")}`;
    $("#local-login-note").setAttribute("aria-label", t("accessHelp"));
    $("#start-game").innerHTML = `${t("startButton")} <span aria-hidden="true">→</span>`;
    $(".start-footer .text-button").innerHTML = `${t("howLink")} <span aria-hidden="true">↗</span>`;
    $(".start-footer p").innerHTML = `<span class="status-dot"></span> ${t("ready")}`;
    $(".hero-proof").setAttribute("aria-label", es ? "Datos del desafío" : "Dados do desafio");
    $(".hero-proof div:nth-child(1) span").textContent = t("questions");
    $(".hero-proof div:nth-child(2) span").textContent = t("perRound");
    $(".hero-proof div:nth-child(3) span").textContent = t("superCombo");
    $(".art-stamp").innerHTML = es ? "JUEGA<br />EN EQUIPO" : "JOGA<br />JUNTO";
    $(".art-caption span:last-child").innerHTML = es ? "Razonamiento<br />a toda velocidad" : "Raciocínio<br />em alta velocidade";
    $("#game-title").innerHTML = es ? "Mantén el ritmo, <span id=\"game-player\"></span>." : "Mantenha o ritmo, <span id=\"game-player\"></span>.";
    $("#game-player").textContent = state.player || (es ? "atleta" : "atleta");
    $(".score-pill span").textContent = t("points");
    $(".streak-pill").innerHTML = `<span aria-hidden="true">✦</span> <strong id="streak-value">${state.streak}</strong> ${es ? "racha" : "sequência"}`;
    $(".progress-meta span:first-child").textContent = t("progress");
    $("#progress-label").textContent = `${state.question + 1} ${t("of")} ${gameLength() || 10}`;
    $("#progress-track").setAttribute("aria-valuemax", String(gameLength() || 10));
    $("#progress-track").setAttribute("aria-label", es ? "Progreso del desafío" : "Progresso do desafio");
    $(".progress-wrap").setAttribute("aria-label", t("progressLabel"));
    $("#options").setAttribute("aria-label", t("options"));
    $(".question-card").setAttribute("aria-label", es ? "Pregunta del juego" : "Pergunta do jogo");
    $(".progress-meta span:first-child").textContent = t("progress");
    $("#physical-panel").setAttribute("aria-label", t("physical"));
    $(".side-label").innerHTML = `<span class="side-icon">↗</span> ${es ? "BONO DE MOVIMIENTO" : "BÔNUS DE MOVIMENTO"}`;
    $(".side-challenge h3").textContent = es ? "Tu cuerpo también responde." : "Seu corpo também responde.";
    $(".side-challenge > p").textContent = t("movementIntro");
    $("#physical-toggle").innerHTML = `${t("addPhysical")} <span aria-hidden="true">+</span>`;
    $("#complete-physical").innerHTML = `${t(state.bonus ? "completed" : "complete")} <span aria-hidden="true">✓</span>`;
    $(".result-message .eyebrow").innerHTML = `<span class="eyebrow-line"></span> ${t("end")}`;
    $(".result-player").innerHTML = `${t("player")} <strong id="final-player">${escapeHTML(state.player || "—")}</strong>`;
    $("#result-title").innerHTML = t("youLeftMark");
    $(".result-message > .eyebrow").innerHTML = `<span class="eyebrow-line"></span> ${t("end")}`;
    $("#result-subtitle").textContent = state.view === "resultado" ? resultMessage()[0] : t("resultSub");
    $("#play-again").innerHTML = `${t("playAgain")} <span aria-hidden="true">↻</span>`;
    $(".result-actions .text-button").innerHTML = `${t("seeRanking")} <span aria-hidden="true">↗</span>`;
    $(".score-label").textContent = t("yourScore");
    $(".score-unit").textContent = t("pointsUnit");
    ["correct", "errors", "accuracy", "bestCombo", "position"].forEach((key, index) => {
      $(`.result-stats div:nth-child(${index + 1}) span`).textContent = t(key);
    });
    $("#result-medal b").innerHTML = t("participation");
    if (state.view === "resultado") $("#result-medal b").innerHTML = resultMessage()[1];
    $(".result-note strong").textContent = t("resultNoteTitle");
    $(".result-note p").innerHTML = `<strong>${t("resultNoteTitle")}</strong> ${t("resultNote")}`;
    $(".ranking-filter").childNodes[1].textContent = ` ${t("live")} `;
    $(".section-heading:not(.how-heading) .eyebrow").innerHTML = `<span class="eyebrow-line"></span> ${t("board")}`;
    $("#ranking-title").innerHTML = t("leaderboardTitle");
    $(".ranking-filter .live-dot").setAttribute("aria-hidden", "true");
    $(".ranking-filter small").textContent = t("bestMarks");
    $("#clear-ranking").textContent = t("clear");
    $(".ranking-aside p").textContent = t("rankingInfo");
    $(".aside-burst").innerHTML = es ? `MOVIMIENTO<br /><strong>ES</strong><br />CONOCIMIENTO` : `MOVIMENTO<br /><strong>É</strong><br />CONHECIMENTO`;
    $(".ranking-aside .primary-button").innerHTML = `${t("enter")} <span aria-hidden="true">→</span>`;
    $(".how-heading .eyebrow").innerHTML = `<span class="eyebrow-line"></span> ${t("manual")}`;
    $("#how-title").innerHTML = t("howTitle");
    $(".how-heading > p").textContent = t("howDescription");
    const cards = $$(".step-card");
    const stepTitles = [t("read"), t("answerInTime"), t("move")];
    const stepTexts = [t("readText"), t("answerText"), t("moveText")];
    cards.forEach((card, index) => {
      card.querySelector("h3").textContent = stepTitles[index];
      card.querySelector("p").textContent = stepTexts[index];
    });
    $(".how-footer strong").textContent = t("readyTitle");
    $(".how-footer div span").textContent = t("readyText");
    $(".how-footer button").innerHTML = `${t("letsGo")} <span aria-hidden="true">→</span>`;
    $(".site-footer span:last-child").textContent = t("footer");
    $(".site-footer span:first-child").textContent = es ? "DESAFÍO EN MOVIMIENTO" : "DESAFIO EM MOVIMENTO";
    $(".site-footer span:nth-child(2)").textContent = es ? "2.º AÑO · INTEGRADO" : "2º ANO · INTEGRADO";
    $(".round-tag").innerHTML = `<i aria-hidden="true"></i> ${es ? "2.º AÑO" : "2º EM"}`;
    if (state.gameQuestions.length && state.view === "jogo") refreshCurrentQuestionLanguage();
    if (state.view === "ranking") renderRanking();
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
    })[character]);
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  }

  function normalizeName(value) {
    return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().replace(/\s+/g, " ").toLocaleLowerCase();
  }

  function readProfiles() {
    try {
      const profiles = JSON.parse(localStorage.getItem("desafio-perfis") || "[]");
      return Array.isArray(profiles) ? profiles.filter((profile) => profile && typeof profile.id === "string" && typeof profile.name === "string") : [];
    } catch { return []; }
  }

  function choosePlayerMode(mode) {
    state.playerMode = mode;
    $("#login-mode").classList.toggle("is-active", mode === "profile");
    $("#guest-mode").classList.toggle("is-active", mode === "guest");
    $("#login-mode").setAttribute("aria-pressed", String(mode === "profile"));
    $("#guest-mode").setAttribute("aria-pressed", String(mode === "guest"));
    $("#player-name").value = mode === "guest" ? "" : $("#player-name").value;
    $("#player-name").placeholder = mode === "guest" ? t("guestName") : t("namePlaceholder");
    $("#player-name").setAttribute("aria-label", mode === "guest" ? t("guestName") : t("nameLabel"));
    $("#name-hint").textContent = mode === "guest" ? t("accessHelp") : t("nameHint");
    $("#local-login-note").hidden = mode === "guest";
  }

  function buildGameQuestions() {
    const languageIndex = state.language === "es" ? 1 : 0;
    const availableSubjects = [...document.querySelectorAll("input[name='subject']:checked")].map((input) => input.value);
    const difficulty = $("#difficulty-select").value;
    const selected = questionPairs
      .map((pair) => pair[languageIndex])
      .filter((question) => availableSubjects.includes(question.subject) && (difficulty === "mixed" || question.difficulty === difficulty));
    const historyKey = state.playerId ? `desafio-vistos:${state.playerId}` : null;
    let seen = state.playerId ? [] : state.guestSeen;
    if (historyKey) {
      try { seen = JSON.parse(localStorage.getItem(historyKey) || "[]"); } catch { seen = []; }
    }
    const unseen = selected.filter((question) => !seen.includes(question.id));
    const candidates = unseen.length >= Math.min(10, selected.length)
      ? shuffle(unseen)
      : [...shuffle(unseen), ...shuffle(selected.filter((question) => seen.includes(question.id)))];
    const deck = candidates.slice(0, Math.min(10, candidates.length));
    state.historyKey = historyKey;
    state.historySeen = unseen.length ? seen : [];
    state.gameQuestions = deck.map((question, index) => {
      const localized = { ...question };
      if (index === 1 || index === 5 || index === 8) {
        const challenges = state.language === "es" ? physicalChallengesEs : physicalChallenges;
        localized.challenge = challenges[index === 1 ? 0 : index === 5 ? 1 : 2];
      }
      return localized;
    });
    const nextSeen = [...state.historySeen, ...deck.map((question) => question.id)];
    if (historyKey) {
      try { localStorage.setItem(historyKey, JSON.stringify(nextSeen)); } catch { /* Evitar repetição é uma melhoria local, não impede jogar. */ }
    } else state.guestSeen = nextSeen;
    return state.gameQuestions;
  }

  function currentPhase() {
    const difficulty = state.gameQuestions[state.question]?.difficulty;
    const points = { facil: 100, medio: 150, dificil: 200 }[difficulty] || 100;
    return { points, time: Number($("#answer-time").value) || 20 };
  }

  function questionPool() {
    const languageIndex = state.language === "es" ? 1 : 0;
    const subjects = [...document.querySelectorAll("input[name='subject']:checked")].map((input) => input.value);
    const difficulty = $("#difficulty-select").value;
    return questionPairs
      .map((pair) => pair[languageIndex])
      .filter((question) => subjects.includes(question.subject) && (difficulty === "mixed" || question.difficulty === difficulty));
  }

  function questionPairById(id) {
    return questionPairs.find((pair) => pair[0].id === id);
  }

  function refreshCurrentQuestionLanguage() {
    const oldQuestion = state.gameQuestions[state.question];
    const pair = questionPairById(oldQuestion.id);
    if (!pair) return;
    const localized = { ...pair[state.language === "es" ? 1 : 0] };
    const challengeIndex = state.question === 1 ? 0 : state.question === 5 ? 1 : state.question === 8 ? 2 : -1;
    if (challengeIndex >= 0) {
      localized.challenge = (state.language === "es" ? physicalChallengesEs : physicalChallenges)[challengeIndex];
    }
    state.gameQuestions[state.question] = localized;
    $("#question-category").textContent = localized.category;
    setQuestionSource(localized);
    $("#question-text").textContent = localized.text;
    const options = $("#options");
    options.replaceChildren();
    localized.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option";
      button.dataset.index = String(index);
      button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-copy"></span>`;
      button.querySelector(".option-copy").textContent = option;
      button.addEventListener("click", () => answerQuestion(index));
      options.appendChild(button);
      if (state.answered) {
        button.disabled = true;
        if (index === localized.correct) button.classList.add("is-correct");
        if (index === state.selectedAnswer && state.selectedAnswer !== localized.correct) button.classList.add("is-wrong");
      }
    });
    if (state.physicalOpen && localized.challenge) $("#movement-copy").textContent = localized.challenge;
    if (state.answered) {
      const correct = state.selectedAnswer === localized.correct;
      const previousStreak = state.streak - (correct ? 1 : 0);
      const combo = correct && state.streak === 3 ? ` ${t("combo")}` : correct && state.streak === 5 ? ` ${t("super")}` : "";
      $("#answer-feedback").textContent = correct
        ? `✅ ${t("correctAnswer")} +${{ facil: 100, medio: 150, dificil: 200 }[localized.difficulty]} ${t("pointsUnit")}.${combo} ${localized.explanation}`
        : state.selectedAnswer === -1
          ? `⏰ ${t("expired")} ${localized.options[localized.correct]}. ${localized.explanation}`
          : `❌ ${t("incorrect")} ${localized.options[localized.correct]}. ${localized.explanation}`;
    }
            $("#phase-name").textContent = t(`difficulty_${state.gameQuestions[state.question].difficulty}`);
            $("#question-index").textContent = `${t("question")} ${String(state.question + 1).padStart(2, "0")} · ${{ facil: 100, medio: 150, dificil: 200 }[state.gameQuestions[state.question].difficulty]} ${t("points")}`;
            $("#next-question").innerHTML = state.question === gameLength() - 1 ? `${t("result")} <span aria-hidden="true">↗</span>` : `${t("next")} <span aria-hidden="true">→</span>`;
            $("#physical-toggle").innerHTML = state.physicalOpen ? `${t("physicalOpen")} −` : `${t("addPhysical")} <span aria-hidden="true">+</span>`;
            $("#complete-physical").innerHTML = `${t(state.bonus ? "completed" : "complete")} <span aria-hidden="true">✓</span>`;
  }

  function showView(view) {
    if (state.view === "jogo" && view !== "jogo" && !state.answered && state.timer) {
      clearInterval(state.timer);
      state.timer = null;
      state.timerPaused = true;
    }
    state.view = view;
    $(".game-nav-link").hidden = !state.gameQuestions.length || view === "jogo" || view === "resultado" || state.gameFinished;
    $$(".view").forEach((section) => {
      const active = section.id === `view-${view}`;
      section.hidden = !active;
      section.classList.toggle("is-visible", active);
    });
    $$(".nav-link").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
    if (view === "ranking") renderRanking();
    if (view === "jogo" && state.timerPaused && !state.answered) startTimer();
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
    const name = input.value.trim().replace(/\s+/g, " ").slice(0, 20);
    if (state.playerMode === "profile" && !name) {
      input.focus();
      $("#name-hint").textContent = t("noName");
      $("#name-hint").style.color = "var(--coral-dark)";
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        input.animate([{ transform: "translateX(-4px)" }, { transform: "translateX(4px)" }, { transform: "translateX(0)" }], { duration: 220 });
      }
      return;
    }
    const selectedSubjects = document.querySelectorAll("input[name='subject']:checked");
    if (!selectedSubjects.length) {
      showToast(t("chooseSubject"));
      return;
    }
    if (state.playerMode === "guest") {
      state.player = name || t("guestName");
      state.playerId = null;
    } else {
      const profiles = readProfiles();
      const existing = profiles.find((profile) => normalizeName(profile.name) === normalizeName(name));
      const profile = existing || { id: `profile-${normalizeName(name)}`, name };
      if (!existing) profiles.push(profile);
      try { localStorage.setItem("desafio-perfis", JSON.stringify(profiles)); } catch { /* O perfil pode ser usado nesta sessão mesmo sem armazenamento. */ }
      state.player = profile.name;
      state.playerId = profile.id;
    }
    state.question = 0;
    state.gameFinished = false;
    state.score = 0;
    state.streak = 0;
    state.maxStreak = 0;
    state.correct = 0;
    state.answerTimes = [];
    state.gameQuestions = buildGameQuestions();
    if (!state.gameQuestions.length) {
      showToast(t("tooFewQuestions"));
      return;
    }
    $("#game-player").textContent = state.player;
    showView("jogo");
    renderQuestion();
  }

  function renderQuestion() {
    clearInterval(state.timer);
    state.answered = false;
    state.physicalOpen = false;
    state.bonus = false;
    const savedQuestion = state.gameQuestions[state.question];
    const pair = questionPairById(savedQuestion.id);
    const localized = pair ? { ...pair[state.language === "es" ? 1 : 0] } : savedQuestion;
    const challengeIndex = state.question === 1 ? 0 : state.question === 5 ? 1 : state.question === 8 ? 2 : -1;
    if (challengeIndex >= 0) {
      localized.challenge = (state.language === "es" ? physicalChallengesEs : physicalChallenges)[challengeIndex];
    }
    state.gameQuestions[state.question] = localized;
    const question = localized;
    const phase = currentPhase();
    $("#round-number").textContent = String(state.question + 1).padStart(2, "0");
    $("#phase-name").textContent = t(`difficulty_${question.difficulty}`);
    $("#round-label").textContent = t("roundLabel");
    $("#progress-label").textContent = `${state.question + 1} ${t("of")} ${gameLength()}`;
    $("#progress-fill").style.width = `${((state.question + 1) / gameLength()) * 100}%`;
    $("#progress-track").setAttribute("aria-valuemax", String(gameLength()));
    $("#progress-track").setAttribute("aria-valuenow", String(state.question + 1));
    $("#question-category").textContent = question.category;
    setQuestionSource(question);
    $("#question-index").textContent = `${t("question")} ${String(state.question + 1).padStart(2, "0")} · ${phase.points} ${t("points")}`;
    $("#question-text").textContent = question.text;
    $("#score-value").textContent = String(state.score).padStart(3, "0");
    $("#streak-value").textContent = state.streak;
    $("#answer-feedback").textContent = "";
    $("#answer-feedback").className = "answer-feedback";
    $("#next-question").disabled = true;
    $("#next-question").innerHTML = state.question === gameLength() - 1 ? `${t("result")} <span aria-hidden="true">↗</span>` : `${t("next")} <span aria-hidden="true">→</span>`;
    $("#physical-toggle").disabled = true;
    $("#physical-toggle").innerHTML = `${t("addPhysical")} <span aria-hidden="true">+</span>`;
    $("#complete-physical").disabled = true;
    $("#complete-physical").innerHTML = `${t("complete")} <span aria-hidden="true">✓</span>`;
    $("#bonus-earned").hidden = true;
    $("#physical-panel").classList.remove("is-open");
    $("#movement-copy").textContent = t("movementPrompt");
    state.selectedAnswer = null;

    const options = $("#options");
    options.innerHTML = "";
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option";
      button.dataset.index = index;
      button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-copy"></span>`;
      button.querySelector(".option-copy").textContent = option;
      button.addEventListener("click", () => answerQuestion(index));
      options.appendChild(button);
    });

    state.seconds = phase.time;
    state.currentLimit = phase.time;
    updateTimer();
    state.timerPaused = false;
    startTimer();
  }

  function startTimer() {
    clearInterval(state.timer);
    state.timerPaused = false;
    state.timer = window.setInterval(() => {
      state.seconds -= 1;
      updateTimer();
      if (state.seconds <= 0) {
        clearInterval(state.timer);
        state.timer = null;
        answerQuestion(-1);
      }
    }, 1000);
  }

  function updateTimer() {
    const timer = $("#timer");
    timer.textContent = String(state.seconds).padStart(2, "0");
    timer.classList.toggle("is-danger", state.seconds <= 3);
    timer.setAttribute("aria-label", state.answered ? t("timerStopped") : `${state.seconds} segundos restantes`);
  }

  function answerQuestion(selected) {
    if (state.answered) return;
    state.answered = true;
    state.selectedAnswer = selected;
    clearInterval(state.timer);
    updateTimer();
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
        comboMessage = ` ${t("combo")}`;
      } else if (state.streak === 5) {
        state.score += 100;
        comboMessage = ` ${t("super")}`;
      }
      feedback.textContent = `✅ ${t("correctAnswer")} +${phase.points} ${t("pointsUnit")}.${comboMessage} ${question.explanation}`;
      feedback.className = "answer-feedback correct";
        playTone(660, 0.11);
      $("#streak-pill").animate([{ transform: "scale(1.06)" }, { transform: "scale(1)" }], { duration: 280 });
    } else {
      state.streak = 0;
      const correctAnswer = question.options[question.correct];
      feedback.textContent = selected === -1
        ? `⏰ ${t("expired")} ${correctAnswer}. ${question.explanation}`
        : `❌ ${t("incorrect")} ${correctAnswer}. ${question.explanation}`;
      feedback.className = "answer-feedback wrong";
      playTone(220, 0.16);
    }

    $("#score-value").textContent = String(state.score).padStart(3, "0");
    $("#streak-value").textContent = state.streak;
    $("#physical-toggle").disabled = !question.challenge;
    if (question.challenge) $("#physical-toggle").setAttribute("aria-label", t("physical"));
    $("#next-question").disabled = false;
  }

  function nextQuestion() {
    if (!state.answered) return;
    if (state.question === gameLength() - 1) {
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
      $("#physical-toggle").textContent = `${t("physicalOpen")} −`;
    } else {
      $("#movement-copy").textContent = t("movementPrompt");
      $("#complete-physical").disabled = true;
      $("#physical-toggle").innerHTML = `${t("addPhysical")} <span aria-hidden="true">+</span>`;
    }
  }

  function completePhysical() {
    if (!state.physicalOpen || state.bonus) return;
    state.bonus = true;
    state.score += 25;
    $("#score-value").textContent = String(state.score).padStart(3, "0");
    $("#complete-physical").disabled = true;
    $("#complete-physical").innerHTML = `${t("completed")} <span aria-hidden="true">✓</span>`;
    $("#bonus-earned").hidden = false;
    playTone(880, 0.1);
    showToast(t("bonusToast"));
  }

  function hasProfileScore(name, profileId) {
    const key = normalizeName(name);
    return getRanking().some((record) => normalizeName(record.name) === key && record.id !== profileId);
  }

  let audioContext;
  function playTone(frequency, duration) {
    if (!state.sound) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      audioContext ||= new AudioContextClass();
      if (audioContext.state === "suspended") audioContext.resume();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.08, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + duration);
    } catch {
      // Áudio é um recurso opcional; falhas do navegador não devem interromper a partida.
    }
  }

  function resultMessage() {
    if (state.score >= 1500) return [t("newRecord"), state.language === "es" ? "RITMO<br />CAMPEÓN" : "RITMO<br />DE CAMPEÃO"];
    if (state.score >= 1000) return [t("excellent"), state.language === "es" ? "GRAN<br />RESULTADO" : "DESEMPENHO<br />EXCELENTE"];
    if (state.score >= 500) return [t("good"), state.language === "es" ? "BUEN<br />TRABAJO" : "BOM<br />TRABALHO"];
    return [t("keepGoing"), state.language === "es" ? "SIGUE<br />APRENDIENDO" : "CONTINUE<br />EM MOVIMENTO"];
  }

  function finishGame() {
    state.gameFinished = true;
    const total = gameLength();
    const percentage = Math.round((state.correct / total) * 100);
    const record = saveScore();
    const ranking = getRanking();
    const rankIndex = ranking.findIndex((item) => item.id === record.id);
    const rank = record.persisted && rankIndex >= 0 ? rankIndex + 1 : null;
    const [message, medal] = resultMessage();
    $("#final-player").textContent = state.player;
    $("#final-score").textContent = String(state.score).padStart(3, "0");
    $("#final-correct").textContent = `${state.correct}/${total}`;
    $("#final-errors").textContent = total - state.correct;
    $("#final-percentage").textContent = `${percentage}%`;
    $("#final-streak").textContent = state.maxStreak;
    $("#final-rank").textContent = rank ? `#${rank}` : "—";
    $("#result-subtitle").textContent = message;
    $("#result-medal b").innerHTML = medal;
    showView("resultado");
    if (state.playerMode === "guest") showToast(t("guestResult"));
    else if (!record.persisted) showToast(t("saveFailed"));
  }

  function readStoredRanking() {
    try {
      const stored = JSON.parse(localStorage.getItem("desafio-ranking") || "[]");
      if (!Array.isArray(stored)) return [];
      const valid = stored.filter((item) => item && typeof item.id === "string" && typeof item.name === "string" &&
        Number.isFinite(item.points) && Number.isFinite(item.correct) && Number.isFinite(item.percentage) &&
        Number.isFinite(item.maxStreak) && Number.isFinite(item.timestamp))
        .map((item) => ({ ...item, name: item.name.slice(0, 20) }));
      const unique = new Map();
      valid.forEach((item) => {
        const key = normalizeName(item.name);
        const previous = unique.get(key);
        if (!previous || item.points > previous.points) unique.set(key, item);
      });
      return [...unique.values()];
    } catch {
      return [];
    }
  }

  function getRanking() {
    return readStoredRanking().sort((a, b) => b.points - a.points || b.timestamp - a.timestamp).slice(0, 10);
  }

  function saveScore() {
    const timestamp = Date.now();
    const record = {
      id: `${timestamp}-${Math.random().toString(36).slice(2)}`,
      name: state.player,
      points: state.score,
      correct: state.correct,
      total: gameLength(),
      percentage: Math.round((state.correct / gameLength()) * 100),
      maxStreak: state.maxStreak,
      date: new Date(timestamp).toLocaleDateString(state.language === "es" ? "es" : "pt-BR"),
      timestamp,
      persisted: false
    };
    if (state.playerMode === "guest") return record;
    try {
      const stored = readStoredRanking().map(({ persisted, ...savedRecord }) => savedRecord);
      const profileKey = normalizeName(record.name);
      const previous = stored.find((item) => normalizeName(item.name) === profileKey);
      if (previous && previous.points >= record.points) {
        record.id = previous.id;
        record.points = previous.points;
        record.correct = previous.correct;
        record.total = previous.total || 10;
        record.percentage = previous.percentage;
        record.maxStreak = previous.maxStreak;
        record.timestamp = previous.timestamp;
      } else if (previous) {
        stored.splice(stored.indexOf(previous), 1);
      }
      const savedRecord = { ...record };
      delete savedRecord.persisted;
      stored.push(savedRecord);
      const sorted = stored.sort((a, b) => b.points - a.points || b.timestamp - a.timestamp).slice(0, 10);
      localStorage.setItem("desafio-ranking", JSON.stringify(sorted));
      record.persisted = true;
      try {
        const best = Number(localStorage.getItem("desafio-melhor-pontuacao") || 0);
        if (state.score > best) localStorage.setItem("desafio-melhor-pontuacao", String(state.score));
      } catch {
        // A melhor pontuação é complementar; não invalida a gravação do ranking.
      }
    } catch {
      record.persisted = false;
    }
    return record;
  }

  function renderRanking() {
    const leaderboard = $("#leaderboard");
    leaderboard.innerHTML = "";
    const ranking = getRanking();
    if (!ranking.length) {
      leaderboard.replaceChildren();
      const empty = document.createElement("div");
      empty.className = "ranking-empty";
      const title = document.createElement("strong");
      title.textContent = t("emptyTitle");
      const description = document.createElement("span");
      description.textContent = t("emptyText");
      empty.append(title, description);
      leaderboard.appendChild(empty);
      return;
    }
    ranking.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = `rank-row${item.name === state.player ? " is-you" : ""}`;
      const initials = item.name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();
      const badge = index === 0 ? t("first") : index === 1 ? t("second") : index === 2 ? t("third") : "";
      const number = document.createElement("span");
      number.className = "rank-number";
      number.textContent = String(index + 1).padStart(2, "0");
      const name = document.createElement("span");
      name.className = "rank-name";
      const avatar = document.createElement("span");
      avatar.className = "avatar";
      avatar.textContent = initials;
      name.append(avatar, document.createTextNode(`${item.name}${item.name === state.player ? ` · ${t("you")}` : ""}`));
      const detail = document.createElement("span");
      detail.className = "rank-detail";
      detail.textContent = `${item.correct}/${item.total || 10} · ${item.percentage}%`;
      const points = document.createElement("strong");
      points.className = "rank-points";
      points.append(document.createTextNode(String(item.points)));
      const unit = document.createElement("small");
      unit.textContent = ` ${t("pts")}`;
      points.appendChild(unit);
      const badgeElement = document.createElement("span");
      badgeElement.className = "rank-badge";
      badgeElement.textContent = badge;
      row.append(number, name, detail, points, badgeElement);
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
  $("#language-toggle").addEventListener("click", () => {
    state.language = state.language === "pt" ? "es" : "pt";
    try { localStorage.setItem("desafio-idioma", state.language); } catch { /* Preferência opcional. */ }
    applyLanguage();
  });
  $("#login-mode").addEventListener("click", () => choosePlayerMode("profile"));
  $("#guest-mode").addEventListener("click", () => choosePlayerMode("guest"));
  $("#answer-time").addEventListener("input", (event) => {
    $("#answer-time-value").textContent = `${event.currentTarget.value} ${t("seconds")}`;
  });
  $("#enem-year").addEventListener("change", renderEnemSources);
  $("#enem-subject").addEventListener("change", renderEnemSources);
  $("#start-game").addEventListener("click", startGame);
  $("#player-name").addEventListener("keydown", (event) => { if (event.key === "Enter") startGame(); });
  $("#player-name").addEventListener("input", () => {
    $("#name-hint").textContent = state.playerMode === "guest" ? t("accessHelp") : t("nameHint");
    $("#name-hint").style.color = "";
  });
  $("#next-question").addEventListener("click", nextQuestion);
  $("#physical-toggle").addEventListener("click", togglePhysical);
  $("#complete-physical").addEventListener("click", completePhysical);
  $("#play-again").addEventListener("click", () => { $("#player-name").value = state.player; showView("inicio"); startGame(); });
  $("#clear-ranking").addEventListener("click", () => {
    if (!getRanking().length) {
      showToast(t("emptyRanking"));
      return;
    }
    if (window.confirm(t("clearConfirm"))) {
      try {
        localStorage.removeItem("desafio-ranking");
        localStorage.removeItem("desafio-melhor-pontuacao");
        renderRanking();
        showToast(t("cleared"));
      } catch {
        showToast(t("clearFailed"));
      }
    }
  });
  $("#sound-toggle").addEventListener("click", (event) => {
    state.sound = !state.sound;
    event.currentTarget.classList.toggle("is-muted", !state.sound);
    event.currentTarget.setAttribute("aria-pressed", String(state.sound));
    event.currentTarget.setAttribute("aria-label", state.sound ? "Desligar sons" : "Ligar sons");
  });
  window.addEventListener("beforeunload", () => clearInterval(state.timer));
  window.addEventListener("storage", (event) => {
    if (event.key === "desafio-ranking") renderRanking();
  });
  applyLanguage();
  renderEnemSources();
  choosePlayerMode("profile");
  renderRanking();
})();