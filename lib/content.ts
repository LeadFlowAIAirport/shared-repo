// All site copy lives here. Pages import these objects and feed shared
// presentational components. Icons are owned by the components (fixed order),
// so this module stays pure data.
//
// HONESTY RULES (this is an early-stage agency — do not violate):
// - No claims of existing/active clients, no testimonials, no reviews.
// - No invented stats, results, percentages, or "proven" outcomes.
// - No guarantees of results. No fake social proof of any kind.
// - Credibility comes from clearly explaining the problem, the offer, and the
//   value — never from claims of past success.
//
// PLACEHOLDERS (swap before launch): the brand name `site.brand` ("Atlas Leads"),
// `footer.partners`, `footer.contact`, and `book.calendlyUrl` are all
// placeholders — change them in one place here.

export type CTA = { label: string; href: string };

export type Hero = {
  /** Optional small label rendered as a glass pill above the headline. */
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  trustLine: string;
};

export type Step = { title: string; body: string };
export type FaqItem = { q: string; a: string };

/** A bullet with a bold lead-in followed by the rest of the sentence. */
export type LedBullet = { lead: string; rest: string };

export type ProseBlock = {
  heading: string;
  intro?: string[];
  bullets?: string[];
  closing?: string;
};


/** Where a walkthrough video comes from. Set `embedUrl` for a hosted embed
 *  (YouTube, Vimeo, Loom, ...) OR `videoSrc` for a file in /public (e.g.
 *  "/videos/ai-receptionist.mp4"). `embedUrl` wins if both are set. `posterSrc`
 *  is an optional still shown before a local video plays. */
export type VideoSource = {
  embedUrl?: string;
  videoSrc?: string;
  posterSrc?: string;
};

/** A video-walkthrough card / page. To put a category's video live, set its
 *  `video` field (one place) — e.g. `video: { embedUrl: "https://..." }` or
 *  `video: { videoSrc: "/videos/ai-receptionist.mp4" }`. While `video` is
 *  `null`, the card and /demo/<slug> page show the honest "coming soon"
 *  placeholder (and the page stays noindex). */
export type VideoItem = {
  slug: string;
  title: string;
  blurb: string;
  video: VideoSource | null;
  /** Optional link target that overrides the default `/demo/<slug>` page — e.g.
   *  the flagship card points at the AI Learning hub instead of a demo page. */
  href?: string;
};

export const site = {
  // PLACEHOLDER brand name — swap here to rebrand the whole site.
  brand: "Atlas Leads",
  bookHref: "/book",
  howHref: "/how-it-works",
  nav: [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "AI Learning", href: "/ai-implementation" },
    { label: "Services", href: "/services" },
  ],
  headerCta: { label: "Book a Free AI Business Audit", href: "/book" },
  footer: {
    pitch:
      "An AI education and implementation agency for local businesses. We help owners understand AI and put it to work — saving time, cutting manual work, and modernizing how their business runs.",
    contacts: [
      { label: "General", email: "hello@atlasaileads.com" },
      { label: "Hayden", email: "hayden@atlasaileads.com" },
      { label: "Derrick", email: "derrick@atlasaileads.com" },
    ],
    // PLACEHOLDER — replace with a real contact email.
    contact: "hello@atlasaileads.com",
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Conditions", href: "/terms" },
    ],
    // Honest framing: we're new and say so.
    note: "A new agency. We'd rather earn your trust than lock you into a contract.",
  },
};

/* ----------------------------------- HOME ---------------------------------- */

export const home = {
  hero: {
    eyebrow: "AI Business Education + Implementation",
    headline: "Your AI Transformation Partner for Local Business.",
    subheadline:
      "We help local business owners understand AI, find the highest-value ways to use it, and implement the practical systems that save you time, cut manual admin, and speed up how you respond and follow up — so your business adopts AI with clarity, not confusion.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
    trustLine:
      "A hands-on AI partner for local businesses — education, strategy, and implementation. Plain English, no long contracts.",
  } satisfies Hero,

  problem: {
    heading: "AI Is Everywhere — But No One Has Shown You How to Actually Use It",
    intro: [
      "Local business owners are told AI will change everything. What they're not told is where it actually fits, what's genuinely worth doing, and how to put it to work without the hype or the jargon.",
      "So the day-to-day still looks like this:",
    ],
    bullets: [
      "Hours lost every week to repetitive admin, quoting, and follow-up.",
      "Calls missed while you're on a job — and leads that never hear back.",
      "A form fill at 9 PM that waits until tomorrow for a reply… if it comes.",
      "Tools and “AI apps” you paid for but never really rolled out.",
      "A nagging sense that competitors are modernizing faster than you are.",
    ],
    closing:
      "The opportunity isn't one more app — it's understanding AI and implementing it properly across how your business runs. That's exactly what we do.",
  } satisfies ProseBlock,

  // Atlas Leads AI implementation process — the five stages of how we partner
  // with a business: teach what AI can do, find the gaps, build the systems,
  // train the team, then keep improving. Rendered by the AiProcess section.
  aiProcess: {
    heading: "How We Put AI to Work in Your Business",
    intro:
      "No hype and no black box. We start by auditing how your business runs, show you exactly where AI helps, teach your team in plain English, then build, connect, and support the systems that do the work.",
    steps: [
      {
        title: "Audit",
        body: "We map how your business runs today — calls, leads, follow-up, admin, and operations — to see the full picture.",
      },
      {
        title: "Find the AI Wins",
        body: "We pinpoint where AI can save you the most time and money, and what's genuinely worth doing.",
      },
      {
        title: "Teach",
        body: "We explain how the right AI works in plain English, so you and your team actually understand it — no jargon.",
      },
      {
        title: "Build & Connect",
        body: "We build or connect the right systems — receptionist, follow-up, booking, reviews, and operations — into how you already work.",
      },
      {
        title: "Support & Improve",
        body: "We test, refine, and support the rollout over time, so the systems keep working and the change sticks.",
      },
    ] satisfies Step[],
  },

  whyHeading: "What Working With Atlas Leads Is Like",
  why: [
    {
      lead: "We teach, not just sell.",
      rest: " You'll actually understand what AI does for your business and why, explained in plain English.",
    },
    {
      lead: "Education and implementation together.",
      rest: " We don't stop at advice — we build and connect the systems and train your team to use them.",
    },
    {
      lead: "Built around your operations.",
      rest: " We start from how your business actually runs and apply AI where it saves the most time and money.",
    },
    {
      lead: "Plain-English, no jargon.",
      rest: " Serious about AI, allergic to buzzwords. You'll always know what's happening and why.",
    },
    {
      lead: "Direct access to the people doing the work.",
      rest: " You deal with us, not a call center or a ticket queue.",
    },
    {
      lead: "Honest about where we are.",
      rest: " We're a new agency. We'd rather earn your trust by being clear than make promises we can't back up.",
    },
  ] satisfies LedBullet[],

  // Video walkthroughs — short recorded explainers of how AI fits a real local
  // business. Each card links to its /demo/<slug> page (clean placeholder until
  // the video is embedded). Replaces the old interactive demo teaser.
  videos: {
    heading: "See how AI fits into a real local business",
    intro:
      "Short video walkthroughs of how Atlas Leads teaches, builds, and trains your team on AI systems, from the first call to a booked job. AI education, implementation, and automation explained clearly.",
    note: "Video walkthroughs coming soon. We'll add each one here as it's ready.",
    // To put a video live, change that category's `video: null` to a source,
    // e.g. `video: { embedUrl: "https://www.youtube.com/embed/XXXX" }` or
    // `video: { videoSrc: "/videos/ai-receptionist.mp4", posterSrc: "/videos/ai-receptionist.jpg" }`.
    items: [
      {
        slug: "ai-business-education",
        title: "AI Business Education + Implementation",
        blurb: "A walkthrough of our flagship engagement — how we teach your team, audit your operations, map high-value AI use cases, and implement the systems that save you time.",
        video: null,
        // Flagship card links to the AI Learning hub (same route as the
        // "AI Learning" nav item), not a /demo page.
        href: "/ai-implementation",
      },
      {
        slug: "ai-receptionist",
        title: "AI Receptionist",
        blurb: "How AI answers calls, qualifies leads, and books appointments day or night, so you stop missing work.",
        video: { embedUrl: "/demos/ai-receptionist.html" },
      },
      {
        slug: "ad-funnel",
        title: "Ads + Booking",
        blurb: "How paid traffic becomes qualified, ready-to-book conversations instead of cold clicks.",
        video: { embedUrl: "/demos/ads-booking.html" },
      },
      {
        slug: "local-visibility",
        title: "Local Visibility",
        blurb: "How AI keeps your listings, reviews, and local search presence working for you.",
        video: { embedUrl: "/demos/local-visibility.html" },
      },
      {
        slug: "full-growth-system",
        title: "Full Growth System",
        blurb: "How the pieces connect into one AI-powered system for leads, booking, follow-up, and reviews.",
        video: { embedUrl: "/demos/full-growth-system.html" },
      },
    ] satisfies VideoItem[],
  },

  cta: {
    heading: "See Where AI Fits in Your Business",
    body: "Book a free AI Business Audit. We'll look at how your business runs today, show you where AI can save time and money, and lay out a practical plan to implement it — no pressure, no jargon, and no promises about specific results.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
  },

  faqHeading: "Common Questions",
  faq: [
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
  ] satisfies FaqItem[],
};

