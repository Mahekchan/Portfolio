import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Download,
  Send,
  ChevronRight,
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  MonitorSmartphone,
  ServerCog,
  Database,
  BrainCircuit,
  Palette,
  Wrench,
  Bot,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import avatarPortrait from "@/imports/image.png";
import avatar from "@/imports/avatar.png";
import avatar2 from "@/imports/avatar-2.png";
import cyberShieldImg from "@/imports/projects/cybershield.png";
import shieldChatImg from "@/imports/projects/shieldchat.png";
import portfolioImg from "@/imports/projects/portfolio.png";
import { motion, useReducedMotion } from "framer-motion";
import {
  SiReact,
  SiPython,
  SiFigma,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

/* ─── Tokens ────────────────────────────────────────────── */
const C = {
  pink: "#f9a8d4",
  pinkD: "#ec4899",
  lav: "#c4b5fd",
  lavD: "#8b5cf6",
  mint: "#6ee7b7",
  mintD: "#10b981",
  sky: "#7dd3fc",
  skyD: "#0ea5e9",
  lemon: "#fde68a",
  navy: "#1e1b4b",
  navyM: "#312e81",
  sub: "rgba(30,27,75,0.60)",
  bg: "#f8f6ff",
};
const GL = {
  card: "rgba(255,255,255,0.68)",
  cardH: "rgba(255,255,255,0.82)",
  border: "rgba(255,255,255,0.75)",
  sh: "0 12px 40px rgba(15,23,42,0.06), 0 2px 10px rgba(139,92,246,0.06)",
  shH: "0 24px 70px rgba(15,23,42,0.10), 0 8px 24px rgba(139,92,246,0.12)",
};

/* ─── Data ──────────────────────────────────────────────── */
const NAV = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const RESUME_URL = "/Mahek-Shaikh-CV.pdf";

const MAILTO_URL =
  "mailto:mahekshaikh7123@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Mahek,%0A%0AI%20found%20your%20portfolio.";

const SKILLS = [
  {
    category: "Frontend",
    icon: <MonitorSmartphone size={20} />,
    col: C.pink,
    colD: C.pinkD,
    items: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    icon: <ServerCog size={20} />,
    col: C.mint,
    colD: C.mintD,
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "Postman"],
  },
  {
    category: "Database",
    icon: <Database size={20} />,
    col: C.lemon,
    colD: "#d97706",
    items: ["MongoDB", "Firebase"],
  },
  {
    category: "AI & Machine Learning",
    icon: <BrainCircuit size={20} />,
    col: C.sky,
    colD: C.skyD,
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "NLP",
      "Supervised Learning",
      "Unsupervised Learning",
    ],
  },
  {
    category: "Design",
    icon: <Palette size={20} />,
    col: C.lav,
    colD: C.lavD,
    items: ["Figma", "UI Design", "Web Design", "Responsive Layouts"],
  },
  {
    category: "Developer Tools",
    icon: <Wrench size={20} />,
    col: C.pink,
    colD: C.pinkD,
    items: ["VS Code", "Git", "GitHub", "Firebase Hosting", "Colab"],
  },
];

const PROJECTS = [
  {
    name: "ShieldChat",
    image: shieldChatImg,
    live: "https://fullstack-chat-app-qi77.onrender.com",
    tag: "Secure Real-Time Messaging Hub",
    desc: "Custom messaging UI with end-to-end encryption and an AI sentence-rephrasing assistant for professional, safe communication.",
    tech: ["React", "Node.js", "Socket.io", "OpenAI", "MongoDB"],
  },
  {
    name: "CyberShield",
    image: cyberShieldImg,
    live: "https://cybershield-frontend-veq2.onrender.com",
    tag: "AI-Powered Text Classification System",
    desc: "Campus safety analytics dashboard, real-time alerts, and a custom AI assistant chatbot.",
    tech: ["Python", "React", "AI", "JavaScript", "Tailwind CSS", "Firebase"],
  },
  {
    name: "PortfolioOS",
    image: portfolioImg,
    live: "https://mahek-shaikh-portfolio.netlify.app/",
    tag: "Interactive OS-Themed Portfolio",
    desc: "A macOS-inspired interactive portfolio with draggable windows, a Finder-style project browser, and ambient micro-interactions.",
    tech: ["React", "Motion", "TypeScript", "Tailwind"],
  },
];

const EXPERIENCE = [
  {
    role: "Machine Learning Intern",
    co: "YBI Foundation",
    period: "Jul 2024 – Aug 2024",
    loc: "Online",
    desc: [
      "Built end-to-end data preprocessing pipelines and feature engineering workflows using Python for predictive model development.",
      "Applied supervised and unsupervised machine learning algorithms to improve model accuracy and analytical performance.",
    ],
    tags: [
      "Python",
      "Machine Learning",
      "Data Preprocessing",
      "Feature Engineering",
      "Supervised Learning",
      "Unsupervised Learning",
    ],
    icon: <SiPython size={20} />,
    cert: "/YBI-Foundation.pdf",
    col: C.sky,
    colD: C.skyD,
  },
  {
    role: "Trainee",
    co: "Atos Prayas Foundation",
    period: "Jul 2025 – Aug 2025",
    loc: "Virar, Maharashtra",
    desc: [
      "Trained in network infrastructure security, cybersecurity fundamentals, and digital risk assessment.",
      "Configured secure environments, analyzed system configurations, and evaluated software vulnerabilities.",
    ],
    tags: [
      "Network Security",
      "Cybersecurity",
      "Threat Analysis",
      "Configuration Management",
      "Risk Assessment",
    ],
    icon: <ServerCog size={20} />,
    cert: "/Atos-Prayas-Foundation.pdf",
    col: C.pink,
    colD: C.pinkD,
  },
  {
    role: "Technical Intern",
    co: "The Intellect Technologies",
    period: "Aug 2022",
    loc: "Boisar, Maharashtra",
    desc: [
      "Worked with IoT hardware platforms and cloud-connected monitoring systems.",
      "Configured hardware environments and validated cloud-based sensor communication.",
    ],
    tags: [
      "IoT",
      "Augmented Reality",
      "Virtual Reality",
      "Hardware",
      "Sensors",
    ],
    icon: <MonitorSmartphone size={20} />,
    cert: "/The-Intellect-Technologies.pdf",
    col: C.mint,
    colD: C.mintD,
  },
];

const PARTICLES = [
  { x: 8, y: 12, sz: 5, c: C.pink, d: 6.2, dl: 0 },
  { x: 92, y: 8, sz: 7, c: C.lav, d: 5.1, dl: 1.2 },
  { x: 18, y: 45, sz: 4, c: C.mint, d: 7.4, dl: 0.5 },
  { x: 85, y: 52, sz: 6, c: C.sky, d: 5.8, dl: 2.1 },
  { x: 42, y: 5, sz: 5, c: C.lemon, d: 6.6, dl: 0.8 },
  { x: 65, y: 92, sz: 4, c: C.pink, d: 7.0, dl: 1.5 },
  { x: 30, y: 88, sz: 6, c: C.lav, d: 5.5, dl: 0.3 },
  { x: 75, y: 18, sz: 4, c: C.mint, d: 8.0, dl: 2.5 },
  { x: 5, y: 72, sz: 5, c: C.sky, d: 6.4, dl: 1.0 },
  { x: 55, y: 78, sz: 7, c: C.lemon, d: 5.2, dl: 1.8 },
  { x: 20, y: 25, sz: 3, c: C.lav, d: 7.8, dl: 0.7 },
  { x: 80, y: 70, sz: 4, c: C.pink, d: 6.0, dl: 2.3 },
  { x: 48, y: 58, sz: 5, c: C.mint, d: 5.6, dl: 0.2 },
  { x: 12, y: 60, sz: 3, c: C.sky, d: 7.2, dl: 1.4 },
  { x: 90, y: 35, sz: 5, c: C.lemon, d: 6.8, dl: 0.6 },
  { x: 38, y: 15, sz: 4, c: C.pink, d: 5.4, dl: 2.0 },
  { x: 68, y: 48, sz: 3, c: C.lav, d: 7.6, dl: 1.1 },
  { x: 25, y: 80, sz: 6, c: C.sky, d: 5.0, dl: 2.8 },
];

