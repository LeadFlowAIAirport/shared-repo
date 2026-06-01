// All site copy lives here, verbatim from the brief. Pages import these objects
// and feed shared presentational components. Icons are owned by the components
// (fixed order), so this module stays pure data.

export type CTA = { label: string; href: string };

export type Hero = {
  headline: string;
  subheadline: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  trustLine: string;
};

export type Step = { title: string; body: string };
export type Service = { title: string; body: string };
export type FaqItem = { q: string; a: string };

/** A bullet with a bold lead-in followed by the rest of the sentence. */
export type LedBullet = { lead: string; rest: string };

export type ProseBlock = {
  heading: string;
  intro?: string[];
  bullets?: string[];
  closing?: string;
};

export const site = {
  brand: "LeadFlow",
  bookHref: "/book",
  demoHref: "/results",
  nav: [
    { label: "Home", href: "/" },
    { label: "Plumbing", href: "/plumbing" },
    { label: "Electrical", href: "/electrical" },
    { label: "Results", href: "/results" },
  ],
  headerCta: { label: "Book a Free Growth Call", href: "/book" },
  footer: {
    pitch:
      "Done-for-you lead and appointment systems for local plumbing and electrical companies — so fewer leads slip through the cracks and more of your marketing turns into booked jobs.",
    // TODO: replace with the two real partner names.
    partners: ["Partner Name (placeholder)", "Partner Name (placeholder)"],
    // TODO: replace with real contact email/phone.
    contact: "hello@leadflow.example",
    legal: ["Privacy Policy", "Terms of Service"],
  },
};

/* ----------------------------------- HOME ---------------------------------- */

