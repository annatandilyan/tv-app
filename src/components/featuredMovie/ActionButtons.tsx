import { Button } from '@/components/ui/button.tsx';
import { cn } from '@/lib/utils.ts';
import { Play } from 'lucide-react';

const BUTTON_STYLES = {
  play: cn(
    'inline-flex items-center justify-center',
    'h-12 w-40 rounded-full',
    'bg-white text-black hover:bg-white/90',
    'font-semibold text-lg leading-none',
    'shadow-md'
  ),
  moreInfo: cn(
    'inline-flex items-center justify-center',
    'h-12 w-40 rounded-full',
    'text-white border-0',
    'bg-gradient-to-r from-stream-blue-primary to-stream-blue-secondary',
    'hover:from-stream-blue-hover-primary hover:to-stream-blue-hover-secondary',
    'font-semibold text-lg leading-none',
    'shadow-md'
  ),
} as const;

const PlayButton = ({ onClick }: { onClick?: () => void }) => (
  <Button className={BUTTON_STYLES.play} onClick={onClick}>
    <Play className="w-5 h-5 mr-2 fill-current" />
    Play
  </Button>
);

const MoreInfoButton = ({ onClick }: { onClick?: () => void }) => (
  <Button className={BUTTON_STYLES.moreInfo} onClick={onClick}>
    More Info
  </Button>
);

const ActionButtons = ({
  onPlayClick,
  onMoreInfoClick,
}: {
  onPlayClick?: () => void;
  onMoreInfoClick?: () => void;
}) => (
  <div className="flex items-center gap-4 pt-4">
    <PlayButton onClick={onPlayClick} />
    <MoreInfoButton onClick={onMoreInfoClick} />
  </div>
);

export default ActionButtons;
