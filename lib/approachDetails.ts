// Copy for the "Our Approach" detail pages (app/approach/<slug>). Four of the
// five homepage approach cards expand into one of these owner-friendly pages;
// the homepage cards link here (see lib/homeContent.ts `approach.steps.href`).
//
// HONESTY RULES (same as lib/homeContent.ts / lib/content.ts):
// - No guarantees of results, no invented stats, no fake proof.
// - Plain-English, owner-first language. Describe what we do, not what we promise.

export type ApproachDetailPoint = { title: string; body: string };

export type ApproachDetail = {
  slug: string;
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headlinePre: string;
    headlineAccent?: string;
    headlinePost?: string;
    intro: string;
  };
  body: {
    kicker: string;
    heading: string;
    intro: string;
    points: ApproachDetailPoint[];
    note?: string;
  };
  cta: {
    headingPre: string;
    headingAccent?: string;
    headingPost?: string;
    body: string;
    primaryCta: { label: string; href: string };
  };
};

// Every page's forward action funnels to the same free-audit booking, matching
// the rest of the site (lib/homeContent.ts).
const BOOK = { label: "Book a Free AI Business Audit", href: "/book" };

export const approachDetails: Record<string, ApproachDetail> = {
  "ai-opportunity-audit": {
    slug: "ai-opportunity-audit",
    meta: {
      title: "AI Opportunity Audit",
      description:
        "How AtlasLeads reviews the way your business handles leads and customer communication today — missed calls, slow replies, follow-up, reviews, and where leads slip through the cracks.",
    },
    hero: {
      eyebrow: "Our Approach",
      headlinePre: "AI Opportunity ",
      headlineAccent: "Audit",
      intro:
        "Before we recommend anything, we look at how your business actually handles leads and customer communication today — and find the practical places where opportunities are slipping away.",
    },
    body: {
      kicker: "What we look at",
      heading: "Where opportunities tend to slip",
      intro:
        "We walk through the everyday moments where a potential customer reaches out, and where the handoff can break down. This is about finding real, fixable gaps — not selling you a stack of AI tools.",
      points: [
        {
          title: "Missed calls",
          body: "How many calls go unanswered when you're busy or after hours, and what happens to those callers next.",
        },
        {
          title: "Response time",
          body: "How quickly new leads get a reply today, and where slow replies may be costing you the job.",
        },
        {
          title: "Website & call-to-action",
          body: "Whether your site makes it obvious how to reach you and easy to take the next step.",
        },
        {
          title: "Contact forms & booking",
          body: "What happens after someone fills out a form or tries to book — and how many steps it takes them.",
        },
        {
          title: "Follow-up",
          body: "Whether quotes and unbooked leads get followed up, or quietly go cold.",
        },
        {
          title: "Reviews & Google Business Profile",
          body: "How you gather reviews, and how your business shows up when nearby customers search.",
        },
      ],
      note: "You get a plain-English summary of what's working, where leads may be getting lost, and which fixes are worth doing first — with no obligation to buy anything.",
    },
    cta: {
      headingPre: "See where your ",
      headingAccent: "leads go",
      headingPost: ".",
      body: "A free AI Business Audit is a no-pressure look at how leads reach your business today, and where a few practical changes could help you book more of them.",
      primaryCta: BOOK,
    },
  },

  "use-case-mapping": {
    slug: "use-case-mapping",
    meta: {
      title: "Use-Case Mapping",
      description:
        "After the audit, AtlasLeads maps which AI systems actually make sense for your specific business — missed-call recovery, AI receptionist, SMS follow-up, booking help, or review and reporting workflows.",
    },
    hero: {
      eyebrow: "Our Approach",
      headlinePre: "Use-case ",
      headlineAccent: "mapping",
      intro:
        "After the audit, we map out which AI systems actually make sense for your business — and, just as important, which ones you don't need.",
    },
    body: {
      kicker: "What we map",
      heading: "Not every business needs the same setup",
      intro:
        "We take what the audit found and match it to the systems that fit how you really work. You get a clear, ranked plan — starting with the changes that save the most time and capture the most opportunities.",
      points: [
        {
          title: "Missed-call recovery",
          body: "If calls slip away when you're busy, we prioritize catching them and texting the caller back automatically.",
        },
        {
          title: "AI receptionist support",
          body: "If questions and after-hours calls pile up, an AI receptionist can answer and capture the details for you.",
        },
        {
          title: "SMS follow-up",
          body: "If leads go cold, automatic text follow-up keeps quotes and inquiries warm without extra work.",
        },
        {
          title: "Booking help",
          body: "If it's hard for customers to schedule, we simplify the path from interested to booked.",
        },
        {
          title: "Reviews & reporting",
          body: "If reviews are thin or you're flying blind, we look at review requests and simple reporting.",
        },
      ],
      note: "The point is a clear, prioritized plan in plain English — so you only invest in the systems that will actually help your business.",
    },
    cta: {
      headingPre: "Find the systems that ",
      headingAccent: "fit",
      headingPost: " your business.",
      body: "Start with a free audit. We'll map the AI use cases that make sense for you, and skip the ones that don't.",
      primaryCta: BOOK,
    },
  },

  "hands-on-implementation": {
    slug: "hands-on-implementation",
    meta: {
      title: "Hands-On Implementation",
      description:
        "AtlasLeads does the actual setup work — AI receptionist, SMS follow-up, missed-call recovery, lead qualification, booking, CRM tracking, owner alerts, review requests, landing pages, and monthly reporting — built around your business and able to start simple.",
    },
    hero: {
      eyebrow: "Our Approach",
      headlinePre: "Hands-on ",
      headlineAccent: "implementation",
      intro:
        "We do the actual setup work — not just advice. We build and connect the systems your plan calls for, and fit them into how you already run.",
    },
    body: {
      kicker: "What we build",
      heading: "Done-with-you, built around your business",
      intro:
        "We start with what your audit and use-case map show will help most, and we can start simple. Depending on your needs, that can include:",
      points: [
        {
          title: "AI receptionist / phone answering",
          body: "Answers calls, handles common questions, and captures job details — day or night.",
        },
        {
          title: "SMS follow-up & missed-call recovery",
          body: "Texts back missed calls and keeps leads warm with timely, automatic follow-up.",
        },
        {
          title: "Lead qualification & booking support",
          body: "Sorts real prospects from noise and helps guide them toward a booked appointment.",
        },
        {
          title: "CRM tracking & owner alerts",
          body: "Keeps leads organized in one place and notifies you when something needs your attention.",
        },
        {
          title: "Review requests",
          body: "Asks happy customers for a review at the right moment, so it doesn't get forgotten.",
        },
        {
          title: "Landing pages & monthly reporting",
          body: "A focused page to capture leads, plus a simple monthly view of what's actually happening.",
        },
      ],
      note: "Every system is built around your current needs and tested before it touches a customer. You can start with one piece and add more as it proves out.",
    },
    cta: {
      headingPre: "Ready to ",
      headingAccent: "build",
      headingPost: " it?",
      body: "We can start simple and add from there. Book a free audit and we'll walk through what a first setup could look like for your business.",
      primaryCta: BOOK,
    },
  },

  "training-ongoing-advisory": {
    slug: "training-ongoing-advisory",
    meta: {
      title: "Training + Ongoing Advisory",
      description:
        "AtlasLeads doesn't build the system and disappear. We help your team understand how to use it, what to watch, how to read reports, what to adjust, and how the system can improve over time.",
    },
    hero: {
      eyebrow: "Our Approach",
      headlinePre: "Training + ongoing ",
      headlineAccent: "advisory",
      intro:
        "We don't build the system and disappear. We make sure you and your team know how to use it — and we stay available as your needs change.",
    },
    body: {
      kicker: "What ongoing support looks like",
      heading: "So the change actually sticks",
      intro:
        "New systems only help if the people using them feel comfortable. We walk your team through everything and stay in the loop as things evolve.",
      points: [
        {
          title: "How to use it",
          body: "Clear, plain-English training so your team knows how the system works day to day.",
        },
        {
          title: "What to watch",
          body: "What to keep an eye on, and how to tell when something needs attention.",
        },
        {
          title: "How to read reports",
          body: "Making sense of the numbers so you can see what's working and what isn't.",
        },
        {
          title: "What to adjust",
          body: "We help tune settings and messages as you learn what fits your customers.",
        },
        {
          title: "How it improves over time",
          body: "As your tools and needs change, we adjust the system so it keeps pulling its weight.",
        },
      ],
      note: "You always deal with us directly — not a call center or a ticket queue.",
    },
    cta: {
      headingPre: "Support that ",
      headingAccent: "sticks around",
      headingPost: ".",
      body: "We stay in your corner after launch. Book a free audit to talk through how we'd set up and support your systems.",
      primaryCta: BOOK,
    },
  },
};