/* ------------------------------ SERVICES PAGE ------------------------------ */
// The dedicated /services index. Each offer explains what it is, the problem it
// solves, how AI is used, and what the business gets. `id` matches the service
// slug so the homepage service cards can deep-link to /services#<id>.

export type ServiceOffer = {
  id: string;
  name: string;
  what: string;
  whoFor: string;
  problem: string;
  howAI: string;
  gets: string[];
};

export const servicesPage = {
  hero: {
    heading: "One Flagship Offer, Tailored to Your Business",
    intro:
      "Atlas Leads helps local businesses understand AI and implement it properly. Our flagship offer is the education, planning, and hands-on build that modernizes how you operate. The systems further down are the practical pieces we put in place inside that offer.",
  },
  offers: [
    {
      id: "ai-business-enablement",
      name: "AI Business Education + Implementation",
      what: "Our flagship engagement — a strategic partnership that takes you from “AI is confusing” to “AI is working in my business.” We teach your team, audit your operations, map your highest-value use cases, then implement the practical systems that run them.",
      whoFor: "Local business owners who want a serious partner to bring AI into their operations — not another tool to figure out on their own.",
      problem: "AI could save you hours every week, but the path from hype to working systems isn't obvious — and trial-and-error is expensive in time you don't have.",
      howAI: "A structured engagement: plain-English education for you and your team, a full audit of how your business runs, a prioritized map of high-value AI use cases, then hands-on implementation and support — saving time, cutting manual admin, speeding up response and follow-up, and organizing how your operations run.",
      gets: [
        "Plain-English AI education for you and your team",
        "A full audit of how your business runs today",
        "A prioritized map of your highest-value AI use cases",
        "Hands-on implementation of the systems that deliver them",
        "Ongoing strategy and support as you adopt AI — without the confusion",
      ],
    },
    {
      id: "ai-receptionist",
      name: "AI Receptionist",
      what: "An AI front desk that answers calls, texts, and form fills, qualifies the lead, and books the appointment, day or night.",
      whoFor: "Businesses missing calls, texts, or after-hours leads while they're busy on the job.",
      problem: "Calls go to voicemail and after-hours leads go cold while you're on a job.",
      howAI: "AI responds in seconds, answers common questions, captures job details, and guides the lead to a booked time, with owner notifications when a real person is needed.",
      gets: [
        "Missed-call text-back so leads don't bounce",
        "Around-the-clock answering and qualification",
        "Appointments booked straight to your calendar",
        "Fewer leads lost to slow response",
      ],
    },
    {
      id: "ads-booking-system",
      name: "Ads + Booking",
      what: "A focused ad-to-booking funnel that turns paid traffic into qualified, ready-to-book conversations.",
      whoFor: "Businesses running ads, or about to, that want more booked jobs from the same spend.",
      problem: "Ads bring clicks, but generic pages and slow follow-up waste the spend.",
      howAI: "A service-specific landing page and short form feed an AI follow-up and booking flow that qualifies and schedules leads automatically.",
      gets: [
        "A high-intent landing page and lead form",
        "AI qualification of every lead",
        "Automated follow-up and appointment booking",
        "More of your ad spend turned into booked jobs",
      ],
    },
    {
      id: "local-visibility",
      name: "Local Visibility",
      what: "Systems that keep your Google Business Profile, reviews, and local search presence working for you.",
      whoFor: "Local businesses that want to show up, look trustworthy, and win nearby customers.",
      problem: "Nearby customers find other companies first, and reviews dry up.",
      howAI: "AI helps request and respond to reviews, keep your listings consistent, and surface local search opportunities, so you show up and look trustworthy.",
      gets: [
        "Google Business Profile support",
        "Automated review requests and responses",
        "Consistent local listings across the web",
        "More nearby customers finding you first",
      ],
    },
    {
      id: "full-growth-system",
      name: "Full Growth System",
      what: "Every piece connected into one AI-powered system for leads, booking, follow-up, reviews, and CRM updates.",
      whoFor: "Businesses ready to connect everything into one system instead of piecing tools together.",
      problem: "Point solutions don't talk to each other, so opportunities still slip through.",
      howAI: "Lead capture, the AI receptionist, ads and booking, follow-up, and local visibility run as one workflow, with your team trained to operate it.",
      gets: [
        "One connected system instead of scattered tools",
        "Lead capture through to a booked job",
        "Automated follow-up, reviews, and CRM updates",
        "Team training so the system actually sticks",
      ],
    },
  ] satisfies ServiceOffer[],
  cta: {
    heading: "Not sure which fits your business?",
    body: "Book a free AI audit. We'll look at how you work today, show where AI can save time, and recommend what makes sense, with no pressure and no promises about specific results.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
  },
};

/* -------------------- AI LEARNING + IMPLEMENTATION (HUB) -------------------- */
// The /ai-implementation page — the education hub for the flagship "AI Business
// Education + Implementation" offer. Content-driven so lessons, modules, and
// FAQs grow here without touching the page or components.
//
// VIDEO PLACEHOLDERS (swap when videos are recorded): every lesson and the
// featured overview ship with the `LessonVideo` slot below but no source yet —
// `status: "coming-soon"`, `videoUrl: null`. To put one live later, set
// `status: "available"`, a `videoType` ("youtube" | "vimeo" | "loom" | "file"),
// the `videoUrl`, and an optional `duration`. The card/box flips from the honest
// placeholder to a real embed with no structural change.

export type LessonVideoStatus = "coming-soon" | "available";
export type LessonVideoType = "youtube" | "vimeo" | "loom" | "file" | null;

/** Future-ready video slot for a lesson or the featured overview. */
export type LessonVideo = {
  status: LessonVideoStatus;
  videoType: LessonVideoType;
  /** Embed URL (YouTube/Vimeo/Loom) or a /public file path — null until recorded. */
  videoUrl: string | null;
  /** Human-readable length once known, e.g. "6 min" — null until recorded. */
  duration: string | null;
};

/** A mini-lesson card in the learning library. */
export type Lesson = {
  number: number;
  category: string;
  title: string;
  description: string;
  takeaways: string[];
  video: LessonVideo;
};

