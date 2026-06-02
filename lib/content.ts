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
// PLACEHOLDERS (swap before launch): the brand name `site.brand` ("LeadFlow"),
// `footer.partners`, `footer.contact`, and `book.calendlyUrl` are all
// placeholders — change them in one place here.

export type CTA = { label: string; href: string };

export type Hero = {
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

/** One of the three core systems in the offer. */
export type SystemCard = {
  id: string;
  name: string;
  tagline: string;
  body: string;
  points: string[];
};

export const site = {
  // PLACEHOLDER brand name — swap here to rebrand the whole site.
  brand: "LeadFlow",
  bookHref: "/book",
  howHref: "/how-it-works",
  nav: [
    { label: "Home", href: "/" },
    { label: "Plumbing", href: "/plumbing" },
    { label: "Electrical", href: "/electrical" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  headerCta: { label: "Book a Call", href: "/book" },
  footer: {
    pitch:
      "An AI automation agency for local service businesses. We help plumbing and electrical companies capture more leads, respond faster, and book more jobs.",
    // PLACEHOLDER — replace with the real partner/contact names before launch.
    partners: ["[Partner Name]", "[Partner Name]"],
    // PLACEHOLDER — replace with a real contact email.
    contact: "hello@leadflow.example",
    legal: ["Privacy Policy", "Terms of Service"],
    // Honest framing: we're new and say so.
    note: "A new agency. We'd rather earn your trust than lock you into a contract.",
  },
};

/* ----------------------------------- HOME ---------------------------------- */

export const home = {
  hero: {
    headline: "More of Your Leads, Booked as Jobs",
    subheadline:
      "We help local plumbing and electrical companies capture more leads, answer them faster, and turn more of them into booked appointments — using AI-powered lead generation, an AI receptionist, and local visibility systems.",
    primaryCta: { label: "Book a Call", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/how-it-works" },
    trustLine:
      "Built for local service businesses. Plain language, no long contracts, no tech for you to learn.",
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

  solution: {
    heading: "A System That Catches Leads and Helps Get Them Booked",
    intro: [
      "We set up a straightforward system that sits behind your phone, your website, and your ads, so fewer opportunities get dropped.",
      "When someone calls, texts, or fills out a form, the system responds quickly, follows up, and works to get them onto your calendar — including after hours, when you're under a sink or up a ladder.",
      "You keep doing the work you're good at. The system handles the catching and the follow-up.",
    ],
  } satisfies ProseBlock,

  systemsHeading: "The Three Systems We Build",
  systemsIntro:
    "Each one targets a different way leads get lost. Together they cover capturing leads, responding fast, and being easy to find.",
  systems: [
    {
      id: "lead-generation",
      name: "Lead Generation System",
      tagline: "Turn ad spend and clicks into qualified, ready-to-book leads.",
      body: "We run targeted ads and lead funnels that send prospects to a focused landing page or short questionnaire, then collect and qualify their details and point them toward booking.",
      points: [
        "Targeted local ad campaigns and lead funnels",
        "A focused landing page or questionnaire built to convert",
        "Lead qualification so you spend time on real prospects",
        "Every lead nudged toward booking an appointment",
      ],
    },
    {
      id: "ai-receptionist",
      name: "AI Receptionist & Appointment Setting",
      tagline: "Answer every call, text, and form in seconds — even after hours.",
      body: "When you can't pick up, or a lead comes in late at night, the system responds fast, answers common questions, captures the job details, and helps book the appointment.",
      points: [
        "Missed-call text-back so callers don't bounce to a competitor",
        "Around-the-clock response to calls, texts, and form fills",
        "Answers common questions and captures key job details",
        "Helps book appointments straight onto your calendar",
      ],
    },
    {
      id: "local-visibility",
      name: "Local Visibility System",
      tagline: "Be easier to find — and easier to trust — in your service area.",
      body: "We strengthen your local online presence so nearby customers find you sooner and feel confident choosing you.",
      points: [
        "Google Business Profile and local listing improvements",
        "Support for gathering and showing reviews",
        "A more consistent presence in local search",
        "More of the right nearby customers finding your business",
      ],
    },
  ] satisfies SystemCard[],

  howHeading: "How Working With Us Goes",
  how: [
    {
      title: "We Map Your Lead Flow",
      body: "We look at how calls, forms, and ad leads come into your business today, and find where opportunities are getting lost.",
    },
    {
      title: "We Build and Install the Systems",
      body: "We set up the pieces that fit your business — lead generation, the AI receptionist, and local visibility — and connect them to your phone and website. Done for you.",
    },
    {
      title: "You Handle More Booked Jobs",
      body: "Leads get answered quickly and followed up consistently, so more of them have the chance to become scheduled, paying work.",
    },
  ] satisfies Step[],

  whoHeading: "Who It's For",
  whoIntro:
    "We're focused on local plumbing and electrical companies first, because we know those jobs, customers, and busy seasons best.",
  whoTrades: {
    primary: ["Plumbing companies", "Electrical companies"],
    alsoLabel:
      "The same systems fit other year-round local trades, including:",
    also: [
      "HVAC",
      "Roofing",
      "Cleaning",
      "Landscaping",
      "Painting",
      "Junk removal",
      "Pressure washing",
    ],
  },

  whyHeading: "What You Can Expect From Us",
  why: [
    {
      lead: "We focus on home services.",
      rest: " Our attention is on plumbing and electrical work, so the systems are shaped around how those jobs actually come in.",
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

  split: {
    heading: "Pick the Path That Fits Your Trade",
    cards: [
      {
        title: "For Plumbing Companies",
        body: "Lead and appointment systems shaped around plumbing work — emergency calls, water heaters, repipes, and service jobs. If calls and leads come in but too many slip away, start here.",
        cta: { label: "See the Plumbing Setup", href: "/plumbing" },
      },
      {
        title: "For Electrical Companies",
        body: "Lead and appointment systems shaped around electrical work — panel upgrades, rewires, EV chargers, and service calls. If leads slip through slow follow-up, start here.",
        cta: { label: "See the Electrical Setup", href: "/electrical" },
      },
    ],
  },

  cta: {
    heading: "See Where Your Leads Are Slipping",
    body: "Book a free call. We'll talk through how leads come into your business today and walk you through how the systems would work for you — no pressure, no obligation, and no promises about specific results.",
    primaryCta: { label: "Book a Call", href: "/book" },
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
    primaryCta: { label: "Book a Plumbing Call", href: "/book" },
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
    body: "Book a free call. We'll walk through your current lead flow and show you how the plumbing setup would work for your business.",
    primaryCta: { label: "Book a Plumbing Call", href: "/book" },
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
    cta: { label: "Book a Plumbing Call", href: "/book" },
  },
};

/* -------------------------------- ELECTRICAL ------------------------------- */

export const electrical: TradePage = {
  hero: {
    headline: "Catch More Electrical Leads — Without Letting Calls Slip Past",
    subheadline:
      "We set up a lead and appointment system shaped around electrical companies, so missed calls get a fast reply, leads get answered quickly, and more panel upgrades, rewires, and service calls have a chance to land on your calendar.",
    primaryCta: { label: "Book an Electrical Call", href: "/book" },
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
    body: "Book a free call. We'll review your current lead flow and show you how the electrical setup would work for your business.",
    primaryCta: { label: "Book an Electrical Call", href: "/book" },
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
    cta: { label: "Book an Electrical Call", href: "/book" },
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

  systemsHeading: "The Three Systems, Up Close",
  // Mirrors home.systems but framed as a deeper explainer.

  expectHeading: "What Working With Us Looks Like",
  expect: [
    {
      lead: "We start with a look at your lead flow.",
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
    body: "Book a free call and we'll walk through how the systems would work for your trade — and where your leads are slipping today.",
    primaryCta: { label: "Book a Call", href: "/book" },
    secondaryCta: { label: "Back to Home", href: "/" },
  },
};

/* ---------------------------------- BOOK ----------------------------------- */

export const book = {
  heading: "Book a Call",
  body: "We'll walk through how leads come into your business today and show you how the systems would work for you — no pressure, no obligation, and no promises about specific results.",
  trustLine: "Built for local service businesses. No long contracts. No tech for you to learn.",
  // PLACEHOLDER — replace with your real Calendly (or other booking) URL.
  calendlyUrl: "https://calendly.com/your-handle/intro-call",
  // What to expect on the call (sets honest expectations, no outcome claims).
  expect: [
    "A look at how calls and leads reach you now",
    "Where opportunities are most likely slipping",
    "A walkthrough of which systems would fit",
    "Straight answers — no hard sell",
  ],
};
