/* ==========================================================================
       AUTHENTICATION & FORM HANDLERS
       ========================================================================== */

    function loginDemo() {
      state.user = {
        name: "Ana Silva",
        email: "ana.silva@exemplo.com",
        bio: "Estudante apaixonada por inclusÃ£o e Libras.",
        level: "NÃ­vel 1 - Aprendiz de Sinais",
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
      state.isAuthenticated = true;
      saveState();
      showToast('Login efetuado com sucesso!', 'success');
      navigateTo('dashboard');
    }

    function handleSignup(e) {
      e.preventDefault();
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;

      state.user.name = name || "Aluno Aprenda Sinais";
      state.user.email = email || "aluno@exemplo.com";
      state.isAuthenticated = true;

      saveState();
      showToast('Conta criada com sucesso!', 'success');
      navigateTo('dashboard');
    }

    function handleLogout() {
      state.isAuthenticated = false;
      saveState();
      showToast('SessÃ£o encerrada com seguranÃ§a.', 'info');
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
