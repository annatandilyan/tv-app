import { useCallback } from 'react';
import { USER_NAME } from '@/consts';
import { useSidebarState } from '@/hooks/useSidebarState.ts';
import { useContentVisibility } from '@/hooks/useContentVisibility.ts';
import { useEscapeHandler } from '@/hooks/useEscapeHandler.ts';
import SidebarContainer from '@/components/sidebar/SidebarContainer.tsx';
import MainNavigation from '@/components/sidebar/MainNavigation.tsx';
import BackdropOverlay from '@/components/sidebar/BackdropOverlay.tsx';
import BottomMenu from '@/components/sidebar/BottomMenu.tsx';
import UserProfile from '@/components/sidebar/UserProfile.tsx';

function StreamingSidebar() {
  const {
    isExpanded,
    escapeClosed,
    showContent,
    setIsExpanded,
    setEscapeClosed,
    setShowContent,
  } = useSidebarState();

  useContentVisibility(isExpanded, setShowContent);
  useEscapeHandler(setIsExpanded, setEscapeClosed);

  const handleMouseEnter = useCallback(() => {
    if (!escapeClosed) setIsExpanded(true);
  }, [escapeClosed, setIsExpanded]);

  const handleMouseLeave = useCallback(() => {
    setIsExpanded(false);
  }, [setIsExpanded]);

  return (
    <div className="z-50">
      <SidebarContainer
        isExpanded={isExpanded}
        escapeClosed={escapeClosed}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isExpanded && <UserProfile name={USER_NAME} />}
        <MainNavigation isExpanded={isExpanded} showContent={showContent} />
        <BottomMenu isExpanded={isExpanded} showContent={showContent} />
      </SidebarContainer>

      <BackdropOverlay isExpanded={isExpanded} />
    </div>
  );
}

export default StreamingSidebar;
