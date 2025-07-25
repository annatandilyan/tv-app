import { useCallback, useState } from 'react';

interface SidebarState {
  isExpanded: boolean;
  escapeClosed: boolean;
  showContent: boolean;
}

export const useSidebarState = () => {
  const [state, setState] = useState<SidebarState>({
    isExpanded: false,
    escapeClosed: false,
    showContent: false,
  });

  const setIsExpanded = useCallback((expanded: boolean) => {
    setState(prev => ({ ...prev, isExpanded: expanded }));
  }, []);

  const setEscapeClosed = useCallback((closed: boolean) => {
    setState(prev => ({ ...prev, escapeClosed: closed }));
  }, []);

  const setShowContent = useCallback((show: boolean) => {
    setState(prev => ({ ...prev, showContent: show }));
  }, []);

  return {
    ...state,
    setIsExpanded,
    setEscapeClosed,
    setShowContent,
  };
};
