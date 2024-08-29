import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dilan Nde",
  initials: "END",
  url: "https://techwithdilan.tech",
  location: "Yaoundé, CM",
  locationLink: "https://www.google.com/maps/place/yaounde",
  description:
    "Software Engineer & passionate Computer Scientist. I love bringing things to life and helping people.",
  summary:
    "I am flexible and can adapt to new situations and changes quickly and easily. I am a hard worker and am always putting in the extra effort to achieve my goals.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Python",
    "PHP",
    "Postgres",
    "Docker",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ndedilan504@gmail.com",
    tel: "+237694525931",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Nde-Dilan",
        icon: Icons.github,

        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/237694525931",
        icon: Icons.whatsapp,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nde-dilan/",
        icon: Icons.linkedin,

        navbar: true,
      }, 
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
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

  
  communities: [
    {
      title: "Laravel Cameroun",
      href: "https://laravel.cm",
      dates: "Jan 2017 - Aug 2024",
      active: true,
      description: "Laravel Cameroun is a community of developers and enthusiasts who specialize in building web applications using the Laravel framework. This community shares knowledge, organizes meetups, and collaborates on open-source projects to advance the Laravel ecosystem in Cameroon.",
      technologies: [
        "PHP",
        "Laravel",
        "Composer",
        "MySQL",
        "PostgreSQL",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className='size-3' />
        },
        {
          type: "Github",
          href: "https://chatcollect.com",
          icon: <Icons.github className='size-3' />
        },
        {
          type: "WhatsApp",
          href: "https://chatcollect.com",
          icon: <Icons.whatsapp className='size-3' />
        }
      ],
      image: "/communities/laravel-cm.png",
      video: ""
    },
    {
      title: "Dot NET Cameroun",
      href: "https://dotnetcameroon.azurewebsites.net/",
      dates: "June 2019 - Present",
      active: true,
      description: "Dot NET Cameroun is a community for .NET developers in Cameroon. It provides a platform for professionals and enthusiasts to learn, share, and develop their skills in .NET technologies, including web, desktop, and cloud applications.",
      technologies: [
        "C#",
        ".NET Core",
        "ASP.NET",
        "Azure",
        "Entity Framework",
        "Blazor",
        "SQL Server"
      ],
      links: [
        {
          type: "Website",
          href: "https://dotnetcameroon.azurewebsites.net/",
          icon: <Icons.globe className='size-3' />
        },
        {
          type: "GitHub",
          href: "https://github.com/dotnetcameroon",
          icon: <Icons.github className='size-3' />
        },
        {
          type: "WhatsApp",
          href: "https://chat.whatsapp.com/KlBkiJX85Y8KFS28tIm1UU",
          icon: <Icons.whatsapp className='size-3' />
        }
      ],
      image: "/communities/dot-net.png",
      video: " "
    },
    {
      title: "Flutter & Dart Community",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description: "The Flutter & Dart Community in Cameroon is dedicated to mobile application development using the Flutter framework and Dart programming language. Members of this community engage in collaborative projects, workshops, and knowledge-sharing sessions to enhance their expertise in building cross-platform apps.",
      technologies: [
        "Dart",
        "Flutter",
        "Firebase",
        "Provider",
        "GetX",
        "Sqflite",
        "Shared Preferences",
        "State Management",
        "UI Design",
        "Responsive Layouts",
        "Git"
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className='size-3' />
        },
        {
          type: "WhatsApp",
          href: "https://chat.whatsapp.com/J5ToUhSX2ADKR9k1qyh0Vf",
          icon: <Icons.whatsapp className='size-3' />
        }
      ],
      image: "/communities/flutter-cm.png",
      video: " "
    },
    {
      title: "FOF - Douala",
      href: "https://automatic.chat",
      dates: "April 2019 - March 2024",
      active: true,
      description: "FOF - Douala (Friends of Figma - Douala) is a community of designers and developers who use Figma for creating user interfaces and experiences. The community provides a platform for sharing knowledge, organizing workshops, and collaborating on design projects using Figma and related tools.",
      technologies: [
        "Figma",
        "UI/UX Design",
        "Prototyping",
        "Design Systems",
        "Collaborative Design",
        "Wireframing"
      ],
      links: [
        {
          type: "Website",
          href: "https://friends.figma.com/douala/",
          icon: <Icons.globe className='size-3' />
        },
        {
          type: "Telegram",
          href: "https://t.me/FOF_Cameroon",
          icon: <Icons.globe className='size-3' />
        },
      ],
      image: "/communities/fof-douala.png",
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    }
    
  ]
  ,
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    }, 
  ],

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ]
} as const;
