export const resume = {
  name: "Kyle Pickard",
  title: "Frontend Engineer — React, AI Integration, Product Ownership",
  location: "San Francisco, CA",
  contact: {
    email: "kylepickard95@gmail.com",
    phone: "415.827.6614",
    github: "github.com/SourceSailor",
  },

  summary:
    "Frontend engineer based in San Francisco with 7+ years building for the web — from 20+ brand-led client sites to enterprise AI platforms used by banking clients. React and modern JavaScript expertise, hands-on LLM integration across multiple providers, and a creative background that turns business goals into products users rely on.",

  experience: [
    {
      company: "eAI",
      role: "Frontend Engineer",
      period: "2024 – Present",
      description:
        "Founding Frontend Engineer at an early-stage AI fintech startup serving enterprise banking clients. Architected and shipped 7 production applications from zero to deployment — owning tech stack, component architecture, CI/CD, and client-facing releases across the full product suite.",
      highlights: [
        "Drove $160K in closed revenue by owning end-to-end frontend delivery on all flagship products.",
        "Rearchitected the file-processing pipeline to eliminate a synchronous bottleneck, cutting end-user wait times by up to 80%.",
        "Integrated multiple AI/LLM providers into production workflows — from third-party APIs to a proprietary in-house LLM — powering chatbots, document analyzers, data mapping, and rule-management automation.",
        "Architected 7 MVP production applications including a guided sales platform, a metrics-heavy analytics dashboard, a KYB/KYC onboarding flow, and a software vulnerability report tool — now deployed across dozens of small-to-mid-sized banks.",
        "Functioned as the sole frontend engineer for the company — owning architecture, testing, deployment, monitoring, and client demos with zero handoff, from first commit to production.",
        "Presented and customized live product demos directly to bank executives and prospects mid-sales-cycle, translating technical capability into business outcomes that closed deals.",
      ],
    },
    {
      company: "Kreativz",
      role: "Web Developer / CMS Specialist",
      period: "2019 – 2024",
      description:
        "Full-service branding agency. Designed, built, and launched 20+ websites developed across Wordpress, Webflow, and Hubspot for nonprofit and commercial clients  — sites still live years after delivery, serving thousands of monthly visitors.",
      highlights: [
        "Managed full project lifecycle — strategy, wireframes, design, build, launch, analytic tracking, and maintenance — across WordPress, Webflow, and HubSpot.",
        "Optimized site performance and SEO through image optimization, plugin audits, and on-page SEO best practices — driving sustained organic traffic across multi-year horizons.",
        "Shipped the full creative stack across every CMS build — photography, video editing, motion graphics, and copy.",
      ],
    },
  ],

  projects: [
    {
      title: "Real-Time Financial Document Analyzer",
      role: "Sole Frontend Engineer",
      timeline: "2024 – 2025",
      description:
        "Built a real-time document analysis feature for an enterprise AI fintech platform used by banking clients. Users upload financial/tax documents and get structured, AI-generated analysis streamed back in real time.",
      tools: [
        "React",
        "React Query",
        "SSE Streaming",
        "OpenAI Assistants API",
        "JavaScript (ES6+)",
      ],
      challenge:
        "Create a seamless financial document analyzing experience, targeted at small to midsize banking clients; parsing large, complex files. The software must deliver a simple and clean experience to the end user, accepting various file formats, poor image quality or low resolution. The design included a dynamic and informative error design system. ",
      solution:
        "The application prioritized UI and UX from the outset to handle the complexity of enterprise document analysis. The file import pipeline featured a dynamic drag-and-drop zone, clear guidance outlining supported file types; a progressive loading indicator post file submission providing clear real-time feedback; a dynamic file preview modal allowing users to view individual files and remove unwanted files pre-upload. Understanding the needs of enterprise banking clients and the various files clients upload I Integrated an OCR parsing software to turn scanned documents, PDFs and images into structured, machine readable data.",
      impact:
        "Became one of a flagship feature processing thousands of document analyses for enterprise banking clients.",
    },
    {
      title: "Enterprise AI Chat Platform — Core Architecture",
      role: "Founding Frontend Engineer",
      timeline: "2024 – Present",
      description:
        "Architected the core application layer for an AI-powered fintech platform serving multiple enterprise banking clients, from chat infrastructure and document handling to authentication and billing — the foundation seven separate production products were built on top of.",
      tools: [
        "React",
        "OpenAI Assistants API",
        "Vector Stores",
        "AWS Amplify",
        "Clerk",
        "React Query",
        "Node.js",
      ],
      challenge:
        "A synchronous file-processing pipeline was creating a major wait-time bottleneck for end users, and every new AI-powered feature was being built as a one-off, duplicating chat/streaming logic each time.",
      solution:
        "Rearchitected the file-processing pipeline to remove the synchronous bottleneck, cutting wait times by up to 80%. Designed a generic, reusable chat hook architecture (a shared base hook composed into feature-specific hooks) so new AI features could be built on shared, tested infrastructure instead of duplicated logic. Set up the Git/CI/CD workflows and Clerk-based subscription billing from scratch.",
      impact:
        "Now powers 7 production applications deployed across dozens of banks, built and maintained solo — architecture, testing, deployment, monitoring, and client demos, with zero handoff.",
    },
  ],

  skills: {
    core: [
      "React",
      "JavaScript",
      "REST APIs",
      "Node.js",
      "Express",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
      "React Query",
      "MongoDB",
      "Git",
    ],
    ai: [
      "OpenAI API",
      "Claude API",
      "LLM Integration",
      "SSE Streaming",
      "Vector Stores",
    ],
    platforms: [
      "AWS Amplify",
      "Clerk",
      "CI/CD",
      "Responsive Design",
      "Accessibility (WCAG)",
      "WordPress",
      "Webflow",
      "HubSpot",
      "Component Libraries",
      "UI/UX Design",
    ],
  },
};
