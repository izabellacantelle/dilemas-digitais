Claro. Abaixo está um projeto completo, separado em index.html, style.css e script.js, pensado para pessoas idosas: textos grandes, alto contraste, botões simples, navegação acessível, orientações práticas e um quiz interativo no final.

As orientações de segurança foram baseadas em recomendações oficiais brasileiras sobre phishing, senhas, autenticação em dois fatores, atualizações e fraudes digitais. 
S
Serviços e Informações do Brasil
+2

1. index.html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Internet Segura para a Melhor Idade</title>

    <meta
        name="description"
        content="Orientações simples para pessoas idosas utilizarem a internet com mais segurança."
    >

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- Cabeçalho -->
    <header class="header">
        <div class="container header-content">

            <a href="#inicio" class="logo">
                <span class="logo-icon">🛡️</span>
                <span>Internet Segura</span>
            </a>

            <nav aria-label="Navegação principal">
                <a href="#cuidados">Cuidados</a>
                <a href="#golpes">Golpes</a>
                <a href="#solucoes">Soluções</a>
                <a href="#quiz">Quiz</a>
            </nav>

        </div>
    </header>


    <main>

        <!-- Hero -->
        <section class="hero" id="inicio">
            <div class="container hero-grid">

                <div class="hero-text">
                    <span class="tag">INTERNET PARA TODAS AS IDADES</span>

                    <h1>
                        Navegue pela internet
                        <strong>com segurança e tranquilidade.</strong>
                    </h1>

                    <p>
                        A internet pode facilitar muito a nossa vida.
                        Aprenda a reconhecer golpes, proteger suas informações
                        e usar seus dispositivos com mais confiança.
                    </p>

                    <div class="hero-buttons">
                        <a href="#cuidados" class="button button-primary">
                            Quero aprender
                        </a>

                        <a href="#quiz" class="button button-secondary">
                            Fazer o quiz
                        </a>
                    </div>
                </div>

                <div class="hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1581579185169-6a2d6e2d8b8a?auto=format&fit=crop&w=900&q=80"
                        alt="Pessoa idosa utilizando um computador"
                    >
                </div>

            </div>
        </section>


        <!-- Mensagem rápida -->
        <section class="quick-message">
            <div class="container quick-content">

                <div class="quick-icon">💡</div>

                <div>
                    <h2>Uma regra de ouro</h2>
                    <p>
                        <strong>Pare, pense e confira antes de clicar.</strong>
                        Mensagens urgentes ou que pedem dinheiro, senhas e códigos
                        merecem atenção redobrada.
                    </p>
                </div>

            </div>
        </section>


        <!-- Cuidados -->
        <section class="section" id="cuidados">
            <div class="container">

                <div class="section-title">
                    <span class="tag">01 — PROTEÇÃO</span>

                    <h2>
                        Seis cuidados importantes
                    </h2>

                    <p>
                        Pequenas atitudes podem fazer uma grande diferença
                        para proteger seus dados.
                    </p>
                </div>


                <div class="cards">

                    <article class="card">
                        <div class="card-icon">🔐</div>
                        <h3>Use senhas fortes</h3>
                        <p>
                            Prefira senhas longas e difíceis de adivinhar.
                            Evite nome, aniversário ou informações que outras
                            pessoas conheçam.
                        </p>
                    </article>


                    <article class="card">
                        <div class="card-icon">📱</div>
                        <h3>Ative a verificação em duas etapas</h3>
                        <p>
                            Quando disponível, use a autenticação em dois fatores.
                            Ela cria uma camada extra de proteção para sua conta.
                        </p>
                    </article>


                    <article class="card">
                        <div class="card-icon">🔗</div>
                        <h3>Cuidado com links</h3>
                        <p>
                            Não clique imediatamente em links recebidos por
                            mensagens. Confirme primeiro quem enviou e para onde
                            o link leva.
                        </p>
                    </article>


                    <article class="card">
                        <div class="card-icon">💳</div>
                        <h3>Proteja seus dados bancários</h3>
                        <p>
                            Nunca forneça senha, código de autenticação ou
                            dados do cartão para pessoas que entrarem em contato
                            inesperadamente.
                        </p>
                    </article>


                    <article class="card">
                        <div class="card-icon">🔄</div>
                        <h3>Mantenha tudo atualizado</h3>
                        <p>
                            Atualize o celular, computador, aplicativos e
                            navegador. As atualizações ajudam a corrigir
                            problemas de segurança.
                        </p>
                    </article>


                    <article class="card">
                        <div class="card-icon">📶</div>
                        <h3>Prefira redes confiáveis</h3>
                        <p>
                            Para acessar banco ou outros serviços importantes,
                            prefira sua rede doméstica ou uma conexão confiável.
                        </p>
                    </article>

                </div>
            </div>
        </section>


        <!-- Golpes -->
        <section class="section section-light" id="golpes">

            <div class="container">

                <div class="section-title">
                    <span class="tag">02 — ATENÇÃO</span>

                    <h2>
                        Conheça os golpes mais comuns
                    </h2>

                    <p>
                        Golpistas podem usar mensagens, ligações, sites falsos
                        e até perfis que parecem verdadeiros.
                    </p>
                </div>


                <div class="warning-grid">

                    <div class="warning-image">
                        <img
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
                            alt="Pessoa utilizando um celular para fazer uma compra"
                        >
                    </div>


                    <div class="warning-list">

                        <div class="warning-item">
                            <span>⚠️</span>

                            <div>
                                <h3>Phishing</h3>
                                <p>
                                    Mensagens ou páginas falsas tentam fazer
                                    você entregar senhas, dados pessoais ou
                                    informações bancárias.
                                </p>
                            </div>
                        </div>


                        <div class="warning-item">
                            <span>📞</span>

                            <div>
                                <h3>Falso funcionário</h3>
                                <p>
                                    Alguém pode ligar fingindo ser do banco,
                                    governo ou empresa conhecida e pedir
                                    informações ou códigos.
                                </p>
                            </div>
                        </div>


                        <div class="warning-item">
                            <span>🎁</span>

                            <div>
                                <h3>Prêmios e ofertas falsas</h3>
                                <p>
                                    Desconfie de prêmios inesperados, descontos
                                    exagerados ou propostas que exigem pagamento
                                    imediato.
                                </p>
                            </div>
                        </div>


                        <div class="warning-item">
                            <span>👨‍👩‍👧</span>

                            <div>
                                <h3>Golpe do familiar</h3>
                                <p>
                                    Uma pessoa pode fingir ser um filho, neto
                                    ou conhecido e pedir dinheiro com urgência.
                                    Confirme a identidade por outro meio.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>


        <!-- Soluções -->
        <section class="section" id="solucoes">

            <div class="container">

                <div class="section-title">
                    <span class="tag">03 — SOLUÇÕES</span>

                    <h2>
                        O que fazer quando algo parecer estranho?
                    </h2>
                </div>


                <div class="steps">

                    <div class="step">
                        <span class="step-number">1</span>

                        <div>
                            <h3>Não tenha pressa</h3>
                            <p>
                                Golpistas frequentemente usam urgência para
                                fazer a vítima agir sem pensar.
                            </p>
                        </div>
                    </div>


                    <div class="step">
                        <span class="step-number">2</span>

                        <div>
                            <h3>Não clique</h3>
                            <p>
                                Se uma mensagem parecer estranha, não abra
                                links ou anexos.
                            </p>
                        </div>
                    </div>


                    <div class="step">
                        <span class="step-number">3</span>

                        <div>
                            <h3>Confirme por um canal oficial</h3>
                            <p>
                                Entre no site ou aplicativo oficial digitando
                                o endereço diretamente no navegador.
                            </p>
                        </div>
                    </div>


                    <div class="step">
                        <span class="step-number">4</span>

                        <div>
                            <h3>Peça ajuda</h3>
                            <p>
                                Converse com alguém de confiança antes de
                                transferir dinheiro ou fornecer informações.
                            </p>
                        </div>
                    </div>

                </div>


                <div class="emergency-box">

                    <div class="emergency-icon">🚨</div>

                    <div>
                        <h2>Você acha que caiu em um golpe?</h2>

                        <p>
                            Não entre em pânico. Entre em contato imediatamente
                            com o banco ou serviço envolvido pelos canais
                            oficiais. Troque senhas comprometidas e guarde
                            mensagens, comprovantes e capturas de tela.
                        </p>
                    </div>

                </div>

            </div>
        </section>


        <!-- Checklist -->
        <section class="checklist-section">

            <div class="container checklist-grid">

                <div>
                    <span class="tag">CHECKLIST</span>

                    <h2>
                        Antes de clicar, faça estas perguntas:
                    </h2>

                    <p>
                        Se uma mensagem deixar você em dúvida, pare por alguns
                        segundos e confira estes pontos.
                    </p>
                </div>


                <div class="checklist">

                    <label>
                        <input type="checkbox">
                        <span>A pessoa ou empresa realmente enviou a mensagem?</span>
                    </label>

                    <label>
                        <input type="checkbox">
                        <span>Estão pedindo minha senha ou código?</span>
                    </label>

                    <label>
                        <input type="checkbox">
                        <span>Estão tentando me deixar com medo ou com pressa?</span>
                    </label>

                    <label>
                        <input type="checkbox">
                        <span>Posso confirmar a informação em um canal oficial?</span>
                    </label>

                    <label>
                        <input type="checkbox">
                        <span>Preciso mesmo clicar nesse link?</span>
                    </label>

                </div>

            </div>
        </section>


        <!-- Recursos -->
        <section class="section resources">

            <div class="container">

                <div class="section-title">
                    <span class="tag">04 — FONTES</span>

                    <h2>
                        Onde buscar ajuda?
                    </h2>
                </div>


                <div class="resource-cards">

                    <a
                        href="https://www.gov.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="resource-card"
                    >
                        <span>🇧🇷</span>
                        <h3>Gov.br</h3>
                        <p>
                            Acesse serviços e informações oficiais do Governo
                            Federal.
                        </p>
                    </a>


                    <a
                        href="https://www.gov.br/pf/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="resource-card"
                    >
                        <span>🛡️</span>
                        <h3>Polícia Federal</h3>
                        <p>
                            Consulte informações sobre crimes e fraudes
                            cibernéticas.
                        </p>
                    </a>


                    <a
                        href="https://www.gov.br/anatel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="resource-card"
                    >
                        <span>📡</span>
                        <h3>Anatel</h3>
                        <p>
                            Consulte orientações relacionadas a segurança e
                            fraudes em telecomunicações.
                        </p>
                    </a>

                </div>

            </div>
        </section>


        <!-- Quiz -->
        <section class="quiz-section" id="quiz">

            <div class="container">

                <div class="quiz-header">
                    <span class="tag">05 — TESTE SEUS CONHECIMENTOS</span>

                    <h2>Quiz: você sabe se proteger?</h2>

                    <p>
                        Responda às perguntas e descubra quanto você aprendeu.
                    </p>
                </div>


                <div class="quiz-card" id="quiz-container">

                    <div class="quiz-progress">
                        <div id="progress-bar"></div>
                    </div>

                    <p class="question-counter" id="question-counter">
                        Pergunta 1 de 5
                    </p>

                    <h3 id="question">
                        Carregando pergunta...
                    </h3>

                    <div id="answers" class="answers"></div>

                    <button
                        type="button"
                        id="next-button"
                        class="button button-primary next-button"
                        disabled
                    >
                        Próxima pergunta
                    </button>

                </div>


                <div
                    id="result"
                    class="quiz-result"
                    aria-live="polite"
                ></div>

            </div>
        </section>

    </main>


    <!-- Rodapé -->
    <footer class="footer">

        <div class="container footer-content">

            <div>
                <h2>Internet Segura</h2>

                <p>
                    Informação e prevenção para uma experiência digital
                    mais segura.
                </p>
            </div>

            <div>
                <p>
                    Desenvolvido com foco em acessibilidade,
                    simplicidade e educação digital.
                </p>
            </div>

        </div>

        <div class="footer-bottom">
            <p>
                © 2026 Internet Segura — Projeto educativo
            </p>
        </div>

    </footer>


    <script src="script.js"></script>