/** A phase in the Learn → … → Improve implementation roadmap. */
export type RoadmapStep = { title: string; body: string };

/** An implementation module surfaced as a card. `id` matches a `servicesPage`
 *  offer id so the card can deep-link to /services#<id>. */
export type ImplementationModule = { id: string; name: string; blurb: string };

// Reusable "not recorded yet" video state — every slot starts here.
const comingSoonVideo: LessonVideo = {
  status: "coming-soon",
  videoType: null,
  videoUrl: null,
  duration: null,
};

export const aiImplementation = {
  hero: {
    eyebrow: "AI Learning Hub",
    headline: "AI Business Education + Implementation",
    subheadline:
      "Atlas Leads helps local businesses learn where AI actually fits — then implements the systems that save you time, respond to leads faster, and turn more of them into booked appointments. Education first, working systems second.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "View Mini Lessons", href: "#lessons" },
    trustLine:
      "Plain-English lessons for local business owners — no jargon, no hype, and no AI experience needed.",
  } satisfies Hero,

  // Featured overview — the large placeholder at the top of the hub. Set
  // `featured.video` fields to embed the real overview later.
  featured: {
    eyebrow: "Featured lesson",
    title: "How AI Can Actually Help a Local Business",
    blurb:
      "A plain-English overview of where AI fits in a local business — the day-to-day admin it takes off your plate, the calls and leads it helps you catch, and how a practical implementation actually comes together.",
    placeholder: "Featured overview video coming soon",
    video: comingSoonVideo,
  },

  lessonsHeading: "Mini Lesson Library",
  lessonsIntro:
    "Short, practical lessons that show local business owners where AI fits and what it changes day to day. Watch them in order or jump to what matters most — each one ends with a few clear takeaways.",
  lessonsNote:
    "Videos are being recorded now — each lesson below will play right here as soon as it's ready.",
  lessons: [
    {
      number: 1,
      category: "Getting Started",
      title: "How AI Can Help a Local Business Without Overcomplicating It",
      description:
        "Where AI realistically fits in a local business, and how to add it without disrupting how you already work.",
      takeaways: [
        "Where AI saves the most admin time first",
        "Why you don't have to replace your current tools to start",
        "How to keep it simple and skip the over-engineering",
      ],
      video: comingSoonVideo,
    },
    {
      number: 2,
      category: "Strategy",
      title: "How to Find the Best AI Opportunities in Your Business",
      description:
        "A simple way to spot the tasks and gaps where AI will pay off most — before spending a dollar on tools.",
      takeaways: [
        "How to audit where your time and leads actually go",
        "Which tasks are worth automating, and which aren't",
        "How to rank opportunities by value, not hype",
      ],
      video: comingSoonVideo,
    },
    {
      number: 3,
      category: "Implementation",
      title: "What Happens During an AI Implementation Project",
      description:
        "A behind-the-scenes look at how an Atlas Leads implementation goes from audit to live systems, step by step.",
      takeaways: [
        "What we set up and connect for you",
        "How your team gets trained to use it",
        "How we test and keep improving after launch",
      ],
      video: comingSoonVideo,
    },
  ] satisfies Lesson[],

  // Implementation roadmap — the arc from first lesson to live systems. Atlas
  // Leads doesn't stop at generic AI theory; every stage points at the
  // highest-value use cases and the real systems built around them.
  roadmapHeading: "From Learning to Live Systems",
  roadmapIntro:
    "We don't just teach generic AI concepts. The point of every lesson and every audit is to find the highest-value use cases in your business — then build real systems around them. Here's the path from first lesson to working software.",
  roadmap: [
    {
      title: "Learn",
      body: "We start by teaching you and your team what AI can and can't do for a business like yours — in plain English, no jargon.",
    },
    {
      title: "Audit",
      body: "We map how your business runs today: calls, leads, follow-up, admin, and operations, so we see the full picture.",
    },
    {
      title: "Opportunity Map",
      body: "We rank where AI can save the most time and capture the most leads, so effort goes to the highest-value use cases first.",
    },
    {
      title: "Build",
      body: "We build or connect the systems around those opportunities and fit them into how you already work.",
    },
    {
      title: "Test",
      body: "We test each system against real scenarios and refine it before it ever touches a live customer.",
    },
    {
      title: "Launch",
      body: "We roll it out and train your team, so everyone knows how to use it with confidence.",
    },
    {
      title: "Improve",
      body: "We keep refining and supporting the systems over time, so they keep working as your business grows.",
    },
  ] satisfies RoadmapStep[],

  modulesHeading: "Implementation Modules",
  modulesIntro:
    "These are the systems we implement inside the AI Business Education + Implementation engagement — switched on based on what your audit shows will help most, not sold as disconnected services.",
  modules: [
    {
      id: "ai-receptionist",
      name: "AI Receptionist",
      blurb:
        "Answers calls, texts, and form fills, qualifies the lead, and books the appointment — day or night, so you stop missing work.",
    },
    {
      id: "ads-booking-system",
      name: "Ads + Booking",
      blurb:
        "Turns paid traffic into qualified, ready-to-book conversations instead of cold clicks that go nowhere.",
    },
    {
      id: "local-visibility",
      name: "Local Visibility",
      blurb:
        "Keeps your listings, reviews, and local search presence working for you, so nearby customers find and trust you first.",
    },
    {
      id: "full-growth-system",
      name: "Full Growth System",
      blurb:
        "Connects every piece — leads, booking, follow-up, and reviews — into one AI-powered system your team is trained to run.",
    },
  ] satisfies ImplementationModule[],

  faqHeading: "Common Questions",
  faq: [
    {
      q: "Do I need to understand AI before working with Atlas Leads?",
      a: "No. That's the whole point of the education side — we explain what AI does for your business in plain English before anything gets built. You bring the knowledge of how your business runs; we bring the AI.",
    },
    {
      q: "Will this replace my employees?",
      a: "No. The goal is to take repetitive admin and after-hours gaps off your team's plate, not replace them. Your people stay focused on the work that needs a human; AI handles the busywork and the leads no one had time to answer.",
    },
    {
      q: "What kind of businesses is this for?",
      a: "Local, service-based businesses — home services, trades, clinics, and similar owner-run operations that handle calls, leads, bookings, and follow-up. If you're losing time to admin or losing leads to slow response, it fits.",
    },
    {
      q: "Do I need a CRM already?",
      a: "No. If you have one, we work with it. If you don't, we'll help you put a simple one in place as part of the implementation, so your leads and follow-up finally live in one spot.",
    },
    {
      q: "What happens after the free AI audit?",
      a: "You get a clear, prioritized map of where AI can help most — no obligation. If it makes sense to move forward, we start with the highest-value system first. If it doesn't, we'll tell you that too.",
    },
    {
      q: "Can we start with one system first?",
      a: "Yes, and most owners do. We usually start with the single highest-value opportunity from your audit — often the AI receptionist or follow-up — prove it works, then expand only when you're ready.",
    },
  ] satisfies FaqItem[],

  finalCta: {
    heading: "Want to see where AI fits in your business?",
    body: "Book a Free AI Business Audit and we'll help identify the highest-value opportunities before building anything.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "View Services", href: "/services" },
  },
};

/* --------------------------- SHARED SHAPE FOR TRADES --------------------------- */

export type TradePage = {
  hero: Hero;
  painHeading: string;
  pains: string[];
  painClosing: string;
  offerHeading: string;
  offerIntro: string;
  offer: LedBullet[];
  offerClosing: string;
  stepsHeading: string;
  steps: Step[];
  whyLose: ProseBlock;
  whyLoseClosing: string;
  helpsHeading: string;
  helps: LedBullet[];
  helpsClosing: string;
  midCta: { heading: string; body: string; primaryCta: CTA; secondaryCta: CTA };
  faqHeading: string;
  faq: FaqItem[];
  closing: { heading: string; body: string[]; emphasis: string; cta: CTA };
};

