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

/** A done-for-you package card in the homepage services section. */
export type ServiceCard = { id: string; slug: string; name: string; body: string };

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
};

export const site = {
  // PLACEHOLDER brand name — swap here to rebrand the whole site.
  brand: "Atlas Leads",
  bookHref: "/book",
  howHref: "/how-it-works",
  nav: [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  headerCta: { label: "Book a Free Audit", href: "/book" },
  footer: {
    pitch:
      "An AI automation agency for local businesses. We help local service and home-service companies capture more leads, respond faster, follow up, and book more appointments.",
    // PLACEHOLDER — replace with the real partner/contact names before launch.
    partners: ["[Partner Name]", "[Partner Name]"],
    // PLACEHOLDER — replace with a real contact email.
    contact: "hello@atlasleads.example",
    legal: ["Privacy Policy", "Terms of Service"],
    // Honest framing: we're new and say so.
    note: "A new agency. We'd rather earn your trust than lock you into a contract.",
  },
};

/* ----------------------------------- HOME ---------------------------------- */

export const home = {
  hero: {
    eyebrow: "AI education and implementation for local business",
    headline: "Learn AI. Install smarter systems. Book more jobs.",
    subheadline:
      "Atlas Leads helps local businesses understand AI, train their teams, and install automated systems for follow-up, booking, customer communication, and growth, so fewer leads slip and more jobs get booked.",
    primaryCta: { label: "Book a Free AI Growth Audit", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
    trustLine:
      "Plain-English AI for local businesses. We teach it, build it, and train your team. No jargon, no long contracts.",
  } satisfies Hero,

  problem: {
    heading: "Most Lost Jobs Aren't a Lead Problem — They're a Follow-Up Problem",
    intro: [
      "Local service businesses usually get plenty of calls, clicks, and form fills. The trouble is what happens next: leads slip through the cracks before anyone turns them into booked work.",
      "It tends to look like this:",
    ],
    bullets: [
      "A customer calls while you're on a job — and never hears back.",
      "Someone fills out your form at 9 PM and waits until tomorrow for a reply… if it comes.",
      "Your ads bring in calls, but some go straight to voicemail.",
      "A quote goes out, no one follows up, and they book whoever called back first.",
      "Customers searching nearby find other companies before they find you.",
    ],
    closing:
      "Every missed call and slow reply is a job that can go somewhere else. The marketing did its part. The handoff didn't.",
  } satisfies ProseBlock,

  // Visual "one connected system" diagram: channels in → AI → booking → owner.
  flowDiagram: {
    eyebrow: "One connected system",
    heading: "Every opportunity flows into one place",
    intro:
      "Today, leads scatter across voicemail, your inbox, ad platforms, and sticky notes — and the slow ones go cold. Atlas Leads routes them all through a single path, so each one gets answered, qualified, and followed up the same way.",
    inputs: [
      { id: "ads", label: "Ads" },
      { id: "website", label: "Website" },
      { id: "calls", label: "Calls" },
      { id: "forms", label: "Forms" },
    ],
    stages: [
      {
        id: "ai",
        label: "AI Follow-Up",
        desc: "Replies in seconds, answers common questions, and qualifies the lead — day or night.",
      },
      {
        id: "booking",
        label: "Booking",
        desc: "Guides the lead to a time and sets the appointment on your calendar.",
      },
      {
        id: "notify",
        label: "Owner Notification",
        desc: "Pings you the moment a job is booked or a lead needs a real person.",
      },
    ],
    note: "An illustration of how the system connects — not a record of any specific result.",
  },

  // Homepage services section — two distinct blocks: done-for-you growth
  // systems (four packages) and AI enablement/training (one offering). Icons
  // are owned by the Services component, keyed by card id. No pricing here.
  services: {
    eyebrow: "Two ways we help",
    heading: "What We Help You Learn, Build, and Run",
    intro:
      "We help local businesses in two ways: we build the AI growth systems for you, or we teach your team to use AI to improve how the business runs day to day. Either way the goal is the same: save time, move faster, and cut manual work.",
    doneForYou: {
      heading: "Done-for-you growth systems",
      description:
        "For businesses that want Atlas Leads to build the system: lead capture, fast response, appointment booking, follow-up, local visibility, and the automation layer that keeps opportunities from slipping away.",
      cards: [
        {
          id: "ai-receptionist-only",
          slug: "ai-receptionist",
          name: "AI Receptionist",
          body: "Capture missed calls, texts, and form fills with fast AI-supported response, qualification, follow-up, and booking support.",
        },
        {
          id: "ads-booking",
          slug: "ads-booking-system",
          name: "Ads + Booking",
          body: "Turn paid traffic into qualified conversations with a focused funnel, lead capture, qualification, and appointment-booking flow.",
        },
        {
          id: "local-visibility",
          slug: "local-visibility",
          name: "Local Visibility",
          body: "Improve how your business shows up locally with Google Business Profile support, review systems, local listings, and trust-building basics.",
        },
        {
          id: "full-growth",
          slug: "full-growth-system",
          name: "Full Growth System",
          body: "A complete growth setup combining lead generation, AI receptionist, appointment booking, follow-up, and local visibility into one connected system.",
        },
      ] satisfies ServiceCard[],
    },
    enablement: {
      slug: "ai-business-enablement",
      heading: "AI Business Enablement & Training",
      description:
        "A lower-commitment, done-with-you starting point: instead of handing everything off, we help you find where AI fits, set up the right tools, and get your team using them safely and practically to improve day-to-day operations. It complements the done-for-you systems above — and can lead into them when you're ready.",
      card: {
        name: "AI Business Enablement",
        body: "Training, workflow mapping, prompt systems, AI tool setup guidance, and practical team education so your business can use AI for admin work, customer communication, content, operations, research, follow-up, and decision support.",
        points: [
          "AI basics explained in plain business language",
          "Workflow audit: where AI can save time or reduce manual work",
          "Prompting and tool-use training for owners and staff",
          "Practical use cases for customer service, sales, admin, marketing, and operations",
          "Guidance on what not to automate and where human review is needed",
        ],
      },
    },
    cta: { label: "Book a Free AI Growth Audit", href: "/book" },
  },

  // Atlas Leads AI implementation process — the five stages of how we partner
  // with a business: teach what AI can do, find the gaps, build the systems,
  // train the team, then keep improving. Rendered by the AiProcess section.
  aiProcess: {
    heading: "How We Put AI to Work in Your Business",
    intro:
      "No hype and no black box. We start by teaching you what AI can actually do, then build and run the systems for you, and train your team to use them with confidence.",
    steps: [
      {
        title: "Learn",
        body: "We teach you what AI can actually do for a business like yours, in plain language with no jargon.",
      },
      {
        title: "Audit",
        body: "We map how leads, calls, and messages reach you, and find the missed leads, slow follow-up, and repetitive manual work costing you time.",
      },
      {
        title: "Build",
        body: "We install AI systems for calls, messages, booking, follow-up, reviews, and CRM updates, connected to your phone and website.",
      },
      {
        title: "Train",
        body: "We show you and your team how to use the systems and work with AI confidently, so it actually sticks.",
      },
      {
        title: "Improve",
        body: "We monitor what's working, refine the workflows, and keep improving the results over time.",
      },
    ] satisfies Step[],
  },

  whyHeading: "What You Can Expect From Us",
  why: [
    {
      lead: "We focus on local service businesses.",
      rest: " We work with local companies that depend on calls, forms, and booked appointments, so the systems are shaped around how real jobs actually come in.",
    },
    {
      lead: "It's done for you.",
      rest: " You don't have to learn or manage any tools. We set everything up and keep it running.",
    },
    {
      lead: "Plain-English, start to finish.",
      rest: " We talk in calls answered and jobs booked, not buzzwords.",
    },
    {
      lead: "Built to fit how you already work.",
      rest: " The systems sit behind your current phone and website without changing your daily routine.",
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

  // Broad positioning band — intentionally trade-agnostic. The system fits any
  // local business that runs on calls, appointments, and follow-up; we don't
  // gate the pitch to specific industries here.
  localFit: {
    heading:
      "Built for local businesses that rely on calls, appointments, follow-up, and booked jobs.",
    body: "If your business runs on fast response and a full calendar, the same lead capture and follow-up system fits — whatever you do. Book a free audit and we'll map it to how the work comes in for you.",
    cta: { label: "Book a Free AI Growth Audit", href: "/book" },
  },

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
        title: "AI Business Education",
        blurb: "How we teach owners and staff what AI can actually do, and where it saves time in day-to-day work.",
        video: null,
      },
      {
        slug: "ai-receptionist",
        title: "AI Receptionist",
        blurb: "How AI answers calls, qualifies leads, and books appointments day or night, so you stop missing work.",
        video: null,
      },
      {
        slug: "ad-funnel",
        title: "Ads + Booking",
        blurb: "How paid traffic becomes qualified, ready-to-book conversations instead of cold clicks.",
        video: null,
      },
      {
        slug: "local-visibility",
        title: "Local Visibility",
        blurb: "How AI keeps your listings, reviews, and local search presence working for you.",
        video: null,
      },
      {
        slug: "full-growth-system",
        title: "Full Growth System",
        blurb: "How the pieces connect into one AI-powered system for leads, booking, follow-up, and reviews.",
        video: null,
      },
    ] satisfies VideoItem[],
  },

  cta: {
    heading: "See Where Your Leads Are Slipping",
    body: "Book a free AI growth audit. We'll talk through how leads come into your business today and walk you through how the systems would work for you — no pressure, no obligation, and no promises about specific results.",
    primaryCta: { label: "Book a Free AI Growth Audit", href: "/book" },
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

/* ----------------------------- SERVICE DETAIL PAGES ----------------------------- */
// Minimal per-service pages at /services/<slug>. Copy is derived from the
// homepage `services` data so it isn't duplicated; Hayden adds full copy later.

export type ServiceDetail = { title: string; intro: string };

const dfyCards = home.services.doneForYou.cards;

export const serviceDetails = {
  "ai-receptionist": { title: dfyCards[0].name, intro: dfyCards[0].body },
  "ads-booking-system": { title: dfyCards[1].name, intro: dfyCards[1].body },
  "local-visibility": { title: dfyCards[2].name, intro: dfyCards[2].body },
  "full-growth-system": { title: dfyCards[3].name, intro: dfyCards[3].body },
  "ai-business-enablement": {
    title: home.services.enablement.heading,
    intro: home.services.enablement.description,
  },
} satisfies Record<string, ServiceDetail>;

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
    primaryCta: { label: "Book a Free AI Growth Audit", href: "/book" },
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
    primaryCta: { label: "Book a Free AI Growth Audit", href: "/book" },
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
    cta: { label: "Book a Free AI Growth Audit", href: "/book" },
  },
};

/* -------------------------------- ELECTRICAL ------------------------------- */

export const electrical: TradePage = {
  hero: {
    headline: "Catch More Electrical Leads — Without Letting Calls Slip Past",
    subheadline:
      "We set up a lead and appointment system shaped around electrical companies, so missed calls get a fast reply, leads get answered quickly, and more panel upgrades, rewires, and service calls have a chance to land on your calendar.",
    primaryCta: { label: "Book a Free AI Growth Audit", href: "/book" },
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
    primaryCta: { label: "Book a Free AI Growth Audit", href: "/book" },
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
    cta: { label: "Book a Free AI Growth Audit", href: "/book" },
  },
};

/* ----------------------------------- HVAC ---------------------------------- */

export const hvac: TradePage = {
  hero: {
    headline: "Catch More HVAC Leads — Without Missing the No-Heat Calls",
    subheadline:
      "We set up a lead and appointment system shaped around HVAC companies, so missed calls get a fast reply, no-heat and no-cool emergencies get answered quickly, and more tune-ups, repairs, and system quotes have a chance to land on your calendar.",
    primaryCta: { label: "Book a Free AI Growth Audit", href: "/book" },
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
    primaryCta: { label: "Book a Free AI Growth Audit", href: "/book" },
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
    cta: { label: "Book a Free AI Growth Audit", href: "/book" },
  },
};

/* ------------------------------- PEST CONTROL ------------------------------ */

export const pestControl: TradePage = {
  hero: {
    headline: "Catch More Pest Control Leads — Without Letting Calls Slip Past",
    subheadline:
      "We set up a lead and appointment system shaped around pest control companies, so missed calls get a fast reply, urgent infestations get answered quickly, and more inspections and recurring-service jobs have a chance to land on your calendar.",
    primaryCta: { label: "Book a Free AI Growth Audit", href: "/book" },
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
    primaryCta: { label: "Book a Free AI Growth Audit", href: "/book" },
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
    cta: { label: "Book a Free AI Growth Audit", href: "/book" },
  },
};

/* ------------------------------- HOW IT WORKS ------------------------------ */
// Replaces the old /results page. Carries credibility through clarity — a plain
// explanation of the three systems. No metrics, no testimonials, no claims.

export const howItWorks = {
  hero: {
    heading: "How the Systems Work",
    body: "No jargon, no black box. Here's exactly what we set up, what each part does, and how it fits behind your phone and website.",
  },

  flowHeading: "Where a Lead Goes",
  flowIntro:
    "When a new lead comes in — a call, a text, or a form fill — here's the path the system moves it along.",
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
      lead: "We start with a look at your lead pipeline.",
      rest: " Before anything gets built, we map how calls and leads reach you and where they're getting lost.",
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
    body: "Book a free audit and we'll walk through how the systems would work for your business — and where your leads are slipping today.",
    primaryCta: { label: "Book a Free Audit", href: "/book" },
    secondaryCta: { label: "Back to Home", href: "/" },
  },
};

