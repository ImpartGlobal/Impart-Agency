import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Impart Agency privacy policy — how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-narrow">
        <h1 className="font-display text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-brand-muted text-sm mb-10">Last updated: January 2025</p>

        <div className="prose prose-invert prose-brand max-w-none space-y-8 text-brand-muted leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">1. Who We Are</h2>
            <p>
              {site.legalName} (&quot;Impart Agency&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a digital agency based in {site.address.city}, {site.address.province}, {site.address.country}. We operate the website at {site.url}.
            </p>
            <p>We are committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA) of South Africa.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name and contact details (email, phone number)</li>
              <li>Company name and job title</li>
              <li>Project details and budget information shared via our contact forms</li>
              <li>Communications you send us via email or WhatsApp</li>
            </ul>
            <p>We may also collect information automatically when you visit our website, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your enquiries and provide the services you request</li>
              <li>Send you proposals, invoices, and project communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do not sell, trade, or rent your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">4. Legal Basis for Processing</h2>
            <p>We process your personal information on the following legal bases:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">Contractual necessity</strong> — processing required to perform services you have requested</li>
              <li><strong className="text-white">Legitimate interests</strong> — responding to enquiries and marketing our services to business contacts</li>
              <li><strong className="text-white">Legal obligation</strong> — compliance with applicable South African law</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">5. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Client project data is typically retained for 7 years for accounting and legal purposes.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">6. Your Rights Under POPIA</h2>
            <p>Under the Protection of Personal Information Act, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal retention requirements)</li>
              <li>Object to the processing of your information</li>
              <li>Lodge a complaint with the Information Regulator</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href={`mailto:${site.email}`} className="text-brand-orange hover:text-brand-orange-light underline">{site.email}</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">7. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to improve your browsing experience and analyse website traffic. You can control cookie settings through your browser. We use Google Analytics to understand how visitors use our website.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">8. Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>For any questions about this privacy policy or how we handle your personal information, please contact us:</p>
            <div className="p-4 rounded-xl bg-brand-surface border border-brand-border mt-3">
              <p><strong className="text-white">{site.legalName}</strong></p>
              <p>{site.address.city}, {site.address.province}, {site.address.country}</p>
              <p>Email: <a href={`mailto:${site.email}`} className="text-brand-orange hover:text-brand-orange-light">{site.email}</a></p>
              <p>Phone: {site.phone}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
