// Homepage (Fable redesign) copy. Consumed by BOTH the live homepage (`app/page.tsx`)
// and the design-preview route (`app/preview/fable-redesign`). Kept separate from
// the shared `lib/content.ts` `home` export (which /how-it-works and the demo pages
// still import) so promoting the homepage never disturbs those routes.
//
// Sources: synced Agency Brain vault (Core_Offer.md, One_Sentence_Explanation.md,
// Current_Source_Of_Truth.md — canonical direction 2026-06-29) + current site copy.
//
// HONESTY RULES (inherited from lib/content.ts — do not violate):
// - No claims of existing/active clients, no testimonials, no reviews.
// - No invented stats, results, percentages, or "proven" outcomes.
// - No guarantees of results. No fake social proof of any kind.

export type PreviewCTA = { label: string; href: string };

export const nav = {
  links: [
    { label: "The Problem", href: "#problem" },
    { label: "Our Approach", href: "#approach" },
    { label: "Modules", href: "#modules" },
    { label: "Process", href: "#process" },
  ],
  // CTA wording is unified site-wide — always the full phrase, never shortened.
  cta: { label: "Book a Free AI Business Audit", href: "/book" } satisfies PreviewCTA,
};

export const hero = {
  eyebrow: "Atlas AI Academy · Atlas Implementations",
  // "mapped" is the serif-italic accent word — set by the Hero component.
  headlinePre: "AI, ",
  headlineAccent: "mapped",
  headlinePost: " to how your business actually runs.",
  subheadline:
    "Atlas Leads teaches local business owners where AI genuinely fits — then implements the practical systems that answer faster, follow up consistently, and cut the busywork. Education first. Implementation second. No hype in between.",
  primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
  // Routes to the dedicated How It Works page (supports the main site nav),
  // not the in-page process section.
  secondaryCta: { label: "See how it works", href: "/how-it-works" },
  trustLine: ["Plain English", "No long contracts", "Built for local businesses"],
  mapCaption: "One system we implement: lead capture and follow-up, end to end.",
  moduleStrip: [
    "Atlas Receptionist",
    "Atlas Lead Engine",
    "Atlas Local Trust",
    "Atlas Command Center",
    "Atlas AI Academy",
  ],
};

// Section headings are plain display type — the serif-italic accent is
// reserved for the hero and final CTA so it stays special.
export const problem = {
  kicker: "The Problem",
  heading: "You don't have an AI problem. You have a time problem.",
  intro:
    "Local business owners are told AI changes everything. What nobody shows them is where it fits, what's actually worth doing, and how to put it to work between jobs, calls, and payroll. So the week keeps looking like this:",
  pains: [
    {
      title: "Calls come in while you're on a job",
      body: "They go to voicemail, and the customer rings the next company on the list.",
    },
    {
      title: "Quotes go out and quietly die",
      body: "Nobody follows up, so work you already earned slips away.",
    },
    {
      title: "The 9 PM lead waits until morning",
      body: "Forms and after-hours messages sit unanswered while intent cools off.",
    },
    {
      title: "Follow-up lives in someone's head",
      body: "Not in a system — so it happens when there's time, which is never.",
    },
    {
      title: "Tools you pay for, never rolled out",
      body: "Subscriptions pile up, but nothing actually changes day to day.",
    },
    {
      title: "Everyone says “use AI”",
      body: "Nobody explains where to start — so most owners reasonably start nowhere.",
    },
  ],
  closing:
    "None of this is fixed by one more app. It's fixed by understanding where AI fits your operation — then implementing it properly. That's the whole job.",
};

export type ApproachStep = {
  icon: "book" | "search" | "map" | "wrench" | "users";
  title: string;
  body: string;
  /** Optional internal detail page under /approach/*. Cards with an href are
      clickable on the homepage; cards without one stay static. */
  href?: string;
};

