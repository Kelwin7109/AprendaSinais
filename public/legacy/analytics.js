/* ==========================================================================
       CHART.JS ANALYTICS INITIALIZATION
       ========================================================================== */

    function initAnalyticsCharts() {
      const weeklyCtx = document.getElementById('weeklyChart')?.getContext('2d');
      const donutCtx = document.getElementById('progressDonutChart')?.getContext('2d');

      if (weeklyCtx) {
        new Chart(weeklyCtx, {
          type: 'line',
          data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
            datasets: [{
              label: 'Minutos Estudados',
              data: [20, 35, 15, 45, 30, 50, 30],
              borderColor: '#2563eb',
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              fill: true,
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
          }
        });
      }

      if (donutCtx) {
        const done = state.completedSteps.length;
        const remaining = COURSE_STEPS.length - done;

        new Chart(donutCtx, {
          type: 'doughnut',
          data: {
            labels: ['Concluídas', 'Restantes'],
            datasets: [{
              data: [done, remaining],
              backgroundColor: ['#10b981', '#cbd5e1']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }
    }

    /* ==========================================================================
       INITIAL LOAD BOOTSTRAP
       ========================================================================== */
    window.getAprendaSinaisPage = (page) => ['home', 'sobre', 'login', 'cadastro'].includes(page) ? renderPublicPage(page) : renderAuthenticatedDashboardLayout(page);
    window.initializeAprendaSinais = function () { navigateTo(state.activePage || 'dashboard'); };
    window.initializeAprendaSinaisCharts = initAnalyticsCharts;
