'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, Check, Bot } from 'lucide-react';
import { missionTemplates } from '@/lib/missions';

const clarifyingQuestions: Record<string, { q: string; options: string[] }[]> = {
  default: [
    { q: 'When does this need to be ready?', options: ['Within 2 weeks', '1-2 months', '3+ months', 'No rush'] },
    { q: 'What is your budget range?', options: ['Under $1k', '$1k–$5k', '$5k–$10k', 'Flexible'] },
    { q: 'What matters most to you?', options: ['Quality & longevity', 'Best value', 'Lowest price', 'Sustainability'] },
  ],
};

const buildSteps = [
  'Understanding your intent',
  'Predicting needs',
  'Consulting AI agents',
  'Building execution plan',
  'Mission ready',
];

export default function NewMissionPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<'select' | 'questions' | 'building'>('select');
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [buildIdx, setBuildIdx] = useState(-1);

  const handleSelect = (id: string) => {
    setSelected(id);
    setPhase('questions');
  };

  const handleAnswer = (optIdx: number) => {
    const newAnswers = [...answers, optIdx];
    setAnswers(newAnswers);
    if (newAnswers.length >= clarifyingQuestions.default.length) {
      setPhase('building');
    }
  };

  useEffect(() => {
    if (phase !== 'building') return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setBuildIdx(i - 1);
      if (i >= buildSteps.length) {
        clearInterval(interval);
        setTimeout(() => router.push('/app/missions/dubai-relocation'), 600);
      }
    }, 800);
    return () => clearInterval(interval);
  }, [phase, router]);

  const currentQ = clarifyingQuestions.default[answers.length];

  return (
    <div className="space-y-8">
      <button
        onClick={() => (phase === 'select' ? router.back() : setPhase('select'))}
        className="flex items-center gap-1.5 text-sm text-north-muted transition-colors hover:text-north-text"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <AnimatePresence mode="wait">
        {phase === 'select' && (
          <motion.div
            key="select"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            <h1 className="font-display text-3xl tracking-tightest">What is happening in your life?</h1>
            <p className="mt-2 text-sm text-north-muted">
              Pick a life event. North will ask a few questions, then build a complete plan.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {missionTemplates.map((t, i) => (
                <motion.button
                  key={t.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => handleSelect(t.id)}
                  className="group flex items-center gap-3 rounded-2xl border border-north-border bg-north-surface/40 p-4 text-left transition-all hover:border-north-accent/30 hover:bg-north-surface/60"
                >
                  <span className="text-2xl">{t.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-north-text">{t.label}</p>
                    <p className="text-xs text-north-muted">{t.desc}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {phase === 'questions' && (
          <motion.div
            key="questions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="mx-auto max-w-lg"
          >
            <div className="mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-north-accent" />
              <span className="text-xs font-medium uppercase tracking-wider text-north-muted">
                Question {answers.length + 1} of {clarifyingQuestions.default.length}
              </span>
            </div>

            <div className="mb-8 flex items-center gap-2">
              {clarifyingQuestions.default.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i < answers.length ? 'bg-north-accent' : 'bg-north-border'
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={answers.length}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="font-display text-2xl leading-tight tracking-tightest text-balance">
                  {currentQ.q}
                </h2>
                <div className="mt-6 space-y-2.5">
                  {currentQ.options.map((opt, i) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(i)}
                      className="group flex w-full items-center justify-between rounded-xl border border-north-border bg-north-surface/40 px-5 py-4 text-left text-sm font-medium text-north-text transition-all hover:border-north-accent/40 hover:bg-north-surface/60"
                    >
                      {opt}
                      <ArrowRight className="h-4 w-4 text-north-muted transition-all group-hover:translate-x-0.5 group-hover:text-north-accent" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}

        {phase === 'building' && (
          <motion.div
            key="building"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-md text-center"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-north-border bg-north-surface/60">
              <Bot className="h-6 w-6 text-north-accent" />
            </div>
            <h2 className="font-display text-2xl tracking-tightest">Building your mission</h2>
            <p className="mt-2 text-sm text-north-muted">Agents are coordinating. This takes a few seconds.</p>

            <div className="mt-8 space-y-3 text-left">
              {buildSteps.map((s, i) => {
                const done = i < buildIdx;
                const active = i === buildIdx;
                return (
                  <div key={s} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                      {done ? (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-north-accent/20">
                          <Check className="h-3.5 w-3.5 text-north-accent" strokeWidth={2.5} />
                        </div>
                      ) : active ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-north-accent/30 border-t-north-accent" />
                      ) : (
                        <div className="h-1.5 w-1.5 rounded-full bg-north-border" />
                      )}
                    </div>
                    <span className={`text-sm ${done || active ? 'text-north-text' : 'text-north-muted'}`}>
                      {s}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
