// Copy for the Fable pages. /services, /how-it-works, /book, and
// /ai-implementation are all PROMOTED — each object here serves both the live
// route and its /preview/fable-* twin via the shared section components.
//
// Sources: synced Agency Brain vault (Core_Offer.md, Free_Audit_Process.md —
// the 8-step AI Opportunity Audit, Current_Source_Of_Truth.md canonical
// direction 2026-06-29) + the current production copy in lib/content.ts
// (servicesPage, howItWorks, book).
//
// HONESTY RULES (inherited from lib/content.ts — do not violate):
// - No claims of existing/active clients, no testimonials, no reviews.
// - No invented stats, results, percentages, or "proven" outcomes.
// - No guarantees of results. No fake social proof of any kind.

export type PageCta = { label: string; href: string };

const BOOK_CTA: PageCta = { label: "Book a Free AI Business Audit", href: "/book" };
const MICROLINE = ["Free", "15–30 minutes", "Plain English", "No obligation"];

/* --------------------------------- SERVICES -------------------------------- */
// Promoted in Phase 2 step 2: consumed by BOTH the live /services page and the
// /preview/fable-services route (shared sections live in
// components/fable/servicesSections.tsx).

export const servicesPage = {
  hero: {
    eyebrow: "Services",
    headlinePre: "One flagship engagement. Five ",
    headlineAccent: "practical",
    headlinePost: " modules.",
    intro:
      "Atlas Leads isn't five separate services. It's one AI Business Education + Implementation engagement — we teach you where AI fits, audit how your business runs, then switch on the modules the audit shows will actually help.",
    primaryCta: BOOK_CTA,
    secondaryCta: { label: "See how it works", href: "/how-it-works" },
    microline: ["Education first", "Modules when they fit", "Built for local businesses"],
  },

  flagship: {
    kicker: "The Flagship",
    heading: "AI Business Education + Implementation.",
    id: "ai-business-enablement",
    tag: "The engagement",
    what: "Our flagship engagement — a strategic partnership that takes you from “AI is confusing” to “AI is working in my business.” We teach your team, audit your operations, map your highest-value use cases, then implement the practical systems that run them.",
    whoFor:
      "Local business owners who want a serious partner to bring AI into their operations — not another tool to figure out on their own.",
    problem:
      "AI could save you hours every week, but the path from hype to working systems isn't obvious — and trial-and-error is expensive in time you don't have.",
    howAI:
      "A structured engagement: plain-English education for you and your team, a full audit of how your business runs, a prioritized map of high-value AI use cases, then hands-on implementation and support.",
    gets: [
      "Plain-English AI education for you and your team",
      "A full audit of how your business runs today",
      "A prioritized map of your highest-value AI use cases",
      "Hands-on implementation of the systems that deliver them",
      "Ongoing strategy and support as you adopt AI — without the confusion",
    ],
    link: { label: "Explore the Learning Hub", href: "/ai-implementation" },
  },

  modules: {
    kicker: "The Modules",
    heading: "The systems we switch on.",
    intro:
      "Each module is implemented inside the engagement — chosen from what your audit shows will move the needle, not sold as a separate product you have to figure out on your own.",
    items: [
      {
        id: "ai-receptionist",
        icon: "headset" as const,
        name: "AI Receptionist",
        what: "An AI front desk that answers calls, texts, and form fills, qualifies the lead, and books the appointment, day or night.",
        whoFor: "Businesses missing calls, texts, or after-hours leads while they're busy on the job.",
        problem: "Calls go to voicemail and after-hours leads go cold while you're on a job.",
        howAI:
          "AI responds in seconds, answers common questions, captures job details, and guides the lead to a booked time — with owner notifications when a real person is needed.",
        gets: [
          "Missed-call text-back so leads don't bounce",
          "Around-the-clock answering and qualification",
          "Appointments booked straight to your calendar",
          "Fewer leads lost to slow response",
        ],
      },
      {
        id: "ads-booking-system",
        icon: "megaphone" as const,
        name: "Ads + Booking",
        what: "A focused ad-to-booking funnel that turns paid traffic into qualified, ready-to-book conversations.",
        whoFor: "Businesses running ads, or about to, that want more booked jobs from the same spend.",
        problem: "Ads bring clicks, but generic pages and slow follow-up waste the spend.",
        howAI:
          "A service-specific landing page and short form feed an AI follow-up and booking flow that qualifies and schedules leads automatically.",
        gets: [
          "A high-intent landing page and lead form",
          "AI qualification of every lead",
          "Automated follow-up and appointment booking",
          "More of your ad spend turned into booked jobs",
        ],
      },
      {
        id: "local-visibility",
        icon: "map-pin" as const,
        name: "Local Visibility",
        what: "Systems that keep your Google Business Profile, reviews, and local search presence working for you.",
        whoFor: "Local businesses that want to show up, look trustworthy, and win nearby customers.",
        problem: "Nearby customers find other companies first, and reviews dry up.",
        howAI:
          "AI helps request and respond to reviews, keep your listings consistent, and surface local search opportunities — so you show up and look trustworthy.",
        gets: [
          "Google Business Profile support",
          "Automated review requests and responses",
          "Consistent local listings across the web",
          "More nearby customers finding you first",
        ],
      },
      {
        id: "full-growth-system",
        icon: "network" as const,
        name: "Full Growth System",
        what: "Every piece connected into one AI-powered system for leads, booking, follow-up, reviews, and CRM updates.",
        whoFor: "Businesses ready to connect everything into one system instead of piecing tools together.",
        problem: "Point solutions don't talk to each other, so opportunities still slip through.",
        howAI:
          "Lead capture, the AI receptionist, ads and booking, follow-up, and local visibility run as one workflow — with your team trained to operate it.",
        gets: [
          "One connected system instead of scattered tools",
          "Lead capture through to a booked job",
          "Automated follow-up, reviews, and CRM updates",
          "Team training so the system actually sticks",
        ],
      },
    ],
  },

  fit: {
    kicker: "What It Fixes",
    heading: "Start from the problem, not the product.",
    intro:
      "Owners don't shop for modules — they have problems. Here's how the pieces map. The audit tells us which of these actually apply to your business before anything gets built.",
    rows: [
      {
        problem: "Calls get missed while you're on a job",
        detail: "Voicemail loses the customer to whoever answers next.",
        modules: [{ name: "AI Receptionist", href: "#ai-receptionist" }],
      },
      {
        problem: "Follow-up is slow or forgotten",
        detail: "Quotes and inquiries go quiet because nobody has time to chase them.",
        modules: [
          { name: "AI Receptionist", href: "#ai-receptionist" },
          { name: "Ads + Booking", href: "#ads-booking-system" },
        ],
      },
      {
        problem: "Leads don't turn into booked conversations",
        detail: "Interest comes in, but there's no clean path to a time on your calendar.",
        modules: [
          { name: "Ads + Booking", href: "#ads-booking-system" },
          { name: "AI Receptionist", href: "#ai-receptionist" },
        ],
      },
      {
        problem: "Weak presence in local search",
        detail: "Nearby customers find other companies first, and reviews dry up.",
        modules: [{ name: "Local Visibility", href: "#local-visibility" }],
      },
      {
        problem: "Systems are scattered across tools",
        detail: "Leads, follow-up, booking, and reviews live in different places — or nowhere.",
        modules: [{ name: "Full Growth System", href: "#full-growth-system" }],
      },
      {
        problem: "AI feels confusing to adopt",
        detail: "You know it matters but don't know where to start — or what to skip.",
        modules: [{ name: "AI Business Education", href: "#ai-business-enablement" }],
      },
    ],
  },

  // The concrete systems the modules break down into, grouped into four
  // practical buckets so an owner can see exactly what can be set up for them.
  systems: {
    kicker: "What We Can Build",
    heading: "Systems we can build around your business.",
    intro:
      "Every engagement is built from a set of concrete systems. Here's the menu — grouped by what each one does for your business. You won't need all of them; the free audit shows which ones fit, and we can start simple and add more as they prove out.",
    buckets: [
      {
        id: "lead-capture",
        icon: "phone" as const,
        name: "Lead Capture & Fast Response",
        includes: [
          "AI receptionist",
          "Missed-call recovery",
          "SMS & quote follow-up",
          "Lead qualification",
        ],
        what: "Catches every call, text, and form the moment it comes in — answers, texts missed callers back, chases quotes, and sorts real leads from the noise.",
        why: "When you're busy on a job you can't answer, and a lead that hits voicemail often just calls the next company on the list.",
        gets: [
          "An AI receptionist answering calls and messages day or night",
          "Automatic missed-call text-back and quote follow-up",
          "Real leads flagged so you spend time on the ones that count",
        ],
      },
      {
        id: "booking-handoff",
        icon: "calendar" as const,
        name: "Booking & Owner Handoff",
        includes: ["Booking support", "Owner alerts", "CRM & lead timeline"],
        what: "Turns an interested lead into a booked appointment, pings you when a real person needs you, and keeps every lead's history in one place.",
        why: "It closes the gap between “they reached out” and “they're on the calendar,” so nothing slips while you're heads-down on a job.",
        gets: [
          "Appointments booked straight onto your calendar",
          "Instant owner alerts when a lead needs a human",
          "A simple timeline of every lead and conversation",
        ],
      },
      {
        id: "reputation",
        icon: "star" as const,
        name: "Trust & Reputation Follow-Up",
        includes: ["Review requests", "Reputation follow-up"],
        what: "Asks happy customers for a review at the right moment and helps you keep up with the ones that come in.",
        why: "Nearby customers often check your reviews before they ever call, so recent, steady reviews help you make a strong first impression.",
        gets: [
          "Automatic review requests after a completed job",
          "Help staying on top of new reviews and replies",
        ],
      },
      {
        id: "growth-infra",
        icon: "chart" as const,
        name: "Simple Growth Infrastructure",
        includes: ["Landing / lead-capture pages", "Monthly reporting"],
        what: "Gives you a focused page to capture leads and a plain-English monthly summary of what's working.",
        why: "A clean place to send traffic captures more of it, and a simple report shows where your leads and jobs are coming from.",
        gets: [
          "A focused landing or lead-capture page",
          "A plain-English monthly report — no dashboards to learn",
        ],
      },
    ],
    footnote:
      "Not every business needs all of these — we start from what your audit shows will help most, and systems can start simple.",
  },

  cta: {
    index: "05",
    kicker: "Next Step",
    headingPre: "Not sure which fits ",
    headingAccent: "your",
    headingPost: " business?",
    body: "That's exactly what the audit is for. We'll look at how you work today, show where AI can save time, and recommend what makes sense — with no pressure and no promises about specific results.",
    primaryCta: BOOK_CTA,
    microline: MICROLINE,
  },
};