</body>
</html>

2. style.css
/* ==============================
   CONFIGURAÇÕES GERAIS
============================== */

:root {
    --primary: #1456a0;
    --primary-dark: #0d3d73;
    --primary-light: #eaf3ff;

    --green: #16805c;
    --green-light: #e9f8f1;

    --yellow: #ffcf4a;
    --red: #c62828;
    --red-light: #fff0f0;

    --dark: #17212b;
    --text: #344454;
    --muted: #607080;

    --background: #ffffff;
    --background-light: #f5f8fb;

    --border: #d9e1e8;

    --shadow: 0 12px 35px rgba(20, 50, 80, 0.10);

    --radius: 18px;
}


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


html {
    scroll-behavior: smooth;
}


body {
    font-family:
        Arial,
        Helvetica,
        sans-serif;

    color: var(--text);
    background: var(--background);

    font-size: 18px;
    line-height: 1.65;
}


img {
    max-width: 100%;
    display: block;
}


a {
    color: inherit;
}


.container {
    width: min(1160px, 92%);
    margin: 0 auto;
}


h1,
h2,
h3 {
    color: var(--dark);
    line-height: 1.2;
}


h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
}


h2 {
    font-size: clamp(2rem, 4vw, 3rem);
}


h3 {
    font-size: 1.4rem;
}