/* --------------------------------- PLUMBING -------------------------------- */

export const plumbing: TradePage = {
  hero: {
    headline: "Catch More Plumbing Leads — Without Chasing Every Call Yourself",
    subheadline:
      "We set up a lead and appointment system shaped around plumbing companies, so missed calls get a fast reply, leads get answered quickly, and more jobs have a chance to land on your calendar.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
    trustLine: "Built for plumbers. Set up and run for you. No tech to learn.",
  },
  painHeading: "Sound Familiar?",
  pains: [
    "You're elbow-deep in a job when three calls come in — and you can't answer any of them.",
    "An emergency lead calls at 11 PM, gets voicemail, and rings the next plumber on the list.",
    "A quote for a big repipe goes out, no one follows up, and it quietly disappears.",
    "You spend on ads, but some of the leads never get a fast enough callback.",
    "New customers searching nearby find other companies before they find you.",
  ],
  painClosing:
    "In plumbing, the fastest response often wins the job. When you're on the tools, you can't be the fastest — but a system can answer the moment a call comes in.",
  offerHeading: "Your Plumbing Lead & Appointment Setup",
  offerIntro:
    "We set up and run a system designed to capture, respond to, and help book more of your plumbing leads:",
  offer: [
    { lead: "Missed-Call Text-Back", rest: " so emergency and service calls don't go cold" },
    { lead: "Around-the-Clock AI Receptionist", rest: " to answer questions and capture job details after hours" },
    { lead: "Fast Lead Response", rest: " for every form, ad lead, and inquiry" },
    { lead: "Automated Follow-Up", rest: " that keeps quotes from getting forgotten" },
    { lead: "Appointment Setting", rest: " that helps fill your calendar with real jobs" },
    { lead: "Local Visibility", rest: " improvements so more nearby homeowners find you" },
  ],
  offerClosing: "You stay on the tools. The system handles the catching and following up.",
  stepsHeading: "How the Plumbing Setup Works",
  steps: [
    {
      title: "Lead Audit",
      body: "We review how calls, forms, and ad leads come into your plumbing business and pinpoint where jobs are slipping away.",
    },
    {
      title: "System Install",
      body: "We set up missed-call text-back, fast response, your AI receptionist, follow-up, and local visibility — done for you.",
    },
    {
      title: "Booked Jobs",
      body: "Leads get answered and followed up quickly, so more emergency calls, service jobs, and bigger installs have the chance to become appointments.",
    },
  ],
  whyLose: {
    heading: "It's Usually Not the Marketing — It's the Handoff",
    intro: [
      "Most plumbers don't lose leads because their ads are bad. They lose them because:",
    ],
    bullets: [
      "They physically can't answer the phone while working.",
      "Voicemails and after-hours calls go unreturned.",
      "Quotes get sent and then forgotten — no follow-up.",
      "Web leads sit for hours before anyone responds.",
      "A competitor simply called back first.",
    ],
  },
  whyLoseClosing:
    "Plumbing customers — especially emergencies — tend to book whoever responds fastest. The system is built so that can be you.",
  helpsHeading: "How the System Helps With Plumbing Jobs",
  helps: [
    { lead: "Emergency calls get a fast reply", rest: ", even when you're on a job, so high-value work doesn't walk." },
    { lead: "Quotes get followed up automatically", rest: ", so fewer of them get forgotten." },
    { lead: "After-hours leads get answered", rest: ", instead of waiting in a voicemail box until morning." },
    { lead: "Ad leads get worked harder", rest: ", giving your existing marketing spend a better shot." },
    { lead: "You show up more in local search", rest: ", putting your business in front of more nearby homeowners." },
  ],
  helpsClosing:
    "It's built to plug the leaks, so more of the leads you already get have a chance to become paid work.",
  midCta: {
    heading: "Let's Look at Where Plumbing Jobs Are Slipping",
    body: "Book a free call. We'll walk through your current lead pipeline and show you how the plumbing setup would work for your business.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
  },
  faqHeading: "Common Questions",
  faq: [
    {
      q: "Will this work for emergency and after-hours calls?",
      a: "Yes — that's a big part of the point. Missed-call text-back and the AI receptionist are set up to catch late-night and overflow calls instead of losing them to voicemail.",
    },
    {
      q: "Do I have to change how my team takes calls?",
      a: "No. The system works behind your current phone and website. It steps in to catch what you'd otherwise miss.",
    },
    {
      q: "I already get plenty of leads. Do I need this?",
      a: "If you're getting leads but not booking all of them, this is built to help with exactly that — capturing and following up with more of the ones you already get.",
    },
    {
      q: "When does it start working?",
      a: "Once the system is live, it starts catching missed calls and responding to new leads right away.",
    },
    {
      q: "Is there a long contract?",
      a: "No long-term lock-in. We're new and would rather earn the relationship.",
    },
  ],
  closing: {
    heading: "A Missed Call Can Be a Job That Went Elsewhere",
    body: [
      "You spend time, money, and effort to make the phone ring. Slow follow-up can hand those jobs to the plumber down the street.",
      "We'll set up a system built to catch leads, respond quickly, and follow up — so more of your hard-earned marketing has the chance to turn into booked work.",
    ],
    emphasis:
      "Book a free call. It costs nothing, and you'll leave with a clearer picture of where your leads are going and how to keep more of them.",
    cta: { label: "Book a Free AI Business Audit", href: "/book" },
  },
};

/* -------------------------------- ELECTRICAL ------------------------------- */