const BADGES = [
  {
    label: "React",
    icon: <SiReact size={16} />,
    pos: { top: "8%", right: "-2%" },
    bg: "rgba(249,168,212,0.88)",
    dl: "0s",
  },
  {
    label: "Python",
    icon: <SiPython size={16} />,
    pos: { top: "28%", left: "-1%" },
    bg: "rgba(196,181,253,0.88)",
    dl: "0.7s",
  },
  {
    label: "Artificial Intelligence",
    icon: <Bot size={16} />,
    pos: { bottom: "5%", right: "-10%" },
    bg: "rgba(110,231,183,0.88)",
    dl: "1.2s",
  },
  {
    label: "Figma",
    icon: <SiFigma size={16} />,
    pos: { bottom: "16%", left: "-6%" },
    bg: "rgba(125,211,252,0.88)",
    dl: "1.8s",
  },
  {
    label: "Node.js",
    icon: <SiNodedotjs size={16} />,
    pos: { top: "42%", right: "-12%" },
    bg: "rgba(253,230,138,0.88)",
    dl: "0.9s",
  },
  {
    label: "MongoDB",
    icon: <SiMongodb size={16} />,
    pos: { top: "0%", left: "13%" },
    bg: "rgba(249,168,212,0.75)",
    dl: "1.5s",
  },
];

