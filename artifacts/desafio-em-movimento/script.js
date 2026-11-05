import { questionBank } from "./question-bank.js";
import { additionalQuestions } from "./question-bank-extra.js";

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

  const allBankQuestions = [...questionBank, ...additionalQuestions];
  const questionPairs = allBankQuestions.map((question) => [question, question]);
  const phasePlan = [
    { difficulty: "facil", count: 10, label: "phaseEasy" },
    { difficulty: "medio", count: 15, label: "phaseMedium" },
    { difficulty: "dificil", count: 20, label: "phaseHard" }
  ];

  const translations = {
    pt: {
      skip: "Pular para o conteúdo", start: "Início", how: "Como jogar", ranking: "Ranking",
      of: "de", phaseProgress: "PROGRESSO DA FASE",
      game: "Partida", difficulty_facil: "FÁCIL", difficulty_medio: "MÉDIA", difficulty_dificil: "DIFÍCIL", phaseEasy: "FASE 1 · FÁCIL", phaseMedium: "FASE 2 · MÉDIA", phaseHard: "FASE 3 · DIFÍCIL", nextPhase: "Concluir fase e avançar", phaseComplete: "Fase {number} concluída! Próxima: {label}.",
      login: "Entrar / criar perfil", guest: "Convidado", settings: "Personalize a partida", subjectsLabel: "Matérias (escolha uma ou mais)", math: "Matemática", physics: "Física", chemistry: "Química", biology: "Biologia", philosophy: "Filosofia", history: "História", geography: "Geografia", pe: "Educação Física", interdisciplinary: "Interdisciplinar", timeSetting: "Tempo por pergunta:", seconds: "s", localOnly: "Perfil salvo somente neste dispositivo. Use um apelido, sem dados pessoais.", localNote: "A conta remota precisa estar publicada com banco de dados para sincronizar entre dispositivos.", guestName: "Convidado", chooseSubject: "Selecione pelo menos uma matéria.", tooFewQuestions: "As matérias selecionadas precisam ter ao menos 10 questões fáceis, 15 médias e 20 difíceis. Selecione mais matérias.",
      questionSourceAuthor: "Questão autoral · não aplicada no ENEM", questionSourceYear: "Questão autoral · referência de {year}",
        authorReference: "AUTORAL · REF. ENEM {year}",
      emailLabel: "E-mail da conta", passwordLabel: "Senha (mínimo 10 caracteres)", displayNameLabel: "Nome para aparecer no ranking", authLogin: "Entrar", authRegister: "Criar conta", switchToRegister: "Ainda não tem conta? Criar", switchToLogin: "Já tem conta? Entrar", logout: "Sair da conta", accountReady: "Conta conectada. Seus resultados são sincronizados pelo servidor.", apiUnavailable: "Login remoto ainda não configurado. Publique a API e configure a URL antes de criar conta.", authFailed: "Não foi possível concluir o acesso.",
      loginRequired: "Entre em uma conta ou escolha Convidado para iniciar.",
      loginPrompt: "Entre com seu e-mail e senha ou crie uma conta para sincronizar o ranking.",
      phasePoolError: "A seleção tem {available} questões {difficulty}; são necessárias {required}. Marque mais matérias.",
      scoreSaveFailed: "Não foi possível salvar sua pontuação no servidor. Verifique a conexão e tente novamente.", rankingLoadFailed: "Não foi possível carregar o ranking remoto.", clearOwnScore: "Excluir apenas seu próprio resultado do ranking?",
      confirmAdvance: "Você pretende continuar para {nextPhase}? Se escolher não, sua pontuação atual será salva no ranking.", advanceCancelled: "Jogo encerrado. Sua pontuação atual foi salva no ranking.",
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
      manual: "MANUAL DE BORDO", howTitle: "Jogar é simples.<br /><span>Ficar parado, não.</span>", howDescription: "Até 45 questões em três níveis progressivos, com quantidade ajustada às matérias selecionadas e movimento opcional.", read: "Leia a jogada", readText: "As perguntas são organizadas por matéria e avançam por três níveis de dificuldade.", answerInTime: "Responda no tempo", answerText: "A partida tem até 45 questões: 10 fáceis, 15 médias e 20 difíceis quando há questões suficientes nas matérias escolhidas. O tempo por questão é configurável.", move: "Entre em movimento", moveText: "O bônus é opcional. Adapte ou ignore qualquer movimento e respeite seus limites.", readyTitle: "Pronto para a largada?", readyText: "Chame sua equipe e veja quem chega mais longe.", letsGo: "Vamos nessa", footer: "APRENDER NO RITMO",
      noName: "Digite um nome ou apelido para começar.", expired: "TEMPO ESGOTADO! A resposta correta era", incorrect: "INCORRETO! A resposta correta era", correctAnswer: "CORRETO!", combo: "🔥 COMBO! +50 pontos.", super: "🔥🔥 SUPER COMBO! +100 pontos.",
      newRecord: "Você é um campeão!", excellent: "Excelente desempenho!", good: "Bom trabalho!", keepGoing: "Continue aprendendo!",
      emptyRanking: "O ranking já está vazio.", clearConfirm: "Tem certeza de que deseja limpar o ranking salvo neste navegador?", cleared: "Ranking limpo.", clearFailed: "Não foi possível limpar os dados deste navegador.", saveFailed: "Não foi possível salvar neste navegador. O resultado será exibido sem ser registrado no ranking.", bonusToast: "Bônus opcional: +25 pontos!", rankSuffix: "º lugar", errorsStorage: "O armazenamento local não está disponível neste navegador. O jogo continua, mas o ranking não poderá ser salvo."
    },
    es: {
      skip: "Saltar al contenido", start: "Inicio", how: "Cómo jugar", ranking: "Clasificación",
      of: "de", phaseProgress: "PROGRESO DE LA FASE",
      game: "Partida", difficulty_facil: "FÁCIL", difficulty_medio: "MEDIA", difficulty_dificil: "DIFÍCIL", phaseEasy: "FASE 1 · FÁCIL", phaseMedium: "FASE 2 · MEDIA", phaseHard: "FASE 3 · DIFÍCIL", nextPhase: "Terminar fase y avanzar", phaseComplete: "¡Fase {number} terminada! Siguiente: {label}.",
      login: "Acceder / crear perfil", guest: "Invitado/a", settings: "Personaliza la partida", subjectsLabel: "Materias (elige una o más)", math: "Matemáticas", physics: "Física", chemistry: "Química", biology: "Biología", philosophy: "Filosofía", history: "Historia", geography: "Geografía", pe: "Educación Física", interdisciplinary: "Interdisciplinar", timeSetting: "Tiempo por pregunta:", seconds: "s", localOnly: "Perfil guardado solo en este dispositivo. Usa un apodo, sin datos personales.", localNote: "La cuenta remota necesita una API y una base de datos publicadas para sincronizar entre dispositivos.", guestName: "Invitado/a", chooseSubject: "Selecciona al menos una materia.", tooFewQuestions: "Las materias seleccionadas necesitan al menos 10 preguntas fáciles, 15 medias y 20 difíciles. Selecciona más materias.",
      questionSourceAuthor: "Pregunta original · no aplicada en el ENEM", questionSourceYear: "Pregunta original · referencia de {year}",
        authorReference: "ORIGINAL · REF. ENEM {year}",
      emailLabel: "Correo electrónico", passwordLabel: "Contraseña (mínimo 10 caracteres)", displayNameLabel: "Nombre visible en la clasificación", authLogin: "Entrar", authRegister: "Crear cuenta", switchToRegister: "¿No tienes cuenta? Crear", switchToLogin: "¿Ya tienes cuenta? Entrar", logout: "Salir de la cuenta", accountReady: "Cuenta conectada. Tus resultados se sincronizan en el servidor.", apiUnavailable: "El acceso remoto aún no está configurado. Publica la API y configura su URL antes de crear una cuenta.", authFailed: "No se pudo completar el acceso.",
      loginRequired: "Inicia sesión o elige Invitado para comenzar.",
      loginPrompt: "Inicia sesión con tu correo y contraseña o crea una cuenta para sincronizar la clasificación.",
      phasePoolError: "La selección tiene {available} preguntas {difficulty}; se necesitan {required}. Selecciona más materias.",
      scoreSaveFailed: "No se pudo guardar tu puntuación en el servidor. Comprueba la conexión e inténtalo de nuevo.", rankingLoadFailed: "No se pudo cargar la clasificación remota.", clearOwnScore: "¿Eliminar solo tu propio resultado de la clasificación?",
      confirmAdvance: "¿Quieres continuar a {nextPhase}? Si eliges no, tu puntuación actual se guardará en la clasificación.", advanceCancelled: "Juego terminado. Tu puntuación actual se guardó en la clasificación.",
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
      manual: "GUÍA DEL JUEGO", howTitle: "Jugar es sencillo.<br /><span>¡Y puedes moverte!</span>", howDescription: "Hasta 45 preguntas en tres niveles progresivos; la cantidad se ajusta a las materias seleccionadas y el movimiento es opcional.", read: "Lee la jugada", readText: "Las preguntas se organizan por materia y avanzan en tres niveles de dificultad.", answerInTime: "Responde a tiempo", answerText: "La partida tiene hasta 45 preguntas: 10 fáciles, 15 medias y 20 difíciles cuando hay suficientes preguntas en las materias elegidas. El tiempo por pregunta se puede configurar.", move: "Ponte en movimiento", moveText: "El bono es opcional. Adapta o ignora cualquier movimiento y respeta tus límites.", readyTitle: "¿Listo para empezar?", readyText: "Invita a tu equipo y descubre quién llega más lejos.", letsGo: "¡Vamos!", footer: "APRENDER EN MOVIMIENTO",
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
    accountAction: "login",
    authUser: null,
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
    gamePhasePlan: [],
    selectedAnswer: null,
    phaseScoreDelta: 0,
    phaseCorrectDelta: 0
  };

  try {
    if (localStorage.getItem("desafio-idioma") === "es") state.language = "es";
  } catch {
    // A preferência de idioma não é necessária para iniciar o jogo.
  }

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const apiBase = (window.DESAFIO_API_BASE || document.querySelector("meta[name='api-base']")?.content || "").replace(/\/+$/, "");

  async function apiRequest(path, options = {}) {
    if (!apiBase) throw new Error(t("apiUnavailable"));
    const response = await fetch(`${apiBase}/api${path}`, {
      ...options,
      credentials: "include",
      headers: { ...(options.body ? { "Content-Type": "application/json" } : {}), ...options.headers }
    });
    if (response.status === 204) return null;
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || t("authFailed"));
    return payload;
  }

  function setAccountStatus(message, isError = false) {
    const status = $("#account-status");
    status.textContent = message;
    status.classList.toggle("is-error", isError);
  }

  function t(key) {
    return translations[state.language][key];
  }

  function gameLength() {
    return state.gameQuestions.length;
  }

  function phaseForQuestion(questionIndex) {
    let start = 0;
    const activePlan = state.gamePhasePlan.length ? state.gamePhasePlan : phasePlan;
    for (let index = 0; index < activePlan.length; index += 1) {
      const phase = activePlan[index];
      if (questionIndex < start + phase.count) return { ...phase, index, start };
      start += phase.count;
    }
    const last = activePlan.at(-1) || phasePlan.at(-1);
    return { ...last, index: activePlan.length - 1, start: gameLength() - last.count };
  }

  function updatePhaseSummary() {
    const selected = new Set([...document.querySelectorAll("input[name='subject']:checked")].map((input) => input.value));
    const summary = phasePlan.map((phase) => {
      const available = allBankQuestions.filter((question) => selected.has(question.subject) && question.difficulty === phase.difficulty).length;
      return { ...phase, count: Math.min(phase.count, available) };
    }).filter((phase) => phase.count > 0);
    const total = summary.reduce((sum, phase) => sum + phase.count, 0);
    const copy = state.language === "es"
      ? `Tu partida tendrá ${total} preguntas como máximo: ${summary.map((phase) => `${phase.count} ${phase.label === "phaseEasy" ? "fáciles" : phase.label === "phaseMedium" ? "medias" : "difíciles"}`).join(", ")}.`
      : `Sua partida terá ${total} perguntas: ${summary.map((phase) => `${phase.count} ${phase.label === "phaseEasy" ? "fáceis" : phase.label === "phaseMedium" ? "médias" : "difíceis"}`).join(", ")}. Limite máximo: 45.`;
    const phasePlanCopy = document.querySelector(".phase-plan");
    if (phasePlanCopy) phasePlanCopy.textContent = copy;
    const questionCount = document.querySelector(".hero-proof div:nth-child(1) strong");
    if (questionCount) questionCount.textContent = String(total);
  }

  function nextQuestionLabel() {
    if (state.question === gameLength() - 1) return t("result");
    const phase = phaseForQuestion(state.question);
    return state.question === phase.start + phase.count - 1 ? t("nextPhase") : t("next");
  }

  function setQuestionSource(question) {
    const source = $("#question-source");
    source.textContent = question.year
      ? t("questionSourceYear").replace("{year}", String(question.year))
      : t("questionSourceAuthor");
    const reference = $("#question-year");
    reference.hidden = !question.referenceYear;
    reference.textContent = question.referenceYear
      ? t("authorReference").replace("{year}", String(question.referenceYear))
      : "";
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
    $("label[for='account-email']").textContent = t("emailLabel");
    $("label[for='account-password']").textContent = t("passwordLabel");
    $("label[for='account-display-name']").textContent = t("displayNameLabel");
    $("label[for='player-name']").textContent = t("nameLabel");
    $("#player-name").placeholder = t("namePlaceholder");
    $("#name-hint").textContent = t("nameHint");
    $("#login-mode").textContent = es ? "Usar cuenta" : "Usar conta";
    $("#guest-mode").textContent = t("guest");
    $("#local-login-note").textContent = t("localNote");
    $("#auth-submit").textContent = t(state.accountAction === "register" ? "authRegister" : "authLogin");
    $("#auth-switch").textContent = t(state.accountAction === "register" ? "switchToLogin" : "switchToRegister");
    $("#auth-logout").textContent = t("logout");
    $(".game-settings h2").textContent = t("settings");
    $(".subject-picker legend").textContent = t("subjectsLabel");
    const subjectLabels = { matematica: t("math"), fisica: t("physics"), quimica: t("chemistry"), biologia: t("biology"), filosofia: t("philosophy"), historia: t("history"), geografia: t("geography"), "educacao-fisica": t("pe"), interdisciplinar: t("interdisciplinary") };
    [...document.querySelectorAll(".subject-picker label")].forEach((label) => { label.lastChild.textContent = ` ${subjectLabels[label.querySelector("input").value]}`; });
    $(".time-setting").childNodes[0].textContent = t("timeSetting");
    $("#answer-time-value").textContent = `${$("#answer-time").value} ${t("seconds")}`;
    $("#local-login-note").setAttribute("aria-label", t("apiUnavailable"));
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
    $(".progress-meta span:first-child").textContent = t("phaseProgress");
    $("#progress-label").textContent = `${state.question + 1} ${t("of")} ${gameLength() || 10}`;
    $("#round-total").textContent = gameLength() || 10;
    $("#progress-track").setAttribute("aria-valuemax", String(gameLength() || 10));
    $("#progress-track").setAttribute("aria-label", es ? "Progreso del desafío" : "Progresso do desafio");
    $(".progress-wrap").setAttribute("aria-label", t("progressLabel"));
    $("#options").setAttribute("aria-label", t("options"));
    $(".question-card").setAttribute("aria-label", es ? "Pregunta del juego" : "Pergunta do jogo");
    $(".progress-meta span:first-child").textContent = t("phaseProgress");
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
    updatePhaseSummary();
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

  function choosePlayerMode(mode) {
    state.playerMode = mode;
    $("#login-mode").classList.toggle("is-active", mode === "profile");
    $("#guest-mode").classList.toggle("is-active", mode === "guest");
    $("#login-mode").setAttribute("aria-pressed", String(mode === "profile"));
    $("#guest-mode").setAttribute("aria-pressed", String(mode === "guest"));
    $("#account-panel").hidden = mode === "guest";
    $("#guest-name-row").hidden = mode !== "guest";
    $("#player-name").value = mode === "guest" ? "" : $("#player-name").value;
    $("#player-name").placeholder = t("namePlaceholder");
    $("#player-name").setAttribute("aria-label", t("nameLabel"));
    $("#name-hint").textContent = mode === "guest" ? t("guestName") : state.authUser ? t("accountReady") : t("loginPrompt");
    $("#local-login-note").hidden = mode === "guest";
    $("#start-game").hidden = mode === "profile" && !state.authUser;
    $("#start-game").disabled = mode === "profile" && !state.authUser;
    $("#auth-submit").hidden = Boolean(state.authUser);
    $("#auth-switch").hidden = Boolean(state.authUser);
    $("#auth-logout").hidden = !state.authUser;
    $("#account-register-fields").hidden = state.accountAction !== "register";
    if (state.authUser && mode === "profile") {
      state.player = state.authUser.displayName;
      state.playerId = state.authUser.id;
      $("#game-player").textContent = state.player;
      setAccountStatus(`${t("accountReady")} ${state.authUser.email}`);
    }
  }

  async function submitAccountForm() {
    const email = $("#account-email").value.trim();
    const password = $("#account-password").value;
    const displayName = $("#account-display-name").value.trim();
    setAccountStatus(t("authLogin"));
    try {
      const path = state.accountAction === "register" ? "/auth/register" : "/auth/login";
      const payload = await apiRequest(path, {
        method: "POST",
        body: JSON.stringify({ email, password, displayName })
      });
      state.authUser = payload.user;
      state.player = payload.user.displayName;
      state.playerId = payload.user.id;
      choosePlayerMode("profile");
      $("#account-password").value = "";
      setAccountStatus(`${t("accountReady")} ${payload.user.email}`);
    } catch (error) {
      setAccountStatus(error instanceof Error ? error.message : t("authFailed"), true);
    }
  }

  async function restoreAccountSession() {
    if (!apiBase) {
      setAccountStatus(t("apiUnavailable"), true);
      return;
    }
    try {
      const payload = await apiRequest("/auth/me");
      state.authUser = payload.user;
      state.player = payload.user.displayName;
      state.playerId = payload.user.id;
      choosePlayerMode("profile");
    } catch (error) {
      if (error instanceof Error && error.message !== t("apiUnavailable")) {
        setAccountStatus(t("loginPrompt"));
        return;
      }
      setAccountStatus(t("apiUnavailable"), true);
    }
  }

  async function logoutAccount() {
    try {
      await apiRequest("/auth/logout", { method: "POST" });
    } catch (error) {
      setAccountStatus(error instanceof Error ? error.message : t("authFailed"), true);
    }
    state.authUser = null;
    state.player = "";
    state.playerId = null;
    choosePlayerMode("profile");
  }

  async function buildGameQuestions() {
    state.gameQuestions = [];
    state.gamePhasePlan = [];
    state.questionPoolError = null;
    const languageIndex = state.language === "es" ? 1 : 0;
    const availableSubjects = [...document.querySelectorAll("input[name='subject']:checked")].map((input) => input.value);
    const playerHistoryId = state.playerId || normalizeName(state.player) || "convidado";
    const historyKey = `desafio-vistos:${playerHistoryId}`;
    let seen = [];
    try { seen = JSON.parse(localStorage.getItem(historyKey) || "[]"); } catch { seen = []; }
    if (!Array.isArray(seen)) seen = [];
    if (state.playerId && apiBase) {
      try {
        const { questionIds } = await apiRequest("/question-history");
        if (Array.isArray(questionIds)) seen = [...new Set([...seen, ...questionIds])];
      } catch {
        // O histórico local continua disponível caso a API esteja temporariamente indisponível.
      }
    }
    const usedIds = new Set();
    const deck = [];
    const allQuestions = questionPairs.map((pair) => pair[languageIndex]);
    for (let phaseIndex = 0; phaseIndex < phasePlan.length; phaseIndex += 1) {
      const requestedPhase = phasePlan[phaseIndex];
      const pool = allQuestions.filter((question) => availableSubjects.includes(question.subject) && question.difficulty === requestedPhase.difficulty);
      const count = Math.min(requestedPhase.count, pool.length);
      if (!count) continue;
      const unseen = shuffle(pool.filter((question) => !seen.includes(question.id)));
      const previouslySeen = shuffle(pool.filter((question) => seen.includes(question.id)));
      const candidates = [...unseen, ...previouslySeen].filter((question) => !usedIds.has(question.id));
      if (candidates.length < count) {
        state.questionPoolError = { difficulty: requestedPhase.difficulty, required: count, available: candidates.length };
        return [];
      }
      const phase = { ...requestedPhase, count, start: deck.length };
      state.gamePhasePlan.push(phase);
      candidates.slice(0, count).forEach((question) => {
        usedIds.add(question.id);
        deck.push({ ...question, phaseIndex: state.gamePhasePlan.length - 1 });
      });
    }
    state.historyKey = historyKey;
    state.historySeen = seen;
    state.gameQuestions = deck.map((question, index) => {
      const localized = { ...question };
      if (index === 1 || index === 5 || index === 8) {
        const challenges = state.language === "es" ? physicalChallengesEs : physicalChallenges;
        localized.challenge = challenges[index === 1 ? 0 : index === 5 ? 1 : 2];
      }
      return localized;
    });
    const nextSeen = [...new Set([...state.historySeen, ...deck.map((question) => question.id)])];
    try { localStorage.setItem(historyKey, JSON.stringify(nextSeen)); } catch { /* O histórico remoto permanece disponível para contas autenticadas. */ }
    if (state.playerId && apiBase) {
      try {
        await apiRequest("/question-history", {
          method: "POST",
          body: JSON.stringify({ questionIds: deck.map((question) => question.id) })
        });
      } catch {
        // A partida pode continuar usando o histórico local.
      }
    }
    if (!state.playerId) state.guestSeen = nextSeen;
    return state.gameQuestions;
  }

  function currentPhase() {
    const difficulty = state.gameQuestions[state.question]?.difficulty;
    const points = { facil: 100, medio: 150, dificil: 200 }[difficulty] || 100;
    return { points, time: Number($("#answer-time").value) || 20 };
  }

  function questionPairById(id) {
    return questionPairs.find((pair) => pair[0].id === id);
  }

  function refreshCurrentQuestionLanguage() {
    const oldQuestion = state.gameQuestions[state.question];
    const pair = questionPairById(oldQuestion.id);
    if (!pair) return;
    const localized = { ...pair[state.language === "es" ? 1 : 0], phaseIndex: oldQuestion.phaseIndex };
    const challengeIndex = state.question === 1 ? 0 : state.question === 5 ? 1 : state.question === 8 ? 2 : -1;
    if (challengeIndex >= 0) {
      localized.challenge = (state.language === "es" ? physicalChallengesEs : physicalChallenges)[challengeIndex];
    }
    state.gameQuestions[state.question] = localized;
    const phase = phaseForQuestion(state.question);
    $("#question-category").textContent = localized.category;
    setQuestionSource(localized);
    $("#round-number").textContent = String(state.question - phase.start + 1).padStart(2, "0");
    $("#round-total").textContent = phase.count;
    $("#phase-name").textContent = t(phase.label);
    $("#question-index").textContent = `${t("question")} ${String(state.question - phase.start + 1).padStart(2, "0")} · ${{ facil: 100, medio: 150, dificil: 200 }[localized.difficulty]} ${t("points")}`;
    $("#progress-label").textContent = `${state.question - phase.start + 1} ${t("of")} ${phase.count}`;
    $("#progress-fill").style.width = `${((state.question - phase.start + 1) / phase.count) * 100}%`;
    $("#progress-track").setAttribute("aria-valuemax", String(phase.count));
    $("#progress-track").setAttribute("aria-valuenow", String(state.question - phase.start + 1));
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
            $("#next-question").innerHTML = `${nextQuestionLabel()} <span aria-hidden="true">${state.question === gameLength() - 1 ? "↗" : "→"}</span>`;
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

  async function startGame() {
    state.phaseScoreDelta = 0;
    state.phaseCorrectDelta = 0;
    const input = $("#player-name");
    const name = input.value.trim().replace(/\s+/g, " ").slice(0, 20);
    if (state.playerMode === "profile" && !state.authUser) {
      showToast(t("loginRequired"));
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
      state.player = state.authUser.displayName;
      state.playerId = state.authUser.id;
    }
    state.question = 0;
    state.gamePhasePlan = [];
    state.gameFinished = false;
    state.score = 0;
    state.streak = 0;
    state.maxStreak = 0;
    state.correct = 0;
    state.answerTimes = [];
    state.gameQuestions = await buildGameQuestions();
    if (!state.gameQuestions.length) {
      const poolError = state.questionPoolError;
      showToast(poolError
        ? t("phasePoolError").replace("{available}", String(poolError.available)).replace("{required}", String(poolError.required)).replace("{difficulty}", t(`difficulty_${poolError.difficulty}`).toLowerCase())
        : t("tooFewQuestions"));
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
    const scoringPhase = currentPhase();
    const phase = phaseForQuestion(state.question);
    $("#round-number").textContent = String(state.question - phase.start + 1).padStart(2, "0");
    $("#round-total").textContent = phase.count;
    $("#phase-name").textContent = t(phase.label);
    $("#round-label").textContent = t("roundLabel");
    $(".progress-meta span:first-child").textContent = t("phaseProgress");
    $("#progress-label").textContent = `${state.question - phase.start + 1} ${t("of")} ${phase.count}`;
    $("#progress-fill").style.width = `${((state.question - phase.start + 1) / phase.count) * 100}%`;
    $("#progress-track").setAttribute("aria-valuemax", String(phase.count));
    $("#progress-track").setAttribute("aria-valuenow", String(state.question - phase.start + 1));
    $("#question-category").textContent = question.category;
    setQuestionSource(question);
    $("#question-index").textContent = `${t("question")} ${String(state.question - phase.start + 1).padStart(2, "0")} · ${scoringPhase.points} ${t("points")}`;
    $("#question-text").textContent = question.text;
    $("#score-value").textContent = String(state.score).padStart(3, "0");
    $("#streak-value").textContent = state.streak;
    $("#answer-feedback").textContent = "";
    $("#answer-feedback").className = "answer-feedback";
    $("#next-question").disabled = true;
    $("#next-question").innerHTML = `${nextQuestionLabel()} <span aria-hidden="true">${state.question === gameLength() - 1 ? "↗" : "→"}</span>`;
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

    state.seconds = scoringPhase.time;
    state.currentLimit = scoringPhase.time;
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
    let earnedThisAnswer = 0;
    if (isCorrect) {
      state.correct += 1;
      state.streak += 1;
      state.maxStreak = Math.max(state.maxStreak, state.streak);
      state.score += phase.points;
      earnedThisAnswer += phase.points;
      let comboMessage = "";
      if (state.streak === 3) {
        state.score += 50;
        earnedThisAnswer += 50;
        comboMessage = ` ${t("combo")}`;
      } else if (state.streak === 5) {
        state.score += 100;
        earnedThisAnswer += 100;
        comboMessage = ` ${t("super")}`;
      }
      state.phaseScoreDelta += earnedThisAnswer;
      state.phaseCorrectDelta += 1;
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
      void finishGame();
      return;
    }
    const finishedPhase = phaseForQuestion(state.question);
    if (state.question === finishedPhase.start + finishedPhase.count - 1) {
      const nextPhase = phasePlan[finishedPhase.index + 1];
      if (nextPhase) {
        const shouldAdvance = window.confirm(
          t("confirmAdvance").replace("{nextPhase}", t(nextPhase.label))
        );
        if (!shouldAdvance) {
          showToast(t("advanceCancelled"));
          void finishGame();
          return;
        }
      }
      showToast(t("phaseComplete").replace("{number}", String(finishedPhase.index + 1)).replace("{label}", t(nextPhase.label)));
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
    if (state.score >= 5500) return [t("newRecord"), state.language === "es" ? "RITMO<br />CAMPEÓN" : "RITMO<br />DE CAMPEÃO"];
    if (state.score >= 4500) return [t("excellent"), state.language === "es" ? "GRAN<br />RESULTADO" : "DESEMPENHO<br />EXCELENTE"];
    if (state.score >= 3000) return [t("good"), state.language === "es" ? "BUEN<br />TRABAJO" : "BOM<br />TRABALHO"];
    return [t("keepGoing"), state.language === "es" ? "SIGUE<br />APRENDIENDO" : "CONTINUE<br />EM MOVIMENTO"];
  }

  async function finishGame() {
    state.gameFinished = true;
    const total = gameLength();
    const percentage = Math.round((state.correct / total) * 100);
    const record = await saveScore();
    let ranking = [];
    try { ranking = await getRanking(); } catch { /* A pontuação local continua sendo apresentada se a rede falhar. */ }
    const rankIndex = ranking.findIndex((item) => item.id === state.playerId);
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
    else if (!record.persisted) showToast(t("scoreSaveFailed"));
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

  function getLocalRanking() {
    return readStoredRanking().sort((a, b) => b.points - a.points || b.timestamp - a.timestamp).slice(0, 10);
  }

  function getRanking() {
    if (apiBase) {
      return apiRequest("/ranking").then(({ ranking }) => ranking.map((item) => ({
        ...item,
        percentage: item.total ? Math.round((item.correct / item.total) * 100) : 0,
        timestamp: new Date(item.updatedAt).getTime(),
        persisted: true,
      })));
    }
    return Promise.resolve(getLocalRanking());
  }

  async function saveScore() {
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
      const { score } = await apiRequest("/scores", {
        method: "POST",
        body: JSON.stringify({ points: record.points, correct: record.correct, total: record.total, maxStreak: record.maxStreak })
      });
      record.id = score.userId;
      record.points = score.points;
      record.correct = score.correct;
      record.total = score.total;
      record.maxStreak = score.maxStreak;
      record.timestamp = new Date(score.updatedAt).getTime();
      record.percentage = Math.round((score.correct / score.total) * 100);
      record.persisted = true;
    } catch {
      record.persisted = false;
    }
    return record;
  }

  async function renderRanking() {
    const leaderboard = $("#leaderboard");
    leaderboard.innerHTML = "";
    let ranking;
    try {
      ranking = await getRanking();
    } catch {
      const error = document.createElement("div");
      error.className = "ranking-empty";
      error.textContent = t("rankingLoadFailed");
      leaderboard.replaceChildren(error);
      return;
    }
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
  $("#auth-submit").addEventListener("click", submitAccountForm);
  $("#auth-switch").addEventListener("click", () => {
    state.accountAction = state.accountAction === "login" ? "register" : "login";
    $("#account-register-fields").hidden = state.accountAction !== "register";
    $("#account-password").autocomplete = state.accountAction === "register" ? "new-password" : "current-password";
    applyLanguage();
  });
  $("#auth-logout").addEventListener("click", logoutAccount);
  $("#account-password").addEventListener("keydown", (event) => { if (event.key === "Enter") submitAccountForm(); });
  $("#answer-time").addEventListener("input", (event) => {
    $("#answer-time-value").textContent = `${event.currentTarget.value} ${t("seconds")}`;
  });
  document.querySelectorAll("input[name='subject']").forEach((input) => input.addEventListener("change", updatePhaseSummary));
  $("#enem-year").addEventListener("change", renderEnemSources);
  $("#enem-subject").addEventListener("change", renderEnemSources);
  $("#start-game").addEventListener("click", startGame);
  $("#player-name").addEventListener("keydown", (event) => { if (event.key === "Enter") startGame(); });
  $("#player-name").addEventListener("input", () => { $("#name-hint").textContent = t("guestName"); });
  $("#next-question").addEventListener("click", nextQuestion);
  $("#physical-toggle").addEventListener("click", togglePhysical);
  $("#complete-physical").addEventListener("click", completePhysical);
  $("#play-again").addEventListener("click", () => { $("#player-name").value = state.player; showView("inicio"); startGame(); });
  $("#clear-ranking").addEventListener("click", async () => {
    if (apiBase && !state.authUser) {
      showToast(t("loginRequired"));
      return;
    }
    let ranking = [];
    try { ranking = await getRanking(); } catch { showToast(t("rankingLoadFailed")); return; }
    if (!ranking.length) {
      showToast(t("emptyRanking"));
      return;
    }
    const confirmation = apiBase && state.authUser ? t("clearOwnScore") : t("clearConfirm");
    if (window.confirm(confirmation)) {
      try {
        if (apiBase && state.authUser) await apiRequest("/scores", { method: "DELETE" });
        else {
          localStorage.removeItem("desafio-ranking");
          localStorage.removeItem("desafio-melhor-pontuacao");
        }
        await renderRanking();
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
  updatePhaseSummary();
  renderEnemSources();
  choosePlayerMode("profile");
  void restoreAccountSession();
  void renderRanking();
})();