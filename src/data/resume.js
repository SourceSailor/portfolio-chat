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
      role: "Web Developer / Digital Media Specialist",
      period: "2019 – 2024",
      description:
        "Full-service branding agency, where kyle, along side a team member, owned the technical and creative development of client work end-to-end — strategy through launch — across WordPress, Webflow, HubSpot, and other various CMS platforms alongside the agency's creative production.",
      highlights: [
        "Owned full project lifecycle on 20+ client sites — wireframes, design mock-ups, full site builds, site launches, analytic tracking and reporting, and ongoing maintenance — sites still live and serving thousands of monthly visitors years after delivery.",
        "Optimized site performance and SEO across the client portfolio through image optimization, plugin audits, and on-page SEO — sustaining organic traffic growth over multi-year horizons.",
        "Provided full creative suite for all projects, including in-house photography, videography, video editing, and animations - bringing client websites to life with real products and real storytelling.",
      ],
      impact: [
        "Contributed to $8M+ raised over ~7 years for Camp Okizu (a camp for children with childhood cancer) through an annual fundraising film — filmed on-site, edited, and produced solo, plus gala photography and event recap — self-reported by client.",
        "Rebuilt the Novato Chamber of Commerce website end-to-end (event registration, SEO), then drove ~84.5% month-over-month growth in site views during the Art & Wine Festival campaign — 4,816 landing-page views on $1,548 ad spend.",
        "Diagnosed that Marin County Bicycle Coalition's requested update wouldn't solve the underlying problem, and made the case for a full rebuild instead. Client reported the new design and navigation flow increased website views and user retention.",
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
        "Consolidated 7 separate AI applications into a single cohesive platform used by enterprise banking clients - transforming how users accessed our tools and delivering a seamless experience under one application. ",
      tools: [
        "React",
        "OpenAI Responses API",
        "Vector Stores",
        "AWS Amplify",
        "Clerk",
        "React Query",
        "Node.js",
      ],
      challenge:
        "Consolidate 7 independent AI features into a single application that feels cohesive and effortless — not like 7 separate tools grafted together. Users needed to seamlessly navigate between features and maintain separate chat histories per feature without context loss or friction. This required rethinking the entire user experience from navigation architecture to visual language to interaction patterns.",
      solution:
        "Architected a fully custom component library to unify all 7 individual features into one cohesively designed platform — leveraging Tailwind CSS and custom animations for a polished, consistent visual experience. Developed a dynamic sidebar navigation system powered by React Router, allowing users to seamlessly switch between features while maintaining individual, persistent chat and report histories via API and state management. Integrated Clerk for authentication and subscription management, which unlocked feature-gating based on user tier and provided the billing infrastructure the platform needed.",
      impact:
        "The unified platform became eAI's flagship product. It now powers enterprise banking workflows across multiple enterprise banking clients and has generated $160K+ in closed revenue, with adoption continuing to grow.",
    },
    {
      title: "Software Vulnerability Report — Security/Compliance Tool",
      role: "Sole Frontend Engineer",
      timeline: "2025 – Present",
      description:
        "Built a security compliance reporting tool for enterprise banking clients. Ingests three raw export formats — EOL/EOS scans, Active Directory user exports, and computer logon summaries — and generates categorized, actionable vulnerability reports.",
      tools: [
        "React",
        "Vite",
        "Tailwind CSS",
        "AWS Amplify",
        "FastAPI (backend)",
      ],
      challenge:
        "Bank IT teams needed to turn large, messy asset export files into a report they could act on immediately — triaging what's end-of-life, what needs upgrading, and what's safe — without wading through raw spreadsheets.",
      solution:
        "Built a multi-file ingestion pipeline that categorizes assets into four states (EOL/EOS, Needs Upgrade, No Upgrade Needed, Sleeping Machine) with progressive, scroll-triggered rendering to handle large asset counts without blocking the UI. Implemented a three-level checkbox selection system using a Set as the single source of truth across nested rows, sections, and categories, plus per-category PDF and CSV exports.",
      impact:
        "Reduced IT's EOL/EOS triage process by 90% by consolidating raw export files into one centralized, actionable report.",
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
