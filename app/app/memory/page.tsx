'use client';

import { motion } from 'framer-motion';
import { Brain, TrendingUp, TrendingDown, Sparkles, Heart } from 'lucide-react';
import {
  shoppingDNA,
  favoriteBrands,
  learnedPreferences,
  lifeTimeline,
  changingPreferences,
} from '@/lib/memory';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function MemoryPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-display text-3xl tracking-tightest">Memory</h1>
        <p className="mt-1 text-sm text-north-muted">
          Your Commerce DNA. Everything North has learned about how you live and buy.
        </p>
      </div>

      {/* Shopping DNA */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-north-text">
          <Brain className="h-4 w-4 text-north-accent" />
          Shopping DNA
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {shoppingDNA.map((trait, i) => (
            <motion.div
              key={trait.label}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-2xl border border-north-border bg-north-surface/40 p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-north-text">{trait.label}</p>
                <span className="text-sm font-medium text-north-accent">{trait.value}</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-north-border">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${trait.score}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full rounded-full bg-north-accent"
                />
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-north-muted">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Favorite brands */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-north-text">
          <Heart className="h-4 w-4 text-north-accent" />
          Favorite brands
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center justify-between rounded-2xl border border-north-border bg-north-surface/40 p-4"
            >
              <div>
                <p className="text-sm font-semibold text-north-text">{brand.name}</p>
                <p className="text-xs text-north-muted">{brand.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-16 overflow-hidden rounded-full bg-north-border">
                  <div
                    className="h-full rounded-full bg-north-accent"
                    style={{ width: `${brand.affinity}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-north-muted">{brand.affinity}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Changing preferences */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-north-text">
          <TrendingUp className="h-4 w-4 text-north-accent" />
          Changing preferences
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {changingPreferences.map((pref, i) => (
            <motion.div
              key={pref.metric}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-2xl border border-north-border bg-north-surface/40 p-5"
            >
              <p className="text-sm font-semibold text-north-text">{pref.metric}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs text-north-muted">{pref.from}</span>
                <span className="text-north-muted">→</span>
                <span className="text-sm font-semibold text-north-accent">{pref.to}</span>
                {pref.trend === 'up' ? (
                  <TrendingUp className="h-3.5 w-3.5 text-north-accent" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5 text-north-accent" />
                )}
              </div>
              <p className="mt-2 text-xs text-north-muted">{pref.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learned preferences */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-north-text">
          <Sparkles className="h-4 w-4 text-north-accent" />
          Things North learned
        </h2>
        <div className="space-y-2.5">
          {learnedPreferences.map((lp, i) => (
            <motion.div
              key={lp.id}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-start gap-3 rounded-xl border border-north-border bg-north-surface/40 p-4"
            >
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-north-accent/15">
                <Sparkles className="h-3 w-3 text-north-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-north-text">{lp.text}</p>
                <p className="mt-1.5 text-[11px] text-north-muted">
                  {lp.source} · {lp.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Life timeline */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-north-text">Life timeline</h2>
        <div className="relative space-y-0">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-north-border" />
          {lifeTimeline.map((event, i) => (
            <motion.div
              key={event.id}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative flex gap-4 pb-6 pl-0"
            >
              <div className="relative z-10 mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-north-bg bg-north-accent">
                <span className="h-2 w-2 rounded-full bg-north-bg" />
              </div>
              <div className="flex-1 rounded-xl border border-north-border bg-north-surface/40 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-north-text">{event.event}</p>
                  <span className="text-xs text-north-muted">{event.date}</span>
                </div>
                <p className="mt-1 text-xs text-north-muted">{event.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
