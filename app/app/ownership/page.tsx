'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  ShieldAlert,
  TrendingDown,
  RefreshCw,
  DollarSign,
  Package,
  Wrench,
} from 'lucide-react';
import { ownedItems, type OwnedItem } from '@/lib/ownership';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function OwnershipPage() {
  const totalValue = ownedItems.reduce((sum, item) => sum + item.currentValue, 0);
  const totalSpent = ownedItems.reduce((sum, item) => sum + item.purchasePrice, 0);
  const expiringCount = ownedItems.filter((i) => i.warrantyStatus === 'expiring').length;
  const tradeInTotal = ownedItems.reduce((sum, item) => sum + (item.tradeInValue || 0), 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl tracking-tightest">Ownership</h1>
        <p className="mt-1 text-sm text-north-muted">
          Everything you own. Tracked, maintained, and ready to upgrade at the right moment.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard icon={Package} label="Items owned" value={`${ownedItems.length}`} sub="across 4 categories" />
        <StatCard icon={DollarSign} label="Current value" value={`$${totalValue.toLocaleString()}`} sub={`spent $${totalSpent.toLocaleString()}`} />
        <StatCard icon={ShieldAlert} label="Warranties expiring" value={`${expiringCount}`} sub="needs attention" />
        <StatCard icon={TrendingDown} label="Trade-in potential" value={`$${tradeInTotal.toLocaleString()}`} sub="if sold now" />
      </div>

      {/* Items */}
      <div className="space-y-3">
        {ownedItems.map((item, i) => (
          <OwnedItemCard key={item.id} item={item} delay={i * 0.05} />
        ))}
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: any;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-north-border bg-north-surface/40 p-4">
      <div className="flex items-center gap-2 text-north-muted">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span className="text-[11px] font-medium uppercase tracking-wider">{label}</span>
      </div>
      <p className="mt-2 text-2xl font-semibold text-north-text">{value}</p>
      <p className="text-xs text-north-muted">{sub}</p>
    </div>
  );
}

function OwnedItemCard({ item, delay }: { item: OwnedItem; delay: number }) {
  const warrantyStyles: Record<string, { bg: string; text: string; label: string }> = {
    active: { bg: 'bg-north-accent/15', text: 'text-north-accent', label: 'Warranty active' },
    expiring: { bg: 'bg-north-warm/15', text: 'text-north-warm', label: `Expires in ${item.warrantyDaysLeft} days` },
    expired: { bg: 'bg-north-danger/15', text: 'text-north-danger', label: 'Warranty expired' },
  };
  const w = warrantyStyles[item.warrantyStatus];
  const valueChange = ((item.currentValue - item.purchasePrice) / item.purchasePrice) * 100;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeUp}
      transition={{ duration: 0.3, delay }}
      className="rounded-2xl border border-north-border bg-north-surface/40 p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-north-text">{item.name}</h3>
                <span className="text-xs text-north-muted">{item.brand}</span>
              </div>
              <p className="mt-0.5 text-xs text-north-muted">
                {item.category} · Bought {item.purchaseDate} for ${item.purchasePrice}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-north-text">${item.currentValue}</p>
              <p className="text-xs text-north-muted">current value</p>
            </div>
          </div>

          {/* Warranty */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${w.bg} ${w.text}`}>
              {item.warrantyStatus === 'active' ? <ShieldCheck className="h-3 w-3" /> : <ShieldAlert className="h-3 w-3" />}
              {w.label}
            </span>
            {item.insurance && item.insurance !== 'None' && (
              <span className="text-[11px] text-north-muted">{item.insurance}</span>
            )}
          </div>

          {/* Details grid */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {item.upgradeSuggestion && (
              <DetailRow icon={RefreshCw} label="Upgrade suggestion" value={item.upgradeSuggestion} tone="accent" />
            )}
            {item.tradeInValue !== undefined && item.tradeInValue > 0 && (
              <DetailRow icon={TrendingDown} label="Trade-in value" value={`$${item.tradeInValue} — ${item.resaleOpportunity}`} />
            )}
            {item.lastMaintenance && (
              <DetailRow icon={Wrench} label="Maintenance" value={`${item.lastMaintenance} · Next: ${item.nextMaintenance || 'N/A'}`} />
            )}
            <DetailRow icon={Package} label="Replacement prediction" value={item.replacementPrediction} />
          </div>

          {/* Accessories */}
          {item.accessories && item.accessories.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] text-north-muted">Accessories:</span>
              {item.accessories.map((acc) => (
                <span key={acc} className="rounded-md bg-north-surface-2/50 px-2 py-0.5 text-[11px] text-north-muted">
                  {acc}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: any;
  label: string;
  value: string;
  tone?: 'accent';
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon
        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${tone === 'accent' ? 'text-north-accent' : 'text-north-muted'}`}
        strokeWidth={1.75}
      />
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-north-muted">{label}</p>
        <p className={`mt-0.5 text-xs leading-relaxed ${tone === 'accent' ? 'text-north-accent' : 'text-north-text'}`}>
          {value}
        </p>
      </div>
    </div>
  );
}