export const home = {
  hero: {
    headline: "Turn More of Your Calls, Clicks, and Leads Into Booked Jobs",
    subheadline:
      "We build done-for-you lead and appointment systems for local plumbing and electrical companies — so fewer calls get missed, every lead gets followed up fast, and more of your marketing turns into revenue.",
    primaryCta: { label: "Book a Free Growth Call", href: "/book" },
    secondaryCta: { label: "See How It Works", href: "/results" },
    trustLine:
      "Built specifically for home-service businesses. No long contracts. No tech headaches.",
  } satisfies Hero,

  problem: {
    heading: "You're Probably Losing Jobs You Already Paid For",
    intro: [
      "Most local service businesses don't have a lead problem — they have a follow-up problem. The leads come in, but they slip through the cracks before they ever turn into booked work.",
      "It usually looks like this:",
    ],
    bullets: [
      "A customer calls while you're on a job — and never calls back.",
      "A lead fills out your website form at 9 PM and hears nothing until tomorrow… if at all.",
      "Your ads bring in calls, but half go to voicemail.",
      "Someone requests a quote, gets no reply for hours, and books your competitor instead.",
      "Your Google profile is buried under three other companies in town.",
    ],
    closing:
      "Every missed call and slow reply is a job that went somewhere else. The marketing worked. The handoff didn't.",
  } satisfies ProseBlock,

  solution: {
    heading: "A System That Catches Every Lead and Gets Them Booked",
    intro: [
      "We install a simple, reliable system that sits behind your phone, your website, and your ads — and makes sure no opportunity gets dropped.",
      "When someone calls, texts, or fills out a form, our system responds in seconds, follows up automatically, and pushes them toward booking an appointment — even after hours, even when you're under a sink or up a ladder.",
      "You keep doing the work you're good at. The system makes sure the phone keeps ringing with booked jobs.",
    ],
  } satisfies ProseBlock,

  stepsHeading: "Three Steps to More Booked Jobs",
  steps: [
    {
      title: "We Map Your Lead Flow",
      body: "We look at how calls, form fills, and ad leads come into your business today — and find exactly where you're losing money.",
    },
    {
      title: "We Install Your Growth System",
      body: "We set up missed-call text-back, instant lead response, automated follow-up, an AI receptionist to handle inbound, and local visibility improvements. Done for you.",
    },
    {
      title: "You Get More Booked Appointments",
      body: "Leads get answered fast and followed up consistently, so more of them turn into scheduled, paying jobs — without you lifting a finger.",
    },
  ] satisfies Step[],

  servicesHeading: "Everything You Need to Stop Losing Leads",
  services: [
    {
      title: "Missed-Call Recovery",
      body: "When you can't pick up, the system instantly texts the caller back so the lead doesn't bounce to a competitor.",
    },
    {
      title: "AI Receptionist",
      body: "A smart assistant that answers common questions, captures details, and helps book appointments around the clock.",
    },
    {
      title: "Instant Lead Response",
      body: "Every web form, ad lead, and inquiry gets a fast, professional reply within seconds — not hours.",
    },
    {
      title: "Automated Follow-Up",
      body: "Leads who don't book right away get reminded and nurtured automatically until they're ready to schedule.",
    },
    {
      title: "Appointment Setting",
      body: "We help turn interested leads into confirmed slots on your calendar.",
    },
    {
      title: "Local Visibility",
      body: "We strengthen your Google presence and local listings so more nearby customers find you first.",
    },
  ] satisfies Service[],

  whyHeading: "A Real Growth Partner — Not Another Software Subscription",
  why: [
    {
      lead: "We specialize in home services.",
      rest: " We only work with plumbing and electrical companies, so we understand your jobs, your customers, and your busy seasons.",
    },
    {
      lead: "It's done for you.",
      rest: " You don't touch any tech. We set it up, run it, and keep it working.",
    },
    {
      lead: "Plain-English results.",
      rest: " We talk in booked jobs and recovered leads — not buzzwords.",
    },
    {
      lead: "Built to fit how you already work.",
      rest: " The system plugs into your phone and website without changing your daily routine.",
    },
    {
      lead: "Direct access to the people running it.",
      rest: " You work directly with a specialist — not a call center.",
    },
  ] satisfies LedBullet[],

  split: {
    heading: "Two Specialists. One Job: More Booked Work for You.",
    cards: [
      {
        title: "For Plumbing Companies",
        body: "We build lead and appointment systems designed specifically for plumbers — emergency calls, water heater jobs, repipes, and service work. If you run ads or get calls but lose too many of them, this is built for you.",
        cta: { label: "See the Plumbing System", href: "/plumbing" },
      },
      {
        title: "For Electrical Companies",
        body: "We build lead and appointment systems designed specifically for electricians — panel upgrades, rewires, EV chargers, and service calls. If leads are slipping through slow follow-up, this is built for you.",
        cta: { label: "See the Electrical System", href: "/electrical" },
      },
    ],
  },

  cta: {
    heading: "Ready to Stop Losing Jobs to Slow Follow-Up?",
    body: "Book a free growth call. We'll walk through where you're losing leads today and show you exactly how the system would help you book more work — no pressure, no obligation.",
    primaryCta: { label: "Book My Free Growth Call", href: "/book" },
    secondaryCta: { label: "See a Live Demo", href: "/results" },
  },

  faqHeading: "Frequently Asked Questions",
  faq: [
    {
      q: "Do I need to be tech-savvy to use this?",
      a: "Not at all. We handle the entire setup and run it for you. You just keep taking the new booked jobs.",
    },
    {
      q: "Will this replace my receptionist or my team?",
      a: "No — it supports them. It catches the calls and leads your team can't get to, especially after hours and during busy stretches.",
    },
    {
      q: "How fast can it be set up?",
      a: "Most systems are live within a few days of your call, depending on your setup.",
    },
    {
      q: "Do you lock me into a long contract?",
      a: "No long-term contracts. We earn the relationship by delivering results.",
    },
    {
      q: "What if I already run ads?",
      a: "Even better. We make your existing ad spend work harder by capturing and converting more of the leads it's already generating.",
    },
    {
      q: "How is this different from a website company?",
      a: "We don't just build things and walk away. We install a system designed to turn your existing traffic and calls into booked appointments — and we keep it running.",
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
    headline: "More Booked Plumbing Jobs — Without Chasing Every Lead Yourself",
    subheadline:
      "We install a done-for-you lead and appointment system built specifically for plumbing companies — so missed calls get recovered, leads get answered in seconds, and more of your jobs actually make it onto the calendar.",
    primaryCta: { label: "Book My Free Plumbing Growth Call", href: "/book" },
    secondaryCta: { label: "See How the System Works", href: "/results" },
    trustLine: "Built for plumbers. Run for you. No tech to learn.",
  },
  painHeading: "Sound Familiar?",
  pains: [
    "You're elbow-deep in a job when three calls come in — and you can't answer any of them.",
    "An emergency lead calls at 11 PM, gets voicemail, and calls the next plumber in line.",
    "Your team forgets to follow up on a quote, and a $4,000 repipe quietly disappears.",
    "You spend money on ads, but half the leads never get called back fast enough.",
    "New customers can't find you on Google because three competitors rank above you.",
  ],
  painClosing:
    "In plumbing, the fastest response usually wins the job. When you're on the tools, you can't be the fastest — but your system can be.",
  offerHeading: "Your Done-For-You Plumbing Growth System",
  offerIntro:
    "We set up and run a complete system designed to capture, respond to, and book more of your plumbing leads automatically:",
  offer: [
    { lead: "Missed-Call Text-Back", rest: " so emergency and service calls never go cold" },
    { lead: "24/7 AI Receptionist", rest: " to answer questions and capture job details after hours" },
    { lead: "Instant Lead Response", rest: " for every form, ad lead, and inquiry" },
    { lead: "Automated Follow-Up", rest: " that nurtures quotes until they book" },
    { lead: "Appointment Setting", rest: " that fills your calendar with real jobs" },
    { lead: "Local Visibility", rest: " improvements so more nearby homeowners find you first" },
  ],
  offerClosing: "You stay on the tools. The system keeps the schedule full.",
  stepsHeading: "How the Plumbing Lead System Works",
  steps: [
    {
      title: "Lead Audit",
      body: "We review how calls, forms, and ad leads come into your plumbing business and pinpoint where jobs are slipping away.",
    },
    {
      title: "System Install",
      body: "We set up missed-call recovery, instant response, your AI receptionist, follow-up automation, and local visibility — fully done for you.",
    },
    {
      title: "Booked Jobs",
      body: "Leads get answered and followed up fast, so more emergency calls, service jobs, and big-ticket installs turn into scheduled appointments.",
    },
  ],
  whyLose: {
    heading: "It's Not Your Marketing — It's the Handoff",
    intro: [
      "Most plumbers don't lose leads because their ads are bad. They lose them because:",
    ],
    bullets: [
      "They physically can't answer the phone while working.",
      "Voicemails and after-hours calls go unreturned.",
      "Quotes get sent and then forgotten — no follow-up.",
      "Web leads sit for hours before anyone responds.",
      "The competition simply called back first.",
    ],
  },
  whyLoseClosing:
    "Plumbing customers — especially emergencies — book the company that responds fastest. Our system makes sure that's you.",
  helpsHeading: "How Our System Helps Book More Plumbing Jobs",
  helps: [
    { lead: "Emergency calls get caught instantly", rest: ", even when you're on a job, so high-value jobs don't walk." },
    { lead: "Every quote gets followed up automatically", rest: ", recovering work that would've slipped away." },
    { lead: "After-hours leads get answered", rest: ", so you stop waking up to missed opportunities." },
    { lead: "Ad leads convert better", rest: ", making your existing marketing spend go further." },
    { lead: "You show up higher locally", rest: ", putting more homeowners in front of your business." },
  ],
  helpsClosing:
    "It's designed to plug the leaks so more of the leads you already get turn into paid work.",
  midCta: {
    heading: "Let's Find the Jobs You're Losing Right Now",
    body: "Book a free call with us. We'll walk through your current lead flow and show you exactly how the plumbing system would help you book more work.",
    primaryCta: { label: "Book My Free Plumbing Growth Call", href: "/book" },
    secondaryCta: { label: "See a Live Demo", href: "/results" },
  },
  faqHeading: "Frequently Asked Questions",
  faq: [
    {
      q: "Will this work for emergency and after-hours calls?",
      a: "Yes — that's where it shines. Missed-call text-back and the AI receptionist make sure late-night and overflow calls still get captured.",
    },
    {
      q: "Do I have to change how my team takes calls?",
      a: "No. The system works behind your current phone and website. It only steps in to catch what you'd otherwise miss.",
    },
    {
      q: "I already get plenty of leads. Do I need this?",
      a: "If you're getting leads but not booking all of them, this is built to fix exactly that — turning more of those existing leads into jobs.",
    },
    {
      q: "How soon will I see more booked jobs?",
      a: "Many plumbers start recovering missed leads within the first week or two, once the system is live.",
    },
    {
      q: "Is there a long contract?",
      a: "No long-term lock-in. We aim to prove value fast.",
    },
  ],
  closing: {
    heading: "Every Missed Call Is a Job You Already Paid to Get",
    body: [
      "You're spending time, money, and effort to make the phone ring. Don't let slow follow-up hand those jobs to the plumber down the street.",
      "We'll install a system built to catch every lead, respond in seconds, and book more of them — so your hard-earned marketing finally turns into a fuller calendar.",
    ],
    emphasis:
      "Book your free plumbing growth call today. It costs nothing, and you'll leave knowing exactly where your jobs are going — and how to keep them.",
    cta: { label: "Book My Free Plumbing Growth Call", href: "/book" },
  },
};

/* -------------------------------- ELECTRICAL ------------------------------- */

export const electrical: TradePage = {
  hero: {
    headline: "More Booked Electrical Jobs — Without Letting a Single Lead Slip",
    subheadline:
      "We install a done-for-you lead and appointment system built specifically for electrical companies — so missed calls get recovered, every lead gets answered fast, and more of your panel upgrades, rewires, and service calls land on the calendar.",
    primaryCta: { label: "Book My Free Electrical Growth Call", href: "/book" },
    secondaryCta: { label: "See How the System Works", href: "/results" },
    trustLine: "Built for electricians. Run for you. No tech to learn.",
  },
  painHeading: "Sound Familiar?",
  pains: [
    "You're mid-install when calls stack up — and there's no one free to answer.",
    "A homeowner needing a panel upgrade calls, gets voicemail, and hires someone who picked up.",
    "A big EV-charger or rewire quote goes out… and nobody follows up.",
    "Your ads generate leads, but slow callbacks let them go cold.",
    "Customers searching locally find three competitors before they find you.",
  ],
  painClosing:
    "In electrical work, the jobs are high-value — which means every lost lead costs you more. Speed and follow-up decide who wins them.",
  offerHeading: "Your Done-For-You Electrical Growth System",
  offerIntro:
    "We set up and run a complete system designed to capture, respond to, and book more of your electrical leads automatically:",
  offer: [
    { lead: "Missed-Call Text-Back", rest: " so service and emergency calls never bounce" },
    { lead: "24/7 AI Receptionist", rest: " to handle questions and capture job details anytime" },
    { lead: "Instant Lead Response", rest: " for every form, ad lead, and inquiry" },
    { lead: "Automated Follow-Up", rest: " that keeps high-ticket quotes alive until they book" },
    { lead: "Appointment Setting", rest: " that fills your calendar with real work" },
    { lead: "Local Visibility", rest: " improvements so more nearby homeowners find you first" },
  ],
  offerClosing: "You focus on the work. The system keeps the pipeline full.",
  stepsHeading: "How the Electrical Lead System Works",
  steps: [
    {
      title: "Lead Audit",
      body: "We review how calls, forms, and ad leads come into your electrical business and find exactly where jobs are being lost.",
    },
    {
      title: "System Install",
      body: "We set up missed-call recovery, instant response, your AI receptionist, follow-up automation, and local visibility — fully done for you.",
    },
    {
      title: "Booked Jobs",
      body: "Leads get answered and nurtured fast, so more panel upgrades, rewires, EV installs, and service calls become scheduled appointments.",
    },
  ],
  whyLose: {
    heading: "The Leads Are There — They're Falling Through the Cracks",
    intro: ["Most electricians don't have a traffic problem. They lose jobs because:"],
    bullets: [
      "They can't answer the phone safely while working live circuits.",
      "After-hours and overflow calls go to voicemail and never get returned.",
      "High-value quotes get sent once and never followed up.",
      "Web and ad leads wait hours for a callback.",
      "A faster-responding competitor books the job first.",
    ],
  },
  whyLoseClosing:
    "Because electrical jobs are bigger tickets, each lost lead hurts more. Our system is designed to make sure those leads don't get away.",
  helpsHeading: "How Our System Helps Book More Electrical Jobs",
  helps: [
    { lead: "Service and emergency calls get captured instantly", rest: ", even when your hands are full." },
    { lead: "Big-ticket quotes get followed up automatically", rest: ", recovering high-value work." },
    { lead: "After-hours leads get answered", rest: ", so you stop losing jobs overnight." },
    { lead: "Ad leads convert better", rest: ", stretching your marketing budget further." },
    { lead: "You rank more visibly locally", rest: ", putting your business in front of more homeowners." },
  ],
  helpsClosing:
    "It's built to seal the gaps so the high-value leads you already generate turn into paid jobs.",
  midCta: {
    heading: "Let's Find the Jobs You're Losing Right Now",
    body: "Book a free call with us. We'll review your current lead flow and show you exactly how the electrical system would help you book more work.",
    primaryCta: { label: "Book My Free Electrical Growth Call", href: "/book" },
    secondaryCta: { label: "See a Live Demo", href: "/results" },
  },
  faqHeading: "Frequently Asked Questions",
  faq: [
    {
      q: "Will this help with high-ticket jobs like panel upgrades and rewires?",
      a: "Yes. Those are exactly the leads worth following up relentlessly — and the system does it automatically so big quotes don't go cold.",
    },
    {
      q: "Do I need to change how I run my calls?",
      a: "No. It works behind your existing phone and website, stepping in only to catch what you'd otherwise miss.",
    },
    {
      q: "I already get leads from ads. Why do I need this?",
      a: "If those leads aren't all turning into booked jobs, this is designed to fix that gap and get more value from your spend.",
    },
    {
      q: "How quickly will I notice a difference?",
      a: "Many electricians begin recovering missed and slow-response leads within the first couple of weeks.",
    },
    {
      q: "Am I locked into a contract?",
      a: "No long-term contract. We focus on proving results quickly.",
    },
  ],
  closing: {
    heading: "High-Value Jobs Shouldn't Die in Your Voicemail",
    body: [
      "Panel upgrades, rewires, and EV installs are worth too much to lose to a slow callback. Yet that's exactly how most electricians leak revenue every week.",
      "We'll install a system built to catch every lead, respond instantly, and follow up until they book — so more of your biggest jobs make it onto the calendar instead of going to a competitor.",
    ],
    emphasis:
      "Book your free electrical growth call today. It's free, it's quick, and you'll walk away knowing exactly where your jobs are slipping — and how to lock them in.",
    cta: { label: "Book My Free Electrical Growth Call", href: "/book" },
  },
};

/* --------------------------------- RESULTS --------------------------------- */

export const results = {
  hero: {
    heading: "See the System in Action",
    body: "Watch how missed calls get recovered and leads get answered in seconds — then book a call to see what it would look like for your business.",
  },
  metricsHeading: "What a Working System Looks Like",
  // Illustrative, honest framing — not fabricated guarantees.
  metrics: [
    { stat: "Seconds", label: "Typical response time to a new lead" },
    { stat: "24/7", label: "After-hours calls captured, not lost to voicemail" },
    { stat: "Every lead", label: "Followed up automatically until they book" },
  ],
  testimonialsHeading: "What Clients Say",
  // TODO: replace with real testimonials (name, company, city) once available.
  testimonialsNote:
    "Real client stories will appear here as we gather them. We only publish results we can stand behind.",
  cta: {
    heading: "Want to See It Working for Your Business?",
    body: "Book a free growth call and we'll walk you through a live demo — and show you exactly where your leads are slipping today.",
    primaryCta: { label: "Book My Free Growth Call", href: "/book" },
    secondaryCta: { label: "Watch the Demo", href: "/results" },
  },
};

/* ---------------------------------- BOOK ----------------------------------- */

export const book = {
  heading: "Book Your Free Growth Call",
  body: "We'll walk through where you're losing leads today and show you exactly how the system would help you book more work — no pressure, no obligation.",
  trustLine: "Built specifically for home-service businesses. No long contracts. No tech headaches.",
  // TODO: replace with your real Calendly (or other booking) URL.
  calendlyUrl: "https://calendly.com/your-handle/free-growth-call",
};
