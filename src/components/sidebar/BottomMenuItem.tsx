import { Button } from '@/components/ui/button.tsx';
import { cn } from '@/lib/utils.ts';
import { getAnimationDelay } from '@/utils';

interface BottomMenuItem {
  label: string;
}

const BottomMenuItem = ({
  item,
  index,
  showContent,
}: {
  item: BottomMenuItem;
  index: number;
  showContent: boolean;
}) => (
  <li key={item.label}>
    <Button
      variant={null}
      className="flex justify-start w-full py-2 rounded-lg text-gray-400 hover:bg-sidebar-accent/50 transition-colors"
    >
      <span
        className={cn(
          'text-sm transition-all duration-300 ease-out',
          showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        )}
        style={{ transitionDelay: getAnimationDelay(index, showContent, true) }}
      >
        {item.label}
      </span>
    </Button>
  </li>
);

export default BottomMenuItem;
