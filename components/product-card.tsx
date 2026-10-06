'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingDown,
  TrendingUp,
  Minus,
  Sparkles,
  ShieldCheck,
  Leaf,
  AlertTriangle,
  ChevronDown,
  Check,
  X,
} from 'lucide-react';
import { products, type Product } from '@/lib/products';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const [expanded, setExpanded] = useState(false);

  const priceDirIcon =
    product.priceDirection === 'down' ? TrendingDown : product.priceDirection === 'up' ? TrendingUp : Minus;
  const PriceIcon = priceDirIcon;
  const priceColor =
    product.priceDirection === 'down'
      ? 'text-north-accent'
      : product.priceDirection === 'up'
      ? 'text-north-warm'
      : 'text-north-muted';

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeUp}
      transition={{ duration: 0.3, delay }}
      className="overflow-hidden rounded-2xl border border-north-border bg-north-surface/40"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-north-surface/80 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-north-muted">{product.brand}</p>
            <h3 className="text-lg font-semibold text-north-text">{product.name}</h3>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold text-north-text">${product.price}</p>
            <p className={`flex items-center justify-end gap-1 text-xs ${priceColor}`}>
              <PriceIcon className="h-3 w-3" />
              {product.priceDirection}
            </p>
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* AI reason */}
        <div className="flex items-start gap-2.5 rounded-lg bg-north-accent/5 p-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-north-accent" />
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-north-accent">Why this?</p>
            <p className="mt-1 text-xs leading-relaxed text-north-text">{product.aiReason}</p>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
          <Metric label="Ownership cost" value={`$${product.ownershipCost}/yr`} />
          <Metric label="Lifespan" value={product.expectedLifespan} />
          <Metric label="Community trust" value={`${product.communityTrust}%`} icon={ShieldCheck} />
          <Metric label="Warranty score" value={`${product.warrantyScore}%`} icon={ShieldCheck} />
          <Metric label="Resale value" value={`${product.resaleValue}%`} />
          <Metric label="Eco score" value={`${product.environmentalScore}%`} icon={Leaf} />
        </div>

        {/* Price trend mini chart */}
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-wider text-north-muted">Price trend (6 weeks)</p>
            <span className="text-xs text-north-muted">
              Low ${product.historicalLow} · High ${product.historicalHigh}
            </span>
          </div>
          <div className="flex items-end gap-1.5 h-12">
            {product.priceTrend.map((point, i) => {
              const max = Math.max(...product.priceTrend.map((p) => p.price));
              const min = Math.min(...product.priceTrend.map((p) => p.price));
              const range = max - min || 1;
              const height = ((point.price - min) / range) * 100;
              const isLast = i === product.priceTrend.length - 1;
              return (
                <div key={point.week} className="flex flex-1 flex-col items-center gap-1">
                  <div className="flex w-full items-end" style={{ height: '40px' }}>
                    <div
                      className={`w-full rounded-sm transition-all ${
                        isLast ? 'bg-north-accent' : 'bg-north-border'
                      }`}
                      style={{ height: `${Math.max(height, 10)}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-north-muted">{point.week}</span>
                </div>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-north-muted">
            Projected: ${product.projectedPrice} · Compatibility: {product.compatibility}
          </p>
        </div>

        {/* Expandable: alternatives + risks */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex w-full items-center justify-between rounded-lg border border-north-border px-3 py-2.5 text-xs font-medium text-north-muted transition-colors hover:text-north-text"
        >
          <span>Alternatives, risks & full AI explanation</span>
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-3 space-y-4 pt-2">
                {/* Full AI explanation */}
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-north-muted">Full AI explanation</p>
                  <div className="mt-2 space-y-2 text-xs text-north-text">
                    <ExplanationRow q="Why now?" a={`Price is ${product.priceDirection}. Projected to reach $${product.projectedPrice}.`} />
                    <ExplanationRow q="Why not alternatives?" a={`${product.alternatives.length} alternatives evaluated. Selected for best ownership cost and lifespan.`} />
                    <ExplanationRow q="What if you wait?" a={product.priceDirection === 'down' ? 'Prices may drop further. Low risk.' : 'Prices stable. No urgency to wait.'} />
                    <ExplanationRow q="Confidence" a={`${product.confidence}%`} />
                  </div>
                </div>

                {/* Alternatives */}
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-north-muted">Alternative choices</p>
                  <div className="mt-2 space-y-2">
                    {product.alternatives.map((alt) => (
                      <div key={alt.name} className="flex items-center justify-between rounded-lg bg-north-surface-2/40 px-3 py-2">
                        <div>
                          <p className="text-xs font-medium text-north-text">{alt.name}</p>
                          <p className="text-[11px] text-north-muted">{alt.note}</p>
                        </div>
                        <span className="text-xs font-medium text-north-muted">${alt.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risks */}
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-north-muted">Potential risks</p>
                  <div className="mt-2 space-y-1.5">
                    {product.risks.map((risk) => (
                      <div key={risk} className="flex items-start gap-2">
                        <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-north-warm" />
                        <p className="text-xs text-north-text">{risk}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-2">
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-north-accent px-3 py-2 text-xs font-semibold text-north-bg transition-all hover:bg-north-accent/90">
            <Check className="h-3.5 w-3.5" />
            Approve
          </button>
          <button className="flex items-center justify-center gap-1.5 rounded-lg border border-north-border px-3 py-2 text-xs font-medium text-north-muted transition-colors hover:text-north-text">
            <X className="h-3.5 w-3.5" />
            Reject
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function Metric({ label, value, icon: Icon }: { label: string; value: string; icon?: any }) {
  return (
    <div className="flex items-center gap-2">
      {Icon && <Icon className="h-3.5 w-3.5 text-north-muted" strokeWidth={1.75} />}
      <div>
        <p className="text-[10px] uppercase tracking-wider text-north-muted">{label}</p>
        <p className="text-sm font-medium text-north-text">{value}</p>
      </div>
    </div>
  );
}

function ExplanationRow({ q, a }: { q: string; a: string }) {
  return (
    <div className="flex gap-2">
      <span className="shrink-0 text-north-muted">{q}</span>
      <span className="text-north-text">{a}</span>
    </div>
  );
}
