import { Sidebar, MobileNav } from '@/components/sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-north-bg text-north-text">
      <Sidebar />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6 lg:px-10 lg:pb-12">
          {children}
        </div>
      </main>
      <MobileNav />
    </div>
  );
}
