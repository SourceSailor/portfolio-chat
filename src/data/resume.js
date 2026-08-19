// src/data/resume.js
//
// Single source of truth for Kyle's professional background.
// This is the template seam: a cloner replaces this file's contents
// (keeping the same shape) and the rest of the app — config/ai.js,
// the adapters, the components — works unchanged.

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
    "Frontend engineer based in San Francisco with 7+ years building for the web — from 20+ brand-led client sites to enterprise AI platforms used by banking clients. Deep React and modern JavaScript expertise, hands-on LLM integration across multiple providers, and a creative background that turns business goals into products users rely on.",

  experience: [
    {
      company: "EAI",
      role: "Frontend Engineer",
      period: "2024 – Present",
      description:
        "Founding Frontend Engineer at an early-stage AI fintech startup serving 5 enterprise banking clients. Architected and shipped 7 production applications from zero to deployment — owning tech stack, component architecture, CI/CD, and client-facing releases across the full product suite.",
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
        "Full-service branding agency. Designed, built, and launched 20+ websites for nonprofit and commercial clients — sites still live years after delivery, serving thousands of monthly visitors.",
      highlights: [
        "Managed full project lifecycle — strategy, wireframes, design, build, launch, and maintenance — across WordPress, Webflow, and HubSpot.",
        "Optimized site performance and SEO through image optimization, plugin audits, and on-page SEO best practices — driving sustained organic traffic across multi-year horizons.",
        "Shipped the full creative stack across every CMS build — photography, video editing, motion graphics, and copy — partnering directly with clients and marketing teams to convert business goals into measurable web outcomes.",
      ],
    },
  ],

  // Populate as portfolio projects get finalized (e.g. this chatbot itself).
  projects: [],

  skills: {
    core: [
      "React",
      "JavaScript (ES6+)",
      "REST APIs",
      "Node.js",
      "Express",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vite",
      "React Query",
      "MongoDB",
      "Git",
    ],
    ai: ["OpenAI API", "Claude API", "LLM Integration", "SSE Streaming"],
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

  education: [],
};