export const electrical: TradePage = {
  hero: {
    headline: "Catch More Electrical Leads — Without Letting Calls Slip Past",
    subheadline:
      "We set up a lead and appointment system shaped around electrical companies, so missed calls get a fast reply, leads get answered quickly, and more panel upgrades, rewires, and service calls have a chance to land on your calendar.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
    trustLine: "Built for electricians. Set up and run for you. No tech to learn.",
  },
  painHeading: "Sound Familiar?",
  pains: [
    "You're mid-install when calls stack up — and there's no one free to answer.",
    "A homeowner needing a panel upgrade calls, gets voicemail, and hires whoever picked up.",
    "A big EV-charger or rewire quote goes out… and nobody follows up.",
    "Your ads bring in leads, but slow callbacks let some go cold.",
    "Customers searching nearby find other companies before they find you.",
  ],
  painClosing:
    "Electrical jobs are high-value, so every lost lead stings more. Speed and follow-up often decide who gets the work.",
  offerHeading: "Your Electrical Lead & Appointment Setup",
  offerIntro:
    "We set up and run a system designed to capture, respond to, and help book more of your electrical leads:",
  offer: [
    { lead: "Missed-Call Text-Back", rest: " so service and emergency calls don't bounce" },
    { lead: "Around-the-Clock AI Receptionist", rest: " to handle questions and capture job details anytime" },
    { lead: "Fast Lead Response", rest: " for every form, ad lead, and inquiry" },
    { lead: "Automated Follow-Up", rest: " that keeps high-ticket quotes from going quiet" },
    { lead: "Appointment Setting", rest: " that helps fill your calendar with real work" },
    { lead: "Local Visibility", rest: " improvements so more nearby homeowners find you" },
  ],
  offerClosing: "You focus on the work. The system handles the catching and following up.",
  stepsHeading: "How the Electrical Setup Works",
  steps: [
    {
      title: "Lead Audit",
      body: "We review how calls, forms, and ad leads come into your electrical business and find where jobs are getting lost.",
    },
    {
      title: "System Install",
      body: "We set up missed-call text-back, fast response, your AI receptionist, follow-up, and local visibility — done for you.",
    },
    {
      title: "Booked Jobs",
      body: "Leads get answered and followed up quickly, so more panel upgrades, rewires, EV installs, and service calls have the chance to become appointments.",
    },
  ],
  whyLose: {
    heading: "The Leads Are There — They Slip Through the Cracks",
    intro: ["Most electricians don't have a traffic problem. They lose jobs because:"],
    bullets: [
      "They can't safely answer the phone while working live circuits.",
      "After-hours and overflow calls go to voicemail and don't get returned.",
      "High-value quotes get sent once and never followed up.",
      "Web and ad leads wait hours for a callback.",
      "A faster-responding competitor books the job first.",
    ],
  },
  whyLoseClosing:
    "Because electrical jobs are bigger tickets, each lost lead costs more. The system is built to keep those leads from getting away.",
  helpsHeading: "How the System Helps With Electrical Jobs",
  helps: [
    { lead: "Service and emergency calls get a fast reply", rest: ", even when your hands are full." },
    { lead: "Big-ticket quotes get followed up automatically", rest: ", so fewer high-value jobs go quiet." },
    { lead: "After-hours leads get answered", rest: ", instead of sitting overnight." },
    { lead: "Ad leads get worked harder", rest: ", helping your marketing budget go further." },
    { lead: "You show up more in local search", rest: ", putting your business in front of more homeowners." },
  ],
  helpsClosing:
    "It's built to seal the gaps, so the high-value leads you already generate have a better chance of becoming paid jobs.",
  midCta: {
    heading: "Let's Look at Where Electrical Jobs Are Slipping",
    body: "Book a free call. We'll review your current lead pipeline and show you how the electrical setup would work for your business.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
  },
  faqHeading: "Common Questions",
  faq: [
    {
      q: "Will this help with high-ticket jobs like panel upgrades and rewires?",
      a: "Those are exactly the leads worth following up on carefully, and the system is set up to follow up automatically so big quotes don't go quiet.",
    },
    {
      q: "Do I need to change how I run my calls?",
      a: "No. It works behind your existing phone and website, stepping in only to catch what you'd otherwise miss.",
    },
    {
      q: "I already get leads from ads. Why do I need this?",
      a: "If those leads aren't all turning into booked jobs, this is designed to help close that gap and get more out of your spend.",
    },
    {
      q: "When does it start working?",
      a: "Once the system is live, it starts catching missed calls and responding to new leads right away.",
    },
    {
      q: "Am I locked into a contract?",
      a: "No long-term contract. We're new and focused on earning the relationship.",
    },
  ],
  closing: {
    heading: "High-Value Jobs Shouldn't Sit in Your Voicemail",
    body: [
      "Panel upgrades, rewires, and EV installs are worth too much to lose to a slow callback. That's how a lot of electrical leads quietly leak away.",
      "We'll set up a system built to catch leads, respond quickly, and follow up — so more of your biggest jobs have the chance to make it onto the calendar.",
    ],
    emphasis:
      "Book a free call. It's quick, it's free, and you'll leave knowing where your leads are slipping and how to keep more of them.",
    cta: { label: "Book a Free AI Business Audit", href: "/book" },
  },
};

/* ----------------------------------- HVAC ---------------------------------- */

export const hvac: TradePage = {
  hero: {
    headline: "Catch More HVAC Leads — Without Missing the No-Heat Calls",
    subheadline:
      "We set up a lead and appointment system shaped around HVAC companies, so missed calls get a fast reply, no-heat and no-cool emergencies get answered quickly, and more tune-ups, repairs, and system quotes have a chance to land on your calendar.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
    trustLine: "Built for HVAC pros. Set up and run for you. No tech to learn.",
  },
  painHeading: "Sound Familiar?",
  pains: [
    "You're mid-install on a rooftop when three calls come in — and you can't answer any of them.",
    "A no-heat call comes in at 10 PM, gets voicemail, and rings the next company on the list.",
    "A quote for a full system replacement goes out, no one follows up, and it quietly disappears.",
    "You spend on ads, but some of the leads never get a fast enough callback.",
    "New customers searching nearby find other companies before they find you.",
  ],
  painClosing:
    "When the heat or AC is out, customers book whoever responds first. When you're on the tools, you can't be the fastest — but a system can answer the moment a call comes in.",
  offerHeading: "Your HVAC Lead & Appointment Setup",
  offerIntro:
    "We set up and run a system designed to capture, respond to, and help book more of your HVAC leads:",
  offer: [
    { lead: "Missed-Call Text-Back", rest: " so no-heat and no-cool calls don't go cold" },
    { lead: "Around-the-Clock AI Receptionist", rest: " to answer questions and capture job details after hours" },
    { lead: "Fast Lead Response", rest: " for every form, ad lead, and inquiry" },
    { lead: "Automated Follow-Up", rest: " that keeps maintenance and system quotes from getting forgotten" },
    { lead: "Appointment Setting", rest: " that helps fill your calendar with real jobs" },
    { lead: "Local Visibility", rest: " improvements so more nearby homeowners find you" },
  ],
  offerClosing: "You stay on the job. The system handles the catching and following up.",
  stepsHeading: "How the HVAC Setup Works",
  steps: [
    {
      title: "Lead Audit",
      body: "We review how calls, forms, and ad leads come into your HVAC business and pinpoint where jobs are slipping away.",
    },
    {
      title: "System Install",
      body: "We set up missed-call text-back, fast response, your AI receptionist, follow-up, and local visibility — done for you.",
    },
    {
      title: "Booked Jobs",
      body: "Leads get answered and followed up quickly, so more emergency calls, tune-ups, and system replacements have the chance to become appointments.",
    },
  ],
  whyLose: {
    heading: "It's Usually Not the Marketing — It's the Handoff",
    intro: [
      "Most HVAC companies don't lose leads because their ads are bad. They lose them because:",
    ],
    bullets: [
      "They physically can't answer the phone while working.",
      "After-hours and overflow calls go to voicemail and don't get returned.",
      "System-replacement quotes get sent and then forgotten — no follow-up.",
      "Web and ad leads sit for hours before anyone responds.",
      "A competitor simply called back first.",
    ],
  },
  whyLoseClosing:
    "HVAC customers — especially no-heat and no-cool emergencies — tend to book whoever responds fastest. The system is built so that can be you.",
  helpsHeading: "How the System Helps With HVAC Jobs",
  helps: [
    { lead: "Emergency calls get a fast reply", rest: ", even when you're on a job, so urgent work doesn't walk." },
    { lead: "System quotes get followed up automatically", rest: ", so fewer big-ticket jobs go quiet." },
    { lead: "After-hours leads get answered", rest: ", instead of waiting in a voicemail box until morning." },
    { lead: "Ad leads get worked harder", rest: ", giving your existing marketing spend a better shot." },
    { lead: "You show up more in local search", rest: ", putting your business in front of more nearby homeowners." },
  ],
  helpsClosing:
    "It's built to plug the leaks, so more of the leads you already get have a chance to become paid work.",
  midCta: {
    heading: "Let's Look at Where HVAC Jobs Are Slipping",
    body: "Book a free call. We'll walk through your current lead pipeline and show you how the HVAC setup would work for your business.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
  },
  faqHeading: "Common Questions",
  faq: [
    {
      q: "Will this work for no-heat and after-hours emergency calls?",
      a: "Yes — that's a big part of the point. Missed-call text-back and the AI receptionist are set up to catch late-night and overflow calls instead of losing them to voicemail.",
    },
    {
      q: "Do I have to change how my team takes calls?",
      a: "No. The system works behind your current phone and website. It steps in to catch what you'd otherwise miss.",
    },
    {
      q: "Can it help with seasonal maintenance and tune-up bookings?",
      a: "Yes. It can respond to and follow up with maintenance and tune-up inquiries so more of them get onto your calendar, including during busy seasons.",
    },
    {
      q: "When does it start working?",
      a: "Once the system is live, it starts catching missed calls and responding to new leads right away.",
    },
    {
      q: "Is there a long contract?",
      a: "No long-term lock-in. We're new and would rather earn the relationship.",
    },
  ],
  closing: {
    heading: "A Missed Call Can Be a Job That Went Elsewhere",
    body: [
      "You spend time, money, and effort to make the phone ring. Slow follow-up can hand those jobs to the company across town.",
      "We'll set up a system built to catch leads, respond quickly, and follow up — so more of your hard-earned marketing has the chance to turn into booked work.",
    ],
    emphasis:
      "Book a free call. It costs nothing, and you'll leave with a clearer picture of where your leads are going and how to keep more of them.",
    cta: { label: "Book a Free AI Business Audit", href: "/book" },
  },
};