p {
    max-width: 720px;
}


.tag {
    display: inline-block;

    color: var(--primary);
    background: var(--primary-light);

    padding: 7px 14px;

    border-radius: 100px;

    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.05em;

    margin-bottom: 18px;
}


/* ==============================
   BOTÕES
============================== */

.button {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-height: 54px;

    padding: 12px 25px;

    border-radius: 10px;

    font-weight: 700;

    text-decoration: none;

    border: 2px solid transparent;

    cursor: pointer;

    transition:
        transform 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;
}


.button:hover {
    transform: translateY(-2px);
}


.button:focus-visible,
a:focus-visible,
input:focus-visible {
    outline: 4px solid #ffca28;
    outline-offset: 4px;
}


.button-primary {
    color: white;
    background: var(--primary);

    box-shadow: 0 6px 16px rgba(20, 86, 160, 0.22);
}


.button-primary:hover {
    background: var(--primary-dark);
}


.button-secondary {
    color: var(--primary);
    background: white;
    border-color: var(--primary);
}


/* ==============================
   HEADER
============================== */

.header {
    position: sticky;
    top: 0;
    z-index: 100;

    background: rgba(255, 255, 255, 0.96);

    border-bottom: 1px solid var(--border);

    backdrop-filter: blur(12px);
}


