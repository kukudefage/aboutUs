import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationState {
  prevPath: string;
  scrollY: number;
  worksFilter: string;
}

const STORAGE_KEY = 'nav_state';

function getStoredState(): NavigationState | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setStoredState(state: NavigationState) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

function clearStoredState() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export function useSaveNavigationState(filter: string = '') {
  const location = useLocation();
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      setStoredState({
        prevPath: location.pathname,
        scrollY: scrollRef.current,
        worksFilter: filter,
      });
    };
  }, [location.pathname, filter]);
}

export function useNavigationHistory() {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState<NavigationState | null>(null);

  useEffect(() => {
    setState(getStoredState());
  }, []);

  const goBack = useCallback(() => {
    if (state?.prevPath && state.prevPath !== location.pathname) {
      navigate(state.prevPath, { replace: false });

      if (state.scrollY > 0) {
        setTimeout(() => {
          window.scrollTo({ top: state.scrollY, behavior: 'instant' as ScrollBehavior });
        }, 50);
      }
    } else {
      navigate('/works', { replace: false });
    }
  }, [navigate, location.pathname, state]);

  const hasHistory = !!state?.prevPath;
  const prevPath = state?.prevPath || '/works';
  const prevFilter = state?.worksFilter || '全部';

  return { goBack, hasHistory, prevPath, prevFilter };
}

export function useRestoreWorksFilter(): string {
  const state = getStoredState();
  if (state?.worksFilter) {
    return state.worksFilter;
  }
  return '全部';
}

export function useRestoreScrollPosition() {
  const location = useLocation();

  useEffect(() => {
    const state = getStoredState();
    if (state?.prevPath === location.pathname && state.scrollY > 0) {
      setTimeout(() => {
        window.scrollTo({ top: state!.scrollY, behavior: 'instant' as ScrollBehavior });
      }, 50);
      clearStoredState();
    }
  }, [location.pathname]);
}