export const approach = {
  kicker: "Our Approach",
  heading: "Teach first. Then implement.",
  intro:
    "Most agencies hand you software. We start by making sure you and your team actually understand what AI can do for a business like yours — then we build the systems around what your audit shows will help most.",
  note: "Done-with-you, not hand-the-owner-a-bot.",
  steps: [
    {
      icon: "book" as const,
      title: "Plain-English AI education",
      href: "/ai-implementation",
      body: "We teach you and your team what AI can and can't do — for your business specifically, not in the abstract. No jargon, no hype.",
    },
    {
      icon: "search" as const,
      title: "AI Opportunity Audit",
      href: "/approach/ai-opportunity-audit",
      body: "We review how your business actually runs: calls, leads, follow-up, admin, and the day-to-day operations behind them.",
    },
    {
      icon: "map" as const,
      title: "Use-case mapping",
      href: "/approach/use-case-mapping",
      body: "We rank where AI saves the most time and captures the most opportunities — so effort goes to the highest-value systems first.",
    },
    {
      icon: "wrench" as const,
      title: "Hands-on implementation",
      href: "/approach/hands-on-implementation",
      body: "We build and connect the right systems, fit them into how you already work, and test them before they touch a customer.",
    },
    {
      icon: "users" as const,
      title: "Training + ongoing advisory",
      href: "/approach/training-ongoing-advisory",
      body: "We train your team so the change sticks, and stay available as your tools and needs evolve.",
    },
  ] as ApproachStep[],
};

export const modules = {
  kicker: "What We Implement",
  heading: "Five modules. One operating plan.",
  intro:
    "These aren't five separate products. They're the systems we switch on inside your engagement — chosen by what the audit shows will actually move the needle, not by what's easiest to sell.",
  featured: {
    id: "ai-business-enablement",
    tag: "The flagship",
    name: "Atlas AI Academy / Atlas Implementations",
    blurb:
      "The core relationship. Atlas AI Academy teaches your team to understand and use AI; Atlas Implementations installs the workflows, prompts, policies, and systems that make it useful — then we keep improving it, month after month.",
    points: [
      "Plain-English AI training for you and your team (Academy)",
      "A full audit + ranked roadmap of your highest-value AI use cases",
      "Systems, workflows, and prompts installed — and improved every month (Implementations)",
    ],
    href: "/ai-implementation",
    linkLabel: "Explore the Learning Hub",
  },
  items: [
    {
      id: "ai-receptionist",
      icon: "headset" as const,
      name: "Atlas Receptionist",
      blurb:
        "Captures missed calls, answers common questions, qualifies leads, routes conversations, and helps book appointments — day or night.",
    },
    {
      id: "ads-booking-system",
      icon: "megaphone" as const,
      name: "Atlas Lead Engine",
      blurb:
        "Turns ads and traffic into booked opportunities with landing pages, forms, follow-up, and a clean appointment flow.",
    },
    {
      id: "local-visibility",
      icon: "map-pin" as const,
      name: "Atlas Local Trust",
      blurb:
        "Improves your Google Business Profile, reviews, citations, and the trust signals that win nearby customers.",
    },
    {
      id: "full-growth-system",
      icon: "network" as const,
      name: "Atlas Command Center",
      blurb:
        "Your dashboards, client portal, and internal Atlas tools — reporting, roadmap tracking, and the systems that run your operation, in one place.",
    },
  ],
  footnote:
    "Full detail for each module lives on the services page — the audit tells us which ones your business actually needs.",
};