.header-content {
    min-height: 78px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 30px;
}


.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    color: var(--primary);

    font-size: 1.25rem;
    font-weight: 800;

    text-decoration: none;
}


.logo-icon {
    font-size: 1.8rem;
}


nav {
    display: flex;
    gap: 24px;
}


nav a {
    color: var(--dark);

    font-weight: 700;

    text-decoration: none;
}


nav a:hover {
    color: var(--primary);
}


/* ==============================
   HERO
============================== */

.hero {
    padding: 90px 0;

    background:
        linear-gradient(
            135deg,
            #f5faff 0%,
            #ffffff 65%
        );
}


.hero-grid {
    display: grid;

    grid-template-columns: 1.05fr 0.95fr;

    gap: 70px;

    align-items: center;
}


.hero h1 {
    margin-bottom: 25px;
}


.hero h1 strong {
    color: var(--primary);
    display: block;
}


.hero p {
    font-size: 1.2rem;
    color: var(--muted);

    margin-bottom: 30px;
}


.hero-buttons {
    display: flex;

    flex-wrap: wrap;

    gap: 15px;
}


.hero-image {
    border-radius: 28px;
    overflow: hidden;

    box-shadow: var(--shadow);
}


.hero-image img {
    width: 100%;
    height: 500px;

    object-fit: cover;
}


/* ==============================
   MENSAGEM RÁPIDA
============================== */

.quick-message {
    background: var(--primary);
    color: white;
}


