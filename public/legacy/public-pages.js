/* ==========================================================================
       PUBLIC PAGES RENDERING
       ========================================================================== */

    function renderPublicPage(page) {
      switch (page) {
        case 'home':
          return `
            <!-- HERO SECTION -->
            <main id="main-content">
            <section class="bg-gradient-to-b from-brand-50 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-200/80 hc-bg">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
                  <span class="inline-flex items-center space-x-2 bg-brand-100 text-brand-900 text-xs font-bold px-4 py-2 rounded-full border border-brand-200 shadow-sm">
                    <i data-lucide="sparkles" class="w-4 h-4 text-brand-600"></i>
                    <span>Plataforma 100% Inclusiva, Interativa e Gratuita</span>
                  </span>

                  <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight hc-text">
                    Aprenda Libras de forma <span class="text-brand-600">simples</span>, <span class="text-brand-600">prática</span> e acessível
                  </h1>

                  <p class="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                    Conecte-se com a comunidade surda, desenvolva habilidades valiosas e promova a inclusão social no Brasil através do nosso mini curso de Língua Brasileira de Sinais.
                  </p>

                  <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <button onclick="loginDemo()" class="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 text-base">
                      <i data-lucide="zap" class="w-5 h-5"></i>
                      <span>Acessar como Aluno Demo</span>
                    </button>
                    <button onclick="navigateTo('cadastro')" class="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-brand-600/25 transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 text-base">
                      <span>Criar Conta Gratuita</span>
                      <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </button>
                  </div>

                  <!-- Quick Stats Bar -->
                  <div class="pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-4 text-center lg:text-left">
                    <div>
                      <p class="text-2xl font-black text-brand-900 hc-text">+15.000</p>
                      <p class="text-xs font-semibold text-slate-500">Alunos Ativos</p>
                    </div>
                    <div>
                      <p class="text-2xl font-black text-brand-900 hc-text">100%</p>
                      <p class="text-xs font-semibold text-slate-500">Gratuito e Acessível</p>
                    </div>
                    <div>
                      <p class="text-2xl font-black text-brand-900 hc-text">10 Etapas</p>
                      <p class="text-xs font-semibold text-slate-500">Trilha Completa</p>
                    </div>
                  </div>
                </div>

                <!-- Hero Sign Interactive Card -->
                <div class="lg:col-span-5">
                  <div class="bg-white p-8 rounded-3xl shadow-2xl border border-slate-200 relative overflow-hidden hc-card">
                    <div class="absolute -top-12 -right-12 w-48 h-48 bg-brand-100 rounded-full blur-3xl opacity-70"></div>
                    
                    <div class="text-center space-y-4 relative z-10">
                      <div class="inline-block p-6 bg-brand-50 rounded-3xl border border-brand-100 shadow-inner">
                        <svg class="w-36 h-36 mx-auto text-brand-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M30 70 C 30 50, 40 40, 50 40 C 60 40, 70 50, 70 70" class="stroke-brand-500" stroke-width="4"/>
                          <circle cx="50" cy="30" r="12" class="fill-brand-100 stroke-brand-600" stroke-width="3"/>
                          <path d="M 35 45 L 20 30 M 65 45 L 80 30" stroke-linecap="round"/>
                        </svg>
                      </div>

                      <div>
                        <span class="bg-brand-100 text-brand-800 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Aprenda na Prática</span>
                        <h3 class="text-2xl font-black text-slate-900 mt-2 hc-text">Sinal de "Olá / Boas-Vindas"</h3>
                        <p class="text-xs text-slate-500 max-w-xs mx-auto mt-1">Movimento suave de aceno com a palma virada para o interlocutor e sorriso amigável.</p>
                      </div>

                      <div class="pt-2">
                        <button onclick="loginDemo()" class="w-full bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold py-3 rounded-xl border border-brand-200 text-xs transition flex items-center justify-center space-x-2">
                          <i data-lucide="play" class="w-4 h-4"></i>
                          <span>Experimentar Aula Interativa</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            <!-- COMO FUNCIONA SECTION -->
            <section id="como-funciona" class="py-20 bg-white hc-bg border-b border-slate-100">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                  <span class="text-xs font-bold text-brand-600 uppercase tracking-widest">Metodologia Simples</span>
                  <h2 class="text-3xl font-black text-slate-900 hc-text">Como funciona a nossa plataforma?</h2>
                  <p class="text-slate-600 text-base">Três passos planejados para garantir o seu aprendizado contínuo sem complicações.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <!-- Step 1 -->
                  <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition duration-300 hc-card">
                    <div class="w-14 h-14 bg-brand-600 text-white font-black rounded-2xl flex items-center justify-center text-xl mb-6 shadow-md shadow-brand-600/30">1</div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 hc-text">Aprenda o Sinal</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">Conheça cada sinal através de explicações visuais em SVG, contexto de aplicação e dicas de expressões faciais.</p>
                  </div>
                  <!-- Step 2 -->
                  <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition duration-300 hc-card">
                    <div class="w-14 h-14 bg-brand-600 text-white font-black rounded-2xl flex items-center justify-center text-xl mb-6 shadow-md shadow-brand-600/30">2</div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 hc-text">Pratique com Quizzes</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">Fixe o aprendizado respondendo a exercícios práticos com feedback imediato ao final de cada etapa.</p>
                  </div>
                  <!-- Step 3 -->
                  <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition duration-300 hc-card">
                    <div class="w-14 h-14 bg-brand-600 text-white font-black rounded-2xl flex items-center justify-center text-xl mb-6 shadow-md shadow-brand-600/30">3</div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 hc-text">Acompanhe seu Progresso</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">Visualização de estatísticas detalhadas no Dashboard e emissão do certificado simbólico de conclusão.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- DEPOIMENTOS SECTION -->
            <section id="depoimentos" class="py-20 bg-slate-50 hc-bg">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
                  <h2 class="text-3xl font-black text-slate-900 hc-text">O que dizem nossos alunos</h2>
                  <p class="text-slate-600 text-sm">Histórias de transformação através do aprendizado inclusivo de Libras.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hc-card">
                    <div class="flex items-center space-x-1 text-amber-400">
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed font-normal">"Consigo me comunicar com meus colegas de trabalho surdos com muito mais segurança. O mini curso é direto e didático!"</p>
                    <div class="flex items-center space-x-3 pt-2">
                      <div class="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center font-bold text-brand-900 text-xs">CR</div>
                      <div>
                        <p class="text-xs font-bold text-slate-900 hc-text">Camila Rocha</p>
                        <p class="text-[10px] text-slate-500">Recursos Humanos</p>
                      </div>
                    </div>
                  </div>

                  <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hc-card">
                    <div class="flex items-center space-x-1 text-amber-400">
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed font-normal">"Plataforma impecável! As ilustrações em SVG facilitam muito o entendimento da posição correta dos dedos."</p>
                    <div class="flex items-center space-x-3 pt-2">
                      <div class="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center font-bold text-brand-900 text-xs">MA</div>
                      <div>
                        <p class="text-xs font-bold text-slate-900 hc-text">Lucas Almeida</p>
                        <p class="text-[10px] text-slate-500">Estudante Universitário</p>
                      </div>
                    </div>
                  </div>

                  <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hc-card">
                    <div class="flex items-center space-x-1 text-amber-400">
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                      <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed font-normal">"Sou professora e recomendo para todos os meus colegas educadores. Excelente iniciativa de acessibilidade!"</p>
                    <div class="flex items-center space-x-3 pt-2">
                      <div class="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center font-bold text-brand-900 text-xs">PS</div>
                      <div>
                        <p class="text-xs font-bold text-slate-900 hc-text">Patricia Souza</p>
                        <p class="text-[10px] text-slate-500">Educadora</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- PUBLIC FOOTER -->
            </main>
            <footer class="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 mt-auto">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="space-y-4">
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">AS</div>
                    <span class="text-lg font-bold text-white">Aprenda Sinais</span>
                  </div>
                  <p class="text-xs text-slate-400 leading-relaxed">Democratizando a Língua Brasileira de Sinais com tecnologia moderna e acessibilidade universal.</p>
                </div>
                <div>
                  <h4 class="text-white text-xs font-bold uppercase tracking-wider mb-3">Links Rápidos</h4>
                  <ul class="space-y-2 text-xs">
                    <li><button onclick="navigateTo('home')" class="hover:text-white transition">Início</button></li>
                    <li><button onclick="navigateTo('sobre')" class="hover:text-white transition">Sobre nós</button></li>
                    <li><button onclick="loginDemo()" class="hover:text-white transition">Modo Demo</button></li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-white text-xs font-bold uppercase tracking-wider mb-3">Acessibilidade</h4>
                  <ul class="space-y-2 text-xs">
                    <li><button onclick="toggleHighContrast()" class="hover:text-white transition">Alto Contraste</button></li>
                    <li><button onclick="toggleVLibrasWidget()" class="hover:text-white transition">Suporte VLibras</button></li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-white text-xs font-bold uppercase tracking-wider mb-3">Lei nº 10.436/2002</h4>
                  <p class="text-[11px] text-slate-500 leading-relaxed">
                    A LIBRAS é reconhecida como meio legal de comunicação e expressão no território nacional brasileiro.
                  </p>
                </div>
              </div>
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
                &copy; 2026 Aprenda Sinais — Todos os direitos reservados.
              </div>
            </footer>
          `;

        case 'sobre':
          return `
            <main id="main-content">
            <section class="py-16 bg-white hc-bg flex-grow">
              <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div class="text-center space-y-4">
                  <span class="text-xs font-bold text-brand-600 uppercase tracking-widest">Nossa História</span>
                  <h1 class="text-4xl font-black text-slate-900 hc-text">Sobre o Aprenda Sinais</h1>
                  <p class="text-slate-600 text-base">Uma iniciativa voltada a transformar a comunicação inclusiva no Brasil.</p>
                </div>

                <div class="space-y-8 text-slate-700 text-sm leading-relaxed">
                  <div class="bg-brand-50 p-8 rounded-3xl border border-brand-100 space-y-3 hc-card">
                    <h2 class="text-xl font-bold text-brand-950 hc-text">Nossa Missão</h2>
                    <p class="text-slate-700">
                      Promover a igualdade e a inclusão social facilitando o aprendizado gratuito e prático de LIBRAS para pessoas ou profissionais de qualquer área.
                    </p>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 hc-card">
                      <h3 class="font-bold text-slate-900 mb-2 hc-text">História da LIBRAS no Brasil</h3>
                      <p class="text-xs text-slate-600 leading-relaxed">
                        A Língua Brasileira de Sinais tem origem no século XIX, com a fundação do INES em 1857 por Dom Pedro II e o professor francês Ernest Huet.
                      </p>
                    </div>

                    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 hc-card">
                      <h3 class="font-bold text-slate-900 mb-2 hc-text">Impacto Social Esperado</h3>
                      <p class="text-xs text-slate-600 leading-relaxed">
                        Mais de 10 milhões de brasileiros possuem algum grau de deficiência auditiva. A inclusão depende de termos mais ouvintes sinalizantes no dia a dia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          `;

        case 'login':
          return `
            <main id="main-content">
            <section class="py-16 bg-slate-50 flex-grow flex items-center justify-center hc-bg">
              <div class="max-w-md w-full mx-auto px-4">
                <div class="bg-white p-8 rounded-3xl shadow-2xl border border-slate-200 space-y-6 hc-card">
                  <div class="text-center space-y-2">
                    <div class="w-12 h-12 bg-brand-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-md">
                      <i data-lucide="lock" class="w-6 h-6"></i>
                    </div>
                    <h1 class="text-2xl font-black text-slate-900 hc-text">Acesse sua Conta</h1>
                    <p class="text-xs text-slate-500">Entre para continuar sua jornada de aprendizado</p>
                  </div>

                  <!-- 1-Click Fast Login Banner -->
                  <div class="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-2">
                    <p class="text-xs font-bold text-amber-900 flex items-center space-x-1.5">
                      <i data-lucide="sparkles" class="w-4 h-4 text-amber-600"></i>
                      <span>Acesso Instantâneo em 1-Clique:</span>
                    </p>
                    <button onclick="loginDemo()" class="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-2.5 rounded-xl shadow-sm text-xs transition flex items-center justify-center space-x-2">
                      <i data-lucide="zap" class="w-4 h-4"></i>
                      <span>Acessar como Aluno Demo (Ana Silva)</span>
                    </button>
                  </div>

                  <form onsubmit="handleLogin(event)" class="space-y-4">
                    <div>
                      <label for="login-email" class="block text-xs font-bold uppercase text-slate-700 mb-1">E-mail</label>
                      <input type="email" id="login-email" value="${state.user.email}" required class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>
                    <div>
                      <label for="login-pass" class="block text-xs font-bold uppercase text-slate-700 mb-1">Senha</label>
                      <input type="password" id="login-pass" value="123456" required class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>

                    <button type="submit" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow-md transition text-sm">
                      Entrar no Painel
                    </button>
                  </form>

                  <div class="pt-4 border-t border-slate-100 text-center">
                    <button onclick="navigateTo('cadastro')" class="text-xs font-bold text-brand-600 hover:underline">
                      Ainda não tem conta? Cadastre-se grátis
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
          `;

        case 'cadastro':
          return `
            <main id="main-content">
            <section class="py-16 bg-slate-50 flex-grow flex items-center justify-center hc-bg">
              <div class="max-w-md w-full mx-auto px-4">
                <div class="bg-white p-8 rounded-3xl shadow-2xl border border-slate-200 space-y-6 hc-card">
                  <div class="text-center space-y-2">
                    <h1 class="text-2xl font-black text-slate-900 hc-text">Criar Conta Gratuita</h1>
                    <p class="text-xs text-slate-500">Comece seu aprendizado de LIBRAS em poucos segundos</p>
                  </div>

                  <form onsubmit="handleSignup(event)" class="space-y-4">
                    <div>
                      <label for="signup-name" class="block text-xs font-bold uppercase text-slate-700 mb-1">Nome Completo</label>
                      <input type="text" id="signup-name" placeholder="Seu nome" required class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>
                    <div>
                      <label for="signup-email" class="block text-xs font-bold uppercase text-slate-700 mb-1">E-mail</label>
                      <input type="email" id="signup-email" placeholder="seu.email@exemplo.com" required class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>
                    <div>
                      <label for="signup-pass" class="block text-xs font-bold uppercase text-slate-700 mb-1">Senha</label>
                      <input type="password" id="signup-pass" placeholder="******" required class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>

                    <button type="submit" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow-md transition text-sm">
                      Criar Conta e Começar
                    </button>
                  </form>

                  <div class="pt-4 border-t border-slate-100 text-center">
                    <button onclick="navigateTo('login')" class="text-xs font-bold text-slate-600 hover:text-brand-600">
                      Já possui uma conta? <span class="text-brand-600">Fazer Login</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
          `;
      }
    }
