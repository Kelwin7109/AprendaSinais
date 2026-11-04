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

    async function handleLogin(e) {
      e.preventDefault();
      const form = e.currentTarget;
      validateLoginField('email');
      validateLoginField('pass');
      if (!form.reportValidity()) return;
      const auth = window.aprendaAuth;
      if (!auth?.configured) {
        showToast('Configure as credenciais do Supabase para ativar o login.', 'warning');
        return;
      }
      const submitButton = form.querySelector('[type="submit"]');
      submitButton.disabled = true;
      submitButton.textContent = 'Entrando...';
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-pass').value;
      let result;
      try {
        result = await auth.client.auth.signInWithPassword({ email, password });
      } catch (_error) {
        result = { error: true };
      }
      submitButton.disabled = false;
      submitButton.textContent = 'Entrar no Painel';
      if (result.error) {
        const message = /not confirmed/i.test(result.error.message || '')
          ? 'Confirme seu e-mail antes de entrar.'
          : 'E-mail ou senha incorretos.';
        const errorElement = document.getElementById('login-pass-error');
        errorElement.textContent = message;
        document.getElementById('login-pass').setCustomValidity(message);
        showToast(message, 'warning');
        return;
      }
      showToast('Login efetuado com sucesso!', 'success');
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

    async function handlePasswordRecovery(e) {
      e.preventDefault();
      if (!e.currentTarget.reportValidity()) return;
      const auth = window.aprendaAuth;
      const message = document.getElementById('recovery-message');
      if (!auth?.configured) {
        message.textContent = 'A conexão com o Supabase ainda não está configurada.';
        showToast('Configure o Supabase para enviar links de recuperação.', 'warning');
        return;
      }
      const email = document.getElementById('recovery-email').value.trim();
      let result;
      try {
        result = await auth.client.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/?page=redefinir-senha`,
        });
      } catch (_error) {
        result = { error: true };
      }
      const { error } = result;
      if (error) {
        message.textContent = 'Não foi possível solicitar a recuperação. Confira a configuração do e-mail no Supabase e tente novamente.';
        showToast(message.textContent, 'warning');
        return;
      }
      message.textContent = 'Se houver uma conta para esse e-mail, enviaremos um link para redefinir a senha.';
      showToast('Confira sua caixa de entrada e a pasta de spam.', 'success');
    }

    async function handlePasswordReset(e) {
      e.preventDefault();
      const form = e.currentTarget;
      const password = document.getElementById('reset-pass').value;
      const confirmation = document.getElementById('reset-pass-confirm').value;
      const errorElement = document.getElementById('reset-pass-error');
      if (password.length < 8) {
        errorElement.textContent = 'A senha precisa ter pelo menos 8 caracteres.';
        return;
      }
      if (password !== confirmation) {
        errorElement.textContent = 'As senhas não coincidem.';
        return;
      }
      const auth = window.aprendaAuth;
      if (!auth?.configured) {
        errorElement.textContent = 'A conexão com o Supabase ainda não está configurada.';
        return;
      }
      const button = form.querySelector('[type="submit"]');
      button.disabled = true;
      button.textContent = 'Salvando...';
      let result;
      try {
        result = await auth.client.auth.updateUser({ password });
      } catch (_error) {
        result = { error: true };
      }
      const { error } = result;
      button.disabled = false;
      button.textContent = 'Salvar nova senha';
      if (error) {
        errorElement.textContent = 'O link expirou ou é inválido. Solicite uma nova recuperação de senha.';
        return;
      }
      errorElement.textContent = '';
      showToast('Senha alterada. Você já pode entrar com a nova senha.', 'success');
      navigateTo('login');
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

    async function handleSignup(e) {
      e.preventDefault();
      ['name', 'email', 'pass', 'confirm'].forEach(validateSignupField);
      if (!e.currentTarget.reportValidity()) return;

      const auth = window.aprendaAuth;
      if (!auth?.configured) {
        showToast('Configure as credenciais do Supabase para ativar o cadastro.', 'warning');
        return;
      }

      const submitButton = e.currentTarget.querySelector('[type="submit"]');
      submitButton.disabled = true;
      submitButton.textContent = 'Criando conta...';
      const name = document.getElementById('signup-name').value.trim().replace(/\s+/g, ' ');
      const email = document.getElementById('signup-email').value.trim();
      const password = document.getElementById('signup-pass').value;
      let result;
      try {
        result = await auth.client.auth.signUp({
          email,
          password,
          options: { data: { full_name: name }, emailRedirectTo: window.location.origin },
        });
      } catch (_error) {
        result = { error: true };
      }
      const { data, error } = result;
      submitButton.disabled = false;
      submitButton.textContent = 'Criar Conta e Começar';
      if (error) {
        const message = 'Não foi possível criar a conta. Confira os dados ou tente entrar se já tiver cadastro.';
        showToast(message, 'warning');
        return;
      }
      if (data.session) {
        showToast('Conta criada com sucesso!', 'success');
        navigateTo('dashboard');
      } else {
        showToast('Cadastro iniciado. Confirme seu e-mail para ativar a conta.', 'success');
        navigateTo('login');
      }
    }

    async function handleLogout() {
      let result = {};
      try {
        if (window.aprendaAuth?.client) result = await window.aprendaAuth.client.auth.signOut();
      } catch (_error) {
        result = { error: true };
      }
      const { error } = result;
      if (error) {
        showToast('Não foi possível encerrar a sessão. Tente novamente.', 'warning');
        return;
      }
      window.applySupabaseSession?.(null);
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
