import { Icons } from "@/components/icons";

export const links = [
  {
    type: "Website",
    href: "https://magicui.design",
    icon: <Icons.globe className="size-3" />,
  },
  {
    type: "GitHub",
    href: "https://github.com/magicuidesign/magicui",
    icon: <Icons.github className="size-3" />,
  },
  {
    type: "WhatsApp",
    href: "https://chatcollect.com",
    icon: <Icons.whatsapp className="size-3" />,
  },
];

export const events = [
  {
    title: "Event 1",
    eventUrl: "https://www.google.com",
    date: "2022-01-01",
    description: "Event 1 description",
    image: "/communities/laravel-cm-banner.png",
  },
  {
    title: "Event 2",
    eventUrl: "https://www.google.com",
    date: "2022-01-02",
    description: "Event 2 description",
    image: "/communities/laravel-cm-banner.png",
  },
  {
    title: "Event 3",
    eventUrl: "https://www.google.com",
    date: "2022-01-03",
    description: "Event 3 description",
    image: "/communities/laravel-cm-banner.png",
  },
  {
    title: "Event 4",
    eventUrl: "https://www.google.com",
    date: "2022-01-04",
    description: "Event 4 description",
    image: "/communities/laravel-cm-banner.png",
  },
];

export const Community = {
  bannerUrl: "/communities/laravel-cm-banner.png",
  socials: links,
  title: "Laravel Cameroon",
  description: `<h1 className=' font-bold text-2xl'>Nous construisons une communauté Open Source d'apprenants et d'enseignants!</h1>
        <br />
        <p><strong className=' font-bold'>"Tout le monde enseigne, tout le monde apprend "</strong> . Tel est l'esprit qui est derrière la communauté. Une communauté qui se veut grandissante et qui donne la possibilité à tout le monde de partager ses connaissances et d'apprendre.

</p>`,
  satistique: [
    {
      number: "600+",
      description:
        "Membres qui ont rejoint les différents groupes de la communauté!",
    },
    {
      number: "50k+",
      description:
        "Développeurs PHP & Laravel dans l’ensemble du territoire national.",
    },
    {
      number: "10k+",
      description:
        "stars sur les projets réalisés par les développeurs Camerounais sur Github.",
    },
    {
      number: "9%",
      description:
        "Taux de participation aux événements car la communauté est encore très jeune!",
    },
  ],
  upcomingEvents: events,
};
