/**
 * Value propositions — the three primary offers on the homepage.
 * Content is data-driven and kept out of the component per CLAUDE.md convention 1.
 */

export type ValueProposition = {
  slug: string;
  title: string;
  /** Short positioning line — one sentence. */
  line: string;
  /** Body copy — two to three sentences. */
  body: string;
  /** Outcome tag — short, three-to-five words. */
  outcome: string;
  /** Lucide icon name. */
  iconName: string;
  /** Optional path to shape PNG for card artwork. Relative to /public. */
  accent?: string;
};

export const valuePropositions: ValueProposition[] = [
  {
    slug: "ai-operations-audit",
    title: "The AI Operations Audit",
    line: "Find the three AI projects that will pay for themselves in ninety days, and kill the ones that won't.",
    body:
      "A six-week engagement that produces a ranked opportunity list, a ninety-day implementation plan for the top pick, and a board-ready report with ROI modelling and a POPIA compliance register.",
    outcome: "Ranked opportunities. Ninety-day plan. Board-ready.",
    iconName: "ClipboardCheck",
    accent: "/graphics/shapes/shape-pyramid.png",
  },
  {
    slug: "popia-safe-ai",
    title: "POPIA-Safe Enterprise AI",
    line: "Use AI on your actual client files, without the compliance risk.",
    body:
      "A private AI stack deployed inside your Azure South Africa tenancy or on-premise. Private model endpoints, retrieval-augmented knowledge against your own document libraries, and governed audit logging that satisfies POPIA accountability requirements.",
    outcome: "Private model. Your data. Your borders.",
    iconName: "ShieldCheck",
    accent: "/graphics/shapes/shape-spiral.png",
  },
  {
    slug: "ai-revenue-agents",
    title: "AI Revenue Agents",
    line: "Replace your most expensive repetitive work with an AI agent that runs twenty-four hours a day.",
    body:
      "Voice, chat, and hybrid agents deployed against the functions that scale poorly with headcount. Inbound sales, customer service, after-hours triage, back-office processing. Multilingual coverage across English, Afrikaans, and isiZulu. Integrated with your CRM and telephony.",
    outcome: "Always on. Lower cost. Measurable in weeks.",
    iconName: "Bot",
    accent: "/graphics/shapes/shape-prism.png",
  },
];
