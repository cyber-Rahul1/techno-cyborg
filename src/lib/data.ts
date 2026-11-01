export const COMPANY_INFO = {
  name: "TECHNO CYBORG PRIVATE LIMITED",
  shortName: "Techno Cyborg",
  tagline: "Empowering Ideas. Enabling Technology. Delivering Possibilities.",
  supportingHeadline: "Your Trusted Partner for Software Project Onboarding & Technology Consultancy.",
  heroDescription:
    "At Techno Cyborg Private Limited, we help businesses transform their ideas into structured technology initiatives. From understanding project requirements to planning implementation strategies, we simplify the software project journey through professional consultancy, strategic guidance, and a client-focused approach.",
  additionalHeroDescription:
    "We bridge the gap between business objectives and technology solutions, helping organizations move forward with clarity and confidence.",
  credibilityBadge: "Strategic Technology Consultancy",
  businessType: "Software Project Onboarding & Technology Consultancy",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "[Your Official Business Email]",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "[Your Business Contact Number]",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "[Your Registered or Office Address]",
  productionUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://technocyborg.com",
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Process", href: "/process" },
  { name: "Who We Work With", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export const CORE_VALUES = [
  {
    title: "Innovation",
    description: "Exploring effective approaches to technology challenges.",
    icon: "Lightbulb",
  },
  {
    title: "Integrity",
    description: "Building relationships through transparency and accountability.",
    icon: "ShieldCheck",
  },
  {
    title: "Client Commitment",
    description: "Understanding and prioritizing client requirements.",
    icon: "HeartHandshake",
  },
  {
    title: "Collaboration",
    description: "Encouraging communication and teamwork.",
    icon: "Users",
  },
  {
    title: "Excellence",
    description: "Striving for quality and continuous improvement.",
    icon: "Sparkles",
  },
];

export const SERVICES_LIST = [
  {
    id: "software-project-onboarding",
    number: "01",
    title: "Software Project Onboarding",
    shortDescription:
      "We guide clients through the initial stages of their software projects, helping them define objectives, clarify requirements, and establish a structured starting point.",
    description:
      "We guide clients through the initial stages of their software projects, helping them define objectives, clarify requirements, and establish a structured starting point.",
    activities: [
      "Initial project discussions",
      "Client requirement gathering",
      "Project scope identification",
      "Business objective alignment",
      "Project initiation support",
    ],
    icon: "Compass",
  },
  {
    id: "it-software-consultancy",
    number: "02",
    title: "IT & Software Consultancy",
    shortDescription:
      "We help businesses evaluate their technology needs and explore suitable approaches for addressing software-related challenges.",
    description:
      "We help businesses evaluate their technology needs and explore suitable approaches for addressing software-related challenges.",
    activities: [
      "Technology guidance",
      "Software solution recommendations",
      "Technical requirement assessment",
      "Project feasibility discussions",
      "Technology planning support",
    ],
    icon: "Cpu",
  },
  {
    id: "software-project-planning",
    number: "03",
    title: "Software Project Planning",
    shortDescription:
      "A clear plan provides direction for project execution. We assist clients in organizing their project requirements and establishing practical implementation roadmaps.",
    description:
      "A clear plan provides direction for project execution. We assist clients in organizing their project requirements and establishing practical implementation roadmaps.",
    activities: [
      "Project roadmap preparation",
      "Milestone and deliverable planning",
      "Timeline planning",
      "Resource requirement identification",
      "Risk assessment support",
    ],
    icon: "GitBranch",
  },
  {
    id: "development-team-coordination",
    number: "04",
    title: "Development Team Coordination",
    shortDescription:
      "We support project planning and coordination by helping clients understand the technical roles, resources, and collaboration processes required for their projects.",
    description:
      "We support project planning and coordination by helping clients understand the technical roles, resources, and collaboration processes required for their projects.",
    activities: [
      "Technical resource planning",
      "Team requirement identification",
      "Project communication coordination",
      "Workflow planning",
      "Development process support",
    ],
    icon: "Network",
  },
  {
    id: "digital-solutions-consulting",
    number: "05",
    title: "Digital Solutions Consulting",
    shortDescription:
      "We help businesses explore opportunities to improve their operations through software solutions and digital technologies.",
    description:
      "We help businesses explore opportunities to improve their operations through software solutions and digital technologies.",
    activities: [
      "Business requirement analysis",
      "Digital solution planning",
      "Workflow improvement recommendations",
      "Software implementation guidance",
      "Technology adoption support",
    ],
    icon: "Layers",
  },
  {
    id: "project-management-support",
    number: "06",
    title: "Project Management Support",
    shortDescription:
      "We help clients establish organized project workflows and maintain alignment between objectives, tasks, and expected deliverables.",
    description:
      "We help clients establish organized project workflows and maintain alignment between objectives, tasks, and expected deliverables.",
    activities: [
      "Project progress coordination",
      "Task and milestone tracking",
      "Stakeholder communication support",
      "Documentation assistance",
      "Project workflow improvement",
    ],
    icon: "CheckCircle2",
  },
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "A Client-First Approach",
    description:
      "We prioritize understanding your business goals and requirements before recommending a project direction.",
  },
  {
    number: "02",
    title: "Structured Project Initiation",
    description:
      "We help establish clear project objectives, defined requirements, and organized next steps.",
  },
  {
    number: "03",
    title: "Technology-Driven Thinking",
    description:
      "We focus on identifying practical technology approaches aligned with your business needs.",
  },
  {
    number: "04",
    title: "Transparent Communication",
    description:
      "We value clear discussions, realistic expectations, and consistent communication throughout our engagement.",
  },
  {
    number: "05",
    title: "Flexible Consultancy",
    description:
      "Our approach can be adapted to the scope, complexity, and specific requirements of each project.",
  },
  {
    number: "06",
    title: "A Focus on Sustainable Growth",
    description:
      "We aim to help clients make informed technology decisions that support their long-term business objectives.",
  },
];

export const PROCESS_STAGES = [
  {
    stage: "01",
    name: "DISCOVER",
    description: "We understand your business, objectives, challenges, and expectations.",
    activities: [
      "Stakeholder interviews and vision alignment",
      "Business model and context review",
      "Current technology assessment",
      "Initial expectations and scope outlining",
    ],
    expectedOutcome:
      "A consolidated discovery summary articulating foundational business drivers and project goals.",
  },
  {
    stage: "02",
    name: "ANALYZE",
    description: "We evaluate your requirements, project scope, and technical considerations.",
    activities: [
      "Functional and non-functional requirement review",
      "Feasibility and technical constraint evaluation",
      "System architecture scoping",
      "Dependencies and boundary definitions",
    ],
    expectedOutcome:
      "Detailed analysis matrix clarifying project parameters, critical prerequisites, and technical considerations.",
  },
  {
    stage: "03",
    name: "STRATEGIZE",
    description: "We identify suitable approaches and develop a structured project roadmap.",
    activities: [
      "Technology stack and methodology evaluation",
      "Phased rollout and milestone structuring",
      "Integration and data approach formulation",
      "High-level governance framework",
    ],
    expectedOutcome:
      "A structured strategic roadmap detailing the recommended technical direction and phased execution blueprint.",
  },
  {
    stage: "04",
    name: "PLAN",
    description: "We outline priorities, milestones, timelines, and resource requirements.",
    activities: [
      "Work breakdown structuring and deliverables definition",
      "Timeline estimates and sequencing",
      "Technical role and capability profiling",
      "Risk assessment and mitigation planning",
    ],
    expectedOutcome:
      "Actionable project plan complete with milestones, resource guidelines, timeline estimates, and risk parameters.",
  },
  {
    stage: "05",
    name: "SUPPORT",
    description:
      "We provide the agreed consultancy and coordination support to help you progress toward your project goals.",
    activities: [
      "Regular advisory checkpoints and alignment sessions",
      "Progress and milestone coordination review",
      "Technical clarity advisory for teams and stakeholders",
      "Ongoing strategic guidance as projects evolve",
    ],
    expectedOutcome:
      "Cohesive project continuity with ongoing advisory support keeping technical initiatives aligned with core goals.",
  },
];

export const AUDIENCE_CATEGORIES = [
  {
    id: "startups-entrepreneurs",
    title: "Startups & Entrepreneurs",
    description:
      "Get guidance on organizing your ideas, defining requirements, and planning software products.",
    badge: "Idea to Blueprint",
    highlights: [
      "Clear requirement framing for new products",
      "Technical feasibility and MVP roadmap guidance",
      "Advisory on technical team needs and tooling",
    ],
  },
  {
    id: "small-medium-businesses",
    title: "Small & Medium Businesses",
    description:
      "Explore technology solutions that align with your operational needs and growth objectives.",
    badge: "Operational Scale",
    highlights: [
      "Digital workflow optimization consulting",
      "Software adoption and system transition advice",
      "Cost-conscious, scalable technology planning",
    ],
  },
  {
    id: "corporate-organizations",
    title: "Corporate Organizations",
    description:
      "Obtain project planning and consultancy support for software initiatives.",
    badge: "Enterprise Alignment",
    highlights: [
      "Structured initiation for multi-department initiatives",
      "Stakeholder communication and documentation support",
      "Governance, milestones, and risk planning",
    ],
  },
  {
    id: "product-teams",
    title: "Product Teams",
    description:
      "Improve project clarity through structured requirements, planning, and coordination.",
    badge: "Execution Clarity",
    highlights: [
      "Refining functional specifications and backlogs",
      "Cross-functional coordination workflows",
      "Milestone and delivery rhythm support",
    ],
  },
];

export const PROJECT_TYPE_OPTIONS = [
  "Software Project Onboarding",
  "IT & Software Consultancy",
  "Software Project Planning",
  "Development Team Coordination",
  "Digital Solutions Consulting",
  "Project Management Support",
  "Other",
] as const;

export const TIMELINE_OPTIONS = [
  "Immediately",
  "Within 1 Month",
  "1–3 Months",
  "3–6 Months",
  "Exploring / Not Decided",
] as const;
