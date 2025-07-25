import { cn } from '@/lib/utils.ts';
import { ANIMATION_DURATION, bottomMenuItems } from '@/consts';
import BottomMenuItem from '@/components/sidebar/BottomMenuItem.tsx';

const BottomMenu = ({
  isExpanded,
  showContent,
}: {
  isExpanded: boolean;
  showContent: boolean;
}) => (
  <div
    className={cn(
      'border-t border-sidebar-border p-2 transition-all duration-300 ease-out',
      showContent && isExpanded
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-4'
    )}
    style={{
      transitionDelay: showContent
        ? `${ANIMATION_DURATION.BOTTOM_MENU_DELAY}ms`
        : '0ms',
    }}
  >
    {isExpanded && (
      <ul className="space-y-1">
        {bottomMenuItems.map((item, index) => (
          <BottomMenuItem
            key={item.label}
            item={item}
            index={index}
            showContent={showContent}
          />
        ))}
      </ul>
    )}
  </div>
);

export default BottomMenu;