function PixarCharacter() {
  return (
    <svg
      viewBox="0 0 520 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={
        {
          width: "100%",
          height: "100%",
          animation: "charFloat 5s ease-in-out infinite alternate",
          filter: "drop-shadow(0 28px 55px rgba(249,168,212,0.38))",
        } as React.CSSProperties
      }
    >
      <defs>
        {/* Skin */}
        <radialGradient id="sk" cx="42%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#FDE4C6" />
          <stop offset="55%" stopColor="#F5C5A0" />
          <stop offset="100%" stopColor="#E8A87C" />
        </radialGradient>
        {/* Hijab */}
        <linearGradient id="hj" x1="0%" y1="0%" x2="100%" y2="110%">
          <stop offset="0%" stopColor="#FFE0EC" />
          <stop offset="42%" stopColor="#FFB3C8" />
          <stop offset="100%" stopColor="#FF8FAB" />
        </linearGradient>
        {/* Hijab highlight */}
        <radialGradient id="hjH" cx="28%" cy="18%" r="52%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.68)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        {/* Denim front */}
        <linearGradient id="dn" x1="0%" y1="0%" x2="15%" y2="100%">
          <stop offset="0%" stopColor="#7BAFD4" />
          <stop offset="42%" stopColor="#5B8DB8" />
          <stop offset="100%" stopColor="#3D6A96" />
        </linearGradient>
        {/* Denim arms */}
        <linearGradient id="dnA" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6BA0C4" />
          <stop offset="100%" stopColor="#4A7BA7" />
        </linearGradient>
        {/* Shirt */}
        <linearGradient id="sh" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFF" />
          <stop offset="100%" stopColor="#DDE4F5" />
        </linearGradient>
        {/* Laptop silver */}
        <linearGradient id="ls" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F4" />
          <stop offset="55%" stopColor="#C8D0DC" />
          <stop offset="100%" stopColor="#AEB8C8" />
        </linearGradient>
        {/* Laptop base */}
        <linearGradient id="lb" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D8DFF0" />
          <stop offset="100%" stopColor="#A8B4C8" />
        </linearGradient>
        {/* Screen */}
        <linearGradient id="sc" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1433" />
          <stop offset="100%" stopColor="#100C22" />
        </linearGradient>
        {/* Screen glow */}
        <radialGradient id="sg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#8BAEFF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#8BAEFF" stopOpacity="0" />
        </radialGradient>
        {/* Iris */}
        <radialGradient id="ir" cx="36%" cy="32%" r="60%">
          <stop offset="0%" stopColor="#A07848" />
          <stop offset="52%" stopColor="#6E4E28" />
          <stop offset="100%" stopColor="#3D2408" />
        </radialGradient>
        {/* Blur filter */}
        <filter id="bl">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id="blS">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* ── Ground shadow ─────────────────────────────── */}
      <ellipse
        cx="260"
        cy="570"
        rx="148"
        ry="13"
        fill="#1e1b4b"
        opacity="0.07"
        filter="url(#bl)"
      />

      {/* ── Denim jacket body ─────────────────────────── */}
      <path
        d="
        M 170 362 C 148 366 118 380 96 406
        L 80 505 L 440 505 L 424 406
        C 402 380 372 366 350 362
        L 312 358 L 260 374 L 208 358 Z
      "
        fill="url(#dn)"
      />
      {/* jacket left shoulder highlight */}
      <path
        d="M 170 362 C 148 366 122 382 104 408 L 110 435
               C 128 408 154 388 174 374 Z"
        fill="white"
        opacity="0.12"
      />
      {/* jacket right edge shadow */}
      <path
        d="M 350 362 C 372 366 400 382 420 408 L 414 435
               C 396 408 370 390 346 376 Z"
        fill="#2D5A86"
        opacity="0.22"
      />
      {/* denim stitching lines */}
      <path
        d="M 165 390 L 168 362"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.2"
      />
      <path
        d="M 355 390 L 352 362"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.2"
      />

      {/* White shirt collar */}
      <path
        d="M 238 358 L 222 336 L 260 348 L 298 336 L 282 358 Z"
        fill="url(#sh)"
      />
      {/* Collar shadow */}
      <path
        d="M 238 358 L 246 350 L 260 354 L 274 350 L 282 358
               L 268 362 L 260 364 L 252 362 Z"
        fill="#C8D0E8"
        opacity="0.5"
      />

      {/* ── Left sleeve ───────────────────────────────── */}
      <path
        d="
        M 96 406 C 72 422 56 454 54 482
        C 52 506 64 520 86 523
        C 110 526 132 506 140 484
        C 148 462 144 432 128 410 Z
      "
        fill="url(#dnA)"
      />
      <path
        d="M 96 406 C 74 422 58 454 58 478 L 70 476
               C 72 454 84 425 102 410 Z"
        fill="white"
        opacity="0.13"
      />

      {/* ── Right sleeve ──────────────────────────────── */}
      <path
        d="
        M 424 406 C 448 422 464 454 466 482
        C 468 506 456 520 434 523
        C 410 526 388 506 380 484
        C 372 462 376 432 392 410 Z
      "
        fill="url(#dnA)"
      />
      <path
        d="M 424 406 C 446 422 462 454 462 478 L 450 476
               C 448 454 436 426 418 412 Z"
        fill="#3A6A96"
        opacity="0.2"
      />

      {/* ── Hands ─────────────────────────────────────── */}
      <ellipse cx="112" cy="500" rx="30" ry="20" fill="#F5C5A0" />
      <ellipse cx="112" cy="497" rx="22" ry="11" fill="#FABBA0" opacity="0.3" />
      <ellipse cx="408" cy="500" rx="30" ry="20" fill="#F5C5A0" />
      <ellipse cx="408" cy="497" rx="22" ry="11" fill="#FABBA0" opacity="0.3" />

      {/* ── Neck ──────────────────────────────────────── */}
      <rect x="237" y="320" width="46" height="50" rx="16" fill="url(#sk)" />
      <rect
        x="237"
        y="320"
        width="46"
        height="20"
        rx="16"
        fill="#E8A87C"
        opacity="0.22"
      />

      {/* ── Laptop screen (sits in front of jacket/neck base) ── */}
      {/* outer frame */}
      <rect
        x="100"
        y="360"
        width="320"
        height="135"
        rx="13"
        fill="url(#ls)"
        stroke="#B8C4D4"
        strokeWidth="1.5"
      />
      {/* bezel */}
      <rect x="107" y="367" width="306" height="121" rx="9" fill="#0E0A20" />
      {/* screen glass */}
      <rect x="113" y="373" width="294" height="109" rx="6" fill="url(#sc)" />
      {/* code lines — colourful */}
      <rect
        x="126"
        y="386"
        width="88"
        height="3.5"
        rx="1.5"
        fill="#7B9EF7"
        opacity="0.92"
      />
      <rect
        x="126"
        y="396"
        width="138"
        height="3.5"
        rx="1.5"
        fill="#A5D6A7"
        opacity="0.88"
      />
      <rect
        x="140"
        y="406"
        width="105"
        height="3.5"
        rx="1.5"
        fill="#FFD580"
        opacity="0.82"
      />
      <rect
        x="140"
        y="416"
        width="78"
        height="3.5"
        rx="1.5"
        fill="#F48FB1"
        opacity="0.80"
      />
      <rect
        x="126"
        y="426"
        width="118"
        height="3.5"
        rx="1.5"
        fill="#80DEEA"
        opacity="0.78"
      />
      <rect
        x="140"
        y="436"
        width="90"
        height="3.5"
        rx="1.5"
        fill="#CE93D8"
        opacity="0.75"
      />
      <rect
        x="126"
        y="446"
        width="102"
        height="3.5"
        rx="1.5"
        fill="#7B9EF7"
        opacity="0.70"
      />
      <rect
        x="140"
        y="456"
        width="66"
        height="3.5"
        rx="1.5"
        fill="#A5D6A7"
        opacity="0.65"
      />
      <rect
        x="126"
        y="466"
        width="96"
        height="3.5"
        rx="1.5"
        fill="#FFD580"
        opacity="0.60"
      />
      {/* blinking cursor */}
      <rect
        x="228"
        y="466"
        width="8"
        height="10"
        rx="1"
        fill="#7B9EF7"
        opacity="0.9"
        style={
          {
            animation: "cursorBlink 1.1s step-end infinite",
          } as React.CSSProperties
        }
      />
      {/* screen glow overlay */}
      <rect
        x="113"
        y="373"
        width="294"
        height="109"
        rx="6"
        fill="url(#sg)"
        opacity="0.55"
      />
      {/* screen bottom hinge */}
      <rect x="100" y="491" width="320" height="9" rx="4" fill="#B0BCCC" />

      {/* ── Laptop keyboard base ──────────────────────── */}
      <rect x="84" y="498" width="352" height="58" rx="10" fill="url(#lb)" />
      <rect
        x="84"
        y="498"
        width="352"
        height="22"
        rx="10"
        fill="white"
        opacity="0.13"
      />
      {/* trackpad */}
      <rect
        x="196"
        y="518"
        width="128"
        height="26"
        rx="7"
        fill="#C0CADC"
        opacity="0.55"
      />
      {/* key rows */}
      {[0, 1, 2, 3].map((r) =>
        [...Array(11)].map((_, k) => (
          <rect
            key={`k${r}${k}`}
            x={96 + k * 28}
            y={500 + r * 12}
            width="24"
            height="9"
            rx="2.5"
            fill="#A8B4C8"
            opacity="0.48"
          />
        )),
      )}
      {/* base bottom edge */}
      <rect x="84" y="550" width="352" height="8" rx="4" fill="#98A8BC" />

      {/* ── Hijab outer silhouette ────────────────────── */}
      <path
        d="
        M 260 40
        C 368 38 442 108 440 202
        C 440 284 408 334 368 356
        C 338 370 302 378 260 378
        C 218 378 182 370 152 356
        C 112 334 80 284 80 202
        C 80 108 152 38 260 40 Z
      "
        fill="url(#hj)"
      />

      {/* Hijab top-left catch-light */}
      <ellipse cx="196" cy="106" rx="65" ry="40" fill="url(#hjH)" />
      {/* Hijab right soft highlight */}
      <ellipse cx="394" cy="188" rx="32" ry="52" fill="white" opacity="0.08" />

      {/* Hijab left drape shadow */}
      <path
        d="M 80 202 C 80 264 100 316 152 356 L 144 362
               C 90 320 74 266 74 200 Z"
        fill="#E07898"
        opacity="0.28"
      />
      {/* Hijab right drape shadow */}
      <path
        d="M 440 202 C 440 264 420 316 368 356 L 376 362
               C 430 320 446 266 446 200 Z"
        fill="#E07898"
        opacity="0.25"
      />

      {/* Fabric fold lines */}
      <path
        d="M 174 70 Q 184 90 178 112"
        stroke="#FF8FAB"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 208 56 Q 224 72 220 92"
        stroke="#FF8FAB"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.42"
      />
      <path
        d="M 342 62 Q 330 82 336 104"
        stroke="#FF8FAB"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 380 82 Q 398 104 392 126"
        stroke="#FF8FAB"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />

      {/* Pin/pearl detail */}
      <circle cx="260" cy="96" r="7" fill="white" opacity="0.55" />
      <circle cx="260" cy="96" r="5" fill="#FFD4E2" />
      <circle cx="260" cy="96" r="2.5" fill="white" opacity="0.85" />

      {/* ── Face oval ─────────────────────────────────── */}
      <ellipse cx="260" cy="206" rx="108" ry="126" fill="url(#sk)" />
      {/* face forehead highlight */}
      <ellipse cx="248" cy="150" rx="55" ry="36" fill="white" opacity="0.2" />
      {/* subsurface warmth */}
      <ellipse
        cx="260"
        cy="244"
        rx="86"
        ry="72"
        fill="#FABBA0"
        opacity="0.14"
      />

      {/* Hijab shadow framing the face (left/right inner edges) */}
      <path
        d="M 152 122 C 144 152 140 190 144 222
               C 148 248 158 272 170 290
               C 160 270 152 244 150 216
               C 148 186 152 153 162 130 Z"
        fill="#E07898"
        opacity="0.28"
      />
      <path
        d="M 368 122 C 376 152 380 190 376 222
               C 372 248 362 272 350 290
               C 360 270 368 244 370 216
               C 372 186 368 153 358 130 Z"
        fill="#E07898"
        opacity="0.28"
      />

      {/* Chin hijab wrap */}
      <path
        d="M 168 296 Q 178 324 220 340 Q 260 350 300 340
               Q 342 324 352 296 Q 325 318 260 324 Q 195 318 168 296 Z"
        fill="#FFB3C8"
        opacity="0.44"
      />

      {/* ── Eyebrows ──────────────────────────────────── */}
      <path
        d="M 186 166 Q 204 156 220 159 Q 236 161 243 167"
        stroke="#5C3518"
        strokeWidth="5.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 277 167 Q 284 161 300 159 Q 316 156 334 166"
        stroke="#5C3518"
        strokeWidth="5.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* eyebrow soft edge */}
      <path
        d="M 186 166 Q 204 156 220 159 Q 236 161 243 167"
        stroke="#7A4A28"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.38"
      />
      <path
        d="M 277 167 Q 284 161 300 159 Q 316 156 334 166"
        stroke="#7A4A28"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.38"
      />

      {/* ── LEFT EYE ──────────────────────────────────── */}
      <g
        style={
          {
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: "eyeBlink 5.5s ease-in-out 1.2s infinite",
          } as React.CSSProperties
        }
      >
        {/* sclera */}
        <ellipse cx="212" cy="200" rx="31" ry="25" fill="white" />
        {/* iris */}
        <circle cx="212" cy="202" r="21" fill="url(#ir)" />
        {/* pupil */}
        <circle cx="212" cy="202" r="13" fill="#1A0800" />
        {/* main specular */}
        <ellipse
          cx="204"
          cy="193"
          rx="7.5"
          ry="6.5"
          fill="white"
          opacity="0.93"
        />
        {/* small secondary */}
        <circle cx="220" cy="208" r="3.2" fill="white" opacity="0.55" />
        {/* rim light bottom */}
        <ellipse cx="212" cy="215" rx="9" ry="3.5" fill="white" opacity="0.2" />
        {/* upper lid shadow */}
        <path
          d="M 181 191 Q 212 185 243 191"
          stroke="#1E0800"
          strokeWidth="3.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* lower lid */}
        <path
          d="M 184 214 Q 212 220 240 214"
          stroke="#C8907A"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.48"
        />
      </g>
      {/* Eyelashes — left (always visible, outside blink group) */}
      {[
        [184, 191, 179, 183],
        [195, 186, 192, 178],
        [208, 183, 207, 174],
        [220, 182, 220, 173],
        [232, 183, 235, 175],
        [242, 188, 246, 181],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={`ll${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#1E0800"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      ))}

      {/* ── RIGHT EYE ─────────────────────────────────── */}
      <g
        style={
          {
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: "eyeBlink 5.5s ease-in-out 1.2s infinite",
          } as React.CSSProperties
        }
      >
        {/* sclera */}
        <ellipse cx="308" cy="200" rx="31" ry="25" fill="white" />
        {/* iris */}
        <circle cx="308" cy="202" r="21" fill="url(#ir)" />
        {/* pupil */}
        <circle cx="308" cy="202" r="13" fill="#1A0800" />
        {/* main specular */}
        <ellipse
          cx="300"
          cy="193"
          rx="7.5"
          ry="6.5"
          fill="white"
          opacity="0.93"
        />
        {/* small secondary */}
        <circle cx="316" cy="208" r="3.2" fill="white" opacity="0.55" />
        {/* rim light bottom */}
        <ellipse cx="308" cy="215" rx="9" ry="3.5" fill="white" opacity="0.2" />
        {/* upper lid shadow */}
        <path
          d="M 277 191 Q 308 185 339 191"
          stroke="#1E0800"
          strokeWidth="3.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* lower lid */}
        <path
          d="M 280 214 Q 308 220 336 214"
          stroke="#C8907A"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.48"
        />
      </g>
      {/* Eyelashes — right */}
      {[
        [278, 188, 274, 181],
        [288, 183, 285, 175],
        [300, 182, 300, 173],
        [312, 183, 315, 175],
        [325, 186, 328, 178],
        [336, 191, 341, 183],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={`rl${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#1E0800"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      ))}

      {/* ── Nose ──────────────────────────────────────── */}
      {/* subtle bridge shadow */}
      <path
        d="M 255 218 Q 249 234 255 248"
        stroke="#D09060"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.34"
      />
      {/* nostril shadows */}
      <ellipse
        cx="249"
        cy="251"
        rx="8"
        ry="5.5"
        fill="#D09060"
        opacity="0.26"
      />
      <ellipse
        cx="271"
        cy="251"
        rx="8"
        ry="5.5"
        fill="#D09060"
        opacity="0.26"
      />
      {/* nose tip highlight */}
      <ellipse
        cx="260"
        cy="248"
        rx="5.5"
        ry="4.5"
        fill="white"
        opacity="0.28"
      />

      {/* ── Smile ─────────────────────────────────────── */}
      {/* upper lip line */}
      <path
        d="M 226 276 Q 242 271 260 273 Q 278 271 294 276"
        stroke="#D05870"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* main smile arc */}
      <path
        d="M 226 276 Q 260 306 294 276"
        stroke="#C04865"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* lip fill */}
      <path
        d="M 228 275 Q 260 302 292 275
               Q 276 286 260 288 Q 244 286 228 275 Z"
        fill="#E87090"
        opacity="0.72"
      />
      {/* teeth */}
      <path
        d="M 236 279 Q 260 292 284 279
               Q 260 284 236 279 Z"
        fill="white"
        opacity="0.68"
      />
      {/* upper lip highlight */}
      <ellipse cx="250" cy="282" rx="14" ry="4" fill="white" opacity="0.18" />
      {/* dimples */}
      <circle cx="225" cy="276" r="3.2" fill="#C86080" opacity="0.44" />
      <circle cx="295" cy="276" r="3.2" fill="#C86080" opacity="0.44" />

      {/* ── Cheeks ────────────────────────────────────── */}
      <ellipse
        cx="188"
        cy="252"
        rx="28"
        ry="17"
        fill="#FFB0B0"
        opacity="0.30"
      />
      <ellipse
        cx="332"
        cy="252"
        rx="28"
        ry="17"
        fill="#FFB0B0"
        opacity="0.30"
      />
      {/* cheek specular */}
      <ellipse cx="182" cy="247" rx="11" ry="6.5" fill="white" opacity="0.19" />
      <ellipse cx="326" cy="247" rx="11" ry="6.5" fill="white" opacity="0.19" />

      {/* Screen blue ambient light on face/jaw */}
      <ellipse
        cx="260"
        cy="328"
        rx="118"
        ry="38"
        fill="#7B9EF7"
        opacity="0.06"
      />
    </svg>
  );
}