// Monthly AI Operations — the recurring engine. Setup is the start; this is what
// the ongoing retainer ("Atlas AI Operations") delivers every month. Positioned
// as ongoing AI operations, not generic "support".
export const monthlyOps = {
  kicker: "Monthly AI Operations",
  heading: "Setup is the start, not the finish line.",
  intro:
    "Once your systems are live, Atlas becomes your outsourced AI department. Every month we keep them working, your team supported, and your roadmap moving — ongoing AI operations, not one-and-done setup.",
  items: [
    {
      title: "Monthly AI strategy call",
      body: "What's working, what's next, and the decisions to make — in plain English.",
    },
    {
      title: "Troubleshooting & upkeep",
      body: "When a tool, prompt, or workflow breaks or drifts, we fix and tune it.",
    },
    {
      title: "New tools & models",
      body: "“Here's what just launched, whether it matters to you, and how to use it.”",
    },
    {
      title: "Fresh training & prompt updates",
      body: "New lessons and prompt-library updates as your tools and team evolve.",
    },
    {
      title: "Roadmap & opportunity tracker",
      body: "A living roadmap and a running backlog of AI opportunities, prioritized.",
    },
    {
      title: "Scoped builds when they fit",
      body: "New systems and Atlas apps, scoped properly — never unlimited, never surprise work.",
    },
  ],
  note: "Your outsourced AI department — practical, accountable, and always improving.",
};

// Why Businesses Stay — the ethical-retention ("ethical stickiness") story.
// Clients stay because the relationship keeps improving the business, never
// because they're locked in. Mirrors the Trust section's two-column shape.
export const whyStay = {
  kicker: "Why Businesses Stay",
  heading: "We earn the relationship every month.",
  intro:
    "AI doesn't hold still. New tools and models land constantly, your team keeps needing support, and new opportunities keep appearing. We're the partner who understands how your business runs and keeps AI useful, safe, and current — without the hype, and without locking you in.",
  reasons: [
    {
      title: "AI keeps changing",
      body: "Someone has to translate new models and tools into “does this matter to you, and how.”",
    },
    {
      title: "Your team keeps growing",
      body: "Questions, retraining, and new hires never stop — we're there for them.",
    },
    {
      title: "One partner who knows your business",
      body: "We understand your workflows, team, and goals better than any replacement could.",
    },
    {
      title: "You own everything",
      body: "Your accounts, data, and documentation are yours. You can leave anytime — you stay because it's worth it.",
    },
  ],
  ethic: {
    heading: "Sticky, the honest way.",
    body: "We become hard to replace by making your business genuinely better month after month — never by trapping you, hiding how things work, or holding your data hostage.",
  },
};

export const process = {
  kicker: "The Process",
  heading: "From audit to adoption.",
  intro:
    "Four steps, in order, every time. You'll always know where you are and what happens next.",
  steps: [
    {
      num: "01",
      tag: "Free",
      title: "Free AI Business Audit",
      body: "We review the current business, systems, missed opportunities, and possible AI use cases — a 15–30 minute conversation, in plain English.",
    },
    {
      num: "02",
      tag: null,
      title: "Opportunity Map",
      body: "We identify where AI can save time, improve follow-up, organize operations, or capture more leads — ranked by value to you.",
    },
    {
      num: "03",
      tag: null,
      title: "Implementation Plan",
      body: "We choose the highest-value systems to build first — quick wins ahead of deeper systems, with a clear scope for each.",
    },
    {
      num: "04",
      tag: null,
      title: "Launch + Improve",
      body: "We implement, test, and refine each system, train your team, and help the business actually adopt it — then keep improving from there.",
    },
  ],
  closing:
    "Every engagement starts with the audit. You leave it with a clear picture of where AI fits — whether or not we build anything together.",
};

// Mission — the brand's north star, stated once in its own quiet band before the
// "How We Work" principles. Reinforces that Atlas *Leads* means leading local
// businesses into an AI-enabled future, not just generating customer leads. Kept
// verbatim as a single string so the statement stays exactly as written.
export const mission = {
  label: "Our Mission",
  statement:
    "Our mission is to lead small businesses into the future of AI—turning confusion into clarity, outdated systems into smarter operations, and missed opportunities into measurable growth.",
};

