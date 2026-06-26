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
      "Role-based permissions",
      "Team performance visibility",
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
      "Connect customer feedback with product development. Keep support, engineering, and  customer success aligned through a shared support workspace.",
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
      "Launch professional customer support from day one with tools that help your team stay  organized and scale confidently as you grow.",
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
      "Manage permissions with precision by defining access levels for agents, managers, and  administrators across your support operations.",
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
    title: "Real-Time Analytics",
    description:
      "Monitor ticket volume, response times, team performance, and support trends through  actionable reporting and live insights.",
    icon: "icon-graph",
  },
  {
    id: 6,
    title: "SLA Management",
    description:
      "Track service commitments, monitor deadlines, and receive alerts to help maintain support  quality and customer satisfaction.",
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
        point: "Role-Based Access Control",
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
        point: "Disconnected Support Tools",
      },

      {
        option: "no",
        point: "Shared Data Environments",
      },

      {
        option: "no",
        point: "Per-Agent Pricing",
      },

      {
        option: "yes",
        point: "Limited Automation",
      },

      {
        option: "yes",
        point: "Complex User Management",
      },
    ],

    priceIcon: "icon-pin",
    price: "$49/month",
  },

  {
    id: 3,
    title: "Traditional Tools",

    features: [
      {
        option: "no",
        point: "Disconnected Support Tools",
      },

      {
        option: "no",
        point: "Shared Data Environments",
      },

      {
        option: "no",
        point: "Per-Agent Pricing",
      },

      {
        option: "yes",
        point: "Limited Automation",
      },

      {
        option: "yes",
        point: "Complex User Management",
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
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success  teams, and growing organizations that need a centralized platform for managing customer  support operations and service requests.",
  },

  {
    id: 2,
    qustion: "Who is FlockDesk designed for?",
    answer:
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success  teams, and growing organizations that need a centralized platform for managing customer  support operations and service requests.",
  },

  {
    id: 3,
    qustion: "How does FlockDesk handle support tickets?",
    answer:
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success  teams, and growing organizations that need a centralized platform for managing customer  support operations and service requests.",
  },

  {
    id: 4,
    qustion: "Does FlockDesk support workflow automation?",
    answer:
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success  teams, and growing organizations that need a centralized platform for managing customer  support operations and service requests.",
  },

  {
    id: 5,
    qustion: "How quickly can teams get started with FlockDesk?",
    answer:
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success  teams, and growing organizations that need a centralized platform for managing customer  support operations and service requests.",
  },
  {
    id: 6,
    qustion: "How can a help desk platform improve customer support?",
    answer:
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success  teams, and growing organizations that need a centralized platform for managing customer  support operations and service requests.",
  },
  {
    id: 7,
    qustion: "Why is workflow automation important for support teams?",
    answer:
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success  teams, and growing organizations that need a centralized platform for managing customer  support operations and service requests.",
  },
  {
    id: 8,
    qustion: "What is SLA management and why does it matter?",
    answer:
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success  teams, and growing organizations that need a centralized platform for managing customer  support operations and service requests.",
  },

  {
    id: 9,
    qustion: "How can support teams collaborate more effectively?",
    answer:
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success  teams, and growing organizations that need a centralized platform for managing customer  support operations and service requests.",
  },

  {
    id: 10,
    qustion: "Can a help desk platform scale with a growing business?",
    answer:
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success  teams, and growing organizations that need a centralized platform for managing customer  support operations and service requests.",
  },

  {
    id: 11,
    qustion: "What metrics should customer support teams track?",
    answer:
      "FlockDesk is built for startups, SaaS businesses, customer support teams, customer success  teams, and growing organizations that need a centralized platform for managing customer  support operations and service requests.",
  },
];

// Home blog
export const HomeBlogData = [
  {
    id: 1,
    date: "August 21, 2026",
    title: "The Power of an Organized Ticketing System",
    discription:
      "Deliver faster, more organized support with an effective ticketing system. Keep customers happy and your team productive every step of the way.",
    image: "images/blog-image.png",
    link: "",
  },
  {
    id: 2,
    date: "August 21, 2026",
    title:
      "Unlock Faster Resolutions and Happier Customers with Better Ticketing",
    discription:
      "Streamline every support interaction with organized ticket workflows, real-time updates, and smart automation—empowering your...",
    image: "",
    link: "",
  },

  {
    id: 3,
    date: "August 21, 2026",
    title: "A Complete Guide to Efficient, Customer-Centric Support Workflows",
    discription:
      "Learn how to design streamlined processes that prioritize customer needs, reduce response times, and empower your team to deliver...",
    image: "",
    link: "",
  },

  {
    id: 4,
    date: "August 21, 2026",
    title: "Make Support Easy for Your Team—and Amazing for Your Customers",
    discription:
      "Simplify support operations with intuitive ticketing tools that help your team work efficiently, while providing fast, personalized assistance...",
    image: "",
    link: "",
  },
];
