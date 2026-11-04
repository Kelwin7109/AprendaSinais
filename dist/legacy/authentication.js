/* ==========================================================================
       AUTHENTICATION & FORM HANDLERS
       ========================================================================== */

    function loginDemo() {
      state.user = {
        name: "Ana Silva",
        email: "ana.silva@exemplo.com",
        bio: "Estudante apaixonada por inclusão e Libras.",
        level: "Nível 1 - Aprendiz de Sinais",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
        notificationsEnabled: true
      };
      state.isAuthenticated = true;
      saveState();
      showToast('Bem-vinda, Ana Silva! Acesso Demo liberado.', 'success');
      navigateTo('dashboard');
    }

    function handleLogin(e) {
      e.preventDefault();
      const form = e.currentTarget;
      validateLoginField('email');
      validateLoginField('pass');
      if (!form.reportValidity()) return;
      state.isAuthenticated = true;
      state.user.email = document.getElementById('login-email').value.trim();
      saveState();
      showToast('Acesso de demonstração liberado. As credenciais não são verificadas.', 'info');
      navigateTo('dashboard');
    }

    function validateLoginField(field) {
      const input = document.getElementById(field === 'email' ? 'login-email' : 'login-pass');
      const error = document.getElementById(field === 'email' ? 'login-email-error' : 'login-pass-error');
      if (!input || !error) return true;
      const message = !input.value.trim()
        ? (field === 'email' ? 'Informe seu e-mail.' : 'Informe sua senha.')
        : (field === 'email' && !input.validity.valid ? 'Digite um endereço de e-mail válido.' : '');
      input.setCustomValidity(message);
      error.textContent = message;
      return !message;
    }

    function togglePasswordVisibility(inputId, button) {
      const input = document.getElementById(inputId);
      if (!input) return;
      const showing = input.type === 'password';
      input.type = showing ? 'text' : 'password';
      button.textContent = showing ? 'Ocultar' : 'Mostrar';
      button.setAttribute('aria-label', showing ? 'Ocultar senha' : 'Mostrar senha');
    }

    function updatePasswordStrength(password) {
      const bar = document.getElementById('signup-strength-bar');
      const hint = document.getElementById('signup-pass-hint');
      if (!bar || !hint) return;
      if (!password) {
        bar.style.width = '0%';
        hint.textContent = 'Use pelo menos 8 caracteres.';
        return;
      }

      const checks = [password.length >= 8, /[a-z]/.test(password) && /[A-Z]/.test(password), /\d/.test(password), /[^A-Za-z0-9]/.test(password)];
      const score = checks.filter(Boolean).length;
      const levels = [
        { label: 'Fraca: aumente o tamanho e misture tipos de caracteres.', width: '25%', color: 'bg-red-500' },
        { label: 'Razoável: tente adicionar letras maiúsculas, números ou símbolos.', width: '50%', color: 'bg-orange-500' },
        { label: 'Boa: mais uma combinação diferente pode fortalecê-la.', width: '75%', color: 'bg-amber-500' },
        { label: 'Forte: boa combinação de tamanho e caracteres.', width: '100%', color: 'bg-green-600' }
      ];
      const level = levels[score - 1] || levels[0];
      bar.style.width = level.width;
      bar.className = `h-full transition-all ${level.color}`;
      hint.textContent = level.label;
    }

    function togglePasswordRecovery() {
      const panel = document.getElementById('password-recovery');
      if (!panel) return;
      panel.classList.toggle('hidden');
      const loginEmail = document.getElementById('login-email')?.value.trim();
      const recoveryEmail = document.getElementById('recovery-email');
      if (!panel.classList.contains('hidden') && loginEmail && recoveryEmail) recoveryEmail.value = loginEmail;
      if (!panel.classList.contains('hidden')) recoveryEmail?.focus();
    }

    function handlePasswordRecovery(e) {
      e.preventDefault();
      if (!e.currentTarget.reportValidity()) return;
      const message = document.getElementById('recovery-message');
      message.textContent = 'A recuperação de senha por e-mail exige um serviço de autenticação e não está disponível nesta demonstração.';
      showToast('Recuperação de senha indisponível no modo demonstração.', 'info');
    }

    function validateSignupField(field) {
      const inputIds = { name: 'signup-name', email: 'signup-email', pass: 'signup-pass', confirm: 'signup-pass-confirm' };
      const errorIds = { name: 'signup-name-error', email: 'signup-email-error', pass: 'signup-pass-error', confirm: 'signup-confirm-error' };
      const input = document.getElementById(inputIds[field]);
      const error = document.getElementById(errorIds[field]);
      if (!input || !error) return true;

      let message = '';
      if (field === 'name') {
        const nameParts = input.value.trim().split(/\s+/).filter(Boolean);
        if (input.value.trim() && (nameParts.length < 2 || nameParts.some((part) => part.length < 2))) {
          message = 'Informe nome e sobrenome.';
        }
      } else if (field === 'pass' && input.value && input.value.length < 8) {
        message = 'A senha precisa ter pelo menos 8 caracteres.';
      } else if (field === 'confirm') {
        const password = document.getElementById('signup-pass')?.value;
        if (input.value && input.value !== password) message = 'As senhas não coincidem.';
      }

      input.setCustomValidity(message);
      error.textContent = message;
      return !message;
    }

    function handleSignup(e) {
      e.preventDefault();
      ['name', 'email', 'pass', 'confirm'].forEach(validateSignupField);
      if (!e.currentTarget.reportValidity()) return;

      const name = document.getElementById('signup-name').value.trim().replace(/\s+/g, ' ');
      const email = document.getElementById('signup-email').value.trim();
      state.user.name = name;
      state.user.email = email;
      state.isAuthenticated = true;
      saveState();
      showToast('Cadastro simulado. Os dados ficam somente neste navegador; nenhuma conta real foi criada.', 'info');
      navigateTo('dashboard');
    }

    function handleLogout() {
      state.isAuthenticated = false;
      saveState();
      showToast('Sessão encerrada com segurança.', 'info');
      navigateTo('home');
    }

    function handleSaveProfile(e) {
      e.preventDefault();
      state.user.name = document.getElementById('profile-name').value;
      state.user.email = document.getElementById('profile-email').value;
      state.user.bio = document.getElementById('profile-bio').value;

      saveState();
      showToast('Perfil atualizado com sucesso!', 'success');
      navigateTo('perfil');
    }
