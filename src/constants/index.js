const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Performance-First Mindset",
    desc: "I don't just ship features, I measure them. From Lighthouse audits to MongoDB indexing, I find the bottleneck and fix it with a number to show for it.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Async-Friendly Communication",
    desc: "All three of my current clients are remote. I write clear updates, flag blockers early, and don't need hand-holding to stay on track.",
  },
  {
    imgPath: "/images/time.png",
    title: "Handles Multiple Clients at Once",
    desc: "Right now I'm juggling three active engagements across different stacks. I've built the systems and habits to keep each one moving without dropping the ball.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Vue Developer",
    imgPath: "/images/logos/vue.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "DevOps & CI/CD",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Vue Developer",
    modelPath: "/models/vue-transformed.glb",
    scale: 6,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "DevOps & CI/CD",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Kier shipped internal tooling that immediately cut our team's content processing time by 40%. He set up our entire CI/CD pipeline to Railway — what used to take two hours now takes under ten minutes. He works independently and delivers.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Web & App Developer",
    date: "December 2025 - Present",
    responsibilities: [
      "Built 4 internal Node.js/React tools that automated content workflows, cutting team processing time by 40%.",
      "Integrated Google Search Console and SEMrush APIs into a live React dashboard tracking 200+ domains.",
      "Set up GitHub Actions CI/CD to Railway — reduced deployment effort from 2 hours to under 10 minutes.",
    ],
  },
  {
    review:
      "Kier turned our underperforming storefront into something we're proud of. He found a critical async bug in the cart that had been hurting us for months and fixed it alongside the API slowdown. Mobile performance is night and day.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Web Developer",
    date: "January 2025 - May 2026",
    responsibilities: [
      "Refactored React components with hooks and Redux — raised Lighthouse mobile score from 64 to 91.",
      "Fixed a critical async cart bug that had gone unresolved and cut catalog API response time by 48% via MongoDB indexing.",
      "Improved UI responsiveness across desktop and mobile for a Shopify education platform covering 9+ selling channels.",
    ],
  },
  {
    review:
      "Kier built us a custom WordPress admin that our non-technical team can actually use. Content updates that used to take three days now get done in four hours. He also grew our Facebook and Instagram presence consistently month over month.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Junior WordPress Developer & Web Lead",
    date: "January 2023 - March 2026",
    responsibilities: [
      "Built a custom WP admin UI for non-technical staff — cut content update turnaround from 3 days to 4 hours.",
      "Delivered 5 WordPress sites (PHP, ACF, WooCommerce) averaging PageSpeed 88+, boosting organic traffic by 55%.",
      "Managed Facebook and Instagram growth through content scheduling and performance analytics.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Bo Lee",
    mentions: "bo@selleruniverse",
    review:
      "I can’t say enough good things about Kier. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.jpeg",
  },
  {
    name: "Craig Halsell",
    mentions: "@craig.halsell.7",
    review:
      "Working with Kier was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client2.jpg",
  },
  {
    name: "Kerry Copeland",
    mentions: "@kerrydoylecopeland",
    review:
      "Collaborating with Kier was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kier's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kier is the ideal partner.",
    imgPath: "/images/client3.jpg",
  },
  {
    name: "Landon Rogers",
    mentions: "@landonrodgers_27356",
    review:
      "Kier was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Doran Rogers",
    mentions: "@doranrodgers_56675",
    review:
      "Kier’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Steve Claus",
    mentions: "@steve_67518",
    review:
      "Kier was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/krbrnrys/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/kierbrian.reyes/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/krbrnrys",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/kier-brian-reyes/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