/* ---------------------------------- BOOK ----------------------------------- */

export const book = {
  // Small uppercase label above the heading — frames the call as a focused
  // review of the prospect's lead pipeline, not a generic sales consultation.
  eyebrow: "Free AI Growth Audit · 15–30 Minutes",
  heading: "Book Your Free AI Growth Audit",
  body: "We'll take a look at how leads currently come into your business, where response time or follow-up may be costing you opportunities, and how our system could help you capture, qualify, and book more appointments — without pressure or hard selling.",
  trustLine: "Built for local businesses. No long contracts. No complicated tech for you to learn.",
  // What to expect on the call (sets honest expectations, no outcome claims).
  expect: [
    "A quick look at how calls, forms, and messages reach your business today",
    "A discussion about where leads may be getting missed, delayed, or forgotten",
    "A simple breakdown of how our full lead-generation and appointment-setting package works",
    "Straight answers about whether this would actually make sense for your business",
  ],

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
      industries: [
        "Home services (plumbing, HVAC, electrical, etc.)",
        "Pest control",
        "Trades & repair",
        "Cleaning & property care",
        "Health, wellness & personal care",
        "Other local / service business",
      ],
      meetingTypes: ["Phone Call", "Zoom Meeting", "In-Person Meeting"],
      submitLabel: "Request Meeting",
    },
  },
};
