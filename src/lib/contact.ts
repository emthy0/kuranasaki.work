export interface IContact {
  name: string
  desc: string
  icon: string
  link: string
}

export const contacts: IContact[] = [
  {
    name: "Email",
    desc: "kongphop.c@kuranasaki.work",
    icon: "/icon/mail.svg",
    link: "mailto:kongphop.c@kuranasaki.work",
  },
  {
    name: "GitHub",
    desc: "emthy0",
    icon: "/icon/github/github-mark-white.svg",
    link: "https://github.com/emthy0",
  },
  {
    name: "Facebook",
    desc: "Kongphop Chariyasathapond",
    icon: "/icon/facebook.svg",
    link: "https://facebook.com/kongphop.chariya",
  },
  {
    name: "LinkedIn",
    desc: "Kongphop Chariyasathapond",
    icon: "/icon/linkedin.svg",
    link: "https://www.linkedin.com/in/kuranasaki/",
  },
  {
    name: "Discord",
    desc: "kuranasaki",
    icon: "/icon/discord.svg",
    link: "https://discord.com/users/kuranasaki",
  },
  {
    name: "Twitter",
    desc: "kuranasaki",
    icon: "/icon/twitter.svg",
    link: "https://twitter.com/kuranasaki",
  },
  {
    name: "Instagram",
    desc: "kong_crs",
    icon: "/icon/instagram.svg",
    link: "https://www.instagram.com/kong_crs/",
  },
]
