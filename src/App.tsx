import React from 'react';
import { LandingProvider, Role } from './LandingContext';
import { HomePage } from './HomePage';

const PORTAL_URL = import.meta.env.VITE_PORTAL_URL || 'http://localhost:5174';

export default function App() {
  const handleGoToPortal = (role?: Role) => {
    const targetUrl = role ? `${PORTAL_URL}?role=${role}` : PORTAL_URL;
    window.location.href = targetUrl;
  };

  return (
    <LandingProvider>
      <HomePage onGoToPortal={handleGoToPortal} />
    </LandingProvider>
  );
}