.quick-content {
    min-height: 150px;

    display: flex;

    align-items: center;

    gap: 25px;
}


.quick-content h2 {
    color: white;
    font-size: 1.8rem;
}


.quick-content p {
    font-size: 1.05rem;
}


.quick-icon {
    font-size: 3.5rem;
}


/* ==============================
   SEÇÕES
============================== */

.section {
    padding: 100px 0;
}


.section-light {
    background: var(--background-light);
}


.section-title {
    max-width: 750px;

    margin-bottom: 55px;
}


.section-title p {
    color: var(--muted);
    margin-top: 18px;
}


/* ==============================
   CARDS
============================== */

.cards {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 24px;
}


.card {
    background: white;

    padding: 32px;

    border: 1px solid var(--border);

    border-radius: var(--radius);

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}


.card:hover {
    transform: translateY(-5px);

    box-shadow: var(--shadow);
}


.card-icon {
    width: 64px;
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 15px;

    background: var(--primary-light);

    font-size: 2rem;

    margin-bottom: 22px;
}


.card h3 {
    margin-bottom: 12px;
}


.card p {
    color: var(--muted);
}


/* ==============================
   GOLPES
============================== */

.warning-grid {
    display: grid;

    grid-template-columns: 0.9fr 1.1fr;

    gap: 60px;

    align-items: center;
}


.warning-image {
    overflow: hidden;

    border-radius: var(--radius);

    box-shadow: var(--shadow);
}


.warning-image img {
    width: 100%;
    height: 540px;

    object-fit: cover;
}


.warning-list {
    display: flex;

    flex-direction: column;

    gap: 28px;
}


.warning-item {
    display: flex;

    gap: 20px;

    padding: 25px;

    background: white;

    border: 1px solid var(--border);

    border-radius: 15px;
}


.warning-item > span {
    flex-shrink: 0;

    font-size: 2rem;
}


.warning-item h3 {
    margin-bottom: 5px;
}


.warning-item p {
    color: var(--muted);
}


/* ==============================
   PASSOS
============================== */

.steps {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 25px;

    margin-bottom: 60px;
}


.step {
    display: flex;

    gap: 20px;

    padding: 30px;

    border-radius: var(--radius);

    background: var(--green-light);

    border: 1px solid #cdeadd;
}


.step-number {
    width: 48px;
    height: 48px;

    display: flex;

    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    background: var(--green);

    color: white;

    border-radius: 50%;

    font-weight: 800;

    font-size: 1.2rem;
}


.step h3 {
    margin-bottom: 7px;
}


.step p {
    color: var(--muted);
}


/* ==============================
   ALERTA
============================== */

.emergency-box {
    display: flex;

    gap: 25px;

    align-items: flex-start;

    padding: 35px;

    border-radius: var(--radius);

    background: var(--red-light);

    border: 2px solid #f2c5c5;
}


.emergency-icon {
    font-size: 3rem;
}


.emergency-box h2 {
    color: var(--red);

    font-size: 1.8rem;

    margin-bottom: 10px;
}


/* ==============================
   CHECKLIST
============================== */

.checklist-section {
    padding: 90px 0;

    color: white;

    background:
        linear-gradient(
            135deg,
            var(--primary-dark),
            var(--primary)
        );
}


.checklist-grid {
    display: grid;

    grid-template-columns: 0.9fr 1.1fr;

    gap: 70px;

    align-items: center;
}


.checklist-section h2 {
    color: white;

    margin-bottom: 20px;
}


.checklist-section p {
    color: #e3edf8;
}


.checklist-section .tag {
    color: white;
    background: rgba(255,255,255,0.15);
}


.checklist {
    display: flex;

    flex-direction: column;

    gap: 15px;
}


.checklist label {
    display: flex;

    align-items: center;

    gap: 15px;

    padding: 20px;

    color: var(--dark);

    background: white;

    border-radius: 12px;

    cursor: pointer;

    font-weight: 600;
}


.checklist input {
    width: 24px;
    height: 24px;

    accent-color: var(--green);

    flex-shrink: 0;
}


/* ==============================
   RECURSOS
============================== */

.resource-cards {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}


