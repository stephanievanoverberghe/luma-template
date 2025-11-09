// lib/theme.ts
export type Theme = 'light' | 'dark';

export const getStoredTheme = (): Theme | null => {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? stored : null;
};

export const applyTheme = (theme: Theme) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
};
