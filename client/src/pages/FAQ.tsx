// src/components/faq/FAQ.tsx
import { JSX, useMemo, useState } from "react";
import { Link } from "react-router";

type FAQItem = {
  id: string;
  question: string;
  answer: string | JSX.Element
  tags?: string[];
};

const faqs: FAQItem[] = [
  {
    id: "how-to-contact-agent",
    question: "How do I contact an agent?",
    answer: (
      <>
       Click on an agent and use the <strong>Contact</strong> button (email) and mention the agent in your email and they will contact you ASAP.
        For a form, visit our{" "}
        <Link to="/contact" className="text-blue-600 underline">Contact page</Link>.
      </>
    ),
    tags: ["agents", "contact"],
  },
  {
    id: "fees",
    question: "Are there any fees for using CasaFind?",
    answer:
      "Browsing listings and contacting agents via email is free. Some premium services (e.g., promoted listings) may incur fees in the future.",
    tags: ["pricing", "billing"],
  },
  {
    id: "listings-updates",
    question: "How often are listings updated?",
    answer:
      "Most listings are synced multiple times per day. If something seems out of date, try refreshing or contact the agent directly.",
    tags: ["listings", "updates"],
  },
  {
    id: "privacy",
    question: "How does CasaFind handle my data?",
    answer: (
      <>
        We follow privacy best practices. Read our{" "}
        <Link to="/legal/privacy" className="text-blue-600 underline">
          Privacy Policy
        </Link>{" "}
        for details on collection, use, and retention.
      </>
    ),
    tags: ["privacy", "security"],
  },
  {
    id: "account-deletion",
    question: "Can I delete my account?",
    answer: (
      <>
        Yes. At the moment the user does not have the rights to delete their account but you can email{" "}
        <a className="text-blue-600 underline" href="mailto:shefket.must@gmail.">
          privacy@casafind.com
        </a>{" "}
        for help.
      </>
    ),
    tags: ["account", "privacy"],
  },
  {
    id: "areas-covered",
    question: "Which areas does CasaFind currently cover?",
    answer:
      "We currently focus on major Bulgarian cities (Sofia, Plovdiv, Varna, Burgas) and nearby regions, with more areas added regularly.",
    tags: ["coverage", "locations"],
  },
];

export default function FAQ() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return faqs;
    return faqs.filter(({ question, answer, tags }) => {
      const text =
        (typeof answer === "string" ? answer : "") +
        " " +
        question +
        " " +
        (tags?.join(" ") ?? "");
      return text.toLowerCase().includes(term);
    });
  }, [q]);

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-1">
            Can’t find what you’re looking for?{" "}
            <Link to="/contact" className="text-blue-600 underline">
              Contact us
            </Link>
            .
          </p>
        </header>

        {/* Search */}
        <div className="mb-6">
          <label htmlFor="faq-search" className="sr-only">
            Search FAQs
          </label>
          <input
            id="faq-search"
            type="text"
            placeholder="Search questions…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-3">
          {filtered.length} result{filtered.length === 1 ? "" : "s"}
        </p>

        {/* FAQ list */}
        <div className="space-y-3">
          {filtered.map((item) => (
            <details
              key={item.id}
              className="group rounded-lg border border-gray-200 px-4 py-3 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                <span>{item.question}</span>
                <svg
                  className="h-5 w-5 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.116l3.71-3.885a.75.75 0 111.08 1.04l-4.24 4.44a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>

              <div className="mt-2 text-gray-700">
                {typeof item.answer === "string" ? (
                  <p>{item.answer}</p>
                ) : (
                  item.answer
                )}

                {item.tags && item.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 rounded-lg bg-blue-50 p-4 border border-blue-100">
          <p className="text-blue-800">
            Still need help?{" "}
            <Link to="/contact" className="underline">
              Send us a message
            </Link>{" "}
            or email{" "}
            <a className="underline" href="mailto:shefket.must@gmail.com">
              support@casafind.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