.resource-card {
    padding: 30px;

    border: 2px solid var(--border);

    border-radius: var(--radius);

    text-decoration: none;

    transition:
        border-color 0.2s ease,
        transform 0.2s ease;
}


.resource-card:hover {
    border-color: var(--primary);

    transform: translateY(-4px);
}


.resource-card > span {
    font-size: 2.5rem;
}


.resource-card h3 {
    margin: 15px 0 8px;
}


.resource-card p {
    color: var(--muted);
}


/* ==============================
   QUIZ
============================== */

.quiz-section {
    padding: 100px 0;

    background:
        linear-gradient(
            180deg,
            #eef6ff 0%,
            #ffffff 100%
        );
}


.quiz-header {
    text-align: center;

    max-width: 700px;

    margin: 0 auto 45px;
}


.quiz-header p {
    margin: 15px auto 0;

    color: var(--muted);
}


.quiz-card {
    max-width: 800px;

    margin: 0 auto;

    padding: 45px;

    background: white;

    border-radius: 22px;

    box-shadow: var(--shadow);
}


.quiz-progress {
    width: 100%;

    height: 10px;

    background: #e3eaf1;

    border-radius: 20px;

    overflow: hidden;

    margin-bottom: 25px;
}


#progress-bar {
    height: 100%;

    width: 20%;

    background: var(--primary);

    transition: width 0.3s ease;
}


.question-counter {
    color: var(--primary);

    font-weight: 800;

    margin-bottom: 15px;
}


#question {
    font-size: 1.8rem;

    margin-bottom: 30px;
}


.answers {
    display: grid;

    gap: 14px;
}


.answer-button {
    width: 100%;

    text-align: left;

    padding: 18px 20px;

    border: 2px solid var(--border);

    background: white;

    border-radius: 12px;

    color: var(--dark);

    font-size: 1rem;

    font-weight: 600;

    cursor: pointer;

    transition:
        background 0.2s ease,
        border-color 0.2s ease;
}


.answer-button:hover {
    border-color: var(--primary);

    background: var(--primary-light);
}


.answer-button.correct {
    color: #075b3d;

    background: #dcf8ea;

    border-color: var(--green);
}


.answer-button.wrong {
    color: #8d1d1d;

    background: #ffe3e3;

    border-color: var(--red);
}


.answer-button:disabled {
    cursor: default;
}


.next-button {
    margin-top: 25px;

    width: 100%;
}


.next-button:disabled {
    opacity: 0.5;

    cursor: not-allowed;

    transform: none;
}


.quiz-result {
    max-width: 800px;

    margin: 30px auto 0;

    padding: 35px;

    text-align: center;

    background: var(--green-light);

    border: 2px solid #b9e5d0;

    border-radius: var(--radius);

    display: none;
}


.quiz-result.show {
    display: block;
}


.quiz-result h2 {
    color: var(--green);

    margin-bottom: 10px;
}


/* ==============================
   FOOTER
============================== */

.footer {
    background: #101a24;

    color: #dce5ee;
}


.footer-content {
    padding: 55px 0;

    display: flex;

    justify-content: space-between;

    gap: 40px;
}


.footer h2 {
    color: white;

    margin-bottom: 10px;
}


.footer p {
    color: #b8c5d2;
}


.footer-bottom {
    padding: 20px;

    text-align: center;

    border-top: 1px solid rgba(255,255,255,0.1);
}


.footer-bottom p {
    margin: 0 auto;

    font-size: 0.9rem;
}


/* ==============================
   RESPONSIVIDADE
============================== */

@media (max-width: 900px) {

    body {
        font-size: 17px;
    }


    nav {
        display: none;
    }


    .hero {
        padding: 60px 0;
    }


    .hero-grid,
    .warning-grid,
    .checklist-grid {
        grid-template-columns: 1fr;

        gap: 40px;
    }


    .hero-image img {
        height: 400px;
    }


    .cards {
        grid-template-columns:
            repeat(2, 1fr);
    }


    .resource-cards {
        grid-template-columns:
            repeat(2, 1fr);
    }
}


