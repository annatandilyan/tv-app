import StreamingSidebar from '@/components/sidebar/StreamingSidebar.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <StreamingSidebar />

      {/* Main Content */}
      <main className="pl-16">{children}</main>
    </div>
  );
}
