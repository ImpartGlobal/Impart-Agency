import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Impart Agency terms and conditions — the terms under which we provide digital agency services.",
  path: "/terms-and-conditions",
  noIndex: false,
});

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-narrow">
        <h1 className="font-display text-4xl font-bold text-white mb-2">Terms & Conditions</h1>
        <p className="text-brand-muted text-sm mb-10">Last updated: January 2025</p>

        <div className="space-y-8 text-brand-muted leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p>By engaging the services of {site.legalName} (&quot;Impart Agency&quot;, &quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms and Conditions. These terms govern all projects, retainer agreements, and service engagements between Impart Agency and our clients.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">2. Services</h2>
            <p>We provide digital agency services including web design, web development, mobile app development, search engine optimisation, paid advertising management, content creation, branding, and related digital services. The specific scope of services for each engagement is defined in a written proposal or statement of work.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">3. Payment Terms</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Project engagements are typically structured as: 50% deposit on acceptance of proposal, 25% at design approval milestone, and 25% on project completion.</li>
              <li>Monthly retainers are invoiced in advance and due within 7 days of invoice date.</li>
              <li>All prices are in South African Rand (ZAR) and exclusive of VAT unless otherwise stated.</li>
              <li>Late payments may attract interest at prime rate plus 2% per annum.</li>
              <li>Work may be paused on accounts more than 30 days overdue.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">4. Project Scope & Changes</h2>
            <p>Our proposals define a specific scope of work. Changes to this scope (&quot;scope creep&quot;) will be handled through a formal change request process and may result in additional charges. We will always notify you of any cost implications before proceeding with out-of-scope work.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">5. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Providing accurate and complete content, information, and materials when requested</li>
              <li>Providing timely feedback and approvals at defined project milestones</li>
              <li>Ensuring they hold rights to all content and materials supplied to us</li>
              <li>Making payments in accordance with agreed terms</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">6. Intellectual Property</h2>
            <p>Upon receipt of full payment, ownership of the final deliverables transfers to the client. During the project, all work remains the property of Impart Agency. We retain the right to display completed work in our portfolio unless otherwise agreed in writing.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">7. Confidentiality</h2>
            <p>Both parties agree to keep confidential any proprietary information shared during the course of the engagement. This includes business strategies, pricing, technical details, and other sensitive information.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">8. Limitation of Liability</h2>
            <p>Our liability to you in connection with any project or service is limited to the total fees paid by you for that specific engagement. We are not liable for indirect, incidental, or consequential damages including lost profits or business interruption.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">9. Termination</h2>
            <p>Either party may terminate an ongoing retainer with 30 days&apos; written notice. Project engagements may be terminated by either party for material breach, provided the breaching party has been given 14 days to remedy the breach. On termination, the client is liable for all work completed to date.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">10. Governing Law</h2>
            <p>These terms are governed by the laws of the Republic of South Africa. Any disputes will be subject to the jurisdiction of the courts of South Africa.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">11. Contact</h2>
            <div className="p-4 rounded-xl bg-brand-surface border border-brand-border mt-3">
              <p><strong className="text-white">{site.legalName}</strong></p>
              <p>{site.address.city}, {site.address.province}, {site.address.country}</p>
              <p>Email: <a href={`mailto:${site.email}`} className="text-brand-orange hover:text-brand-orange-light">{site.email}</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
