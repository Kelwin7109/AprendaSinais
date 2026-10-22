import React from 'react';
import SiteLayout from './layouts/SiteLayout';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <SiteLayout>
      <AppRoutes />
    </SiteLayout>
  );
}