/* ------------------------------- HOW IT WORKS ------------------------------ */
// Promoted in Phase 2 step 1: consumed by BOTH the live /how-it-works page and
// the /preview/fable-how-it-works route (shared sections live in
// components/fable/howItWorksSections.tsx).

export const howItWorksPage = {
  hero: {
    eyebrow: "How It Works",
    headlinePre: "From first call to ",
    headlineAccent: "working",
    headlinePost: " systems.",
    intro:
      "No jargon, no black box. We audit how your business runs, show you where AI helps in plain English, then build, test, and support the systems that do the work. Here's exactly what that looks like.",
    primaryCta: BOOK_CTA,
    secondaryCta: { label: "What happens in the audit", href: "#audit" },
    microline: ["Plain English", "No long contracts", "Built for local businesses"],
  },

  process: {
    kicker: "The Process",
    heading: "Four steps, in order, every time.",
    intro: "You'll always know where you are and what happens next.",
    steps: [
      {
        num: "01",
        tag: "Free",
        title: "Free AI Business Audit",
        body: "We review the current business, systems, missed opportunities, and possible AI use cases — a 15–30 minute conversation, in plain English.",
        detail: "You leave with a clear read on where AI fits, free either way.",
      },
      {
        num: "02",
        tag: null,
        title: "Opportunity Map",
        body: "We identify where AI can save time, improve follow-up, organize operations, or capture more leads — ranked by impact and effort.",
        detail: "The top opportunities, in a simple prioritized list.",
      },
      {
        num: "03",
        tag: null,
        title: "Implementation Plan",
        body: "We choose the highest-value systems to build first — quick wins ahead of deeper systems, with a clear scope for each.",
        detail: "A plain-English order of what to do first, next, later.",
      },
      {
        num: "04",
        tag: null,
        title: "Launch + Improve",
        body: "We implement, test, and refine each system, train your team, and help the business actually adopt it — then keep improving from there.",
        detail: "Working systems your team understands and uses.",
      },
    ],
  },

  audit: {
    kicker: "The Audit",
    heading: "What happens during the audit.",
    intro:
      "It's a conversation, not a technical report. We walk through how your business actually runs and point at the practical opportunities — including the ones that aren't worth doing.",
    steps: [
      {
        title: "We learn how you run",
        body: "What you do, what makes money, team size, and what's slowing you down day to day.",
      },
      {
        title: "We review how leads reach you",
        body: "Your website, Google Business Profile, reviews, calls, and forms — the full front door.",
      },
      {
        title: "We check response and booking",
        body: "Response speed, missed calls, follow-up habits, and how customers actually book with you.",
      },
      {
        title: "We identify the AI opportunities",
        body: "Where AI can save time, speed up follow-up, or capture more opportunities — and where it's not worth it.",
      },
      {
        title: "We rank them and map the roadmap",
        body: "Your top opportunities, ranked by impact and effort, in a plain-English order of what to do first.",
      },
    ],
    facts: {
      heading: "The practical details",
      items: [
        "15–30 minutes, phone or Zoom",
        "No cost, no obligation",
        "Plain English — no technical background needed",
        "Nothing to prepare; just know your business",
        "You keep the findings either way",
      ],
    },
  },

  lookFor: {
    kicker: "What We Look For",
    heading: "The gaps we check for.",
    intro:
      "Most local businesses lose time and opportunities in the same handful of places. These are the ones we check first:",
    items: [
      { title: "Missed calls", body: "Calls that hit voicemail while you're on a job." },
      { title: "Delayed follow-up", body: "Quotes and inquiries that go quiet for hours or days." },
      { title: "Repetitive admin", body: "Manual busywork eating your team's week." },
      { title: "Manual booking", body: "Back-and-forth scheduling instead of a clean booking flow." },
      { title: "Review gaps", body: "Happy customers who never get asked for a review." },
      { title: "Scattered tools", body: "Leads and follow-up spread across apps that don't talk." },
      { title: "Staff confusion around AI", body: "A team that's heard the hype but has no practical playbook." },
    ],
  },

  after: {
    kicker: "After the Audit",
    heading: "Then we recommend — honestly.",
    body: [
      "Depending on what the audit shows, we might recommend education first, a single automation, the AI receptionist, ads + booking, local visibility work, or the full growth system. We start from the highest-value opportunity — not the biggest package.",
      "And if the honest answer is that something isn't worth doing, or that you can handle it yourself, we'll tell you that too.",
    ],
    outcomes: [
      { name: "AI Business Education", href: "/ai-implementation" },
      { name: "AI Receptionist", href: "/services#ai-receptionist" },
      { name: "Ads + Booking", href: "/services#ads-booking-system" },
      { name: "Local Visibility", href: "/services#local-visibility" },
      { name: "Full Growth System", href: "/services#full-growth-system" },
    ],
    honesty:
      "No guaranteed jobs, revenue, or lead volume — we won't pretend otherwise. What you get is a clear picture and systems set up properly.",
  },

  // Video walkthroughs — the items themselves stay in lib/content.ts
  // (`home.videos.items`) so recorded videos keep swapping in from one place.
  videos: {
    kicker: "See It In Action",
    heading: "Watch how the systems work.",
    intro:
      "Short video walkthroughs of how Atlas Leads teaches, builds, and trains your team on AI systems, from the first call to a booked job. AI education, implementation, and automation explained clearly.",
  },

  cta: {
    index: "06",
    kicker: "Next Step",
    headingPre: "Start with the ",
    headingAccent: "free",
    headingPost: " audit.",
    body: "One 15–30 minute conversation about how your business runs today and where AI genuinely fits. You'll leave with a clear picture either way.",
    primaryCta: BOOK_CTA,
    microline: MICROLINE,
  },
};