@media (max-width: 600px) {

    h1 {
        font-size: 2.5rem;
    }


    h2 {
        font-size: 2rem;
    }


    .header-content {
        min-height: 68px;
    }


    .hero-buttons {
        flex-direction: column;
    }


    .button {
        width: 100%;
    }


    .hero-image img {
        height: 300px;
    }


    .cards,
    .steps,
    .resource-cards {
        grid-template-columns: 1fr;
    }


    .section {
        padding: 70px 0;
    }


    .quick-content {
        padding: 25px 0;
    }


    .quick-icon {
        font-size: 2.5rem;
    }


    .warning-image img {
        height: 350px;
    }


    .quiz-card {
        padding: 25px 20px;
    }


    #question {
        font-size: 1.45rem;
    }


    .footer-content {
        flex-direction: column;
    }
}


/* ==============================
   ACESSIBILIDADE
============================== */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        transition: none !important;
    }
}

3. script.js
/* =========================================
   QUIZ - INTERNET SEGURA
========================================= */

const questions = [
    {
        question:
            "Você recebe uma mensagem dizendo que sua conta será bloqueada em poucos minutos e pedindo para clicar em um link. O que deve fazer?",

        answers: [
            "Clicar rapidamente para evitar o bloqueio.",
            "Responder à mensagem pedindo mais informações.",
            "Não clicar e confirmar a informação pelo canal oficial.",
            "Encaminhar a mensagem para todos os seus contatos."
        ],

        correct: 2,

        explanation:
            "Mensagens que criam urgência e pedem cliques podem ser tentativas de phishing."
    },

    {
        question:
            "Qual é uma boa prática para proteger suas contas na internet?",

        answers: [
            "Usar a mesma senha em todos os sites.",
            "Usar senhas fortes e ativar a autenticação em dois fatores.",
            "Compartilhar sua senha com pessoas que ligam dizendo ser do banco.",
            "Usar sua data de nascimento como senha."
        ],

        correct: 1,

        explanation:
            "Senhas fortes e autenticação em dois fatores aumentam a proteção das contas."
    },

    {
        question:
            "Uma pessoa liga dizendo ser do banco e pede o código que acabou de chegar no seu celular. O que você deve fazer?",

        answers: [
            "Informar o código para confirmar sua identidade.",
            "Passar apenas os primeiros números.",
            "Desligar e entrar em contato com o banco por um canal oficial.",
            "Pedir o nome completo da pessoa e fornecer o código."
        ],

        correct: 2,

        explanation:
            "Códigos de autenticação são informações de segurança e não devem ser compartilhados com desconhecidos."
    },

    {
        question:
            "Qual atitude é mais segura ao receber um link inesperado de uma empresa conhecida?",

        answers: [
            "Clicar porque o nome da empresa parece verdadeiro.",
            "Verificar a informação no site ou aplicativo oficial.",
            "Enviar o link para um amigo clicar primeiro.",
            "Abrir o link várias vezes para conferir."
        ],

        correct: 1,

        explanation:
            "O ideal é acessar diretamente o site ou aplicativo oficial, evitando links recebidos inesperadamente."
    },

    {
        question:
            "Você percebeu que forneceu sua senha em uma página falsa. Qual deve ser uma das primeiras medidas?",

        answers: [
            "Continuar usando a mesma senha.",
            "Apagar todas as mensagens e esquecer o ocorrido.",
            "Alterar imediatamente a senha comprometida.",
            "Enviar sua senha para um amigo guardar."
        ],

        correct: 2,

        explanation:
            "Quando uma senha pode ter sido comprometida, ela deve ser alterada imediatamente."
    }
];


let currentQuestion = 0;
let score = 0;
let answered = false;


/* Elementos da página */

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("next-button");

const questionCounter =
    document.getElementById("question-counter");

const progressBar =
    document.getElementById("progress-bar");

const resultElement =
    document.getElementById("result");


/* =========================================
   INICIAR QUIZ
========================================= */

function startQuiz() {

    currentQuestion = 0;
    score = 0;

    resultElement.classList.remove("show");

    quizContainer().style.display = "block";

    showQuestion();
}


/* =========================================
   MOSTRAR PERGUNTA
========================================= */

