import { cn } from '@/lib/utils.ts';
import { getAnimationDelay } from '@/utils';
import { NavLink } from 'react-router-dom';

interface MenuItem {
  label: string;
  path: string;
  icon: string;
}

const NavigationItem = ({
  item,
  index,
  isExpanded,
  showContent,
}: {
  item: MenuItem;
  index: number;
  isExpanded: boolean;
  showContent: boolean;
}) => (
  <li key={item.label}>
    <NavLink
      to={item.path}
      className={({ isActive: active }) =>
        cn(
          'flex items-center py-4 transition-all duration-300 ease-in-out',
          isExpanded
            ? 'px-4 [border-radius:12px]'
            : 'justify-center px-0 [border-radius:24px]',
          active
            ? 'bg-stream-sidebar-active text-white'
            : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
        )
      }
    >
      <img
        src={item.icon}
        alt={item.label}
        className={cn(
          'max-w-5 max-h-5 transition-all duration-300 ease-out',
          isExpanded ? 'mr-3' : 'mr-0'
        )}
      />
      <span
        className={cn(
          'whitespace-nowrap transition-all duration-300 ease-out',
          showContent && isExpanded
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-4 w-0'
        )}
        style={{ transitionDelay: getAnimationDelay(index, showContent) }}
      >
        {item.label}
      </span>
    </NavLink>
  </li>
);

export default NavigationItem;