/* ─── Reusable components ───────────────────────────────── */

function GlassCard({
  children,
  className = "",
  style = {},
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hover?: boolean;
}) {
  const [h, setH] = useState(false);
  return (
    <div
      className={`rounded-[28px] border transition-all duration-300 ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        background: h && hover ? GL.cardH : GL.card,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: GL.border,
        boxShadow: h && hover ? GL.shH : GL.sh,
        transform: h && hover ? "translateY(-4px)" : "translateY(0)",
        ...style,
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {children}
    </div>
  );
}

function SecHead({ label, title }: { label: string; title: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col gap-3"
      initial={shouldReduceMotion ? "visible" : { opacity: 0, y: 50 }}
      whileInView={shouldReduceMotion ? "visible" : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 w-fit">
        <Sparkles size={13} style={{ color: C.pinkD }} />
        <span
          className="text-xs font-bold tracking-[0.22em] uppercase"
          style={{ color: C.pinkD }}
        >
          {label}
        </span>
      </div>
      <motion.h2
        className="text-4xl font-extrabold"
        style={{
          fontFamily: "'Bricolage Grotesque',sans-serif",
          color: C.navy,
        }}
        initial={shouldReduceMotion ? "visible" : { opacity: 0, y: 50 }}
        whileInView={shouldReduceMotion ? "visible" : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

function Pill({
  children,
  v = "primary",
  href,
  download,
  onClick,
  type = "button",
  full = false,
}: {
  children: React.ReactNode;
  v?: "primary" | "glass";
  href?: string;
  download?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  full?: boolean;
}) {
  const [h, setH] = useState(false);
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 24px",
    borderRadius: 9999,
    fontWeight: 600,
    fontSize: 13.5,
    cursor: "pointer",
    border: "none",
    fontFamily: "inherit",
    width: full ? "100%" : "auto",
    justifyContent: "center",
    transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
    transform: h ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
  };
  const primary: React.CSSProperties = {
    ...base,
    background: h ? "linear-gradient(135deg,#8B5CF6,#EC4899)" : "#111827",
    color: "#fff",
    boxShadow: h
      ? "0 18px 50px rgba(236,72,153,0.18), 0 8px 28px rgba(139,92,246,0.2)"
      : "0 10px 24px rgba(139,92,246,0.08), 0 4px 16px rgba(15,23,42,0.08)",
    border: "1px solid transparent",
  };
  const glass: React.CSSProperties = {
    ...base,
    background: h ? "#8B5CF6" : "#ffffff",
    backdropFilter: "blur(12px)",
    border: h ? "1px solid transparent" : "1px solid #D8B4FE",
    color: h ? "#ffffff" : "#1E1B4B",
    boxShadow: h
      ? "0 18px 50px rgba(236,72,153,0.18), 0 8px 28px rgba(139,92,246,0.2)"
      : "0 10px 24px rgba(139,92,246,0.08), 0 4px 16px rgba(15,23,42,0.08)",
  };
  const isExternalLink = href?.startsWith("http");
  const commonProps = {
    style: v === "primary" ? primary : glass,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick,
  };

  const motionProps = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.65, ease: "easeOut" },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noreferrer noopener" : undefined}
        aria-label={typeof children === "string" ? children : undefined}
        {...commonProps}
        {...motionProps}
        className="inline-flex"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      aria-label={typeof children === "string" ? children : undefined}
      {...commonProps}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}

function SkillCard({ s }: { s: (typeof SKILLS)[0] }) {
  return (
    <motion.div
      className="skill-card"
      whileHover={{
        y: -6,
        boxShadow: "0 28px 70px rgba(0,0,0,.10)",
      }}
      transition={{ duration: 0.35 }}
      style={{
        borderRadius: 28,
        padding: 1,
        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.92)), linear-gradient(90deg, ${C.pink}, ${C.lav}, ${C.sky}, ${C.mint})`,
        backgroundOrigin: "padding-box, border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <div
        className="rounded-[27px] p-7"
        style={{
          background: "rgba(255,255,255,0.82)",
          boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
          borderRadius: 27,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${s.col}25, ${s.colD}20)`,
              color: s.colD,
              boxShadow: `0 10px 26px ${s.col}20`,
            }}
          >
            {s.icon}
          </div>
          <div>
            <span
              className="font-bold text-[15px] block"
              style={{
                fontFamily: "'Bricolage Grotesque',sans-serif",
                color: C.navy,
              }}
            >
              {s.category}
            </span>
            <span className="text-xs" style={{ color: C.sub }}>
              {s.items.length} technologies
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {s.items.map((item) => (
            <motion.span
              key={item}
              className="rounded-full px-3 py-1.5 text-[13px] font-semibold"
              initial={{ y: 0, opacity: 0.98 }}
              whileHover={{
                y: -3,
                scale: 1.05,
                boxShadow: `0 16px 32px ${s.col}40`,
                opacity: 1,
              }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              style={{
                background: "rgba(255,255,255,0.92)",
                border: `1px solid ${s.col}30`,
                color: s.colD,
                minWidth: 100,
                boxShadow: `0 8px 20px ${s.col}12`,
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ p }: { p: (typeof PROJECTS)[0] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="project-card rounded-[28px] overflow-hidden"
      whileHover={
        shouldReduceMotion
          ? {}
          : { y: -6, boxShadow: "0 28px 70px rgba(0,0,0,.10)" }
      }
      transition={{ duration: 0.35 }}
    >
      <div className="project-image">
        <motion.img
          src={p.image}
          alt={p.name}
          className="project-image__img"
          whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={() => p.live && window.open(p.live, "_blank")}
        />
        <motion.div
          className="project-image__overlay"
          initial={{ opacity: 0 }}
          whileHover={shouldReduceMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <button
            onClick={() => p.live && window.open(p.live, "_blank")}
            className="project-image__button"
          >
            ↗ View Live Project
          </button>
        </motion.div>
      </div>

      <div
        className="p-6 bg-white"
        style={{ background: "rgba(255,255,255,0.92)" }}
      >
        <h3
          className="text-xl font-bold mb-1"
          style={{
            fontFamily: "'Bricolage Grotesque',sans-serif",
            color: C.navy,
          }}
        >
          {p.name}
        </h3>
        <div
          className="text-[12px] font-semibold mb-3"
          style={{ color: C.pinkD }}
        >
          {p.tag}
        </div>
        <p className="text-sm leading-relaxed mb-4" style={{ color: C.sub }}>
          {p.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {p.tech.map((t) => (
            <motion.span
              key={t}
              className="rounded-full px-3 py-1.5 text-sm font-medium"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -4,
                      scale: 1.05,
                      boxShadow: `0 14px 36px rgba(30,27,75,0.08)`,
                    }
              }
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              style={{
                background: "rgba(255,255,255,0.98)",
                border: `1px solid rgba(0,0,0,0.04)`,
                color: C.navyM,
                minWidth: 100,
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            style={{ width: "100%" }}
          >
            <Pill v="primary" full>
              <ExternalLink size={13} />
              Live Demo
            </Pill>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  bg,
  colD,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  bg: string;
  colD: string;
  href: string;
}) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-[22px] border transition-all duration-200"
      style={{
        padding: "17px 20px",
        background: h ? GL.cardH : GL.card,
        backdropFilter: "blur(16px)",
        borderColor: GL.border,
        boxShadow: h ? GL.shH : GL.sh,
        transform: h ? "scale(1.016)" : "scale(1)",
        textDecoration: "none",
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: `linear-gradient(135deg,${bg}80,${bg}40)`,
          boxShadow: `0 4px 14px ${bg}55`,
          color: colD,
        }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-medium mb-0.5" style={{ color: C.sub }}>
          {label}
        </div>
        <div
          className="text-sm font-semibold truncate"
          style={{ color: C.navy }}
        >
          {value}
        </div>
      </div>
      <ChevronRight
        size={15}
        className="shrink-0 transition-opacity"
        style={{ color: C.sub, opacity: h ? 1 : 0 }}
      />
    </a>
  );
}

function SocialBtn({
  icon,
  bg,
  href,
  ariaLabel,
}: {
  icon: React.ReactNode;
  bg: string;
  href: string;
  ariaLabel: string;
}) {
  const [h, setH] = useState(false);
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200"
      style={{
        background: h ? bg : "rgba(255,255,255,0.75)",
        backdropFilter: "blur(10px)",
        border: "1.5px solid rgba(255,255,255,0.85)",
        color: h ? "#fff" : C.navy,
        transform: h ? "scale(1.14)" : "scale(1)",
        boxShadow: h ? `0 6px 22px ${bg}80` : "0 2px 10px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {icon}
    </a>
  );
}

function FInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  const [f, setF] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold" style={{ color: C.sub }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm focus:outline-none transition-all duration-200"
        style={{
          padding: "13px 18px",
          borderRadius: 14,
          border: `1.5px solid ${f ? C.lav : "rgba(255,255,255,0.7)"}`,
          background: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(10px)",
          color: C.navy,
          fontFamily: "inherit",
          boxShadow: f
            ? `0 0 0 3px rgba(196,181,253,0.28)`
            : "0 6px 18px rgba(15,23,42,0.04)",
        }}
        onFocus={() => setF(true)}
        onBlur={() => setF(false)}
      />
    </div>
  );
}

/* ─── App ───────────────────────────────────────────────── */
export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNav, setActiveNav] = useState("Home");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focMsg, setFocMsg] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const go = (link: string) => {
    setActiveNav(link);
    scrollTo(link.toLowerCase());
  };

  const sectionFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const headingFadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const cardStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardFadeScale = {
    hidden: { opacity: 0, y: 20, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonFadeUp = {
    hidden: { opacity: 0, y: 25, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const avatarMotion = {
    hidden: { opacity: 0, y: 20, scale: 0.9, rotate: -4 },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        color: C.navy,
        background: C.bg,
      }}
    >
      {/* ── Ambient gradient mesh ──────────────────── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[
          {
            w: 820,
            h: 820,
            t: "-28%",
            l: "-16%",
            col: C.lav,
            op: 0.2,
            an: "blobA 16s",
            dl: "0s",
          },
          {
            w: 760,
            h: 760,
            t: "12%",
            r: "-18%",
            col: C.pink,
            op: 0.18,
            an: "blobB 18s",
            dl: "0.8s",
          },
          {
            w: 720,
            h: 720,
            b: "-10%",
            l: "10%",
            col: C.sky,
            op: 0.16,
            an: "blobC 20s",
            dl: "1.2s",
          },
          {
            w: 560,
            h: 560,
            t: "54%",
            r: "18%",
            col: C.mint,
            op: 0.14,
            an: "blobA 22s",
            dl: "2.2s",
          },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: b.w,
              height: b.h,
              top: b.t,
              left: (b as any).l,
              right: (b as any).r,
              bottom: (b as any).b,
              background: `radial-gradient(circle,${b.col}${Math.round(
                b.op * 255,
              )
                .toString(16)
                .padStart(2, "0")} 0%,transparent 70%)`,
              animation: `${b.an} ease-in-out ${b.dl} infinite alternate`,
            }}
          />
        ))}
        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.sz,
              height: p.sz,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: p.c,
              opacity: 0.52,
              animation: `pFloat ${p.d}s ease-in-out ${p.dl}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* ── Navbar ───────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-4"
        style={{
          background: "rgba(255,255,255,.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "999px",
          borderBottom: "1px solid rgba(255,255,255,0.62)",
          boxShadow: "0 8px 26px rgba(15,23,42,0.04)",
        }}
      >
        <button
          onClick={() => go("Home")}
          className="text-xl font-extrabold tracking-tight"
          style={{
            fontFamily: "'Bricolage Grotesque',sans-serif",
            color: C.navy,
          }}
        >
          Mahek Shaikh<span style={{ color: C.pinkD }}>.</span>
        </button>
        <div className="hidden md:flex items-center gap-6">
          {NAV.map((link) => (
            <button
              key={link}
              onClick={() => go(link)}
              className="text-sm font-semibold relative pb-0.5 transition-all duration-200"
              style={{ color: activeNav === link ? C.navy : C.sub }}
            >
              {link}
              {activeNav === link && (
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
                  style={{
                    background: `linear-gradient(90deg,${C.pinkD},${C.lavD})`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
        <Pill v="primary" onClick={() => go("Contact")}>
          <Sparkles size={14} />
          Hire Me
        </Pill>
      </nav>

      {/* ════════════════════════════════════════════════
          §1 HERO
      ════════════════════════════════════════════════ */}
      <motion.section
        id="home"
        className="min-h-screen relative flex items-center px-8 lg:px-16 pt-28 pb-16"
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="hero-glow hero-glow-1" />
          <div className="hero-glow hero-glow-2" />
          <div className="hero-glow hero-glow-3" />
          {/* Left */}
          <div className="flex flex-col gap-7">
            {/* Status pill */}
            <motion.div
              className="inline-flex items-center gap-2.5 w-fit"
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                padding: "10px 20px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.72)",
                boxShadow: "0 10px 24px rgba(15,23,42,0.05)",
                color: C.navyM,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                  animation: "pulseGlow 2s infinite",
                }}
              />
              Available for opportunities
            </motion.div>

            <motion.h1
              className="text-[54px] xl:text-[66px] font-extrabold leading-[1.02] tracking-[-0.03em]"
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif" }}
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            >
              AI ML Engineer.
              <br />
              <span
                style={{
                  background: `linear-gradient(95deg,${C.pinkD} 0%,${C.lavD} 48%,${C.skyD} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Full-Stack Developer.
              </span>
              <br />
            </motion.h1>

            <motion.p
              className="text-[16.5px] leading-[1.8] max-w-[450px]"
              style={{ color: C.sub }}
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            >
              AI ML Engineer &amp; Full-Stack Developer turning complex ideas
              into intelligent, beautiful digital experiences that feel
              effortless.
            </motion.p>

            <div className="flex flex-wrap items-center gap-3">
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 25, scale: 0.98 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.35 }}
              >
                <Pill v="primary" href={RESUME_URL} download>
                  <Download size={15} />
                  Download CV
                </Pill>
              </motion.div>
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 25, scale: 0.98 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.45 }}
              >
                <Pill v="glass" href={MAILTO_URL}>
                  <Mail size={15} />
                  Contact Me
                </Pill>
              </motion.div>
            </div>

            <div className="flex items-center gap-3">
              <SocialBtn
                href="https://github.com/Mahekchan"
                ariaLabel="View GitHub profile"
                icon={<Github size={16} />}
                bg={C.lav}
              />
              <SocialBtn
                href="https://linkedin.com/in/mahek-shaikh-b87067251"
                ariaLabel="View LinkedIn profile"
                icon={<Linkedin size={16} />}
                bg={C.sky}
              />
              <SocialBtn
                href={MAILTO_URL}
                ariaLabel="Send an email"
                icon={<Mail size={16} />}
                bg={C.pink}
              />
              <span
                className="h-px w-8"
                style={{ background: "rgba(30,27,75,0.12)" }}
              />
              <a
                href="mailto:mahekshaikh7123@gmail.com"
                className="text-xs font-medium transition-colors duration-200"
                style={{ color: "rgba(30,27,75,0.36)" }}
              >
                mahekshaikh7123@gmail.com
              </a>
            </div>
          </div>

          {/* Right — floating avatar with overlapping pastel glows */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute rounded-full opacity-60"
              style={{
                width: 460,
                height: 460,
                background: `radial-gradient(circle at 30% 30%, ${C.pink}25, transparent 62%)`,
              }}
              animate={{ x: [0, -12, 0], y: [0, -8, 0] }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="absolute rounded-full opacity-55"
              style={{
                width: 380,
                height: 380,
                background: `radial-gradient(circle at 65% 35%, ${C.lav}22, transparent 66%)`,
              }}
              animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
              transition={{
                duration: 11,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="absolute rounded-full opacity-50"
              style={{
                width: 320,
                height: 320,
                background: `radial-gradient(circle at 50% 65%, ${C.sky}22, transparent 70%)`,
              }}
              animate={{ x: [0, -8, 0], y: [0, -12, 0] }}
              transition={{
                duration: 12,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />

            <motion.div
              className="relative flex items-center justify-center"
              style={{ width: "min(70vw,430px)" }}
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
                  : { opacity: 0, y: 20, scale: 0.9, rotate: -4 }
              }
              whileInView={
                shouldReduceMotion
                  ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
                  : { opacity: 1, y: 0, scale: 1, rotate: 0 }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-auto object-contain"
                style={{
                  maxHeight: 520,
                  background: "transparent",
                  display: "block",
                  filter: "drop-shadow(0 32px 68px rgba(49,46,129,0.16))",
                }}
              />
            </motion.div>

            {/* Floating tech badges */}
            {BADGES.map((b, i) => (
              <div
                key={i}
                className="absolute flex items-center gap-2 font-semibold"
                style={{
                  ...b.pos,
                  padding: "10px 16px",
                  borderRadius: 9999,
                  fontSize: 13,
                  background: b.bg,
                  border: "1.2px solid rgba(255,255,255,0.88)",
                  color: C.navy,
                  boxShadow: "0 18px 28px rgba(15,23,42,0.12)",
                  whiteSpace: "nowrap",
                  animation: "float 5s ease-in-out infinite",
                }}
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.45)",
                    color: C.navy,
                  }}
                >
                  {b.icon}
                </span>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════
          §2 ABOUT
      ════════════════════════════════════════════════ */}
      <motion.section
        id="about"
        className="py-20 lg:py-24 px-8 lg:px-16"
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <SecHead label="About Me" title="The Story Behind the Screen" />
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mt-14 items-center"
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Photo block */}
            <motion.div
              className="lg:col-span-2 flex justify-center"
              variants={avatarMotion}
            >
              <motion.div
                className="relative flex items-center justify-center"
                style={{ width: "min(70vw,360px)" }}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 20, scale: 0.95 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src={avatar2}
                  alt="Mahek Shaikh"
                  className="w-full h-auto object-contain"
                  style={{
                    maxHeight: 520,
                    background: "transparent",
                    display: "block",
                    filter: "drop-shadow(0 32px 68px rgba(49,46,129,0.16))",
                  }}
                />
              </motion.div>
            </motion.div>
            {/* Text */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              {[
                `Hi — I'm <b>Mahek Shaikh</b>, a Full-Stack Developer, AI/ML Engineer and Web Designer. My journey began with machine learning pipelines and NLP research — giving me an analytical foundation I now apply to every product I build.`,
                `I fell in love with the intersection of <b>design and engineering</b> — the magic moment where a pixel-perfect interface meets a robust, intelligent backend. I transitioned into full-stack development and interactive UI/UX, building products that are as smart as they are beautiful.`,
                `I thrive in fast-paced environments, love systems thinking, and believe the best digital products come from teams who care deeply about craft, code, and the human experience.`,
              ].map((t, i) => (
                <motion.p
                  key={i}
                  className="text-[16px] leading-[1.82]"
                  style={{ color: C.sub }}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2 + i * 0.1,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: t
                      .replace(/<b>/g, `<strong style="color:${C.navy}">`)
                      .replace(/<\/b>/g, "</strong>"),
                  }}
                />
              ))}
              <div className="flex flex-wrap gap-2.5 mt-1">
                {[
                  "AI Enthusiast",
                  "Problem Solver",
                  "Design-Thinker",
                  "Fast Learner",
                  "Team Player",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(255,255,255,0.62)",
                      backdropFilter: "blur(8px)",
                      border: "1.5px solid rgba(255,255,255,0.82)",
                      color: C.navyM,
                      boxShadow: "0 2px 8px rgba(196,181,253,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <GlassCard className="mt-4 p-6" hover={false}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  {[
                    ["Focus", "Full-Stack + AI/ML"],
                    ["Location", "Mumbai, India"],
                    ["Email", "mahekshaikh7123@gmail.com"],
                    ["Education", "B.E. Computer Engineering"],
                    ["Status", "Open to Opportunities"],
                    ["Background", "AI / ML Research"],
                  ].map(([l, v]) => (
                    <div key={l} className="flex items-start gap-2">
                      <span
                        className="text-xs font-medium shrink-0 mt-0.5 w-20"
                        style={{ color: C.sub }}
                      >
                        {l}
                      </span>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: C.navy }}
                      >
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════
          §3 SKILLS
      ════════════════════════════════════════════════ */}
      <motion.section
        id="skills"
        className="py-20 lg:py-24 px-8 lg:px-16"
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <SecHead label="Technical Skills" title="Technologies I Work With" />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardStagger}
          >
            {SKILLS.map((s, i) => (
              <motion.div key={s.category} variants={cardFadeScale} custom={i}>
                <SkillCard s={s} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════
          §4 PROJECTS
      ════════════════════════════════════════════════ */}
      <motion.section
        id="projects"
        className="py-20 lg:py-24 px-8 lg:px-16"
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <SecHead label="Featured Projects" title="Things I've Built" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardStagger}
          >
            {PROJECTS.map((p, i) => (
              <motion.div key={p.name} variants={cardFadeScale} custom={i}>
                <ProjectCard p={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════
          §5 EXPERIENCE
      ════════════════════════════════════════════════ */}
      <motion.section
        id="experience"
        className="py-20 lg:py-24 px-8 lg:px-16"
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <SecHead label="Internships & Training" title="Career Highlights" />
          <motion.div
            className="experience-card-grid mt-12 flex flex-col gap-5"
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardStagger}
          >
            {EXPERIENCE.map((e, i) => {
              const accent = ["purple", "blue", "mint"][i] ?? "purple";
              return (
                <motion.div key={i} variants={cardFadeScale} custom={i}>
                  <div className={`experience-card experience-card--${accent}`}>
                    <div className="flex h-full flex-col justify-between gap-4 p-5 sm:p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex items-start gap-3 min-w-0">
                            <div
                              className="experience-card__icon flex items-center justify-center"
                              style={{
                                background: `${e.col}18`,
                                borderColor: `${e.col}30`,
                              }}
                            >
                              {e.icon}
                            </div>
                            <div className="min-w-0">
                              <h3
                                className="experience-card__title text-xl font-semibold leading-tight"
                                style={{
                                  fontFamily:
                                    "'Bricolage Grotesque',sans-serif",
                                  color: C.navy,
                                }}
                              >
                                {e.role}
                              </h3>
                              <p
                                className="experience-card__meta text-sm font-medium mt-1"
                                style={{ color: C.sub }}
                              >
                                {e.co}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                            <div className="exp-badge exp-badge--date">
                              <Calendar size={12} />
                              <span>{e.period}</span>
                            </div>
                            <div className="exp-badge exp-badge--location">
                              <MapPin size={12} />
                              <span>{e.loc}</span>
                            </div>
                          </div>
                        </div>

                        <div
                          className="experience-card__desc text-sm leading-6"
                          style={{ color: C.sub }}
                        >
                          {Array.isArray(e.desc) ? (
                            e.desc.slice(0, 2).map((line, idx) => (
                              <p
                                key={idx}
                                className={idx === 0 ? "mb-2" : undefined}
                              >
                                {line}
                              </p>
                            ))
                          ) : (
                            <p>{e.desc}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="experience-card__tags flex flex-wrap gap-2">
                          {e.tags.map((t) => (
                            <span key={t} className="exp-pill">
                              {t}
                            </span>
                          ))}
                        </div>
                        {e.cert && (
                          <button
                            onClick={() => window.open(e.cert, "_blank")}
                            className="exp-cert-btn"
                          >
                            View Certificate
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════
          §6 CONTACT
      ════════════════════════════════════════════════ */}
      <motion.section
        id="contact"
        className="py-20 lg:py-24 px-8 lg:px-16"
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <SecHead label="Get in Touch" title="Let's Work Together" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14">
            {/* Left */}
            <div className="flex flex-col gap-7">
              <p
                className="text-[17px] leading-[1.8] max-w-[400px]"
                style={{ color: C.sub }}
              >
                Whether you have a project in mind, a role to fill, or simply
                want to connect — my inbox is always open. I would love to hear
                from you.
              </p>
              <div className="flex flex-col gap-4">
                <ContactItem
                  icon={<Mail size={18} />}
                  label="Email"
                  href="mailto:mahekshaikh7123@gmail.com"
                  value="mahekshaikh7123@gmail.com"
                  bg={C.pink}
                  colD={C.pinkD}
                />
                <ContactItem
                  icon={<Github size={18} />}
                  label="GitHub"
                  href="https://github.com/Mahekchan"
                  value="github.com/mahekshaikh"
                  bg={C.lav}
                  colD={C.lavD}
                />
                <ContactItem
                  icon={<Linkedin size={18} />}
                  label="LinkedIn"
                  href="https://linkedin.com/in/mahek-shaikh-b87067251"
                  value="linkedin.com/in/mahekshaikh"
                  bg={C.sky}
                  colD={C.skyD}
                />
                <ContactItem
                  icon={<MapPin size={18} />}
                  label="Location"
                  href="#"
                  value="Mumbai, Maharashtra, India"
                  bg={C.mint}
                  colD={C.mintD}
                />
              </div>
            </div>
            {/* Right — form */}
            <GlassCard className="p-8 lg:p-10" hover={false}>
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center gap-5 py-14">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                    style={{
                      background: `linear-gradient(135deg,${C.mint}60,${C.sky}40)`,
                      boxShadow: `0 8px 32px ${C.mint}60`,
                    }}
                  >
                    ✅
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Bricolage Grotesque',sans-serif",
                      color: C.navy,
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: C.sub }}>
                    Thank you for reaching out. I will reply within 24 hours.
                  </p>
                  <Pill v="glass" onClick={() => setSent(false)}>
                    Send another message
                  </Pill>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="flex flex-col gap-5"
                >
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{
                      fontFamily: "'Bricolage Grotesque',sans-serif",
                      color: C.navy,
                    }}
                  >
                    Send a Message
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FInput
                      label="Your Name"
                      placeholder="Alex Johnson"
                      value={form.name}
                      onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    />
                    <FInput
                      label="Email Address"
                      placeholder="hello@example.com"
                      type="email"
                      value={form.email}
                      onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    />
                  </div>
                  <FInput
                    label="Subject"
                    placeholder="Project Collaboration / Job Opportunity"
                    value={form.subject}
                    onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
                  />
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold"
                      style={{ color: C.sub }}
                    >
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="text-sm focus:outline-none transition-all duration-200 resize-none"
                      style={{
                        padding: "13px 18px",
                        borderRadius: 14,
                        border: `1.5px solid ${focMsg ? C.lav : "rgba(255,255,255,0.7)"}`,
                        background: "rgba(255,255,255,0.65)",
                        backdropFilter: "blur(10px)",
                        color: C.navy,
                        fontFamily: "inherit",
                        boxShadow: focMsg
                          ? `0 0 0 3px rgba(196,181,253,0.32)`
                          : "0 2px 8px rgba(0,0,0,0.04)",
                      }}
                      onFocus={() => setFocMsg(true)}
                      onBlur={() => setFocMsg(false)}
                    />
                  </div>
                  <Pill v="primary" type="submit" full>
                    <Send size={15} />
                    Send Message
                  </Pill>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </motion.section>

      {/* ── Footer ───────────────────────────────────── */}
      <footer
        className="mt-8 py-14 px-8 lg:px-16"
        style={{ background: C.navy }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div
                className="text-2xl font-extrabold text-white mb-3"
                style={{ fontFamily: "'Bricolage Grotesque',sans-serif" }}
              >
                Mahek<span style={{ color: C.pink }}>.</span>
              </div>
              <p
                className="text-sm leading-relaxed max-w-[340px]"
                style={{ color: "rgba(255,255,255,0.42)" }}
              >
                Full-Stack Developer with an AI/ML foundation, building scalable
                web applications and intuitive digital experiences. Based in
                Mumbai, creating solutions for the world.
              </p>
              <FooterSocials />
            </div>
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Navigation
              </h4>
              <div className="flex flex-col gap-2.5">
                {NAV.map((link) => (
                  <FooterNavBtn key={link} link={link} onNav={scrollTo} />
                ))}
              </div>
            </div>
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Contact
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  "mahekshaikh7123@gmail.com",
                  "Mumbai, India",
                  "Open to remote & relocation",
                ].map((t) => (
                  <p
                    key={t}
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div
            className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.26)" }}>
              © 2026 Mahek Shaikh. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.26)" }}>
              Designed &amp; Built with care by Mahek Shaikh.
            </p>
          </div>
        </div>
      </footer>

      {/* ── Global keyframes ──────────────────────────── */}
      <style>{`
        @keyframes blobA {
          0%   { transform: translate(0,0)    scale(1);    }
          100% { transform: translate(60px,40px) scale(1.08); }
        }
        @keyframes blobB {
          0%   { transform: translate(0,0)     scale(1);    }
          100% { transform: translate(-50px,30px) scale(1.06); }
        }
        @keyframes blobC {
          0%   { transform: translate(0,0)    scale(1);    }
          100% { transform: translate(40px,-50px) scale(1.1); }
        }
        @keyframes pFloat {
          0%   { transform: translateY(0px)  rotate(0deg);  opacity:.52; }
          100% { transform: translateY(-24px) rotate(18deg); opacity:.18; }
        }
        @keyframes badgeFloat {
          0%   { transform: translateY(0px) translateX(0px); }
          50%  { transform: translateY(-12px) translateX(2px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes charFloat {
          0%   { transform: translateY(0px)   rotate(-0.5deg); }
          100% { transform: translateY(-15px)  rotate( 0.5deg); }
        }
        @keyframes eyeBlink {
          0%, 88%, 100% { transform: scaleY(1);    }
          91%            { transform: scaleY(0.06); }
          93%            { transform: scaleY(1);    }
        }
        @keyframes cursorBlink {
          0%,100% { opacity:.9; }
          50%      { opacity:0; }
        }
        @keyframes pulseGlow {
          0%,100% { opacity:1; box-shadow:0 0 8px #22c55e; }
          50%      { opacity:.5; box-shadow:0 0 3px #22c55e; }
        }
        html { scroll-behavior:smooth; }
        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:rgba(196,181,253,0.42); border-radius:9999px; }
        ::-webkit-scrollbar-thumb:hover { background:rgba(139,92,246,0.55); }

        .experience-card{
          transition:.35s;cursor:pointer;border-radius:28px;overflow:hidden;position:relative;z-index:0;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.16);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 28px 68px rgba(15,23,42,0.08);
        }

        .experience-card:hover{transform:translateY(-6px);box-shadow:0 28px 70px rgba(0,0,0,.10);}

        .experience-card::before{content:"";position:absolute;inset:-80px;background:radial-gradient(circle at top left,rgba(236,72,153,.12),transparent 45%),radial-gradient(circle at bottom right,rgba(14,165,233,.08),transparent 50%);pointer-events:none;opacity:0;transition:.35s;z-index:-1;}

        .experience-card:hover::before{opacity:1;}

        /* ensure card content sits above the glow */
        .experience-card > .flex{position:relative;z-index:1}

        /* Project / Skill cards hover */
        .project-card, .skill-card { transition: .35s; cursor: pointer; }
        .project-card:hover, .skill-card:hover { transform: translateY(-6px); box-shadow: 0 28px 70px rgba(0,0,0,.10); }

        .exp-badge{display:inline-flex;align-items:center;gap:6px;padding:8px 12px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:0.02em;background:rgba(255,255,255,0.72);color:#4338ca;border:1px solid rgba(255,255,255,0.75);box-shadow:0 8px 20px rgba(15,23,42,0.06);position:relative;z-index:2}

        .experience-card:hover .exp-badge{background:rgba(255,255,255,0.14);color:#f8fafc;border-color:rgba(255,255,255,0.18);box-shadow:0 8px 20px rgba(255,255,255,0.05);}

        .experience-card:hover .experience-card__title{color:#ffffff;}

        .experience-card:hover .experience-card__meta,.experience-card:hover .experience-card__desc{color:rgba(248,250,252,0.82);}

        .exp-pill{display:inline-flex;align-items:center;padding:8px 12px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:0.02em;background:rgba(255,255,255,0.8);color:#312e81;border:1px solid rgba(192,132,252,0.35);box-shadow:0 6px 16px rgba(139,92,246,0.12);position:relative;z-index:2}

        .experience-card:hover .exp-pill{background:rgba(255,255,255,0.14);color:#f8fafc;border-color:rgba(255,255,255,0.2);box-shadow:0 8px 18px rgba(255,255,255,0.06);}

        .exp-cert-btn{border-radius:999px;padding:10px 18px;font-weight:600;transition:.3s;position:relative;z-index:2}

        .exp-cert-btn:hover{background:#8b5cf6;color:white;transform:translateY(-2px);}

        /* Hero glows */
        .hero-glow{position:absolute;border-radius:999px;filter:blur(90px);opacity:.32;z-index:0;}
        .hero-glow-1{width:360px;height:360px;top:-140px;left:-140px;background:#f9a8d4;}
        .hero-glow-2{width:420px;height:420px;right:-120px;top:100px;background:#c4b5fd;}
        .hero-glow-3{width:300px;height:300px;bottom:-100px;right:0;background:#7dd3fc;}

        /* Ensure hero content sits above the glows */
        .min-h-screen > .max-w-7xl{position:relative;z-index:1}

        @keyframes float{0%{transform:translateY(0px);}50%{transform:translateY(-10px);}100%{transform:translateY(0px);}}
      `}</style>
    </div>
  );
}

/* ─── Footer helpers (need hooks, must be components) ───── */
function FooterSocials() {
  const socials = [
    {
      href: "https://github.com/Mahekchan",
      icon: <Github size={14} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/mahek-shaikh-b87067251",
      icon: <Linkedin size={14} />,
      label: "LinkedIn",
    },
    {
      href: "mailto:mahekshaikh7123@gmail.com",
      icon: <Mail size={14} />,
      label: "Email",
    },
  ];
  return (
    <div className="flex gap-3 mt-5">
      {socials.map((social) => {
        const [h, setH] = useState(false);
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={
              social.href.startsWith("http") ? "noreferrer noopener" : undefined
            }
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200"
            style={{
              borderColor: h ? C.pink : "rgba(255,255,255,0.14)",
              color: h ? C.pink : "rgba(255,255,255,0.45)",
              transform: h ? "scale(1.12)" : "scale(1)",
            }}
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
          >
            {social.icon}
          </a>
        );
      })}
    </div>
  );
}
function FooterNavBtn({
  link,
  onNav,
}: {
  link: string;
  onNav: (id: string) => void;
}) {
  const [h, setH] = useState(false);
  return (
    <button
      className="text-sm text-left transition-colors duration-200"
      style={{ color: h ? "white" : "rgba(255,255,255,0.38)" }}
      onClick={() => onNav(link.toLowerCase())}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {link}
    </button>
  );
}
