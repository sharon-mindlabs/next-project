import { Content } from "next/font/google";

export type WhyChooseFeature = {
  option: "yes" | "no";
  point: string;
};

export type WhyChooseDataItem = {
  id: number;
  title: string;
  features: WhyChooseFeature[];
  priceIcon: string;
  price: string;
};

// Banner user icons
export const userImages = [
  {
    id: 1,
    url: "images/banner-user-1.png",
  },
  {
    id: 2,
    url: "images/banner-user-2.png",
  },

  {
    id: 3,
    url: "images/banner-user-3.png",
  },
  {
    id: 4,
    url: "images/banner-user-4.png",
  },
];

// Home tab data
export const homeTabData = [
  {
    id: 1,
    tabTitle: "Ticket Management",
    icon: "icon-ticket-management",
    heading: "Every conversation. One unified inbox.",

    description:
      "Manage customer tickets from a centralized workspace with organized workflows, smart filtering, and collaborative tools designed to keep support efficient and responsive.",
    features: [
      "Status-based workflows (open, pending, resolved)",
      "Tag filtering & bulk ticket actions",
      "Custom views for every team",
      "Ticket merging & conversation threading",
    ],
    image: "images/ticket-management-image.png",
  },

  {
    id: 2,
    tabTitle: "Teams & Agents",
    icon: "icon-teams-and-agents",
    heading: "Support together. Resolve faster.",
    description:
      "Empower your support team with collaborative tools, clear ownership, and shared visibility,  ensuring every customer receives timely and consistent assistance.",
    features: [
      "Agent assignment & ownership",
      "Internal notes & team collaboration",
      "Admin & Agent permissions ",
      "Shared ticket visibility",
    ],
    image: "images/teams-and-agents.png",
  },

  {
    id: 3,
    tabTitle: "Email Engine",
    icon: "icon-mail-03",
    heading: "Turn every email into action.",
    description:
      "Convert incoming emails into organized support tickets automatically, helping your team  manage customer communication without switching between tools.",
    features: [
      "Email-to-ticket conversion",
      "Multiple support inboxes",
      "Automated ticket routing",
      "Conversation history tracking",
    ],
    image: "images/email-engine.png",
  },

  {
    id: 4,
    tabTitle: "Automation & Triggers",
    icon: "icon-automation",
    heading: "Automate repetitive support work.",
    description:
      "Reduce manual effort with intelligent workflows that automate ticket assignments, status  updates, notifications, and routine support processes.",
    features: [
      "Automated ticket assignment",
      "Workflow-based triggers",
      "Status & priority automation",
      "Event-driven notifications",
    ],
    image: "images/automation-and-triggers.png",
  },
];

// home use cases
export const homeUseCases = [
  {
    id: 1,
    title: "SaaS Teams",
    description:
      "Manage customer conversations in one place and help your team stay organized. Keep your support team aligned through a shared workspace.",
    icon: "icon-flash",
    key: "50% faster resolution",
    image: "images/sass-team.png",
  },

  {
    id: 2,
    title: "Startups",
    description:
      "Launch professional customer support from day one with tools that help your team stay  organized and scale confidently as you grow.",
    icon: "icon-timer",
    key: "2-min quick-start",
    image: "images/startups-image.png",
  },

  {
    id: 3,
    title: "Growing Support Teams",
    description:
      "Move beyond shared inboxes with structured ticket management, clear ownership, and  workflows designed to support higher ticket volumes.",
    icon: "icon-growing",
    key: "2-min quick-start",
    image: "images/growing-support-team.png",
  },
];

// Core features
export const coreFeaturesData = [
  {
    id: 1,
    title: "Email-First Ticketing",
    description:
      "Convert incoming emails into organized support tickets with complete conversation history,  helping teams respond faster and stay aligned.",
    icon: "icon-email-first",
  },

  {
    id: 2,
    title: "Multi-Tenant Isolation",
    description:
      "Keep customer data secure with dedicated workspaces and isolated environments designed to  support growing organizations.",
    icon: "icon-multi-tenant",
  },
  {
    id: 3,
    title: "Role-Based Access Control",
    description:
      "Manage access securely with separate permissions for Admins and Agents, ensuring every user has the right level of access. ",
    icon: "icon-role-based",
  },
  {
    id: 4,
    title: "Workflow Automation",
    description:
      "Automate ticket routing, assignments, notifications, and repetitive tasks to improve efficiency  and reduce manual work.",
    icon: "icon-automation",
  },
  {
    id: 5,
    title: "Email Tracking",
    description:
      "Track customer email activity with send, received, and read status, giving your team better visibility into every conversation. ",
    icon: "icon-mail-03",
  },
  {
    id: 6,
    title: "Internal Collaboration",
    description:
      "Collaborate efficiently using internal notes, ticket assignments, and shared conversations without leaving the workspace.",
    icon: "icon-sla",
  },
];

