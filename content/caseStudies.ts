export type CaseStudyOutcome = {
  metric: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  /** Display name or anonymised label e.g. "A JSE-listed logistics company" */
  client: string;
  industry: string;
  /** 1–2 sentence problem statement */
  challenge: string;
  /** 1–2 sentence description of what was built */
  solution: string;
  /** Hard business metrics — not model metrics */
  outcome: CaseStudyOutcome[];
  /** Tools and platforms used e.g. ["Anthropic", "Pinecone", "Azure"] */
  stack: string[];
  /** Human-readable duration e.g. "6 weeks" */
  duration: string;
  /** Optional — links to a Testimonial by author name */
  testimonialId?: string;
  /** Path relative to /public e.g. "/media/work/logistics-agent.jpg" */
  heroImage: string;
  gallery?: string[];
  seo: {
    title: string;
    description: string;
  };
};

/**
 * Case studies are intentionally empty until Liam supplies content.
 * The /work index and homepage CaseStudies section both check
 * caseStudies.length and render an empty state when this array is empty.
 * Do NOT add placeholder/fictional case studies.
 */
export const caseStudies: CaseStudy[] = [];
