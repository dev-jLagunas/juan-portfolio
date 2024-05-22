import cafeDesktop from "@/assets/screenshots/cafe-desktop-screenshot.png";
import cafeMobile from "@/assets/screenshots/cafe-mobile-screenshot.png";
import blogDesktop from "@/assets/screenshots/blog-desktop-screenshot.png";
import blogMobile from "@/assets/screenshots/blog-mobile-screenshot.png";
import cosmicDesktop from "@/assets/screenshots/cosmic-desktop-screenshot.png";
import cosmicMobile from "@/assets/screenshots/cosmic-mobile-screenshot.png";
import squareDesktop from "@/assets/screenshots/square-desktop-screenshot.png";
import squareMobile from "@/assets/screenshots/square-mobile-screenshot.png";

export default [
  {
    id: 1,
    imageDesktop: cafeDesktop,
    imageMobile: cafeMobile,
    title: "CAFE TRIANGLE",
    description: "Local cafe in Ishikawa, Japan",
    iconClass: "fa-solid fa-mug-saucer",
    bgColor: "bg-orange-500",
  },
  {
    id: 2,
    imageDesktop: blogDesktop,
    imageMobile: blogMobile,
    title: "CODE CHICANO",
    description: "My journey as a self-taught dev",
    iconClass: "fa-solid fa-book-open",
    bgColor: "bg-emerald-800",
  },
  {
    id: 3,
    imageDesktop: squareDesktop,
    imageMobile: squareMobile,
    title: "SQUARE GOODS",
    description: "Square Goods, e-commerce site",
    iconClass: "fa-solid fa-credit-card",
    bgColor: "bg-yellow-500",
  },
  {
    id: 3,
    imageDesktop: cosmicDesktop,
    imageMobile: cosmicMobile,
    title: "COSMIC NEIGHBORHOOD",
    description: "Interactive space themed site",
    iconClass: "fa-solid fa-rocket",
    bgColor: "bg-red-500",
  },
];
