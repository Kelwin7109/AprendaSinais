import React, { useEffect, useState } from 'react';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import DashboardPage from '../pages/DashboardPage';
import CoursePage from '../pages/CoursePage';
import EbooksPage from '../pages/EbooksPage';
import AnalyticsPage from '../pages/AnalyticsPage';
import ProfilePage from '../pages/ProfilePage';
import LiveClassesPage from '../pages/LiveClassesPage';

const routes = {
  home: HomePage,
  sobre: AboutPage,
  login: LoginPage,
  cadastro: RegisterPage,
  'redefinir-senha': ResetPasswordPage,
  dashboard: DashboardPage,
  curso: CoursePage,
  ebooks: EbooksPage,
  analytics: AnalyticsPage,
  perfil: ProfilePage,
  'aulas-aovivo': LiveClassesPage,
};

export default function AppRoutes() {
  const [page, setPage] = useState('home');
  const Page = routes[page] ?? HomePage;

  useEffect(() => {
    const handleNavigation = (event) => setPage(event.detail);
    window.addEventListener('aprenda-sinais:navigate', handleNavigation);
    window.initializeAprendaSinais?.();
    return () => window.removeEventListener('aprenda-sinais:navigate', handleNavigation);
  }, []);

  return <Page />;
}
