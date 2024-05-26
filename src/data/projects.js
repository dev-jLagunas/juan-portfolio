import cafeDesktop from "@/assets/screenshots/cafe-desktop-screenshot.png";
import cafeMobile from "@/assets/screenshots/cafe-mobile-screenshot.png";
import blogDesktop from "@/assets/screenshots/blog-desktop-screenshot.png";
import blogMobile from "@/assets/screenshots/blog-mobile-screenshot.png";
import cosmicDesktop from "@/assets/screenshots/cosmic-desktop-screenshot.png";
import cosmicMobile from "@/assets/screenshots/cosmic-mobile-screenshot.png";
import squareDesktop from "@/assets/screenshots/square-desktop-screenshot.png";
import squareMobile from "@/assets/screenshots/square-mobile-screenshot.png";
import portfoDesktop from "@/assets/screenshots/portfo-desktop-screenshot.png";
import portfoMobile from "@/assets/screenshots/portfo-mobile-screenshot.png";
import vueLogo from "@/assets/company-logos/vue-svgrepo-com.svg";
import angularLogo from "@/assets/company-logos/angular-svgrepo-com.svg";
import tailwindLogo from "@/assets/company-logos/tailwind-svgrepo-com.svg";
import materialLogo from "@/assets/company-logos/material.svg";
import typescriptLogo from "@/assets/company-logos/typescript-official-svgrepo-com.svg";
import javascriptLogo from "@/assets/company-logos/javascript-svgrepo-com.svg";
import threeJsLogo from "@/assets/company-logos/Threejs-logo.png";

export default [
  {
    id: 1,
    imageDesktop: cafeDesktop,
    imageMobile: cafeMobile,
    title: "CAFE TRIANGLE",
    description: "Local cafe in Ishikawa, Japan",
    iconClass: "fa-solid fa-mug-saucer",
    bgColor: "bg-orange-500",
    technologies: [angularLogo, tailwindLogo, typescriptLogo],
  },
  {
    id: 2,
    imageDesktop: blogDesktop,
    imageMobile: blogMobile,
    title: "CODE CHICANO",
    description: "My journey as a self-taught dev",
    iconClass: "fa-solid fa-book-open",
    bgColor: "bg-emerald-800",
    technologies: [angularLogo, materialLogo, typescriptLogo],
  },
  {
    id: 3,
    imageDesktop: squareDesktop,
    imageMobile: squareMobile,
    title: "SQUARE GOODS",
    description: "Square Goods, e-commerce site",
    iconClass: "fa-solid fa-credit-card",
    bgColor: "bg-yellow-500",
    technologies: [angularLogo, typescriptLogo],
  },
  {
    id: 3,
    imageDesktop: cosmicDesktop,
    imageMobile: cosmicMobile,
    title: "COSMIC NEIGHBORHOOD",
    description: "Interactive space themed site",
    iconClass: "fa-solid fa-rocket",
    bgColor: "bg-red-500",
    technologies: [vueLogo, javascriptLogo, threeJsLogo],
  },
  {
    id: 3,
    imageDesktop: portfoDesktop,
    imageMobile: portfoMobile,
    title: "PORTFOLIO SITE",
    description: "My personal portfolio website",
    iconClass: "fa-solid fa-user-astronaut",
    bgColor: "bg-teal-600",
    technologies: [vueLogo, tailwindLogo, javascriptLogo],
  },
];
