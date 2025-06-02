import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sushant Garudkar",
  initials: "SG",
  url: "https://sushantgarudkar.in",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Data Scientist creating tools that make a difference. I love building things and helping people. Very active on Twitter.",
  summary:
    "After starting out as a [full-stack developer in college](#education), I explored **AI in 2023** and dived deep into machine learning, [officially launching my career in AI](#experience). Since then, I’ve been focused on building AI tools that make a positive impact. I live by the motto **“stay curious and never stop learning.”** When I’m not coding, you’ll find me practicing the flute, reading books, or traveling to explore historical and spiritual places.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "SQL",
    "NoSQL",
    "Pandas",
    "Apache Spark",
    "Scikit-Learn",
    "PyTorch",
    "FastAPI",
    "Git & GitHub",
    "Docker",
    "Jupyter Lab",
    "Jenkins",
    "Linux",
    "AWS",
    "GCP-Firebase",
    "Domino",
    "Linear Alebra",
    "Calculus",
    "Probability and Statistics"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@sushantgarudkar.in",
    tel: "+917387382535",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/sushant-github",
        icon: Icons.github,

        navbar: true,
      },
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
      email: {
        name: "Send Email",
        url: "mailto:contact@sushantgarudkar.in?subject=Contacting%20from%20sushantgarudkar.in&body=Hi%20Sushant,",
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
      location: "Hybrid",
      title: "Apprentice Associate III - Data Science",
      logoUrl: "/allstate.png",
      start: "September 2024",
      end: "Present",
      description:
        "At Allstate, I built and validated data pipelines, processed large datasets with PySpark, and used SHAP and PDP for model explainability. I handled the full model lifecycle—from data prep to production validation. I also developed a Streamlit app for sharing reports with secure filtering and exploration. Collaborating with teams, I delivered actionable insights and quickly gained skills in big data, model deployment, and Automation.",
    }
  ],
  education: [
    {
      school: "Helsinki University",
      href: "https://devopswithdocker.com",
      degree: "Cerfitication - DevOps with Docker",
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
      degree: "Bachelor's Degree of Computer Engineering",
      logoUrl: "/sppu.png",
      start: "2019",
      end: "2023",
    }
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // } 
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