// Why choose
export const whyChooseData: WhyChooseDataItem[] = [
  {
    id: 1,
    title: "FlockDesk",

    features: [
      {
        option: "yes",
        point: "Email-First Ticket Management",
      },

      {
        option: "yes",
        point: "Secure Multi-Tenant Workspaces",
      },

      {
        option: "yes",
        point: "Unlimited Agents",
      },

      {
        option: "yes",
        point: "Automated Workflows",
      },

      {
        option: "yes",
        point: "Admin & Agent Permissions",
      },
    ],

    priceIcon: "icon-setting-2",
    price: "Custom",
  },

  {
    id: 2,
    title: "Traditional Tools",

    features: [
      {
        option: "no",
        point: "Multiple disconnected inboxes",
      },

      {
        option: "no",
        point: "Shared customer conversations",
      },

      {
        option: "no",
        point: "Per-agent pricing",
      },

      {
        option: "yes",
        point: "Manual ticket handling",
      },

      {
        option: "yes",
        point: "Limited collaboration",
      },
    ],

    priceIcon: "icon-pin",
    price: "$49/month",
  },
];

// Banner user icons
export const HowWorksStepsData = [
  {
    id: 1,
    icon: "icon-mail-03",
    title: "Connect Email",
    discription: "Add your support email addresses to Flockdesk",
    step: "01",
  },
  {
    id: 2,
    icon: "icon-multi-tenant",
    title: "Configure Teams",
    discription: "Set up your support teams with roles and permissions",
    step: "02",
  },
  {
    id: 3,
    icon: "icon-ticket-3",
    title: "Start Ticketing",
    discription: "Incoming emails automatically become tickets",
    step: "03",
  },
  {
    id: 4,
    icon: "icon-two-way",
    title: "Optimize Workflows",
    discription: "Use tags, macros, and automation to work faster",
    step: "04",
  },
];

// Testimornals
export const TestimornalsData = [
  {
    id: 1,
    content:
      "FlockDesk transformed how we handle tickets. The interface is intuitive, and our response times have improved dramatically.",
    rating: 5,
    author: "David Ramirez",
    description: "Success Manager, BrightWave",
  },
  {
    id: 2,
    content:
      "The analytics FlockDesk offers allowed us to identify bottlenecks and enhance our workflow seamlessly.",
    rating: 5,
    author: "Emily Nguyen",
    description: "Operations Lead, Nexa Meg",
  },
  {
    id: 3,
    content:
      "Implementing FlockDesk was smooth, and the support team helped us tailor features to fit our unique needs.",
    rating: 5,
    author: "Mark Thompson",
    description: "IT Director, Alpha Apps",
  },
  {
    id: 4,
    content:
      "FlockDesk’s mobile app means our support team stays connected even on the go. Our customer satisfaction has never been higher.",
    rating: 5,
    author: "Lila Patel",
    description: "GreenTech Innovations",
  },

  {
    id: 5,
    content:
      "The analytics FlockDesk offers allowed us to identify bottlenecks and enhance our workflow seamlessly.",
    rating: 5,
    author: "Emily Nguyen",
    description: "Operations Lead, Nexa Meg",
  },
];

// FAQ data
export const FAQData = [
  {
    id: 1,
    qustion: "How does FlockDesk work?",
    answer:
      "FlockDesk converts incoming customer emails into organized support tickets, allowing teams to track, prioritize, assign, and resolve requests efficiently. Built-in automation and team collaboration tools help streamline support workflows and improve productivity. ",
  },

  {
    id: 2,
    qustion: "Who is FlockDesk designed for?",
    answer:
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success teams, and growing organizations that need a centralized platform for managing customer support operations and service requests.",
  },

  {
    id: 3,
    qustion: "How does FlockDesk handle support tickets?",
    answer:
      "FlockDesk automatically captures customer requests, converts them into tickets, and routes them to the appropriate team or agent. Teams can manage ticket priorities, monitor progress, and maintain complete visibility throughout the resolution process.",
  },
  {
    id: 4,
    qustion: "How quickly can teams get started with FlockDesk?",
    answer:
      "Most teams can get started quickly by connecting their support email, configuring teams and permissions, setting up workflows, and beginning ticket management from a single centralized workspace.",
  },
  {
    id: 5,
    qustion: "How can a help desk platform improve customer support?",
    answer:
      "A help desk platform centralizes customer conversations, streamlines ticket management, improves team collaboration, and automates repetitive tasks. This helps support teams respond faster and deliver more consistent customer experiences.",
  },
  {
    id: 6,
    qustion: "How can teams collaborate better using FlockDesk?",
    answer:
      "With the help of shared visibility of tickets, role-based access control, internal notes, and team allocation, it becomes easy for support representatives to collaborate in an efficient way and have ownership.",
  },
  {
    id: 7,
    qustion: "Can a help desk platform scale with a growing business?",
    answer:
      "Modern help desk platforms support growing teams through automation, user management, permissions, and flexible workflows that adapt as customer support operations expand. ",
  },
  {
    id: 8,
    qustion: "What metrics should customer support teams track?",
    answer:
      "Customer support teams should track ticket volume, ticket status, and email activity, including sent, received, and read status. These insights help teams stay organized, monitor customer conversations, and respond more effectively. ",
  },
];
