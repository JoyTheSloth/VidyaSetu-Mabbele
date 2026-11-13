import React, { createContext, useContext, useState, useEffect } from 'react';

export type Role = 'ADMIN' | 'TEACHER' | 'STUDENT';

export interface SchoolInfo {
  name: string;
  tagline: string;
  academicYear: string;
  affiliatedTo: string;
  affiliationNo: string;
  schoolCode: string;
  address: string;
  phone: string;
  email: string;
}

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface LandingContextType {
  school: SchoolInfo;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const defaultSchool: SchoolInfo = {
  name: 'Bhaktivedanta Institute Mission Hr. Sec. School',
  tagline: 'Synthesizing Vedic Epistemology with Modern Science',
  academicYear: '2026-2027',
  affiliatedTo: 'Central Board of Secondary Education (CBSE), New Delhi',
  affiliationNo: '1230048',
  schoolCode: '45672',
  address: 'Hare Krishna Hill, Imphal West, Manipur - 795001',
  phone: '+91 98765 43210',
  email: 'admissions@bhaktivedantaschool.edu.in'
};

const LandingContext = createContext<LandingContextType | undefined>(undefined);

export const LandingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('bim_theme') as 'light' | 'dark') || 'light';
  });

  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    localStorage.setItem('bim_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  return (
    <LandingContext.Provider value={{ school: defaultSchool, theme, toggleTheme, showToast }}>
      {children}
      
      {/* Toast Overlay */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map(t => (
          <div 
            key={t.id}
            className={`pointer-events-auto px-4 py-3 rounded-2xl shadow-xl border text-xs font-bold transition-all duration-300 animate-slide-up flex items-center gap-2 ${
              t.type === 'success' 
                ? 'bg-emerald-900/95 text-emerald-100 border-emerald-500/30' 
                : t.type === 'error'
                ? 'bg-rose-900/95 text-rose-100 border-rose-500/30'
                : 'bg-[#002B66]/95 text-amber-200 border-amber-400/30'
            }`}
          >
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </LandingContext.Provider>
  );
};

export const useApp = (): LandingContextType => {
  const ctx = useContext(LandingContext);
  if (!ctx) throw new Error('useApp must be used within LandingProvider');
  return ctx;
};

