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
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Ãrea do Aluno</span>
                <span class="text-slate-300">/</span>
                <span class="text-xs font-bold text-brand-700 capitalize">${subPage}</span>
              </div>

              <!-- Notifications & User Dropdown -->
              <div class="flex items-center space-x-4">
                <button onclick="showToast('Sua sequÃªncia atual Ã© de 5 dias seguidos!', 'info')" class="flex items-center space-x-1.5 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-xl text-xs font-extrabold">
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
                  <h1 class="text-2xl sm:text-3xl font-black text-slate-900 hc-text">OlÃ¡, ${state.user.name} ðŸ‘‹</h1>
                  <p class="text-xs text-slate-500 font-medium">${state.user.level} â€¢ Pronta para praticar novos sinais hoje?</p>
                </div>
                <button onclick="openStageModal(${state.currentStepId})" class="bg-brand-600 hover:bg-brand-700 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-brand-600/30 transition text-xs flex items-center space-x-2">
                  <i data-lucide="play" class="w-4 h-4 fill-current"></i>
                  <span>Continuar Aprendendo</span>
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
                  <p class="text-[10px] text-slate-500 font-medium">${completedCount} de ${totalSteps} etapas concluÃ­das</p>
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
                    <span class="text-[11px] font-bold uppercase tracking-wider">SequÃªncia ðŸ”¥</span>
                    <i data-lucide="flame" class="w-4 h-4 text-amber-500"></i>
                  </div>
                  <p class="text-2xl font-black text-slate-900 hc-text">${state.streakDays} Dias</p>
                  <p class="text-[10px] text-slate-500 font-medium">Ofensiva contÃ­nua</p>
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
                    <span>${progressPercent}% concluÃ­do</span>
                  </div>
                  <div class="w-full bg-brand-950/60 rounded-full h-3.5 overflow-hidden p-0.5 border border-brand-700/50">
                    <div class="bg-emerald-400 h-full rounded-full transition-all duration-700" style="width: ${progressPercent}%"></div>
                  </div>
                </div>
              </div>

              <!-- Next Steps List -->
              <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hc-card">
                <h3 class="text-lg font-black text-slate-900 hc-text">Sua PrÃ³xima Etapa de Estudo</h3>
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

        case 'curso':
          return `
            <div class="max-w-6xl mx-auto space-y-8">
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 class="text-2xl font-black text-slate-900 hc-text">Mini Curso Aprenda Sinais</h1>
                  <p class="text-xs text-slate-500 font-medium">Siga a ordem cronolÃ³gica das 10 etapas para absorver o conteÃºdo progressivamente.</p>
                </div>
                <span class="bg-brand-100 text-brand-800 text-xs font-bold px-3.5 py-1.5 rounded-full border border-brand-200">
                  ${completedCount} / 10 ConcluÃ­das
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
                    statusBadge = `<span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center space-x-1"><i data-lucide="check-circle-2" class="w-3 h-3"></i><span>ConcluÃ­da</span></span>`;
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
                <h1 class="text-2xl font-black text-slate-900 hc-text">RelatÃ³rio de Desempenho (Analytics)</h1>
                <p class="text-xs text-slate-500 font-medium">Acompanhe suas estatÃ­sticas reais de aprendizado e tempo de estudo.</p>
              </div>

              <!-- Analytics Key Metrics -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hc-card">
                  <span class="text-[11px] font-bold uppercase text-slate-400">PrecisÃ£o nos Quizzes</span>
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
                  <h3 class="text-base font-bold text-slate-900 hc-text">Minutos de Estudo nos Ãšltimos 7 Dias</h3>
                  <div class="h-64">
                    <canvas id="weeklyChart"></canvas>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hc-card">
                  <h3 class="text-base font-bold text-slate-900 hc-text">DistribuiÃ§Ã£o do Progresso do Curso</h3>
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
                <p class="text-xs text-slate-500 font-medium">Gerencie suas informaÃ§Ãµes pessoais e configuraÃ§Ãµes da conta.</p>
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
                      <label class="block text-xs font-bold uppercase text-slate-700 mb-1">Nome Completo</label>
                      <input type="text" id="profile-name" value="${state.user.name}" required class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>
                    <div>
                      <label class="block text-xs font-bold uppercase text-slate-700 mb-1">E-mail</label>
                      <input type="email" id="profile-email" value="${state.user.email}" required class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase text-slate-700 mb-1">Biografia / ApresentaÃ§Ã£o</label>
                    <textarea id="profile-bio" rows="3" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">${state.user.bio}</textarea>
                  </div>

                  <div class="pt-2 flex justify-end">
                    <button type="submit" class="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-xl shadow-md text-xs transition">
                      Salvar AlteraÃ§Ãµes do Perfil
                    </button>
                  </div>
                </form>
              </div>
            </div>
          `;
      }
    }