/* ----------------------------------- BOOK ---------------------------------- */
// Promoted in Phase 2 step 3: consumed by BOTH the live /book page and the
// /preview/fable-book route (shared sections live in
// components/fable/bookSections.tsx). The form fields, meeting options, and
// contact addresses stay in lib/content.ts (`book`).

export const bookPage = {
  hero: {
    eyebrow: "Free AI Business Audit · 15–30 minutes",
    headlinePre: "Book a Free AI Business Audit.",
    intro:
      "On a short call we look at how your business runs today, find the missed leads, slow follow-up, and repetitive manual work that costs you time, and show where AI can save time and modernize your operations. You'll leave with a clear, practical picture of what to implement — before anyone tries to sell you anything.",
    primaryCta: { label: "Choose a time to meet", href: "#meet" },
    secondaryCta: { label: "Request a meeting by form", href: "#request-meeting" },
    microline: MICROLINE,
  },

  includes: {
    kicker: "What We Look For",
    heading: "What the audit includes.",
    intro:
      "A practical review of the places local businesses most often lose time and opportunities:",
    items: [
      "Missed leads and calls that never get a callback",
      "Slow follow-up that lets quotes and inquiries go cold",
      "Repetitive manual work eating your team's time",
      "Booking gaps where appointments slip away",
      "Review and reputation gaps that cost you trust",
    ],
    reassurance:
      "This is a practical AI and business audit, not a high-pressure sales call. We'll tell you what's worth doing, including the things you can handle yourself.",
  },

  expect: {
    kicker: "What To Expect",
    heading: "What happens on the call.",
    items: [
      "A look at how calls, messages, and leads reach your business today",
      "Where leads get missed, follow-up is slow, or manual work is eating time",
      "Where AI can save time and improve your day-to-day operations",
      "A straight recommendation on what systems make sense — with no pressure and no promises about specific results",
    ],
    honesty:
      "If AI isn't worth it somewhere in your business, we'll say so. No guaranteed jobs, revenue, or lead volume.",
    whoFor:
      "For local business owners who are curious about AI but want a clear, practical starting point, not a hard sell.",
  },

  meet: {
    kicker: "Choose How To Meet",
    heading: "Pick whatever is easiest for you.",
    intro:
      "Every option is a no-pressure conversation about your business and how the systems would fit.",
  },

  form: {
    kicker: "Request a Meeting",
    heading: "Send us the details.",
    intro:
      "The form takes about a minute — or skip it and email us directly below.",
  },

  contacts: {
    heading: "Prefer email? Reach us directly.",
    intro:
      "You'll always deal with us — the two people doing the work. Use the general inbox, or email either of us directly.",
  },
};

