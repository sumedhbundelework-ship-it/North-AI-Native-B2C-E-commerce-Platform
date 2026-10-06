'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

const examples = [
  "I'm moving into my first apartment.",
  "I'm getting married next spring.",
  "I'm becoming a father in October.",
  "I'm training for my first marathon.",
  "I'm starting a YouTube channel.",
  "I'm relocating to Dubai for work.",
];

const steps = [
  { label: 'Understanding intent', detail: 'Life event detected: relocation' },
  { label: 'Predicting needs', detail: '14 items across 6 categories' },
  { label: 'Planning mission', detail: '6-week timeline, $8,500 budget' },
  { label: 'Deploying agents', detail: '6 AI agents coordinating' },
];

export function IntentDemo() {
  const [phase, setPhase] = useState<'idle' | 'typing' | 'processing' | 'done'>('idle');
  const [exampleIdx, setExampleIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const [stepIdx, setStepIdx] = useState(-1);

  // cycle through examples when idle
  useEffect(() => {
    if (phase !== 'idle') return;
    const t = setTimeout(() => {
      setExampleIdx((i) => (i + 1) % examples.length);
    }, 3000);
    return () => clearTimeout(t);
  }, [phase, exampleIdx]);

  // typing animation
  useEffect(() => {
    if (phase !== 'typing') return;
    const full = examples[exampleIdx];
    if (typed.length < full.length) {
      const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 45);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase('processing'), 600);
    return () => clearTimeout(t);
  }, [phase, typed, exampleIdx]);

  // processing steps
  useEffect(() => {
    if (phase !== 'processing') return;
    setStepIdx(-1);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setStepIdx(i - 1);
      if (i >= steps.length) {
        clearInterval(interval);
        setTimeout(() => setPhase('done'), 400);
      }
    }, 700);
    return () => clearInterval(interval);
  }, [phase]);

  // reset cycle
  useEffect(() => {
    if (phase !== 'done') return;
    const t = setTimeout(() => {
      setPhase('idle');
      setTyped('');
      setStepIdx(-1);
      setExampleIdx((i) => (i + 1) % examples.length);
    }, 4000);
    return () => clearTimeout(t);
  }, [phase]);

  const startDemo = () => {
    if (phase === 'idle') {
      setTyped('');
      setPhase('typing');
    }
  };

  return (
    <div className="relative w-full max-w-md">
      {/* glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-north-accent/20 via-north-accent-2/10 to-transparent blur-2xl" />

      <div
        className="relative cursor-pointer rounded-2xl border border-north-border bg-north-surface/80 p-5 backdrop-blur-xl transition-all hover:border-north-accent/30"
        onClick={startDemo}
      >
        {/* input bar */}
        <div className="flex items-center gap-3 rounded-xl border border-north-border bg-north-bg/60 px-4 py-3">
          <Sparkles className="h-4 w-4 shrink-0 text-north-accent" />
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {phase === 'idle' && (
                <motion.p
                  key={`placeholder-${exampleIdx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-north-muted"
                >
                  {examples[exampleIdx]}
                </motion.p>
              )}
              {(phase === 'typing' || phase === 'processing' || phase === 'done') && (
                <motion.p
                  key="typed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-north-text"
                >
                  {typed}
                  {phase === 'typing' && (
                    <span className="ml-0.5 inline-block h-4 w-0.5 animate-blink bg-north-accent align-middle" />
                  )}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          {phase === 'idle' && (
            <span className="text-[10px] uppercase tracking-wider text-north-muted/60">
              Try it
            </span>
          )}
        </div>

        {/* processing */}
        <AnimatePresence>
          {(phase === 'processing' || phase === 'done') && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-2.5 overflow-hidden"
            >
              {steps.map((step, i) => {
                const done = phase === 'done' || i < stepIdx;
                const active = i === stepIdx && phase === 'processing';
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                      {done ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-north-accent/20">
                          <Check className="h-3 w-3 text-north-accent" strokeWidth={2.5} />
                        </div>
                      ) : active ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-north-accent/30 border-t-north-accent" />
                      ) : (
                        <div className="h-1.5 w-1.5 rounded-full bg-north-border" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-xs font-medium ${
                          done || active ? 'text-north-text' : 'text-north-muted'
                        }`}
                      >
                        {step.label}
                      </p>
                      <p className="text-[11px] text-north-muted">{step.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* done state */}
        <AnimatePresence>
          {phase === 'done' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-between rounded-xl border border-north-accent/30 bg-north-accent/5 px-4 py-3"
            >
              <div>
                <p className="text-xs font-semibold text-north-accent">Mission created</p>
                <p className="text-[11px] text-north-muted">Relocating to Dubai · 6 weeks · $8,500</p>
              </div>
              <ArrowRight className="h-4 w-4 text-north-accent" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
