import { cn } from '@/lib/utils.ts';
import { menuItems } from '@/consts';
import NavigationItem from '@/components/sidebar/NavigationItem.tsx';

const MainNavigation = ({
  isExpanded,
  showContent,
}: {
  isExpanded: boolean;
  showContent: boolean;
}) => (
  <nav className="py-4 flex-1">
    <ul className={cn('space-y-2 px-2', !isExpanded && 'pt-20')}>
      {menuItems.map((item, index) => (
        <NavigationItem
          key={item.label}
          item={item}
          index={index}
          isExpanded={isExpanded}
          showContent={showContent}
        />
      ))}
    </ul>
  </nav>
);

export default MainNavigation;
