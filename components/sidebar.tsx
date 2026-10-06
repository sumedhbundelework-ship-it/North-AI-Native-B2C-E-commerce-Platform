'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Home,
  Compass,
  Bot,
  Package,
  Brain,
  Plus,
  Settings,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const nav = [
  { href: '/app', label: 'Home', icon: Home },
  { href: '/app/missions', label: 'Missions', icon: Compass },
  { href: '/app/products', label: 'Recommendations', icon: Sparkles },
  { href: '/app/agents', label: 'AI Agents', icon: Bot },
  { href: '/app/ownership', label: 'Ownership', icon: Package },
  { href: '/app/memory', label: 'Memory', icon: Brain },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-north-border bg-north-surface/40 backdrop-blur-xl lg:flex">
      <Link href="/" className="flex items-center gap-2.5 px-6 py-6">
        <NorthLogo />
        <span className="font-display text-2xl tracking-tightest text-north-text">
          North
        </span>
      </Link>

      <nav className="flex flex-1 flex-col gap-1 px-3">
        {nav.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== '/app' && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                active
                  ? 'text-north-text'
                  : 'text-north-muted hover:text-north-text'
              )}
            >
              {active && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-lg bg-north-surface-2"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <Icon className="relative h-4 w-4" strokeWidth={1.75} />
              <span className="relative">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pb-3">
        <Link
          href="/app/missions/new"
          className="flex items-center justify-center gap-2 rounded-lg bg-north-accent px-3 py-2.5 text-sm font-semibold text-north-bg transition-all hover:bg-north-accent/90"
        >
          <Plus className="h-4 w-4" strokeWidth={2} />
          New Mission
        </Link>
      </div>

      <div className="border-t border-north-border px-3 py-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-north-accent to-north-accent-2 text-xs font-bold text-north-bg">
            S
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-north-text">Sumedh</p>
            <p className="truncate text-xs text-north-muted">Free plan</p>
          </div>
          <Settings className="h-4 w-4 text-north-muted" strokeWidth={1.5} />
        </div>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-north-border bg-north-surface/90 backdrop-blur-xl lg:hidden">
      {nav.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== '/app' && pathname.startsWith(item.href));
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-1 flex-col items-center gap-1 py-3 text-[10px] font-medium transition-colors',
              active ? 'text-north-accent' : 'text-north-muted'
            )}
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function NorthLogo() {
  return (
    <div className="relative flex h-8 w-8 items-center justify-center">
      <svg viewBox="0 0 32 32" className="h-8 w-8">
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="hsl(142 70% 50%)"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <path
          d="M16 4 L16 28 M16 16 L24 8 M16 16 L8 8"
          stroke="hsl(142 70% 50%)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="16" cy="16" r="2.5" fill="hsl(142 70% 50%)" />
      </svg>
    </div>
  );
}
