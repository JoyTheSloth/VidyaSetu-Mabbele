# 🏛️ Bhaktivedanta Institute Mission Hr. Sec. School (BHIMS) — Public Website & Digital Gateway

[![CBSE Affiliated](https://img.shields.io/badge/CBSE-Affiliated%20%231230048-002B66?style=for-the-badge&logo=shield)](https://cbse.gov.in)
[![React 19](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

> **"अथातो ब्रह्म जिज्ञासा" — *Now, therefore, let us inquire into the Absolute Truth.***  
> The official, decoupled web platform for **Bhaktivedanta Institute Mission Hr. Sec. School (BHIMS)**, synthesizing Vedic epistemological inquiry with state-of-the-art CBSE STEM education, Atal Tinkering Robotics labs, and academic excellence.

---

## 📖 Table of Contents

- [Overview & Vision](#-overview--vision)
- [Key Features & Highlights](#-key-features--highlights)
  - [1. Real-Time Circular Ticker & Dynamic Header](#1-real-time-circular-ticker--dynamic-header)
  - [2. Hero Showcase & Kinetic Typographic Simulation](#2-hero-showcase--kinetic-typographic-simulation)
  - [3. Principal's Desk & Epistemic Philosophy](#3-principals-desk--epistemic-philosophy)
  - [4. Campus Tour & Lightbox Media Facility](#4-campus-tour--lightbox-media-facility)
  - [5. Interactive Bulletins & Event Carousel](#5-interactive-bulletins--event-carousel)
  - [6. Academic Wings & Pedagogical Framework](#6-academic-wings--pedagogical-framework)
  - [7. Decoupled Vidyasetu ERP Integration](#7-decoupled-vidyasetu-erp-integration)
- [Design System & Aesthetics](#-design-system--aesthetics)
- [Technology Architecture](#-technology-architecture)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Development Scripts](#development-scripts)
- [Ecosystem & Port Allocation](#-ecosystem--port-allocation)
- [Contributing & License](#-contributing--license)

---

## 🌟 Overview & Vision

The **BHIMS Public Website** is designed to provide prospective parents, students, scholars, and visitors with an immersive, classical yet cutting-edge introduction to the institution. 

Unlike conventional school templates, this platform harmonizes **heritage aesthetic principles** (Ivy League serif typography, royal navy and warm amber accents, subtle dotted ambient grids) with **modern front-end engineering** (sub-millisecond hydration, hardware-accelerated fluid transitions, dynamic responsive touch carousels, and dark mode support).

### Core Institutional Pillars:
* **Jnana (Wisdom)**: Vedic epistemology, Sanskrit literature, and moral foundation.
* **Vijnana (Applied Science)**: Empirical research, Atal Tinkering STEM robotics, 3D printing, and AI workshops.
* **Prajna (Character & Leadership)**: Character building, sportsmanship in Olympic-grade arenas, and community service.

---

## 🚀 Key Features & Highlights

### 1. Real-Time Circular Ticker & Dynamic Header
* **Urgent Marquee Bar**: Permanently pinned or auto-collapsing notification strip that broadcasts real-time admission notices, CBSE registration circulars, and helpline details.
* **Scroll Spy Navigation**: Sticky header with elevation blur (`backdrop-blur-md`), dynamic section indicator, and institute crest with live campus activity status pulse.
* **Responsive Mobile Navigation**: Modal navigation drawer with fast single-tap portal entry and direct phone/email contact links.

### 2. Hero Showcase & Kinetic Typographic Simulation
* **Authentic Facility Slider**: 4.5-second automated carousel presenting real campus spaces:
  - *Main Academic Campus Wing* (Neo-classical architecture housing 48 smart classrooms).
  - *Atal Tinkering STEM & Robotics Innovation Lab*.
  - *Sri Chaitanya Athletic Arena & Track*.
  - *Saraswati Central Library & Epistemological Archives*.
* **GSAP-Powered Realistic Typographic Engine (`TextType.tsx`)**:
  - Implements realistic human-like keystroke noise, algorithmic neighbor-key mistypes with self-correction, variable pacing, and fluid character transitions.
* **Institutional Metrics Strip**: At-a-glance credibility counters (100% CBSE Board Pass Rate, 1:18 Teacher-Student Ratio, 25K+ Reference Volumes, 12+ Inter-School Championships).

### 3. Principal's Desk & Epistemic Philosophy
* **Editorial Message from the Leadership**: Insightful message from the Principal and Academic Directorate framing the synthesis of spiritual wisdom and empirical science.
* **Interactive Philosophical Tabs**: Explores how ancient Indian epistemology (Nyaya, Vaisheshika, Vedanta) complements modern quantum physics, computational mathematics, and robotics.

### 4. Campus Tour & Lightbox Media Facility
* **Category Filtering**: Explore spaces categorized under *Campus*, *Labs*, *Library*, and *Sports*.
* **Interactive Lightbox Modal**: High-definition inspection modal featuring zoom preview, facility descriptions, and architectural notes.

### 5. Interactive Bulletins & Event Carousel
* **Category-Filtered Calendar**: Multi-filter system for *Academic*, *Sports*, *Cultural*, and *Official Circulars*.
* **Hardware-Accelerated Carousel**: Smooth horizontal scrolling with touch drag on mobile and directional chevron buttons on desktop.
* **Urgency & Date Tagging**: Visual distinction for upcoming high-priority milestones (Olympiads, Pre-Board Exams, Conclaves).

### 6. Academic Wings & Pedagogical Framework
Structured curriculum breakdown adhering strictly to NEP 2020 and CBSE standards:
* **Foundational Stage (Nursery to Class 2)**: Sensory development, value-based storytelling, phonetics, and motor play.
* **Preparatory & Middle Wing (Classes 3 to 8)**: Inquiry-based math and science, bilingual language competence, early coding, and robotics labs.
* **Secondary & Senior Secondary (Classes 9 to 12)**: Rigorous CBSE Board preparation, specialized Science & Commerce streams, integrated JEE/NEET mentorship, and laboratory practicums.

### 7. Decoupled Vidyasetu ERP Integration
* **One-Click Role Gateway**: Direct one-click login redirects to the companion Vidyasetu School ERP (`http://localhost:5174`).
* **Deep-Linked Portal Actions**: Deep links directly targeting Admin, Teacher, and Student/Parent login dashboards via query parameters (`?role=ADMIN`, `?role=TEACHER`, `?role=STUDENT`).
* **Parent Fee & Van Tracking Shortcut**: Instant quick-launch shortcuts from the public portal directly to fee installment payment modals and school transport monitoring.

---

## 🎨 Design System & Aesthetics

| Element | Specification | Visual Character |
| :--- | :--- | :--- |
| **Primary Headings** | `Playfair Display`, Georgia, serif | Classical, academic, Ivy League dignity |
| **Body & UI Typography** | `Source Sans 3`, `Inter`, sans-serif | Highly legible, clean, modern digital reading |
| **Primary Palette** | Navy (`#002B66`, `#001D45`), Deep Slate (`#07131F`) | Trustworthy, authoritative, institutional |
| **Accent & Heritage Gold** | Warm Amber (`#F59E0B`, `#D97706`), Gold (`#EAB308`) | Vedic auspiciousness, intellectual illumination |
| **Background Textures** | Subtle `24px x 24px` radial dot grid | Technical refinement, spatial depth |
| **Dark Theme** | Fully adaptive dark palette with auto-storage | Reduced eye strain for evening reading |

---

## 🛠️ Technology Architecture

```
[ User Browser ]
       │
       ▼
[ Vite Development / Production Server (Port 5173) ]
       │
       ├── React 19 Component Tree
       │     ├── LandingProvider (Context: Theme, School Metadata, Toasts)
       │     ├── HomePage (ScrollSpy, Hero Carousel, Modals, Slidable Events)
       │     └── TextType (GSAP Realistic Typing Engine)
       │
       ├── Tailwind CSS v4 Engine (Modern @theme variables & utility classes)
       └── Direct Role-Based Navigation ──► Vidyasetu ERP Platform (Port 5174)
```

- **React 19**: Utilizing the newest React compiler, optimized hooks, and zero-runtime overhead context patterns.
- **Vite 8**: Ultra-fast hot module replacement (HMR) and optimized rollup production bundles.
- **Tailwind CSS v4**: Bleeding-edge CSS engine with `@theme` token definitions and custom variants.
- **GSAP (GreenSock)**: Micro-timing controls and natural typing simulations.
- **Framer Motion**: Gesture animations, spring physics, and lightbox presence transitions.
- **Lucide Icons**: Accessible, clean vector iconography.

---

## 📁 Project Directory Structure

```
D:\Mabbele-Landing/
├── public/
│   ├── assets/                       # High-resolution campus and faculty photography
│   │   ├── campus_building.jpg       # Main academic wing
│   │   ├── stem_lab.jpg              # Robotics and 3D printing lab
│   │   ├── sports_complex.jpg        # Athletic tracks and football turf
│   │   ├── vedic_manuscript.jpg      # Library Sanskrit archives
│   │   ├── school_logo.jpg           # Official BHIMS crest
│   │   ├── principal_matthew.jpg     # Principal's desk portrait
│   │   └── teacher_sunita.jpg        # Academic leadership
│   ├── favicon.svg                   # Brand favicon
│   └── og-preview.jpg                # Social sharing Open Graph preview
├── src/
│   ├── components/
│   │   ├── TextType.tsx              # GSAP realistic typewriter component
│   │   └── TextType.css              # Caret animation and typing styles
│   ├── App.tsx                       # App root with ERP portal link handlers
│   ├── HomePage.tsx                  # Full institutional landing experience (1,700+ LOC)
│   ├── LandingContext.tsx            # Global state (theme, toasts, school information)
│   ├── index.css                     # Tailwind v4 directives and font imports
│   ├── main.tsx                      # DOM entry point
│   └── vite-env.d.ts                 # Environment variable declarations
├── index.html                        # HTML5 shell with Google Font links
├── package.json                      # Project metadata and dependencies
├── tsconfig.json                     # TypeScript strict configuration
└── vite.config.ts                    # Vite build and plugin setup
```

---

## 💻 Getting Started

### Prerequisites
* **Node.js**: Version `18.x` or higher (Node 20+ recommended)
* **npm** or **pnpm** installed

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/JoyTheSloth/BHIMS-Landing-.git
cd BHIMS-Landing-
npm install
```

### Environment Configuration

Create a `.env` file in the project root:

```env
# URL to the companion Vidyasetu School ERP Portal
VITE_PORTAL_URL=http://localhost:5174
```

### Development Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local development server on `http://localhost:5173` |
| `npm run build` | Compiles TypeScript and builds optimized production bundle to `/dist` |
| `npm run preview` | Spins up a local web server to preview production build on port 5173 |

---

## 🌐 Ecosystem & Port Allocation

BHIMS operates on a dual-repository, decoupled architecture:

| Application | Repository | Port | Description |
| :--- | :--- | :--- | :--- |
| **BHIMS Landing (This Repo)** | [`BHIMS-Landing-`](https://github.com/JoyTheSloth/BHIMS-Landing-) | `5173` | Public-facing website, admissions, facilities, news & Vedic mission |
| **Vidyasetu ERP Portal** | [`VidyaSetu-ERP`](https://github.com/JoyTheSloth/VidyaSetu-ERP) | `5174` | Role-based institutional ERP (Admin, Teacher, Student & Parent) |
| **Vidyasetu Backend API** | Part of `VidyaSetu-ERP` | `4000` | Express REST API + Prisma ORM + PostgreSQL schema |

---

## 📜 Affiliation & Credentials

* **Affiliated Institution**: Bhaktivedanta Institute Mission Hr. Sec. School
* **Affiliation Board**: Central Board of Secondary Education (CBSE), New Delhi
* **Affiliation No**: `1230048` | **School Code**: `45672`
* **Address**: Hare Krishna Hill, Imphal West, Manipur - 795001, India
* **Inquiries**: `admissions@bhaktivedantaschool.edu.in` | `+91 98765 43210`

---

## ⚖️ License

Private and proprietary. All institutional trademarks, logos, and Vedic literature citations belong to **Bhaktivedanta Institute Mission School**.