/* ------------------------------- PEST CONTROL ------------------------------ */

export const pestControl: TradePage = {
  hero: {
    headline: "Catch More Pest Control Leads — Without Letting Calls Slip Past",
    subheadline:
      "We set up a lead and appointment system shaped around pest control companies, so missed calls get a fast reply, urgent infestations get answered quickly, and more inspections and recurring-service jobs have a chance to land on your calendar.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
    trustLine: "Built for pest control pros. Set up and run for you. No tech to learn.",
  },
  painHeading: "Sound Familiar?",
  pains: [
    "You're mid-treatment at a customer's home when calls stack up — and there's no one free to answer.",
    "A homeowner who just spotted a serious infestation calls, gets voicemail, and hires whoever picks up.",
    "A quote for a recurring service plan goes out, no one follows up, and it quietly disappears.",
    "Your ads bring in leads, but slow callbacks let some go cold.",
    "Customers searching nearby find other companies before they find you.",
  ],
  painClosing:
    "When there's a pest problem, customers want it handled now and tend to book whoever responds first. When you're on a job, you can't be the fastest — but a system can answer the moment a call comes in.",
  offerHeading: "Your Pest Control Lead & Appointment Setup",
  offerIntro:
    "We set up and run a system designed to capture, respond to, and help book more of your pest control leads:",
  offer: [
    { lead: "Missed-Call Text-Back", rest: " so urgent infestation calls don't go cold" },
    { lead: "Around-the-Clock AI Receptionist", rest: " to answer questions and capture job details after hours" },
    { lead: "Fast Lead Response", rest: " for every form, ad lead, and inquiry" },
    { lead: "Automated Follow-Up", rest: " that keeps inspection and recurring-plan quotes from getting forgotten" },
    { lead: "Appointment Setting", rest: " that helps fill your calendar with real jobs" },
    { lead: "Local Visibility", rest: " improvements so more nearby homeowners find you" },
  ],
  offerClosing: "You stay on the job. The system handles the catching and following up.",
  stepsHeading: "How the Pest Control Setup Works",
  steps: [
    {
      title: "Lead Audit",
      body: "We review how calls, forms, and ad leads come into your pest control business and pinpoint where jobs are slipping away.",
    },
    {
      title: "System Install",
      body: "We set up missed-call text-back, fast response, your AI receptionist, follow-up, and local visibility — done for you.",
    },
    {
      title: "Booked Jobs",
      body: "Leads get answered and followed up quickly, so more inspections, one-time treatments, and recurring-service plans have the chance to become appointments.",
    },
  ],
  whyLose: {
    heading: "It's Usually Not the Marketing — It's the Handoff",
    intro: [
      "Most pest control companies don't lose leads because their ads are bad. They lose them because:",
    ],
    bullets: [
      "They physically can't answer the phone while treating a property.",
      "After-hours and overflow calls go to voicemail and don't get returned.",
      "Recurring-plan and inspection quotes get sent and then forgotten — no follow-up.",
      "Web and ad leads sit for hours before anyone responds.",
      "A competitor simply called back first.",
    ],
  },
  whyLoseClosing:
    "Pest control customers — especially urgent infestations — tend to book whoever responds fastest. The system is built so that can be you.",
  helpsHeading: "How the System Helps With Pest Control Jobs",
  helps: [
    { lead: "Urgent infestation calls get a fast reply", rest: ", even when you're on a job, so the work doesn't walk." },
    { lead: "Recurring-plan quotes get followed up automatically", rest: ", so fewer ongoing jobs go quiet." },
    { lead: "After-hours leads get answered", rest: ", instead of waiting in a voicemail box until morning." },
    { lead: "Ad leads get worked harder", rest: ", giving your existing marketing spend a better shot." },
    { lead: "You show up more in local search", rest: ", putting your business in front of more nearby homeowners." },
  ],
  helpsClosing:
    "It's built to plug the leaks, so more of the leads you already get have a chance to become paid work.",
  midCta: {
    heading: "Let's Look at Where Pest Control Jobs Are Slipping",
    body: "Book a free call. We'll walk through your current lead pipeline and show you how the pest control setup would work for your business.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
  },
  faqHeading: "Common Questions",
  faq: [
    {
      q: "Will this work for urgent infestations and after-hours calls?",
      a: "Yes — that's a big part of the point. Missed-call text-back and the AI receptionist are set up to catch late-night and overflow calls instead of losing them to voicemail.",
    },
    {
      q: "Do I have to change how my team takes calls?",
      a: "No. The system works behind your current phone and website. It steps in to catch what you'd otherwise miss.",
    },
    {
      q: "Can it help book recurring and seasonal service plans?",
      a: "Yes. It can respond to and follow up with inquiries about recurring or seasonal plans so more of them get onto your calendar.",
    },
    {
      q: "When does it start working?",
      a: "Once the system is live, it starts catching missed calls and responding to new leads right away.",
    },
    {
      q: "Is there a long contract?",
      a: "No long-term lock-in. We're new and would rather earn the relationship.",
    },
  ],
  closing: {
    heading: "A Missed Call Can Be a Job That Went Elsewhere",
    body: [
      "You spend time, money, and effort to make the phone ring. Slow follow-up can hand those jobs to the company across town.",
      "We'll set up a system built to catch leads, respond quickly, and follow up — so more of your hard-earned marketing has the chance to turn into booked work.",
    ],
    emphasis:
      "Book a free call. It costs nothing, and you'll leave with a clearer picture of where your leads are going and how to keep more of them.",
    cta: { label: "Book a Free AI Business Audit", href: "/book" },
  },
};

/* ------------------------------- HOW IT WORKS ------------------------------ */
// Replaces the old /results page. Carries credibility through clarity — a plain
// explanation of the three systems. No metrics, no testimonials, no claims.

export const howItWorks = {
  hero: {
    heading: "How We Teach and Implement AI",
    body: "No jargon, no black box. We audit how your business runs, show you where AI helps, teach your team, then build, connect, and support the systems that do the work.",
  },

  flowHeading: "Where a Lead Goes",
  flowIntro:
    "Lead capture and follow-up is one of the most common systems we implement. Once it's live, here's the path it moves a new lead along — whether it starts as a call, a text, or a form fill.",
  flow: [
    {
      title: "A lead comes in",
      body: "Someone calls, texts, or fills out a form from your ads, your website, or local search.",
    },
    {
      title: "It gets answered fast",
      body: "If you can't pick up, the system replies in seconds — by text or chat — so the lead doesn't go cold.",
    },
    {
      title: "Details get captured",
      body: "The AI receptionist answers common questions and collects the key job details you'd want to know.",
    },
    {
      title: "An appointment gets booked",
      body: "The lead is guided toward booking a time, and the appointment lands on your calendar.",
    },
    {
      title: "Follow-up keeps it warm",
      body: "Leads who don't book right away get followed up automatically, so quotes don't get forgotten.",
    },
  ] satisfies Step[],

  expectHeading: "What Working With Us Looks Like",
  expect: [
    {
      lead: "We start with an audit of how your business runs.",
      rest: " Before anything gets built, we map how calls, leads, follow-up, and day-to-day work happen — and where AI can help.",
    },
    {
      lead: "We set it up for you.",
      rest: " You don't install or manage anything. We build the systems and connect them to your phone and website.",
    },
    {
      lead: "It runs in the background.",
      rest: " Once it's live, it works behind your existing setup without changing your day-to-day.",
    },
    {
      lead: "We stay in touch.",
      rest: " You deal with us directly, and we adjust things as we learn how leads come into your business.",
    },
  ] satisfies LedBullet[],

  honesty: {
    heading: "A Straight Word on Where We Are",
    body: [
      "We're an early-stage agency. We're not going to show you fake reviews, borrowed logos, or numbers we can't stand behind.",
      "What we can do is explain the systems clearly, set them up properly, and be honest about what they can and can't do. If that's the kind of partner you want, let's talk.",
    ],
  },

  cta: {
    heading: "Want to See How This Fits Your Business?",
    body: "Book a free AI Business Audit and we'll walk through how your business runs today, where AI can save you time and money, and what implementing it would look like.",
    primaryCta: { label: "Book a Free AI Business Audit", href: "/book" },
    secondaryCta: { label: "View Services", href: "/services" },
  },
};

