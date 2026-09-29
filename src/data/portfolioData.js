export const PORTFOLIO_DATA = {
  personal: {
    name: "Uday Kiran",
    roleTitle: "spiring Cloud & AI Engineer",
    typingRoles: [
      "Cloud Engineer",
      "Devops Engineer",
      "Cloud Native Specialist",
      "AI Engineer",
    ],
    status: "Available for High-Impact Projects",
    bio: "I'm Uday, a fresher Cloud & AI Engineer with an AWS Certified Cloud Practitioner certification. I'm building toward applied roles in cloud infrastructure and AI systems — learning through real projects, not just coursework.",
    location: "Nagpur / Remote",
    email: "udaykiran.7510@gmail.com",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    resumeUrl: "#resume-pdf",
  },

  stats: [
    { label: "", value: "Fresher", change: "" },
    {
      label: "Cloud Architecture",
      value: "12+",
      change: "AWS / Docker  / CI/CD",
    },
  ],

  about: {
    heading: "Architecting Next-Generation Software with Precision & Speed",
    paragraphs: [
      "I'm targeting roles as an AI Engineer, MLOps Engineer, or Cloud Engineer where I can learn from experienced teams while contributing real value early on.",
      "My philosophy centers on clean architectural patterns, measurable performance optimizations, and sleek aesthetic design systems that elevate user experience without non-essential bloat.",
      "When not committing code, I actively mentor junior engineers, contribute to open-source infrastructure tools, and speak on micro-frontend scalability.",
    ],
    highlights: [
      {
        title: "☁️ AWS Certified · Cloud Practitioner",
        desc: "Passed the AWS Cloud Practitioner with execlent grades",
      },
      {
        title: "AWS AI Practitioner challenge",
        desc: "Compeleted the AWS AI Practitioner challenge ",
      },
    ],
  },

  skills: {
    categories: [
      "All",
      "Frontend",
      "Backend & APIs",
      "Cloud & DevOps",
      "Architecture & DB",
    ],
    items: [
      {
        name: "Python / FastApi",
        level: 94,
        category: "Backend & APIs",
        icon: "Terminal",
        tag: "Expert",
      },
      {
        name: "Docker & Kubernetes",
        level: 90,
        category: "Cloud & DevOps",
        icon: "Box",
        tag: "Expert",
      },
      {
        name: "AWS (ECS, Lambda, S3)",
        level: 95,
        category: "Cloud & DevOps",
        icon: "Cloud",
        tag: "Expert",
      },
      {
        name: "Terraform & CI/CD",
        level: 86,
        category: "Cloud & DevOps",
        icon: "Workflow",
        tag: "Advanced",
      },
      {
        name: "SQL & NoSQL",
        level: 92,
        category: "Architecture & DB",
        icon: "Database",
        tag: "Expert",
      },
      {
        name: "Javascript",
        level: 88,
        category: "Backend & APIs",
        icon: "Database",
        tag: "Expert",
      },
      {
        name: "Linux",
        level: 86,
        category: "Operating System",
        icon: "OS",
        tag: "Expert",
      },
    ],
  },

  projects: [
    {
      id: "project-1",
      title: "Serverless Image Processing Pipeline",
      category: "Cloud & DevOps",
      summary:
        "Built an event-driven pipeline where S3 uploads trigger Lambda to process images, store metadata in DynamoDB, and send SNS notifications.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      tags: ["AWS Lambda", "Python", "AWS S3", "DynamoBD", "AWS SNS"],
      github: "https://github.com/alexmorgan/pulse-analytics",
      featured: true,
      specs: {
        architecture:
          "Architecture: User upload → S3 source bucket → S3 event trigger → Lambda → processed images to S3 output bucket, metadata to DynamoDB, completion alert to SNS.",
        highlights: [
          "Built an event-driven pipeline where S3 uploads trigger Lambda to process images, store metadata in DynamoDB, and send SNS notifications.",
          "Architecture: User upload → S3 source bucket → S3 event trigger → Lambda → processed images to S3 output bucket, metadata to DynamoDB, completion alert to SNS.",
        ],
      },
    },
    {
      id: "project-2",
      title: "Three-Tier VPC Architecture (AWS)",
      category: "Cloud & DevOps",
      summary:
        "Three-Tier VPC Architecture (AWS): Deployed a multi-AZ VPC that separates web, application, and database layers, with only the web tier reachable from the internet.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      tags: ["AWS", "Multi-AZ VPC", "NAT", "Security Groups", "Load Balancer"],
      github: "https://github.com/alexmorgan/nexus-cloud-control",
      demo: "https://nexus-cloud.io",
      featured: true,
      specs: {
        architecture:
          "Architecture: Internet → Internet Gateway → load balancer and web tier (public subnets) → app tier (private subnets, outbound via NAT Gateway) → database tier (isolated private subnets), with security groups controlling traffic between tiers.",
        highlights: [
          "Designed and deployed a two-tier VPC on AWS with public and private subnets across multiple availability zones. Configured route tables, NAT gateway, security groups, and network ACLs to isolate backend resources from direct internet access while maintaining controlled connectivity. Set up for high availability and least-privilege network access.",
        ],
      },
    },
    {
      id: "project-3",
      title: "CI/CD Pipeline for Containerized App",
      category: "Cloud & DevOps",
      summary:
        "Automated the build, test, and deployment of a Docker-based application so every code push ships without manual steps.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "Docker", "Github Actions", "Kubernetes", "CI/CD"],

      github: "https://github.com/alexmorgan/synthetix-vector-search",

      featured: true,
      specs: {
        architecture:
          "Developer push → GitHub → CI server (build and test) → Docker image → container registry → deploy to container host.",

        highlights: [
          "Built and deployed a CI/CD pipeline for a containerized application using Docker, GitHub Actions (or Jenkins), and Kubernetes. Automated build, test, and deployment stages to eliminate manual releases and reduce deployment time. Configured container registry integration and rollback handling for failed deployments.",
        ],
      },
    },
  ],

  certifications: [
    {
      id: "cert-aws-sa",
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Valid thru july 2029",
      badge: "AWS ",
      credentialId: "652b25722e4642f197678a652774fa0c",
      skills: ["VPC", "Serverless Architecture", "IAM", "Cost Optimization"],
      verificationUrl: "https://aws.amazon.com/verification",
    },
    {
      id: "cert-aws-sa",
      name: "AWS AI Practitioner Challenge",
      issuer: "Udacity by Accenture ",
      date: "Valid thru Dec 2026",
      badge: "AI Practitioner",
      credentialId: "6c89553d4d",
      skills: ["AI", "AWS Bedrock", "ML", "RAG"],
      verificationUrl: "https://Udacity.com/certificate",
    },
  ],

  resume: {
    downloadUrl: "#download-resume",

    education: [
      {
        institution: "Anjuman College of Engineering and Technology",
        degree: "B-Tech in Computer Science & Engineering",
        period: "2022 - 2025",
        details:
          "Graduated with Honors. Specialized in Artificial Intelligence, Operating Systems, and Human-Computer Interaction.",
      },
      {
        institution: "Anjuman Polytechnic Nagpur",
        degree: "Diploma in Computer Engineering",
        period: "2019 - 2021",
        details:
          "",
      },
    ],
  },

  contact: {
    tagline: "Have a project in mind or looking for a senior engineering lead?",
    email: "udaykiran.7510@gmail.com",
    phone: "+91 7796804323",
    location: "Nagpur, Maharashtra, India ",
    socials: [
      { name: "GitHub", url: "https://github.com", icon: "Github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/adakki-sai-uday-kiran", icon: "Linkedin" },
    ],
  },
};
