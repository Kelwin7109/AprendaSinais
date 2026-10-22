/* ==========================================================================
       STATE MANAGEMENT & INITIAL STATE (PERSISTENT VIA LOCALSTORAGE)
       ========================================================================== */
    
    const DEFAULT_STATE = {
      user: {
        name: "Ana Silva",
        email: "ana.silva@exemplo.com",
        bio: "Entusiasta de inclusão social, estudante de Libras e educadora apaixonada.",
        level: "Nível 1 - Aprendiz de Sinais",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
        notificationsEnabled: true
      },
      isAuthenticated: true, // Default loaded state as requested
      currentStepId: 5, // Step 5 is currently in progress
      completedSteps: [1, 2, 3, 4], // 4/10 finished (40%)
      studyTimeMinutes: 225, // 3h 45min
      streakDays: 5,
      exerciseAccuracy: 88,
      activePage: 'dashboard',
      activeCourseStep: 5
    };

    // Load or initialize persistent state
    let state = JSON.parse(localStorage.getItem('aprenda_sinais_v2_state')) || DEFAULT_STATE;

    function saveState() {
      localStorage.setItem('aprenda_sinais_v2_state', JSON.stringify(state));
    }

    /* ==========================================================================
       MINI COURSE STEPS DATABASE (10 DETAILED STAGES)
       ========================================================================== */

    // The legacy scripts load before the React module assigns these globals.
    // Resolve them on access so the data is available after main.jsx starts.
    const COURSE_STEPS = new Proxy([], {
      get(_target, property) {
        const steps = window.COURSE_STEPS;
        const value = steps?.[property];
        return typeof value === 'function' ? value.bind(steps) : value;
      }
    });

    /* ==========================================================================
       EBOOKS CATALOG (4 COMPREHENSIVE EBOOKS)
       ========================================================================== */

    const EBOOKS_DATA = new Proxy([], {
      get(_target, property) {
        const ebooks = window.EBOOKS_DATA;
        const value = ebooks?.[property];
        return typeof value === 'function' ? value.bind(ebooks) : value;
      }
    });

    /* ==========================================================================
       ROUTING SYSTEM & VIEW CONTROLLER
       ========================================================================== */

    function navigateTo(page, param = null) {
      state.activePage = page;
      if (param) state.activeCourseStep = param;
      saveState();

      const isPublicPage = ['home', 'sobre', 'login', 'cadastro'].includes(page);
      if (!isPublicPage && !state.isAuthenticated) {
        showToast('Por favor, faça login para acessar a área de estudos.', 'info');
        navigateTo('login');
        return;
      }
      document.getElementById('public-header')?.classList.toggle('hidden', !isPublicPage);
      window.dispatchEvent(new CustomEvent('aprenda-sinais:navigate', { detail: page }));
      window.scrollTo(0, 0);
    }

    function scrollToSection(id) {
      if (state.activePage !== 'home') {
        navigateTo('home');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