/* ---------------------------------- BOOK ----------------------------------- */

export const book = {
  // Small uppercase label above the heading — frames the call as a focused
  // review of the prospect's lead pipeline, not a generic sales consultation.
  eyebrow: "Free AI Business Audit · 15–30 Minutes",
  heading: "Book a Free AI Business Audit",
  body: "On a short call we look at how your business runs today, find the missed leads, slow follow-up, and repetitive manual work that costs you time, and show where AI can save time and modernize your operations. You'll leave with a clear, practical picture of what to implement — before anyone tries to sell you anything.",
  // Who the audit is for, the no-pressure framing, and the checklist we run.
  whoFor:
    "For local business owners who are curious about AI but want a clear, practical starting point, not a hard sell.",
  reassurance:
    "This is a practical AI and business audit, not a high-pressure sales call. We'll tell you what's worth doing, including the things you can handle yourself.",
  lookFor: [
    "Missed leads and calls that never get a callback",
    "Slow follow-up that lets quotes and inquiries go cold",
    "Repetitive manual work eating your team's time",
    "Booking gaps where appointments slip away",
    "Review and reputation gaps that cost you trust",
  ],
  // What to expect on the call (sets honest expectations, no outcome claims).
  expect: [
    "A look at how calls, messages, and leads reach your business today",
    "Where leads get missed, follow-up is slow, or manual work is eating time",
    "Where AI can save time and improve your day-to-day operations",
    "A straight recommendation on what systems make sense, with no pressure and no promises about specific results",
  ],

  contacts: {
    heading: "Prefer email? Reach us directly",
    intro:
      "You'll always deal with us — the two people doing the work. Use the general inbox, or email either of us directly.",
    general: { label: "General inquiries", email: site.footer.contact },
    founders: [
      { name: "Hayden", role: "Co-founder", email: "hayden@atlasaileads.com" },
      { name: "Derrick", role: "Co-founder", email: "derrick@atlasaileads.com" },
    ],
  },

  // How visitors can choose to meet. Each option links to its own booking link.
  // PLACEHOLDER booking links — replace the three `href` values below with your
  // real scheduler/links. They are the single place to update these.
  meeting: {
    heading: "Choose how you'd like to meet",
    intro:
      "Pick whatever is easiest for you. Every option is a no-pressure conversation about your business and how the systems would fit.",
    options: [
      {
        id: "phone",
        title: "Phone Call",
        description:
          "Quick 15–30 minute call to understand your business, lead pipeline, and appointment-setting needs.",
        cta: "Book a Phone Call",
        href: "[ADD PHONE CALL BOOKING LINK]",
      },
      {
        id: "zoom",
        title: "Zoom Meeting",
        description:
          "Screen-share walkthrough where we can explain the system, show examples, and answer questions.",
        cta: "Book a Zoom Meeting",
        href: "[ADD ZOOM BOOKING LINK]",
      },
      {
        id: "in-person",
        title: "In-Person Meeting",
        description:
          "For local businesses that prefer to meet face-to-face. Available by request in our service area.",
        cta: "Request In-Person Meeting",
        href: "[ADD IN-PERSON REQUEST LINK]",
      },
    ],
    // Contact form — fields, choices, and labels.
    form: {
      heading: "Prefer we reach out? Request a meeting",
      note: "Tell us a bit about your business and how you'd like to meet, and we'll follow up to set a time.",
      // Broad set of local-business categories for the booking form's Industry
      // select. Ends with "Other Local Business" so no one is blocked if their
      // exact industry isn't listed.
      industries: [
        "Plumbing",
        "Electrical",
        "HVAC",
        "Roofing",
        "Pest Control",
        "Landscaping / Lawn Care",
        "Tree Service",
        "Cleaning Services",
        "Junk Removal",
        "Painting",
        "Flooring",
        "Remodeling / General Contracting",
        "Concrete / Masonry",
        "Garage Door Services",
        "Pool / Spa Services",
        "Auto Repair",
        "Car Dealership",
        "Real Estate",
        "Property Management",
        "Insurance",
        "Financial Services",
        "Legal Services",
        "Medical / Dental",
        "Med Spa / Wellness",
        "Fitness / Personal Training",
        "Restaurants / Food Service",
        "Retail / Local Shop",
        "Home Services",
        "Professional Services",
        "Other Local Business",
      ],
      meetingTypes: ["Phone Call", "Zoom Meeting", "In-Person Meeting"],
      submitLabel: "Request Meeting",
    },
  },
};

/* --------------------------------- PRIVACY --------------------------------- */
// Plain-English privacy policy for Atlas Leads LLC, rendered at /privacy.

export type PolicySection = { heading: string; body?: string[]; bullets?: string[]; link?: { label: string; href: string } };

export type Privacy = {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: PolicySection[];
  contact: { heading: string; intro: string; legalName: string; email: string; website: string };
};