export const trust = {
  kicker: "How We Work",
  heading: "Premium doesn't mean complicated.",
  principles: [
    {
      title: "Simple systems, not confusing tech",
      body: "If you can't explain it to your team, we haven't finished the job.",
    },
    {
      title: "Practical implementation, not theory",
      body: "Everything we build attaches to real operations: calls, follow-up, booking, reviews.",
    },
    {
      title: "Built for local businesses",
      body: "Owner-run, service-based operations — not enterprise software projects.",
    },
    {
      title: "Education before implementation",
      body: "You'll understand what's being built and why, before anything goes live.",
    },
    {
      title: "Judged by customer experience",
      body: "Faster answers, consistent follow-up, easier booking — the things your customers actually feel.",
    },
  ],
  honesty: {
    heading: "A straight word on where we are",
    body: [
      "We're a new agency, and we say so. You won't find borrowed logos, invented numbers, or reviews we don't have.",
      "What you will get is a clear explanation of what AI can and can't do for your business, systems set up properly, and honest recommendations — including the things you can handle yourself.",
    ],
    signature: "Hayden & Derrick — Atlas Leads",
  },
};

// FAQ — objection handling before the final ask. Questions and answers are the
// live homepage FAQ (lib/content.ts `home.faq`), copied verbatim: they already
// follow the honesty rules and fit the education + implementation direction.
export const faq = {
  kicker: "Common Questions",
  heading: "Straight answers, before you book.",
  intro:
    "The questions owners actually ask — answered plainly. If yours isn't here, it's a good one for the audit call.",
  items: [
    {
      q: "Do I need to be tech-savvy to use this?",
      a: "No. We handle the setup and keep the systems running. Your part is taking the calls and jobs that come through.",
    },
    {
      q: "Will this replace my receptionist or my team?",
      a: "No — it's there to support them. It steps in for the calls and leads your team can't get to, especially after hours and during busy stretches.",
    },
    {
      q: "How long does setup take?",
      a: "It depends on your current tools and which systems you want, but most setups take a few days to get running.",
    },
    {
      q: "Do you lock me into a long contract?",
      a: "No long-term contracts. We're a new agency and would rather earn the relationship than trap you in one.",
    },
    {
      q: "I already run ads. Does this still help?",
      a: "It can. The goal is to capture and follow up with more of the leads your existing ads already generate, so fewer of them go cold.",
    },
    {
      q: "Can you promise me a certain number of jobs?",
      a: "No, and we won't pretend to. We can set up systems designed to capture and follow up with more of your leads — what that turns into depends on your business, your market, and your demand.",
    },
  ],
};

export const finalCta = {
  kicker: "Next Step",
  headingPre: "See where AI fits ",
  headingAccent: "your",
  headingPost: " business.",
  body: "Book a Free AI Business Audit — a 15–30 minute look at how your business runs today, where opportunities slip through, and what's worth implementing first. You'll leave with a clear picture either way.",
  primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
  email: "hello@atlasaileads.com",
  microline: ["Free", "15–30 minutes", "Plain English", "No obligation"],
};

// Footer copy — used only by the preview route's PreviewFooter. The live homepage
// uses the shared global Footer (components/layout/Footer.tsx).
export const footer = {
  pitch:
    "An AI education and implementation agency for local businesses. We help owners understand AI and put it to work — saving time, cutting manual work, and modernizing how their business runs.",
  explore: [
    { label: "The Problem", href: "#problem" },
    { label: "Our Approach", href: "#approach" },
    { label: "Modules", href: "#modules" },
    { label: "Process", href: "#process" },
  ],
  liveSite: [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "AI Learning", href: "/ai-implementation" },
    { label: "Services", href: "/services" },
    { label: "Book an Audit", href: "/book" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
  ],
  contacts: [
    { label: "General", email: "hello@atlasaileads.com" },
    { label: "Hayden", email: "hayden@atlasaileads.com" },
    { label: "Derrick", email: "derrick@atlasaileads.com" },
  ],
  legalLine: "© 2026 Atlas Leads LLC · atlasaileads.com",
  previewNote: "Design preview route — the production site is unchanged.",
};
