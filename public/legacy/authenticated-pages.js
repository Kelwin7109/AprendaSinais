/* ==========================================================================
       AUTHENTICATED AREA: FIXED SIDEBAR + TOP HEADER + CONTENT AREA
       ========================================================================== */

    function renderAuthenticatedDashboardLayout(subPage) {
      return `
        <div class="flex-grow flex flex-col md:flex-row min-h-[calc(100vh-40px)] bg-slate-100 hc-bg">
          
          <!-- MOBILE HEADER FOR AUTH AREA -->
          <div class="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center font-bold">AS</div>
              <span class="font-black text-sm">Aprenda Sinais</span>
            </div>
            <button onclick="toggleMobileSidebar()" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700">
              <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
          </div>

          <!-- FIXED SIDEBAR (Vertical Left) -->
          <aside id="sidebar-drawer" class="fixed md:static inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-300 flex-shrink-0 p-5 flex flex-col justify-between border-r border-slate-800 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out">
            <div class="space-y-8">
              <!-- Sidebar Logo -->
              <div class="hidden md:flex items-center space-x-3 cursor-pointer" onclick="navigateTo('dashboard')">
                <div class="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md shadow-brand-600/30">
                  <i data-lucide="hand" class="w-6 h-6"></i>
                </div>
                <div>
                  <span class="text-lg font-black text-white tracking-tight">Aprenda<span class="text-brand-400">Sinais</span></span>
                  <span class="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Painel do Aluno</span>
                </div>
              </div>

              <!-- User Profile Summary Card -->
              <div class="p-3.5 bg-slate-800/80 rounded-2xl flex items-center space-x-3 border border-slate-700/80">
                <img src="${state.user.avatar}" class="w-10 h-10 rounded-full object-cover border-2 border-brand-500 shadow" alt="Avatar">
                <div class="overflow-hidden">
                  <p class="text-xs font-bold text-white truncate">${state.user.name}</p>
                  <p class="text-[10px] text-brand-400 truncate font-semibold">${state.user.level}</p>
                </div>
              </div>

              <!-- Navigation Menu -->
              <nav class="space-y-1.5">
                <button onclick="navigateTo('dashboard')" class="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition ${subPage === 'dashboard' ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25' : 'hover:bg-slate-800/80 text-slate-400 hover:text-white'}">
                  <i data-lucide="layout-dashboard" class="w-4 h-4"></i>
                  <span>Dashboard</span>
                </button>
                <button onclick="navigateTo('curso')" class="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition ${subPage === 'curso' ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25' : 'hover:bg-slate-800/80 text-slate-400 hover:text-white'}">
                  <i data-lucide="book-open" class="w-4 h-4"></i>
                  <span>Aprenda Sinais</span>
                </button>
                <button onclick="navigateTo('aulas-aovivo')" class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition ${subPage === 'aulas-aovivo' ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25' : 'hover:bg-slate-800/80 text-slate-400 hover:text-white'}">
                  <span class="flex items-center space-x-3"><i data-lucide="video" class="w-4 h-4"></i><span>Aulas ao Vivo</span></span>
                  <span class="rounded-full bg-rose-500 px-2 py-0.5 text-[9px] font-black text-white">LIVE</span>
                </button>
                <button onclick="navigateTo('ebooks')" class="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition ${subPage === 'ebooks' ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25' : 'hover:bg-slate-800/80 text-slate-400 hover:text-white'}">
                  <i data-lucide="library" class="w-4 h-4"></i>
                  <span>Ebooks de Apoio</span>
                </button>
                <button onclick="navigateTo('analytics')" class="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition ${subPage === 'analytics' ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25' : 'hover:bg-slate-800/80 text-slate-400 hover:text-white'}">
                  <i data-lucide="bar-chart-3" class="w-4 h-4"></i>
                  <span>Analytics</span>
                </button>
                <button onclick="navigateTo('perfil')" class="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition ${subPage === 'perfil' ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25' : 'hover:bg-slate-800/80 text-slate-400 hover:text-white'}">
                  <i data-lucide="user" class="w-4 h-4"></i>
                  <span>Meu Perfil</span>
                </button>
              </nav>
            </div>

            <!-- Logout Button -->
            <div class="pt-6 border-t border-slate-800">
              <button onclick="handleLogout()" class="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-500/10 transition">
                <i data-lucide="log-out" class="w-4 h-4"></i>
                <span>Sair da Conta</span>
              </button>
            </div>
          </aside>

          <!-- MAIN LOGGED-IN INNER CONTENT CONTAINER -->
          <div class="flex-grow flex flex-col overflow-x-hidden">
            <!-- Top Dashboard Header Bar -->
            <header class="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between hc-bg">
              <div class="flex items-center space-x-3">
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Área do Aluno</span>
                <span class="text-slate-300">/</span>
                <span class="text-xs font-bold text-brand-700 capitalize">${subPage}</span>
              </div>

              <!-- Notifications & User Dropdown -->
              <div class="flex items-center space-x-4">
                <button onclick="showToast('Sua sequência atual é de 5 dias seguidos!', 'info')" class="flex items-center space-x-1.5 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-xl text-xs font-extrabold">
                  <i data-lucide="flame" class="w-4 h-4 text-amber-500 fill-current"></i>
                  <span>${state.streakDays} Dias</span>
                </button>

                <div class="w-px h-6 bg-slate-200"></div>

                <div class="flex items-center space-x-3">
                  <img src="${state.user.avatar}" class="w-8 h-8 rounded-full object-cover border border-slate-300" alt="Avatar">
                  <span class="text-xs font-bold text-slate-800 hidden sm:inline hc-text">${state.user.name}</span>
                </div>
              </div>
            </header>

            <!-- Dynamic Inner Content Page -->
            <main class="flex-grow p-4 sm:p-8 overflow-y-auto">
              ${renderAuthenticatedSubPage(subPage)}
            </main>
          </div>

        </div>
      `;
    }

    function renderAuthenticatedSubPage(subPage) {
      const completedCount = state.completedSteps.length;
      const totalSteps = COURSE_STEPS.length;
      const progressPercent = Math.round((completedCount / totalSteps) * 100);

      switch (subPage) {
        case 'dashboard':
          return `
            <div class="max-w-6xl mx-auto space-y-8">
              
              <!-- Greeting Banner -->
              <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hc-card">
                <div class="space-y-1">
                  <span class="text-xs font-bold text-brand-600 uppercase tracking-wider">Bem-vinda de volta!</span>
                  <h1 class="text-2xl sm:text-3xl font-black text-slate-900 hc-text">Olá, ${state.user.name} 👋</h1>
                  <p class="text-xs text-slate-500 font-medium">${state.user.level} • Pronta para praticar novos sinais hoje?</p>
                </div>
                <button onclick="navigateTo('aulas-aovivo')" class="bg-brand-600 hover:bg-brand-700 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-brand-600/30 transition text-xs flex items-center space-x-2">
                  <i data-lucide="video" class="w-4 h-4"></i>
                  <span>Entrar na aula ao vivo</span>
                </button>
              </div>

              <!-- Metrics Quick Grid -->
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hc-card">
                  <div class="flex items-center justify-between text-slate-400">
                    <span class="text-[11px] font-bold uppercase tracking-wider">Progresso Geral</span>
                    <i data-lucide="trophy" class="w-4 h-4 text-amber-500"></i>
                  </div>
                  <p class="text-2xl font-black text-slate-900 hc-text">${progressPercent}%</p>
                  <p class="text-[10px] text-slate-500 font-medium">${completedCount} de ${totalSteps} etapas concluídas</p>
                </div>

                <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hc-card">
                  <div class="flex items-center justify-between text-slate-400">
                    <span class="text-[11px] font-bold uppercase tracking-wider">Etapas Feitas</span>
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500"></i>
                  </div>
                  <p class="text-2xl font-black text-slate-900 hc-text">${completedCount} / 10</p>
                  <p class="text-[10px] text-emerald-600 font-semibold">Excelente ritmo!</p>
                </div>

                <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hc-card">
                  <div class="flex items-center justify-between text-slate-400">
                    <span class="text-[11px] font-bold uppercase tracking-wider">Sequência 🔥</span>
                    <i data-lucide="flame" class="w-4 h-4 text-amber-500"></i>
                  </div>
                  <p class="text-2xl font-black text-slate-900 hc-text">${state.streakDays} Dias</p>
                  <p class="text-[10px] text-slate-500 font-medium">Ofensiva contínua</p>
                </div>

                <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hc-card">
                  <div class="flex items-center justify-between text-slate-400">
                    <span class="text-[11px] font-bold uppercase tracking-wider">Tempo Estudado</span>
                    <i data-lucide="clock" class="w-4 h-4 text-brand-500"></i>
                  </div>
                  <p class="text-2xl font-black text-slate-900 hc-text">3h 45min</p>
                  <p class="text-[10px] text-slate-500 font-medium">Acumulado no app</p>
                </div>
              </div>

              <!-- Main Course Highlight Card -->
              <div class="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white p-8 rounded-3xl shadow-xl space-y-6">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div class="space-y-1">
                    <span class="bg-brand-800 text-brand-200 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-brand-700">Trilha Principal em Andamento</span>
                    <h2 class="text-2xl font-black">Mini Curso Aprenda Sinais</h2>
                    <p class="text-xs text-brand-200">Aprenda a se comunicar com a comunidade surda em 10 etapas sequenciais.</p>
                  </div>
                  <button onclick="openStageModal(${state.currentStepId})" class="bg-white text-brand-950 font-black px-6 py-3 rounded-xl shadow-md hover:bg-brand-50 transition text-xs flex items-center space-x-2">
                    <span>Etapa ${state.currentStepId}: Continuar</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                  </button>
                </div>

                <!-- Animated Progress Bar -->
                <div class="space-y-2">
                  <div class="flex justify-between text-xs font-bold text-brand-200">
                    <span>Progresso do Curso</span>
                    <span>${progressPercent}% concluído</span>
                  </div>
                  <div class="w-full bg-brand-950/60 rounded-full h-3.5 overflow-hidden p-0.5 border border-brand-700/50">
                    <div class="bg-emerald-400 h-full rounded-full transition-all duration-700" style="width: ${progressPercent}%"></div>
                  </div>
                </div>
              </div>

              <!-- Next Steps List -->
              <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hc-card">
                <h3 class="text-lg font-black text-slate-900 hc-text">Sua Próxima Etapa de Estudo</h3>
                ${(() => {
                  const currentObj = COURSE_STEPS.find(s => s.id === state.currentStepId) || COURSE_STEPS[0];
                  return `
                    <div class="flex items-center justify-between p-4 bg-brand-50 rounded-2xl border border-brand-100 hc-card">
                      <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-brand-600 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-sm">
                          ${currentObj.id}
                        </div>
                        <div>
                          <h4 class="font-bold text-slate-900 text-sm hc-text">${currentObj.title}</h4>
                          <p class="text-xs text-slate-500">${currentObj.desc}</p>
                        </div>
                      </div>
                      <button onclick="openStageModal(${currentObj.id})" class="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition">
                        Iniciar
                      </button>
                    </div>
                  `;
                })()}
              </div>

            </div>
          `;

        case 'aulas-aovivo':
          return `
            <div class="mx-auto max-w-6xl space-y-6">
              <header class="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between hc-card">
                <div>
                  <p class="mb-2 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700">
                    <span class="h-2 w-2 animate-pulse rounded-full bg-rose-600"></span>
                    Aulas ao vivo e presenciais
                  </p>
                  <h1 class="text-2xl font-black text-slate-900 hc-text">Aulas ao Vivo de LIBRAS</h1>
                  <p class="mt-1 text-sm text-slate-500">Participe das sessões, pratique sinais e acompanhe sua frequência.</p>
                </div>
                <div class="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <i data-lucide="camera" class="h-4 w-4 text-brand-600"></i>
                  Webcam, microfone e registro de presença
                </div>
              </header>

              <section aria-labelledby="live-session-heading" class="relative overflow-hidden rounded-3xl border border-brand-700 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 p-6 text-white shadow-xl sm:p-8">
                <div class="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                  <div class="space-y-3">
                    <span class="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-950">
                      <span class="h-2 w-2 rounded-full bg-slate-950"></span> Sessão ativa
                    </span>
                    <div>
                      <h2 id="live-session-heading" class="text-xl font-black sm:text-2xl">Prática de Conversação e Expressão Facial</h2>
                      <p class="mt-1 text-sm text-brand-100">Instrutora: Mariana Costa <span aria-hidden="true">·</span> Sala virtual 102</p>
                    </div>
                    <div class="flex flex-wrap gap-4 text-xs text-brand-200">
                      <span class="inline-flex items-center gap-1.5"><i data-lucide="clock" class="h-4 w-4"></i>14h às 16h</span>
                      <span class="inline-flex items-center gap-1.5"><i data-lucide="users" class="h-4 w-4"></i>18 alunos conectados</span>
                    </div>
                  </div>
                  <button onclick="openLiveRoom('Prática de Conversação e Expressão Facial', 'Mariana Costa')" class="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-black text-slate-950 shadow-lg transition hover:bg-emerald-300">
                    <i data-lucide="video" class="h-5 w-5"></i> Acessar aula ao vivo
                  </button>
                </div>
              </section>

              <div class="grid gap-6 lg:grid-cols-2">
                <section aria-labelledby="upcoming-classes-heading" class="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hc-card">
                  <h2 id="upcoming-classes-heading" class="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-slate-800 hc-text">
                    <i data-lucide="calendar-days" class="h-4 w-4 text-brand-600"></i> Próximas aulas
                  </h2>
                  <ul id="scheduled-classes-container" class="space-y-3">
                    <li class="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p class="text-xs font-bold text-brand-700">Quarta-feira, 15h</p>
                      <h3 class="mt-1 text-sm font-bold text-slate-900 hc-text">Expressões faciais e parâmetros</h3>
                      <p class="mt-1 text-xs text-slate-500">Roberto Andrade</p>
                    </li>
                    <li class="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p class="text-xs font-bold text-brand-700">Sexta-feira, 19h30</p>
                      <h3 class="mt-1 text-sm font-bold text-slate-900 hc-text">Classificadores tridimensionais</h3>
                      <p class="mt-1 text-xs text-slate-500">Roberto Andrade</p>
                    </li>
                  </ul>
                </section>

                <section aria-labelledby="attendance-heading" class="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hc-card">
                  <h2 id="attendance-heading" class="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-slate-800 hc-text">
                    <i data-lucide="user-check" class="h-4 w-4 text-emerald-600"></i> Sua frequência
                  </h2>
                  <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-slate-600">
                      <caption class="sr-only">Presenças registradas nas aulas ao vivo</caption>
                      <thead class="border-b border-slate-200 bg-slate-100 text-[10px] uppercase text-slate-500">
                        <tr><th scope="col" class="p-2.5">Aula e data</th><th scope="col" class="p-2.5">Entrada</th><th scope="col" class="p-2.5">Tempo</th></tr>
                      </thead>
                      <tbody id="live-attendance-summary-body" class="divide-y divide-slate-100">
                        <tr><td colspan="3" class="p-3 text-center text-slate-500">Ainda não há presenças registradas.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
          `;

        case 'curso':
          return `
            <div class="max-w-6xl mx-auto space-y-8">
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 class="text-2xl font-black text-slate-900 hc-text">Mini Curso Aprenda Sinais</h1>
                  <p class="text-xs text-slate-500 font-medium">Siga a ordem cronológica das 10 etapas para absorver o conteúdo progressivamente.</p>
                </div>
                <span class="bg-brand-100 text-brand-800 text-xs font-bold px-3.5 py-1.5 rounded-full border border-brand-200">
                  ${completedCount} / 10 Concluídas
                </span>
              </div>

              <!-- Steps Grid / List -->
              <div class="space-y-4">
                ${COURSE_STEPS.map(step => {
                  const isCompleted = state.completedSteps.includes(step.id);
                  const isCurrent = state.currentStepId === step.id;
                  const isLocked = !isCompleted && !isCurrent;

                  let borderClass = "border-slate-200 bg-white";
                  let statusBadge = `<span class="bg-slate-100 text-slate-500 text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center space-x-1"><i data-lucide="lock" class="w-3 h-3"></i><span>Bloqueada</span></span>`;
                  let actionButton = `<button onclick="showToast('Conclua as etapas anteriores para desbloquear esta!', 'warning')" class="px-4 py-2 bg-slate-100 text-slate-400 font-bold text-xs rounded-xl cursor-not-allowed">Bloqueada</button>`;

                  if (isCompleted) {
                    borderClass = "border-emerald-200 bg-emerald-50/40";
                    statusBadge = `<span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center space-x-1"><i data-lucide="check-circle-2" class="w-3 h-3"></i><span>Concluída</span></span>`;
                    actionButton = `<button onclick="openStageModal(${step.id})" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition">Revisar</button>`;
                  } else if (isCurrent) {
                    borderClass = "border-brand-300 bg-brand-50/60 ring-2 ring-brand-500/30";
                    statusBadge = `<span class="bg-brand-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center space-x-1"><i data-lucide="play" class="w-3 h-3"></i><span>Em Andamento</span></span>`;
                    actionButton = `<button onclick="openStageModal(${step.id})" class="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md transition">Estudar Agora</button>`;
                  }

                  return `
                    <div class="p-5 rounded-3xl border ${borderClass} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition hover:shadow-md hc-card">
                      <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-base ${isCompleted ? 'bg-emerald-500 text-white' : isCurrent ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-500'}">
                          ${step.id}
                        </div>
                        <div class="space-y-1">
                          <div class="flex items-center space-x-2">
                            <h3 class="font-bold text-slate-900 text-sm hc-text">${step.title}</h3>
                            ${statusBadge}
                          </div>
                          <p class="text-xs text-slate-500">${step.desc}</p>
                          <span class="inline-block text-[10px] text-slate-400 font-medium">Tempo estimado: ${step.duration}</span>
                        </div>
                      </div>

                      <div>
                        ${actionButton}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;

        case 'ebooks':
          return `
            <div class="max-w-6xl mx-auto space-y-8">
              <div>
                <h1 class="text-2xl font-black text-slate-900 hc-text">Biblioteca de E-books de Apoio</h1>
                <p class="text-xs text-slate-500 font-medium">Materiais complementares gratuitos em PDF para aprofundar seu conhecimento em LIBRAS.</p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${EBOOKS_DATA.map(ebook => `
                  <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition duration-300 hc-card">
                    
                    <div class="bg-gradient-to-br from-brand-900 to-brand-700 p-6 text-white text-center space-y-3 relative">
                      <div class="w-12 h-12 bg-brand-800/80 rounded-2xl flex items-center justify-center mx-auto border border-brand-600">
                        <i data-lucide="book-open" class="w-6 h-6 text-brand-300"></i>
                      </div>
                      <h3 class="font-bold text-xs leading-snug line-clamp-2">${ebook.title}</h3>
                      <span class="inline-block text-[10px] bg-brand-950/60 px-2.5 py-0.5 rounded-full text-brand-200 font-semibold">${ebook.pages}</span>
                    </div>

                    <div class="p-5 flex-grow flex flex-col justify-between space-y-4">
                      <div class="space-y-2">
                        <p class="text-xs text-slate-500 leading-relaxed line-clamp-3">${ebook.desc}</p>
                        <p class="text-[10px] font-bold text-brand-700">Autor: ${ebook.author}</p>
                      </div>

                      <button onclick="openEbookModal(${ebook.id})" class="w-full bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold py-2.5 rounded-xl border border-brand-200 text-xs transition flex items-center justify-center space-x-1.5">
                        <i data-lucide="eye" class="w-4 h-4"></i>
                        <span>Visualizar E-book</span>
                      </button>
                    </div>

                  </div>
                `).join('')}
              </div>
            </div>
          `;

        case 'analytics':
          return `
            <div class="max-w-6xl mx-auto space-y-8">
              <div>
                <h1 class="text-2xl font-black text-slate-900 hc-text">Relatório de Desempenho (Analytics)</h1>
                <p class="text-xs text-slate-500 font-medium">Acompanhe suas estatísticas reais de aprendizado e tempo de estudo.</p>
              </div>

              <!-- Analytics Key Metrics -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hc-card">
                  <span class="text-[11px] font-bold uppercase text-slate-400">Precisão nos Quizzes</span>
                  <p class="text-3xl font-black text-brand-600 mt-2 hc-text">${state.exerciseAccuracy}%</p>
                  <p class="text-xs text-emerald-600 font-semibold mt-1">Taxa de acerto elevada</p>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hc-card">
                  <span class="text-[11px] font-bold uppercase text-slate-400">Ofensiva Atual</span>
                  <p class="text-3xl font-black text-amber-500 mt-2 hc-text">${state.streakDays} Dias</p>
                  <p class="text-xs text-slate-500 font-medium mt-1">Estudando diariamente</p>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hc-card">
                  <span class="text-[11px] font-bold uppercase text-slate-400">Tempo Total Dedicado</span>
                  <p class="text-3xl font-black text-indigo-600 mt-2 hc-text">3h 45m</p>
                  <p class="text-xs text-slate-500 font-medium mt-1">Acumulado na plataforma</p>
                </div>
              </div>

              <!-- Interactive Charts Row -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hc-card">
                  <h3 class="text-base font-bold text-slate-900 hc-text">Minutos de Estudo nos Últimos 7 Dias</h3>
                  <div class="h-64">
                    <canvas id="weeklyChart"></canvas>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hc-card">
                  <h3 class="text-base font-bold text-slate-900 hc-text">Distribuição do Progresso do Curso</h3>
                  <div class="h-64 flex justify-center">
                    <canvas id="progressDonutChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
          `;

        case 'perfil':
          return `
            <div class="max-w-4xl mx-auto space-y-8">
              <div>
                <h1 class="text-2xl font-black text-slate-900 hc-text">Meu Perfil de Aluna</h1>
                <p class="text-xs text-slate-500 font-medium">Gerencie suas informações pessoais e configurações da conta.</p>
              </div>

              <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 hc-card">
                <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 border-b border-slate-100 pb-6">
                  <img src="${state.user.avatar}" class="w-20 h-20 rounded-full object-cover border-4 border-brand-500 shadow-lg" alt="Profile">
                  <div class="text-center sm:text-left space-y-1">
                    <h2 class="text-xl font-bold text-slate-900 hc-text">${state.user.name}</h2>
                    <p class="text-xs text-slate-500">${state.user.email}</p>
                    <span class="inline-block bg-brand-100 text-brand-800 text-xs font-extrabold px-3 py-1 rounded-full border border-brand-200">${state.user.level}</span>
                  </div>
                </div>

                <form onsubmit="handleSaveProfile(event)" class="space-y-4">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label for="profile-name" class="block text-xs font-bold uppercase text-slate-700 mb-1">Nome Completo</label>
                      <input type="text" id="profile-name" value="${state.user.name}" required class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>
                    <div>
                      <label for="profile-email" class="block text-xs font-bold uppercase text-slate-700 mb-1">E-mail</label>
                      <input type="email" id="profile-email" value="${state.user.email}" required class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase text-slate-700 mb-1">Biografia / Apresentação</label>
                    <textarea id="profile-bio" rows="3" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">${state.user.bio}</textarea>
                  </div>

                  <div class="pt-2 flex justify-end">
                    <button type="submit" class="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-xl shadow-md text-xs transition">
                      Salvar Alterações do Perfil
                    </button>
                  </div>
                </form>
              </div>
            </div>
          `;
      }
    }
