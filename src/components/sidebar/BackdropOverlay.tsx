import { cn } from '@/lib/utils.ts';

const BackdropOverlay = ({ isExpanded }: { isExpanded: boolean }) => (
  <div
    className={cn(
      'fixed inset-0 left-[16rem] bg-black/20 backdrop-blur-sm z-30 transition-all duration-300 ease-out',
      isExpanded
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    )}
  />
);

export default BackdropOverlay;
