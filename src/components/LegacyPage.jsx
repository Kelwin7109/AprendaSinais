import React, { useEffect } from 'react';
import styles from '../styles/components/LegacyPage.module.css';

/** Mantém o conteúdo e as ações das páginas existentes durante a migração. */
export default function LegacyPage({ page }) {
  useEffect(() => {
    window.lucide?.createIcons();
    if (page === 'analytics') {
      const timer = window.setTimeout(() => window.initializeAprendaSinaisCharts?.(), 120);
      return () => window.clearTimeout(timer);
    }
    if (page === 'aulas-aovivo') {
      window.initializeLiveClasses?.();
    }
  }, [page]);

  const html = window.getAprendaSinaisPage?.(page) ?? '';
  return <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />;
}
