/**
 * Form field definitions for all contact form variants.
 * Edit options here — no component changes needed.
 * Used by HomepageContact, service page forms, and the full contact page.
 */

// ---------------------------------------------------------------------------
// Shared field options
// ---------------------------------------------------------------------------

export const aiOpportunityOptions = [
  { value: "automate-process", label: "Automate a process / workflow" },
  { value: "customer-facing-product", label: "Build a customer-facing AI product" },
  { value: "extract-data-value", label: "Extract value from our existing data" },
  { value: "strategy-audit", label: "Run an AI strategy / audit" },
  { value: "not-sure-where", label: "We know we want AI — not sure where to start" },
  { value: "something-else", label: "Something else" },
] as const;

export const budgetRangeOptions = [
  { value: "under-50k", label: "Under R50,000 (single POC)" },
  { value: "50k-200k", label: "R50,000 – R200,000 (scoped build)" },
  { value: "200k-500k", label: "R200,000 – R500,000 (multi-system programme)" },
  { value: "500k-plus", label: "R500,000+ (enterprise engagement)" },
  { value: "retainer", label: "Ongoing retainer" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

// ---------------------------------------------------------------------------
// Per-service form variants
// Swap fields 4 + 5 on each AI service page (fields 1–3 and 6 stay constant).
// ---------------------------------------------------------------------------

export type FormVariant =
  | "homepage"
  | "ai-agents"
  | "custom-ai-applications"
  | "ai-strategy-roadmap"
  | "data-foundations"
  | "ai-accelerated-growth"
  | "general";

export type SelectOption = { value: string; label: string };

export type FormVariantConfig = {
  /** Label for field 4 — the opportunity/context question */
  opportunityLabel: string;
  opportunityOptions: readonly SelectOption[];
  /** Label for field 5 — investment / budget question */
  budgetLabel: string;
  budgetOptions: readonly SelectOption[];
  /** Smart placeholder for the textarea (field 6) */
  messagePlaceholder: string;
};

const agentProcessOptions = [
  { value: "customer-support", label: "Customer support / triage" },
  { value: "sales-ops", label: "Sales operations / research" },
  { value: "finance-ops", label: "Finance / back-office ops" },
  { value: "hr-recruiting", label: "HR / recruiting" },
  { value: "other", label: "Other" },
] as const;

const customAppAudienceOptions = [
  { value: "internal", label: "Internal teams" },
  { value: "customer-facing", label: "Customer-facing" },
  { value: "both", label: "Both" },
] as const;

const strategyStageOptions = [
  { value: "no-ai-yet", label: "No AI in production yet" },
  { value: "running-pilots", label: "Running pilots, not shipped" },
  { value: "production-stuck", label: "AI in production but stuck / underperforming" },
] as const;

const dataBlockerOptions = [
  { value: "scattered", label: "Data is scattered across systems" },
  { value: "messy", label: "Data is messy / inconsistent" },
  { value: "no-warehouse", label: "No data warehouse yet" },
  { value: "dont-know", label: "We don't know what's wrong" },
  { value: "other", label: "Other" },
] as const;

const marketingSpendOptions = [
  { value: "under-20k", label: "Under R20,000 / month" },
  { value: "20k-50k", label: "R20,000 – R50,000 / month" },
  { value: "50k-150k", label: "R50,000 – R150,000 / month" },
  { value: "150k-plus", label: "R150,000+ / month" },
  { value: "not-yet", label: "Not running paid yet" },
] as const;

export const formVariants: Record<FormVariant, FormVariantConfig> = {
  homepage: {
    opportunityLabel: "What's the AI opportunity?",
    opportunityOptions: aiOpportunityOptions,
    budgetLabel: "Target investment",
    budgetOptions: budgetRangeOptions,
    messagePlaceholder:
      "Tell us more about your business, the problem you're solving, and any timeline constraints. The more context the better.",
  },
  "ai-agents": {
    opportunityLabel: "Which process would you like to automate?",
    opportunityOptions: agentProcessOptions,
    budgetLabel: "Target investment",
    budgetOptions: budgetRangeOptions,
    messagePlaceholder:
      "Describe the process — how many people are involved, what tools it touches, and what a good outcome looks like.",
  },
  "custom-ai-applications": {
    opportunityLabel: "Is this for internal teams or your customers?",
    opportunityOptions: customAppAudienceOptions,
    budgetLabel: "Target investment",
    budgetOptions: budgetRangeOptions,
    messagePlaceholder:
      "Describe the application — what users will do with it, what data it needs to access, and any existing systems it should integrate with.",
  },
  "ai-strategy-roadmap": {
    opportunityLabel: "What stage are you at with AI?",
    opportunityOptions: strategyStageOptions,
    budgetLabel: "Target investment",
    budgetOptions: budgetRangeOptions,
    messagePlaceholder:
      "Tell us about your current data and systems, your industry, and the business outcomes you're trying to drive with AI.",
  },
  "data-foundations": {
    opportunityLabel: "What's blocking your AI progress today?",
    opportunityOptions: dataBlockerOptions,
    budgetLabel: "Target investment",
    budgetOptions: budgetRangeOptions,
    messagePlaceholder:
      "Describe your current data landscape — where it lives, how it's managed, and what you're trying to enable with it.",
  },
  "ai-accelerated-growth": {
    opportunityLabel: "What's your current monthly marketing spend?",
    opportunityOptions: marketingSpendOptions,
    budgetLabel: "Target investment for AI-accelerated growth",
    budgetOptions: budgetRangeOptions,
    messagePlaceholder:
      "Tell us about your current growth channels, what's working, what's not, and which metrics matter most to your business.",
  },
  general: {
    opportunityLabel: "What can we help you with?",
    opportunityOptions: aiOpportunityOptions,
    budgetLabel: "Approximate budget",
    budgetOptions: budgetRangeOptions,
    messagePlaceholder: "Tell us about your project or enquiry.",
  },
};
