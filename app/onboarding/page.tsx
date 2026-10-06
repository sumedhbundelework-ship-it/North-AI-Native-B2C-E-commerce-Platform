'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Check, Brain } from 'lucide-react';

type Question = {
  id: string;
  prompt: string;
  hint: string;
  options: { label: string; value: string }[];
};

const questions: Question[] = [
  {
    id: 'name',
    prompt: 'Let\'s start simple. What should I call you?',
    hint: 'I will remember this. I do not forget.',
    options: [
      { label: 'Sumedh', value: 'Sumedh' },
      { label: 'Alex', value: 'Alex' },
      { label: 'Priya', value: 'Priya' },
    ],
  },
  {
    id: 'location',
    prompt: 'Where do you live, Sumedh? City is enough.',
    hint: 'Climate and local availability shape every recommendation.',
    options: [
      { label: 'London, UK', value: 'London' },
      { label: 'Dubai, UAE', value: 'Dubai' },
      { label: 'Manchester, UK', value: 'Manchester' },
    ],
  },
  {
    id: 'budget',
    prompt: 'When you buy something, what matters more — price or quality?',
    hint: 'There is no wrong answer. This sets your default lens.',
    options: [
      { label: 'Quality first', value: 'quality' },
      { label: 'Best value', value: 'value' },
      { label: 'Lowest price', value: 'price' },
    ],
  },
  {
    id: 'lifestyle',
    prompt: 'How would you describe your lifestyle?',
    hint: 'I tailor missions to how you actually live.',
    options: [
      { label: 'Active & outdoorsy', value: 'active' },
      { label: 'Creative & home-focused', value: 'creative' },
      { label: 'Professional & on-the-go', value: 'professional' },
    ],
  },
  {
    id: 'family',
    prompt: 'Who do I plan for? Just you, or a household?',
    hint: 'I can coordinate shared budgets and gift memory.',
    options: [
      { label: 'Just me', value: 'solo' },
      { label: 'Me + partner', value: 'partner' },
      { label: 'Family with kids', value: 'family' },
    ],
  },
  {
    id: 'habits',
    prompt: 'Last one. How do you usually shop?',
    hint: 'I learn your rhythm so I can interrupt it — gently.',
    options: [
      { label: 'Research everything', value: 'researcher' },
      { label: 'Buy what works', value: 'pragmatist' },
      { label: 'Impulse sometimes', value: 'impulse' },
    ],
  },
];

const buildingSteps = [
  'Parsing your answers',
  'Building your Commerce Memory',
  'Calibrating price sensitivity',
  'Initializing 12 AI agents',
  'Ready',
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState<'intro' | 'asking' | 'building' | 'done'>('intro');
  const [buildIdx, setBuildIdx] = useState(-1);

  const current = questions[step];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [current.id]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setPhase('building');
    }
  };

  useEffect(() => {
    if (phase !== 'building') return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setBuildIdx(i - 1);
      if (i >= buildingSteps.length) {
        clearInterval(interval);
        setTimeout(() => setPhase('done'), 500);
      }
    }, 800);
    return () => clearInterval(interval);
  }, [phase]);

  if (phase === 'intro') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-north-bg px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg text-center"
        >
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-north-border bg-north-surface/60">
            <Sparkles className="h-7 w-7 text-north-accent" />
          </div>
          <h1 className="font-display text-4xl tracking-tightest text-balance">
            Hi. I am North.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-north-muted text-balance">
            I do not have forms. I have questions. Six of them. Then I build a
            memory of who you are — and I never ask again.
          </p>
          <button
            onClick={() => setPhase('asking')}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-north-accent px-6 py-3.5 text-sm font-semibold text-north-bg transition-all hover:bg-north-accent/90"
          >
            Let&apos;s begin
            <ArrowRight className="h-4 w-4" />
          </button>
          <Link
            href="/"
            className="mt-4 block text-xs text-north-muted hover:text-north-text"
          >
            Back to home
          </Link>
        </motion.div>
      </div>
    );
  }

  if (phase === 'building' || phase === 'done') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-north-bg px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-8 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-north-border bg-north-surface/60">
              <Brain className="h-6 w-6 text-north-accent" />
            </div>
            <h2 className="font-display text-3xl tracking-tightest">
              {phase === 'done' ? 'Your Commerce Memory is ready' : 'Building your memory'}
            </h2>
          </div>

          <div className="space-y-3">
            {buildingSteps.map((s, i) => {
              const done = phase === 'done' || i < buildIdx;
              const active = i === buildIdx && phase === 'building';
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

          {phase === 'done' && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <div className="mb-4 rounded-xl border border-north-accent/30 bg-north-accent/5 p-4">
                <p className="text-xs text-north-accent">What I learned</p>
                <ul className="mt-2 space-y-1.5 text-sm text-north-text">
                  <li>You are {answers.name || 'Sumedh'}, in {answers.location || 'London'}.</li>
                  <li>You prioritize {answers.budget === 'price' ? 'price' : answers.budget === 'value' ? 'value' : 'quality'} over cost.</li>
                  <li>Your lifestyle is {answers.lifestyle || 'active'}.</li>
                  <li>You shop for {answers.family === 'solo' ? 'yourself' : 'a household'}.</li>
                </ul>
              </div>
              <Link
                href="/app"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-north-accent px-6 py-3.5 text-sm font-semibold text-north-bg transition-all hover:bg-north-accent/90"
              >
                Enter North
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    );
  }

  // asking phase
  return (
    <div className="flex min-h-screen items-center justify-center bg-north-bg px-4">
      <div className="w-full max-w-lg">
        {/* progress */}
        <div className="mb-8 flex items-center gap-2">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i <= step ? 'bg-north-accent' : 'bg-north-border'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-north-accent" />
              <span className="text-xs font-medium uppercase tracking-wider text-north-muted">
                Question {step + 1} of {questions.length}
              </span>
            </div>
            <h2 className="font-display text-3xl leading-tight tracking-tightest text-balance">
              {current.prompt}
            </h2>
            <p className="mt-3 text-sm text-north-muted">{current.hint}</p>

            <div className="mt-8 space-y-2.5">
              {current.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="group flex w-full items-center justify-between rounded-xl border border-north-border bg-north-surface/40 px-5 py-4 text-left text-sm font-medium text-north-text transition-all hover:border-north-accent/40 hover:bg-north-surface/60"
                >
                  {opt.label}
                  <ArrowRight className="h-4 w-4 text-north-muted transition-all group-hover:translate-x-0.5 group-hover:text-north-accent" />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
