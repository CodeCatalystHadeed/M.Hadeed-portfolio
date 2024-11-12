import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hadeed",
  initials: "HS",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Passionate software engineer dedicated to creating solutions that help people.",
  summary:
    "In 2024, I made the decision to leave my full-time position to fully immerse myself in freelancing. This shift allows me to focus on projects I’m passionate about, collaborate with diverse clients, and bring impactful solutions to life on my own terms.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Nest Js",
    "Prisma",
    "Type ORM",
    "Postgres",
    "Docker",
    "Wordpress",
    "Shopify",
    "Java",
    "C",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "dev.hadeed@gmail.com",
    tel: "+92 332 3820417",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/CodeCatalystHadeed",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-hadeed-9972821a1/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mod",
      href: "https://themodventures.com/",
      badges: [],
      location: "Remote",
      title: "Software engineer",
      logoUrl: "/mod.jfif",
      start: "Dec 2022",
      end: "Nov 2024",
      description:
        "Proposed and implemented an internal node API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, node, PostgreSQL and AWS EC2 saving hundreds of developer hours",
    },
    {
      company: "TECHNEXIA",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Pakistan ( Karachi )",
      title: "Software Engineer ( Intern )",
      logoUrl: "/tx.jfif",
      start: "May 2021",
      end: "August 2022",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "DHA Suffa",
      href: "https://buildspace.so",
      degree: "Bachelor's Degree of Software Engineer (BSE)",
      logoUrl: "/dha.jfif",
      start: "2019",
      end: "2023",
    },
    {
      school: "Adamjee Degree College",
      href: "https://uwaterloo.ca",
      degree: "Adamjee Government Science College",
      logoUrl: "/adamjee.jpeg",
      start: "2017",
      end: "2019",
    },
  ],
  hackathons: [
    {
      title: "Story Time",
      dates: "November 23rd - 25th, 2020",
      location: "Pakistan Karachi",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality",
      image:
        "/storytime.png",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Terra Care",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a web application focused on environmental sustainability, helping users track and reduce their environmental impact.",
      image:
        "/terra.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Scholars Sync",
      dates: "March 23rd - 24th, 2018",
      location: "Pakistan, Islamabad",
      description:
        "Developed a mobile application which help students focus on there soft skills",
      icon: "public",
      image:
        "/scholars.png",
      links: [],
    },
    {
      title: "Stock Room",
      dates: "February 3rd - 4th, 2023",
      location: "KSA",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "/stockroom.png",
      links: [],
    },
    {
      title: "Improof",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which track your  daily movement and help you to stay fit.",
      image:
        "/improof.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links:[]
    },
  ],
} as const;
