/* ==========================================================================
       MODALS INTERACTION HANDLERS (STAGE STUDY VIEW & EBOOKS)
       ========================================================================== */

    function openStageModal(stepId) {
      const step = COURSE_STEPS.find(s => s.id === stepId) || COURSE_STEPS[0];
      const modal = document.getElementById('stage-modal');
      const content = document.getElementById('stage-modal-content');

      if (!step.content) {
        showToast('Esta etapa estÃ¡ bloqueada ou em desenvolvimento.', 'warning');
        return;
      }

      content.innerHTML = `
        <div class="space-y-6">
          <div class="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-brand-600">${step.category} â€¢ Etapa ${step.id} de 10</span>
              <h2 class="text-2xl font-black text-slate-900 hc-text">${step.title}</h2>
            </div>
            <span class="bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-brand-200">
              ${step.duration}
            </span>
          </div>

          <!-- Explanation & SVG Visual -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div class="space-y-3">
              <h3 class="text-base font-bold text-slate-900 hc-text">Conceito e ExplicaÃ§Ã£o</h3>
              <p class="text-xs text-slate-600 leading-relaxed">${step.content.summary}</p>
              <p class="text-xs text-slate-600 leading-relaxed">${step.content.details}</p>
              
              <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium space-y-1">
                <span class="font-bold block">ðŸ’¡ Dica Visual:</span>
                <p>${step.content.tips}</p>
              </div>
            </div>

            <div class="bg-brand-50 p-6 rounded-2xl border border-brand-100 text-center space-y-2">
              ${step.content.signSvg}
              <h4 class="font-bold text-slate-900 text-xs hc-text">${step.content.signTitle}</h4>
              <p class="text-[11px] text-slate-500">${step.content.signDesc}</p>
            </div>
          </div>

          <!-- Interactive Quiz Exercise -->
          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 hc-card">
            <h3 class="text-sm font-bold text-slate-900 flex items-center space-x-2 hc-text">
              <i data-lucide="help-circle" class="w-4 h-4 text-brand-600"></i>
              <span>ExercÃ­cio de FixaÃ§Ã£o</span>
            </h3>
            <p class="text-xs font-semibold text-slate-700">${step.content.exercise.question}</p>

            <div class="space-y-2 pt-1">
              ${step.content.exercise.options.map((opt, idx) => `
                <button onclick="checkStageExercise(${idx}, ${step.content.exercise.correct})" class="w-full text-left p-3 bg-white hover:bg-brand-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 transition flex items-center justify-between">
                  <span>${opt}</span>
                  <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400"></i>
                </button>
              `).join('')}
            </div>
            <div id="exercise-feedback" class="hidden p-3 rounded-xl text-xs font-bold"></div>
          </div>

          <!-- Actions -->
          <div class="pt-4 border-t border-slate-100 flex justify-between items-center">
            <button onclick="closeStageModal()" class="px-4 py-2.5 text-slate-600 font-bold text-xs hover:bg-slate-100 rounded-xl transition">
              Fechar
            </button>
            <button onclick="completeCurrentStage(${step.id})" class="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-6 py-3 rounded-xl text-xs shadow-md transition flex items-center space-x-2">
              <i data-lucide="check" class="w-4 h-4"></i>
              <span>Marcar como ConcluÃ­da</span>
            </button>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      lucide.createIcons();
    }

    function closeStageModal() {
      document.getElementById('stage-modal').classList.add('hidden');
    }

    function checkStageExercise(selected, correct) {
      const fb = document.getElementById('exercise-feedback');
      fb.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-900', 'bg-rose-100', 'text-rose-900');

      if (selected === correct) {
        fb.classList.add('bg-emerald-100', 'text-emerald-900');
        fb.innerHTML = "âœ¨ Resposta correta! Excelente atenÃ§Ã£o aos detalhes.";
        showToast('ExercÃ­cio respondido com sucesso!', 'success');
      } else {
        fb.classList.add('bg-rose-100', 'text-rose-900');
        fb.innerHTML = "âŒ Resposta incorreta. Revise o texto conceitual acima e tente novamente.";
      }
    }

    function completeCurrentStage(stepId) {
      if (!state.completedSteps.includes(stepId)) {
        state.completedSteps.push(stepId);
      }

      if (stepId < COURSE_STEPS.length) {
        state.currentStepId = stepId + 1;
      }

      saveState();
      closeStageModal();
      showToast(`Etapa ${stepId} concluÃ­da com sucesso!`, 'success');
      navigateTo('dashboard');
    }

    function openEbookModal(ebookId) {
      const ebook = EBOOKS_DATA.find(e => e.id === ebookId);
      if (!ebook) return;

      const modal = document.getElementById('ebook-modal');
      const content = document.getElementById('ebook-modal-content');

      content.innerHTML = `
        <div class="space-y-4">
          <span class="text-xs font-extrabold uppercase tracking-wider text-brand-600">Leitor Interativo de E-book</span>
          <h2 class="text-2xl font-black text-slate-900 hc-text">${ebook.title}</h2>
          <p class="text-xs text-slate-500 font-semibold">Autor: ${ebook.author} â€¢ ${ebook.pages}</p>
          <hr class="border-slate-100">

          <div class="text-xs text-slate-700 space-y-3 leading-relaxed">
            <p>${ebook.sampleContent}</p>
            <h4 class="font-bold text-slate-900 pt-2">TÃ³picos Abordados neste E-book:</h4>
            <ul class="list-disc pl-5 space-y-1">
              ${ebook.topics.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>

          <div class="pt-4 flex justify-between items-center border-t border-slate-100">
            <button onclick="showToast('SimulaÃ§Ã£o de Download do PDF iniciada!', 'info')" class="bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold px-4 py-2 rounded-xl text-xs border border-brand-200 transition flex items-center space-x-1.5">
              <i data-lucide="download" class="w-4 h-4"></i>
              <span>Baixar PDF Completo</span>
            </button>
            <button onclick="closeEbookModal()" class="bg-brand-600 text-white font-bold px-5 py-2 rounded-xl text-xs shadow-md">
              Fechar Leitor
            </button>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      lucide.createIcons();
    }

    function closeEbookModal() {
      document.getElementById('ebook-modal').classList.add('hidden');
    }
