/* ==========================================================================
       UTILITIES & ACCESSIBILITY CONTROLS
       ========================================================================== */

    function showToast(msg, type = 'success') {
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toast-message');

      toastMsg.innerText = msg;
      toast.classList.remove('opacity-0', 'translate-y-12', 'pointer-events-none');

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-12', 'pointer-events-none');
      }, 3000);
    }

    function toggleHighContrast() {
      document.body.classList.toggle('high-contrast');
    }

    function changeFontSize(action) {
      const html = document.documentElement;
      html.classList.remove('fs-sm', 'fs-lg', 'fs-xl');
      if (action === 'increase') html.classList.add('fs-lg');
      if (action === 'decrease') html.classList.add('fs-sm');
    }

    function toggleVLibrasWidget() {
      const widget = document.getElementById('vlibras-widget');
      widget.classList.toggle('hidden');
    }

    function toggleMobilePublicMenu() {
      document.getElementById('mobile-public-menu').classList.toggle('hidden');
    }

    function toggleMobileSidebar() {
      const drawer = document.getElementById('sidebar-drawer');
      drawer.classList.toggle('-translate-x-full');
    }
