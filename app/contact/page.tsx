import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Impart Agency. Tell us about your project and receive a clear proposal within 2 business hours. Based in Johannesburg, South Africa.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