export const privacy: Privacy = {
  title: "Privacy Policy",
  lastUpdated: "June 30, 2026",
  intro: [
    "Atlas Leads LLC (“Atlas Leads,” “we,” “us,” or “our”) provides AI Business Education and Implementation for local businesses through our website at atlasaileads.com.",
    "This Privacy Policy explains, in plain English, what information we collect, how we collect and use it, who we share it with, and the choices you have. If anything here is unclear, email us at hello@atlasaileads.com and we’ll be glad to explain.",
  ],
  sections: [
    {
      heading: "Information We Collect",
      body: [
        "We only collect the information you choose to share with us when you contact us, book a call, or request an AI Opportunity Audit. That typically includes:",
      ],
      bullets: [
        "Your name",
        "Your email address",
        "Your phone number",
        "Your business name",
        "Your website URL",
        "The details of your inquiry or message",
        "Booking details, such as your preferred meeting type and time",
        "Basic website analytics and device data (such as pages viewed or browser type), only if analytics tools are in use",
      ],
    },
    {
      heading: "How We Collect Information",
      body: ["We collect information directly from you, and in a few automated ways:"],
      bullets: [
        "Website forms you fill out",
        "Booking and contact forms you submit",
        "Emails you send us",
        "Calls or messages you have with us",
        "Analytics tools, if present on the website, which may collect basic usage data automatically",
      ],
    },
    {
      heading: "How We Use Information",
      body: ["We use your information to run our business and help you — specifically to:"],
      bullets: [
        "Respond to your inquiries and questions",
        "Schedule calls and audits",
        "Prepare your AI Opportunity Audit",
        "Provide recommendations tailored to your business",
        "Deliver the services you ask us for",
        "Improve our website and services",
        "Send relevant follow-up communications about your inquiry or our services",
      ],
    },
    {
      heading: "How We Share Information",
      body: [
        "We do not sell your information. We share it only with the service providers and tools that help us operate, and only as needed to serve you. These may include:",
      ],
      bullets: [
        "Website hosting providers",
        "Email providers",
        "Scheduling tools",
        "CRM and other tools we use to manage inquiries",
        "Analytics providers, if present",
        "AI and software tools we use to help prepare audits or recommendations",
        "Legal or compliance recipients, if required by law or to protect our rights",
      ],
    },
    {
      heading: "We Do Not Sell Your Information",
      body: [
        "Atlas Leads does not sell your personal information, and we do not rent or trade it. We share information only as described in this policy to operate our business and provide what you’ve asked for.",
      ],
    },
    {
      heading: "Sensitive Information",
      body: [
        "We do not intentionally collect sensitive personal information — such as government ID numbers, financial account details, or health information. Please don’t include sensitive details in your messages or forms; they aren’t needed for an inquiry or an audit.",
      ],
    },
    {
      heading: "Children’s Privacy",
      body: [
        "Our website and services are intended for business owners and are not directed to children. We do not knowingly collect personal information from children under 13. If you believe a child has provided us information, email hello@atlasaileads.com and we’ll delete it.",
      ],
    },
    {
      heading: "Data Retention",
      body: [
        "We keep your information only as long as we need it for the purposes described in this policy — for example, to respond to your inquiry, deliver services, and keep basic business records — or as required by law. When we no longer need it, we take reasonable steps to delete it or remove details that identify you. You can ask us to delete your information at any time (see Your Choices and Rights).",
      ],
    },
    {
      heading: "Security",
      body: [
        "We take reasonable steps to protect the information you share with us and to guard against unauthorized access. That said, no website, email, or online system is completely secure, so we can’t guarantee absolute security. Please avoid sending sensitive information through online forms or email.",
      ],
    },
    {
      heading: "Your Choices and Rights",
      body: ["You’re in control of your information. At any time, you can:"],
      bullets: [
        "Request access to the personal information we hold about you",
        "Request that we correct information that’s inaccurate or out of date",
        "Request that we delete your personal information",
        "Opt out of marketing or follow-up emails (use the unsubscribe link, or just ask us)",
        "Contact us with any privacy question at hello@atlasaileads.com",
      ],
    },
    {
      heading: "Changes to This Policy",
      body: [
        "We may update this Privacy Policy from time to time. When we do, we’ll revise the “Last updated” date at the top of this page, and any significant changes will be reflected here.",
      ],
    },
  ],
  contact: {
    heading: "Contact Us",
    intro: "Questions about this policy or the information we hold? We’re happy to help.",
    legalName: "Atlas Leads LLC",
    email: "hello@atlasaileads.com",
    website: "atlasaileads.com",
  },
};

/* ---------------------------------- TERMS ---------------------------------- */
// Plain-English terms and conditions for Atlas Leads LLC, rendered at /terms.
// Reuses the shared Privacy/PolicySection shape (the same policy-page architecture).

export const terms: Privacy = {
  title: "Terms and Conditions",
  lastUpdated: "June 30, 2026",
  intro: [
    "These Terms and Conditions (“Terms”) govern your use of atlasaileads.com, operated by Atlas Leads LLC (“Atlas Leads,” “we,” “us,” or “our”).",
    "Please read them carefully. If you have any questions, email us at hello@atlasaileads.com.",
  ],
  sections: [
    {
      heading: "1. Acceptance of Terms",
      body: [
        "By accessing or using atlasaileads.com, you agree to these Terms. If you don’t agree with them, please don’t use the website.",
      ],
    },
    {
      heading: "2. About Atlas Leads",
      body: [
        "Atlas Leads LLC provides AI Business Education and Implementation for local businesses — helping owners understand AI and put practical systems to work. You can reach us anytime at hello@atlasaileads.com.",
      ],
    },
    {
      heading: "3. Website Content",
      body: [
        "The content on this website — including demos, examples, audit descriptions, and educational materials — is provided for general informational purposes only. It explains what we do and how AI can help a business; it is not a guarantee of specific results.",
      ],
    },
    {
      heading: "4. No Guaranteed Results",
      body: [
        "We do not guarantee specific numbers of leads, booked appointments, revenue, search rankings, cost savings, response rates, or any other business outcomes. Results depend on many factors outside our control, including:",
      ],
      bullets: [
        "Your market and local customer demand",
        "Your offer, pricing, and budget",
        "How quickly you respond to and follow up with leads",
        "The quality and accuracy of your data",
        "Third-party platforms and tools",
      ],
    },
    {
      heading: "5. AI and Automation Disclaimer",
      body: [
        "We may use AI, automation, and software tools to help prepare audits, recommendations, workflows, content, follow-up systems, and implementation work.",
        "AI outputs can contain errors or need human review. You remain responsible for reviewing and approving important business communications, claims, and decisions before they go out.",
      ],
    },
    {
      heading: "6. Separate Client Agreements",
      body: [
        "Any paid services — including pricing, timelines, deliverables, cancellation terms, refund terms, and ownership terms — are governed by a separate written proposal, invoice, service agreement, statement of work, or other written agreement.",
        "If anything in these website Terms conflicts with a signed client agreement, the signed client agreement controls.",
      ],
    },
    {
      heading: "7. Client Responsibilities",
      body: [
        "If you work with us, you are responsible for providing accurate information, access, approvals, brand guidance, ad budgets, third-party software fees, and timely communication.",
        "You are also responsible for complying with the laws, industry rules, advertising platform policies, and customer-communication requirements that apply to your business.",
      ],
    },
    {
      heading: "8. Third-Party Services",
      body: [
        "This website and our services may rely on third-party tools — such as hosting, email, scheduling, CRM, analytics, advertising platforms, AI tools, automation tools, and communication platforms.",
        "We are not responsible for outages, policy changes, pricing changes, errors, or security issues caused by third-party services.",
      ],
    },
    {
      heading: "9. Intellectual Property",
      body: [
        "Unless otherwise stated, Atlas Leads owns or licenses the content on this website — including branding, copy, visuals, designs, demos, workflows, and frameworks.",
        "You may not copy, reproduce, resell, or misuse these materials without our permission.",
      ],
    },
    {
      heading: "10. Acceptable Use",
      body: [
        "You agree not to hack, scrape, spam, overload, reverse engineer, copy, interfere with, or otherwise misuse the website or its content.",
      ],
    },
    {
      heading: "11. No Professional Advice",
      body: [
        "The content and recommendations on this website are not legal, financial, tax, accounting, medical, or other licensed professional advice. Please consult qualified professionals where needed for your specific situation.",
      ],
    },
    {
      heading: "12. Privacy",
      body: [
        "We respect your privacy. To understand how we collect, use, and protect your information, please review our Privacy Policy.",
      ],
      link: { label: "Read our Privacy Policy", href: "/privacy" },
    },
    {
      heading: "13. Limitation of Liability",
      body: [
        "The website is provided on an “as is” and “as available” basis. To the maximum extent allowed by law, Atlas Leads is not liable for any indirect, incidental, consequential, special, or lost-profit damages arising from your use of this website.",
      ],
    },
    {
      heading: "14. Changes to These Terms",
      body: [
        "We may update these Terms from time to time. When we do, we’ll revise the “Last updated” date at the top of this page. Continuing to use the website after changes means you accept the updated Terms.",
      ],
    },
    {
      heading: "15. Governing Law",
      body: [
        "These Terms are governed by the laws of the State of Maryland, without regard to its conflict-of-law principles.",
      ],
    },
  ],
  contact: {
    heading: "16. Contact",
    intro: "Questions about these Terms? We’re happy to help.",
    legalName: "Atlas Leads LLC",
    email: "hello@atlasaileads.com",
    website: "atlasaileads.com",
  },
};
