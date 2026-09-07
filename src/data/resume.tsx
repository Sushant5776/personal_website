import { Icons } from "@/components/icons";
import { BriefcaseBusinessIcon, GraduationCapIcon, HomeIcon, MailIcon } from "lucide-react";

export const DATA = {
  name: "Sushant Garudkar",
  initials: "SG",
  url: "https://sushantgarudkar.in",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "AI/ML engineer and data scientist building practical AI systems, data products, and full-stack tools.",
  summary:
    "I help companies extract insights from data and make data-driven decisions. My background across full-stack software development and data science helps me tackle AI engineering challenges and build useful data-driven applications.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "SQL / Spark / Pandas",
    "Scikit-Learn / PyTorch / TensorFlow",
    "LangChain / Google ADK",
    "FastAPI",
    "Git & GitHub",
    "Docker",
    "PyTest",
    "Snowflake",
    "GCP Firebase / AWS S3"
  ],
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#work", icon: BriefcaseBusinessIcon, label: "Experience" },
    { href: "#education", icon: GraduationCapIcon, label: "Education" },
    { href: "#contact", icon: MailIcon, label: "Contact" },
  ],
  contact: {
    email: "garudkar.sa@gmail.com",
    tel: "+917387382535",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/sushant-github",
        icon: Icons.github,

        navbar: true,
      },
      // Coursera: {
      //   name: "Coursera",
      //   url: "https://dub.sh/sushant-coursera",
      //   icon: Icons.coursera,

      //   navbar: true,
      // },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/sushant-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/sushant-x",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/sushant-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      Email: {
        name: "Send Email",
        url: "mailto:garudkar.sa@gmail.com?subject=Contacting%20from%20sushantgarudkar.in&body=Hi%20Sushant,",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Allstate India",
      href: "https://www.allstateindia.com/",
      badges: [],
      location: "Pune, India",
      title: "Data Scientist Consultant I",
      logoUrl: "/allstate.png",
      start: "July 2026",
      end: "Present",
      description:
        "Helping teams extract insights from data and build data-driven solutions across AI engineering and applied data science.",
    },
    {
      company: "Allstate India",
      href: "https://www.allstateindia.com/",
      badges: [],
      location: "Pune, India",
      title: "Data Scientist Analyst III",
      logoUrl: "/allstate.png",
      start: "July 2025",
      end: "June 2026",
      description:
        "As a Data Scientist Analyst III at Allstate India, I leverage advanced analytics and machine learning to extract insights from complex data, supporting data-driven decision-making across business functions such as underwriting, claims, and risk assessment. I collaborate with cross-functional teams to develop predictive models and actionable solutions, and ensuring best practices in data governance and model quality.",
    },
    {
      company: "Allstate India",
      href: "https://www.allstateindia.com/",
      badges: [],
      location: "Pune, India",
      title: "Apprentice Associate III (Data Science)",
      logoUrl: "/allstate.png",
      start: "September 2024",
      end: "July 2025",
      description:
        "Built data pipelines, processed large datasets, explored model explainability, and developed data applications while learning the full machine learning lifecycle.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Information Technology",
      href: "https://onlinedsai.iiitdwd.ac.in",
      degree: "Master's Degree in Data Science and Artificial Intelligence",
      logoUrl: "/iiitdwd.png",
      start: "2025",
      end: "2027",
    },
    {
      school: "Imperial College London - Coursera",
      href: "https://www.coursera.org/account/accomplishments/specialization/Z786S9EJG6FZ",
      degree: "Certificate · Mathematics for Machine Learning Specialization",
      logoUrl: "/imperial.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Helsinki University",
      href: "https://devopswithdocker.com",
      degree: "Certificate · DevOps with Docker",
      logoUrl: "/helsinki.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "Indian Institute of Technology, Hyderabad",
      href: "https://www.iith.ac.in",
      degree: "Professional Certification in AI and Emerging Technologies",
      logoUrl: "/iith.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Savitribai Phule Pune University",
      href: "http://www.unipune.ac.in/",
      degree: "Bachelor's Degree in Computer Engineering",
      logoUrl: "/sppu.png",
      start: "2019",
      end: "2023",
    }
  ],
  projects: [
    {
      title: "AgentIQ",
      href: "https://github.com/Sushant5776/agent-iq",
      dates: "2026",
      description:
        "A production-grade enterprise RAG system using Gemini embeddings, Firestore vector search, and Python for semantic document retrieval, with batch ingestion and vector indexing for enterprise GenAI workflows.",
      technologies: ["Gemini", "Firestore", "Python", "RAG"],
      star: {
        situation: "Enterprise teams needed a reliable way to search and use knowledge across internal documents.",
        task: "Design a production-grade retrieval system for semantic document discovery.",
        action: "Built Gemini embedding and Firestore vector-search pipelines in Python, including batch ingestion and indexing.",
        result: "Created a foundation for enterprise GenAI and agentic AI workflows.",
      },
    },
    {
      title: "Custom Implementation of Claude Code",
      href: "https://github.com/Sushant5776/codecrafters-claude-code-python",
      dates: "2026",
      description:
        "A Claude Code-inspired agentic coding assistant built to practice autonomous workflows, tool use, task decomposition, file editing, and execution feedback.",
      technologies: ["Agentic AI", "LLMs", "Python", "Tool Use"],
      star: {
        situation: "I wanted to understand what makes autonomous coding workflows useful in practice.",
        task: "Build a personal Claude Code-inspired assistant from first principles.",
        action: "Implemented agent loops, task decomposition, tool use, file editing, and execution feedback.",
        result: "Gained hands-on experience designing LLM-based software engineering workflows.",
      },
    },
  ],
  hackathons: [
    {
      title: "GenAI Exchange Program - H2S & Google",
      dates: "April 2nd - Oct 31st, 2025",
      location: "Remote",
      description:
        "Developed AI powered applications and AI agents to solve real world problems. Learnt Google Cloud.",
      image:
        "https://uninist.com/blog/wp-content/uploads/2025/05/Google-AI-Exchange-program-696x464.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
  ],
} as const;
