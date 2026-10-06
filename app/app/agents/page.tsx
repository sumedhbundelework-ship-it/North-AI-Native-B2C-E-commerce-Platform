'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import { agents, type Agent } from '@/lib/agents';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function AgentsPage() {
  const [expanded, setExpanded] = useState<string | null>(agents[0].id);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl tracking-tightest">AI Agents</h1>
        <p className="mt-1 text-sm text-north-muted">
          12 specialists. Each with a personality, a point of view, and a recommendation.
        </p>
      </div>

      <div className="space-y-3">
        {agents.map((agent, i) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            expanded={expanded === agent.id}
            onToggle={() => setExpanded(expanded === agent.id ? null : agent.id)}
            delay={i * 0.04}
          />
        ))}
      </div>
    </div>
  );
}

function AgentCard({
  agent,
  expanded,
  onToggle,
  delay,
}: {
  agent: Agent;
  expanded: boolean;
  onToggle: () => void;
  delay: number;
}) {
  const statusColor: Record<string, string> = {
    working: 'bg-north-accent',
    thinking: 'bg-north-warm',
    done: 'bg-north-accent-2',
    idle: 'bg-north-border',
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeUp}
      transition={{ duration: 0.3, delay }}
      className={`overflow-hidden rounded-2xl border bg-north-surface/40 transition-all ${
        expanded ? 'border-north-accent/30' : 'border-north-border'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 p-5 text-left"
      >
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
          style={{ background: `hsl(${agent.accent} / 0.12)` }}
        >
          <span className="text-base font-bold" style={{ color: `hsl(${agent.accent})` }}>
            {agent.name[0]}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-north-text">{agent.name}</h3>
            <span className="text-xs text-north-muted">{agent.role}</span>
          </div>
          <p className="truncate text-xs text-north-muted">{agent.personality}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${statusColor[agent.status]} ${agent.status === 'working' ? 'animate-pulse-slow' : ''}`} />
            <span className="text-xs capitalize text-north-muted">{agent.status}</span>
          </div>
          {agent.confidence !== undefined && (
            <span className="text-xs font-medium text-north-muted">{agent.confidence}%</span>
          )}
          <ChevronDown
            className={`h-4 w-4 text-north-muted transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </div>
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
            <div className="border-t border-north-border/50 p-5 pt-4">
              {agent.currentTask && (
                <div className="mb-4">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-north-muted">Current task</p>
                  <p className="mt-1 text-sm text-north-text">{agent.currentTask}</p>
                </div>
              )}

              {agent.thinking && (
                <div className="mb-4 flex items-start gap-2 rounded-lg bg-north-surface-2/50 p-3">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-north-accent" />
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-north-muted">Thinking</p>
                    <p className="mt-1 text-xs leading-relaxed text-north-text">{agent.thinking}</p>
                  </div>
                </div>
              )}

              {agent.recommendation && (
                <div className="rounded-lg border border-north-accent/20 bg-north-accent/5 p-3">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-north-accent">Recommendation</p>
                  <p className="mt-1 text-sm leading-relaxed text-north-text">{agent.recommendation}</p>
                </div>
              )}

              {agent.progress !== undefined && agent.progress > 0 && (
                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-north-muted">Progress</span>
                    <span className="text-north-muted">{agent.progress}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-north-border">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${agent.progress}%`,
                        background: `hsl(${agent.accent})`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