/* ------------------------------- AI LEARNING ------------------------------- */
// Promoted in Phase 3: consumed by BOTH the live /ai-implementation page and
// the /preview/fable-ai-learning route (shared sections live in
// components/fable/aiLearningSections.tsx). The lesson video library,
// implementation modules, and FAQ stay in lib/content.ts (`aiImplementation`)
// so recorded videos keep swapping in from one place and the module cards keep
// their /services#<id> deep links.
//
// Sources: vault 01_Business_Identity/AI_Business_Education_And_Implementation_
// System.md + _Strategy.md (the three "stuck states", safe-outcomes rules,
// teach-first → roadmap → implement motion) and the prior production copy.

export const aiLearningPage = {
  hero: {
    eyebrow: "AI Learning",
    headlinePre: "Learn where AI fits ",
    headlineAccent: "before",
    headlinePost: " you implement it.",
    intro:
      "Most owners hear about AI everywhere and still don't know what to do with it. Atlas Leads teaches you where AI genuinely helps a business like yours — and where it doesn't — so every system we build starts from understanding, not hype.",
    primaryCta: BOOK_CTA,
    secondaryCta: { label: "See how it works", href: "/how-it-works" },
    microline: ["Plain English", "No AI experience needed", "Built for local businesses"],
  },

  problem: {
    kicker: "The Problem",
    heading: "Why AI feels confusing.",
    intro:
      "AI is in every headline, but most advice is generic, the tools change monthly, and nobody explains what any of it means for a plumbing, electrical, or HVAC company. A random AI tool doesn't improve operations on its own — so most owners end up stuck in one of three places.",
    states: [
      {
        title: "Haven't started",
        body: "You know AI matters, but every article says something different and you're worried about getting it wrong. So nothing happens, and the admin pile keeps growing.",
      },
      {
        title: "Dabbling without rules",
        body: "You or your staff paste things into whichever free chatbot is handy — inconsistent results, no standards, and customer information going places it probably shouldn't.",
      },
      {
        title: "Paying for shelfware",
        body: "You already pay for an AI feature or a chatbot, but nobody was trained on it. It sits unused while the problems it was meant to fix carry on.",
      },
    ],
  },

  teach: {
    kicker: "What We Teach",
    heading: "Practical AI, tied to how your business runs.",
    intro:
      "Not theory, not tool demos — where AI applies to your actual operations, taught in plain English with examples from your own business.",
    items: [
      {
        title: "Where AI saves time",
        body: "The repetitive admin — job notes, estimates, review replies, internal docs — that AI can take off your team's plate first.",
      },
      {
        title: "Where AI speeds up response",
        body: "How AI answers and qualifies the calls, texts, and form fills that currently go to voicemail while you're on a job.",
      },
      {
        title: "Where AI organizes follow-up",
        body: "How quotes and inquiries stop going cold, with follow-up that runs on time even when nobody has time to chase it.",
      },
      {
        title: "Where AI supports booking",
        body: "How a lead moves from first contact to a time on your calendar — and how AI keeps customer communication fast without sounding robotic.",
      },
      {
        title: "How to use AI safely",
        body: "Simple rules for your team: what never goes into a chatbot, what a human always reviews, and how to check AI's answers before they reach a customer.",
      },
      {
        title: "Where AI is not worth forcing",
        body: "The honest half of the education. Some tasks AI makes worse, not better — we'll tell you which ones to skip.",
      },
    ],
  },

  path: {
    kicker: "The Path",
    heading: "Education first. Implementation second.",
    intro:
      "The learning isn't separate from the work — it's how every engagement starts. Teach first, map second, implement third.",
    steps: [
      {
        title: "Learn the business context",
        body: "We start with how your business actually runs — calls, leads, jobs, follow-up, admin — not with tools.",
      },
      {
        title: "Identify practical AI opportunities",
        body: "Together we find where AI could genuinely help: missed calls, slow follow-up, repetitive admin, booking friction.",
      },
      {
        title: "Map the highest-value use cases",
        body: "The free audit turns those into a ranked opportunity map, so effort goes where the payoff actually is.",
      },
      {
        title: "Choose the right modules",
        body: "Only the systems the map justifies — AI receptionist, ads + booking, local visibility, or the full system. Sometimes none yet.",
      },
      {
        title: "Launch, test, and improve",
        body: "We build, test against real scenarios, train your team, and keep improving as AI changes.",
      },
    ],
  },

  library: {
    kicker: "The Library",
    heading: "Watch, learn, then decide.",
    topicsLabel: "What the lessons and audits cover",
    topics: [
      "Missed calls & after-hours inquiries",
      "Slow follow-up",
      "Repetitive admin",
      "Booking friction",
      "Review requests",
      "Local visibility",
      "Lead capture",
      "Internal knowledge & SOPs",
      "Staff adoption",
      "Tool selection",
    ],
  },

  modules: {
    kicker: "Where It Leads",
    heading: "Learning that connects to real systems.",
    intro:
      "The education isn't an end in itself. AI Business Education is the layer you're reading about — these are the implementation modules it switches on when your audit shows they'll help. By then, you'll already understand why they work.",
    servicesLink: { label: "See how the modules fit inside the engagement", href: "/services" },
  },

  honesty: {
    kicker: "The Honest Part",
    heading: "What this is — and what it isn't.",
    isHeading: "What it is",
    isBody:
      "Practical education connected to implementation. You learn where AI fits in your business, the free audit maps the highest-value opportunities, and we build the systems that map justifies — then train your team to run them.",
    nots: [
      {
        title: "Not a generic AI course",
        body: "Everything is tied to how local service businesses actually run — not slideware you could get from YouTube.",
      },
      {
        title: "Not a hype webinar",
        body: "No “AI will 10x your revenue” talk. We teach what the tools genuinely do, including their limits.",
      },
      {
        title: "Not a software sales pitch",
        body: "We recommend the tools you actually need — often ones you already have — and tell you what to skip.",
      },
      {
        title: "Not a guarantee",
        body: "No guaranteed jobs, revenue, or lead volume. What we can promise: a clear picture, and systems set up properly.",
      },
      {
        title: "Not a technical workshop",
        body: "If you can send a text, you can use what we teach. Plain English, with examples from your own business.",
      },
    ],
  },

  faqKicker: "Common Questions",

  cta: {
    index: "08",
    kicker: "Next Step",
    headingPre: "Start with the ",
    headingAccent: "free",
    headingPost: " audit.",
    body: "One 15–30 minute conversation about your business — where AI fits, where it doesn't, and what to do first. You'll leave with a clear picture either way.",
    primaryCta: BOOK_CTA,
    microline: MICROLINE,
  },
};