function showQuestion() {

    answered = false;

    const question = questions[currentQuestion];

    questionElement.textContent =
        question.question;

    questionCounter.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width =
        `${progress}%`;

    answersElement.innerHTML = "";

    nextButton.disabled = true;

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "Ver meu resultado"
            : "Próxima pergunta";


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "answer-button";

        button.textContent =
            answer;

        button.addEventListener(
            "click",
            () => selectAnswer(index, button)
        );

        answersElement.appendChild(button);
    });
}


/* =========================================
   SELECIONAR RESPOSTA
========================================= */

function selectAnswer(index, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const question =
        questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-button");


    buttons.forEach((button, buttonIndex) => {

        button.disabled = true;

        if (buttonIndex === question.correct) {
            button.classList.add("correct");
        }

    });


    if (index === question.correct) {

        score++;

    } else {

        selectedButton.classList.add("wrong");

    }


    nextButton.disabled = false;
}


/* =========================================
   PRÓXIMA PERGUNTA
========================================= */

nextButton.addEventListener(
    "click",
    () => {

        if (!answered) {
            return;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            showResult();

        }
    }
);


/* =========================================
   RESULTADO
========================================= */

function showResult() {

    quizContainer().style.display =
        "none";

    let title;
    let message;


    if (score === questions.length) {

        title =
            "Excelente!";

        message =
            "Você demonstrou conhecer muito bem os principais cuidados para usar a internet com segurança.";

    } else if (score >= 3) {

        title =
            "Muito bem!";

        message =
            "Você já conhece vários cuidados importantes. Continue praticando e mantenha a atenção antes de clicar.";

    } else {

        title =
            "Continue aprendendo!";

        message =
            "A segurança digital é uma questão de prática. Revise as orientações deste site e tente o quiz novamente.";

    }


    resultElement.innerHTML = `
        <h2>${title}</h2>

        <p>
            Você acertou
            <strong>${score} de ${questions.length}</strong>
            perguntas.
        </p>

        <p>
            ${message}
        </p>

        <button
            type="button"
            class="button button-primary"
            id="restart-button"
        >
            Fazer o quiz novamente
        </button>
    `;


    resultElement.classList.add("show");


    document
        .getElementById("restart-button")
        .addEventListener(
            "click",
            startQuiz
        );


    resultElement.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================================
   FUNÇÃO AUXILIAR
========================================= */

function quizContainer() {

    return document.getElementById(
        "quiz-container"
    );
}


/* =========================================
   INICIAR
========================================= */

startQuiz();

Como organizar os arquivos
Crie uma pasta, por exemplo:

internet-segura/
│
├── index.html
├── style.css
└── script.js

Depois, basta abrir o index.html no navegador.

O site já inclui:

🛡️ página inicial com apresentação;
🔐 orientações sobre senhas;
📱 autenticação em dois fatores;
🔗 prevenção contra phishing;
💳 cuidados com bancos e compras;
📞 alerta sobre falsos funcionários;
👨‍👩‍👧 prevenção ao golpe do falso familiar;
🔄 importância das atualizações;
📋 checklist interativo;
🇧🇷 links para fontes oficiais;
🖼️ imagens externas;
📱 layout responsivo para celular;
♿ recursos básicos de acessibilidade e foco de teclado;
🧠 quiz interativo com 5 perguntas, pontuação e resultado.
As recomendações sobre phishing e golpes foram alinhadas, em particular, às orientações do Ministério das Comunicações, que recomenda desconfiar de mensagens urgentes, evitar links desconhecidos, conferir canais oficiais e utilizar autenticação em duas etapas. 
S
Serviços e Informações do Brasil
 A Polícia Federal também recomenda senhas fortes, MFA, cuidado com links/anexos, atualizações, redes confiáveis e backups. 
S
Serviços e Informações do Brasil

Se quiser transformar isso em um projeto ainda mais completo, uma boa próxima evolução seria adicionar modo “letra grande”, botão para aumentar/diminuir o texto, leitura em voz alta das orientações e um quiz com explicação após cada resposta.


S
Fontes


ChatGPT é uma IA e pode cometer erros.