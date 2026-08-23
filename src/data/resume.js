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

  projects: [
    {
      title: "Real-Time Financial Document Analyzer",
      role: "Sole Frontend Engineer",
      timeline: "2024 – 2025",
      description:
        "Built a real-time document analysis feature for an enterprise AI fintech platform used by banking clients. Users upload financial/tax documents and get structured, AI-generated analysis streamed back live rather than waiting on a single blocking response.",
      tools: [
        "React",
        "React Query",
        "SSE Streaming",
        "OpenAI Assistants API",
        "JavaScript (ES6+)",
      ],
      challenge:
        "The streaming response was a deeply nested, OpenAI-format JSON payload arriving in fragments — partial chunks routinely broke standard JSON.parse and crashed the render mid-stream, and parallel file uploads were completing out of order.",
      solution:
        "Wrote a custom partial-JSON parser with a 'last good' state cache so the UI could keep rendering through incomplete chunks without flashing errors, fixed the upload parallelization race condition, and built a four-phase status UI (Uploading → Assembling → Analyzing → Complete) so users always knew what stage a large document was in.",
      impact:
        "Became one of the flagship features on a platform that has generated $160K+ in closed enterprise revenue and is deployed across dozens of banks.",
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
    {
      title: "White-Label Client Platform Rebuild",
      role: "Frontend Engineer",
      timeline: "2024 – 2025",
      description:
        "Delivered a stripped-down, white-labeled version of the core AI platform for an enterprise client with different data-retention and privacy requirements than the standard product.",
      tools: ["React", "Client-Side Session Architecture", "JavaScript (ES6+)"],
      challenge:
        "The client's compliance requirements meant the standard product's identity and history model couldn't be used as-is — third-party auth wasn't allowed, and conversation state couldn't persist server-side the way it did elsewhere.",
      solution:
        "Removed the Clerk authentication layer and tracking entirely, replacing server-persisted history with a local-storage-based session model, and made a significant architectural shift from vector-store-ID-based sessions to lightweight thread-based sessions — without disrupting the shared core codebase other clients depend on.",
      impact:
        "Unlocked a new class of client with stricter data-retention requirements without forking the core product.",
    },
    {
      title: "Bench Mark",
      role: "Solo Developer (Side Project)",
      timeline: "2025 – Present",
      description:
        "A community bench-mapping platform for San Francisco — a lightweight, map-first app where people can find and contribute public bench locations around the city.",
      tools: ["React", "Vite", "Tailwind CSS", "Mapbox", "Supabase", "PostGIS"],
      challenge:
        "Needed accurate geospatial querying (nearby-bench lookups) on a simple Postgres backend, plus a way to keep user-submitted photo content clean without manually reviewing every upload.",
      solution:
        "Used Supabase with the PostGIS extension for geospatial queries and built AI vision-based moderation into the upload flow to automatically screen submitted photos, keeping the MVP scope tight and mostly hands-off to run.",
      impact:
        "Shipped as a focused, real-world MVP — full-stack ownership from map UI to geospatial backend to AI moderation.",
    },
    {
      title: "AI-Guided Sales & Onboarding Chat",
      role: "Frontend Engineer",
      timeline: "2024 – 2025",
      description:
        "Built a landing page paired with an interactive, AI-guided sales chat application for an enterprise banking client — designed to walk prospects through a conversational qualification flow instead of a static contact form.",
      tools: [
        "React",
        "Tailwind CSS",
        "LLM Integration",
        "Conversational UI Patterns",
      ],
      challenge:
        "The sales team needed something that could be demoed live to bank executives mid-pitch and adapted on the fly, not a rigid pre-scripted flow.",
      solution:
        "Built a conversational chat interface backed by an LLM-guided flow that could branch based on user input, and worked directly with the sales team to customize demo scenarios in real time during executive presentations.",
      impact:
        "Used directly in live sales demos to bank executives and contributed to deals closing as part of $160K+ in platform revenue.",
    },
    {
      title: "Personal Portfolio AI Chatbot",
      role: "Solo Developer",
      timeline: "2025 – Present",
      description:
        "A conversational chatbot embedded in his personal portfolio site that answers questions about his career, projects, and skills in real time using the Anthropic API — effectively an early version of the same concept as this resume-to-chatbot project.",
      tools: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Anthropic API",
        "SSE Streaming",
      ],
      challenge:
        "Wanted a live, interactive way for recruiters and hiring managers to explore his background instead of a static resume page.",
      solution:
        "Built a streaming chat interface on top of the Anthropic API, with the model given structured context about his projects and experience so it could answer specific questions accurately in real time.",
      impact:
        "Live, functioning demonstration of end-to-end AI integration skill — built, deployed, and maintained solo (github.com/SourceSailor).",
    },
  ],

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
