import { cn } from '@/lib/utils.ts';
import { SIDEBAR_WIDTH } from '@/consts';
import { getSidebarBackgroundColor } from '@/utils';

const SidebarContainer = ({
  children,
  isExpanded,
  escapeClosed,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  isExpanded: boolean;
  escapeClosed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => (
  <div
    className={cn(
      'focus:outline-none fixed pt-50 left-0 top-0 h-full z-50 transition-all duration-300 ease-out',
      isExpanded && 'shadow-2xl shadow-gray-600'
    )}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div
      className={cn(
        'h-full bg-sidebar transition-all duration-300 ease-out overflow-hidden',
        isExpanded ? SIDEBAR_WIDTH.EXPANDED : SIDEBAR_WIDTH.COLLAPSED
      )}
      style={{ backgroundColor: getSidebarBackgroundColor(isExpanded) }}
    >
      {children}
    </div>
  </div>
);

export default SidebarContainer;
