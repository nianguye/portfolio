"use client";

import { useInView } from "react-intersection-observer";
import { ProjectCard } from "./ui/project-card";

const projects = [
  {
    title: "Turn Tracker",
    badge: "Featured",
    description:
      "Full-stack workload manager for business owners. A round-robin engine distributes tasks across employees (+20% allocation efficiency) and keeps every device in sync in real time over WebSockets.",
    longDescription:
      "A full stack application built on the MERN stack that helps business owners manage employee workloads across multiple businesses. A round-robin system handles task distribution, improving allocation efficiency by 20%, and REST endpoints cover worker profiles, services, and daily activity logs, cutting administrative effort by 15%. WebSockets keep every connected device updated in real time.",
    tags: ["React", "MongoDB", "Express.js", "Node.js"],
    demoUrl: "https://turn-tracker-vrmnk.ondigitalocean.app/",
    codeUrl: "https://github.com/nianguye/turn-tracker",
  },
  {
    title: "Pinky Nail Spa",
    badge: "Client Work",
    description:
      "Production website built and shipped for a real local business: full service catalog, pricing, and an AWS SES contact flow that lifted customer inquiries by 20%. Live today at pinkynailspa.com.",
    longDescription:
      "A website for a local nail spa covering its services, pricing, and contact information, with a simple layout and quick navigation. Built with Next.js and Tailwind CSS, fully responsive across devices, and contact emails are handled through AWS SES. The goal was a clean, easy-to-navigate online presence for a small business, and the site is live today at pinkynailspa.com.",
    tags: ["React", "Next.js", "Tailwind CSS", "AWS"],
    demoUrl: "https://pinkynailspa.com",
    codeUrl: "",
  },
  {
    title: "Legal Document Risk Analyzer",
    badge: "In Progress",
    description:
      "Web app that flags risky clauses in uploaded legal PDFs. A custom prompt pipeline returns structured results with severity levels and a risk score out of 100, displayed clause by clause in the UI.",
    longDescription:
      "A web application that lets users upload legal PDFs and receive structured risk assessments. A custom prompt system identifies unusual clauses, one-sided terms, and legal red flags, returning results as structured JSON with severity levels and an overall risk score out of 100. The backend pipeline parses PDF content and feeds it to an LLM for analysis, while the UI surfaces the exact flagged clause text alongside plain-English explanations of each risk. Built with a modular API design and a clean Tailwind-based interface for scalability and responsiveness.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    demoUrl: "",
    codeUrl: "",
  },
  {
    title: "Refra",
    description:
      "Cross-business POS and rewards platform. Customers earn and redeem rewards across multiple brands via QR codes, backed by RESTful APIs for businesses, transactions, and rewards.",
    longDescription:
      "A POS application where businesses create products, process transactions, and scan QR codes, while customers generate QR codes for purchases and reward redemptions across multiple brands. Unlike single-brand apps such as the Starbucks app, it was designed for multi-business use, so customers can earn and redeem points anywhere on the platform. Separate RESTful APIs handle CRUD operations for businesses, rewards, and transactions, which keeps the backend scalable and easy to extend, and the QR code workflows tie directly into those APIs for purchasing and redemption.",
    tags: ["Svelte", "SvelteKit", "Tailwind CSS", "PostgreSQL", "BunJS", "AWS"],
    demoUrl: "",
    codeUrl: "",
  },
  {
    title: "Rice Classification",
    description:
      "PyTorch neural network that classifies rice varieties from grain morphology, tuned with skorch + GridSearchCV and deployed as an interactive Streamlit app.",
    longDescription:
      "A machine learning application that distinguishes between two rice types using a neural network built in PyTorch. The model is trained on physical grain features such as area, perimeter, major and minor axis lengths, eccentricity, convex area, extent, and compactness to perform binary classification. It uses multiple hidden layers with sigmoid activations, optimized with Adam over 1000 epochs, and hyperparameter tuning with skorch and GridSearchCV refines the network architecture and learning rate. The finished model is deployed as an interactive Streamlit app.",
    tags: ["Python", "Pytorch", "Sklearn", "Streamlit"],
    demoUrl: "https://rice-classification-machinelearning.streamlit.app",
    codeUrl: "https://github.com/nianguye/Rice-Classification",
  },
];

export default function Project() {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={`scroll-mt-16 py-12 lg:py-0 lg:pb-24 ${
        inView ? "fade-up" : "opacity-0"
      }`}
    >
      <h2 className="sticky top-0 z-20 -mx-6 mb-6 bg-background/80 px-6 py-4 text-xs font-semibold uppercase tracking-widest backdrop-blur md:-mx-12 md:px-12 lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        Projects
      </h2>

      <ul className="group/list space-y-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index + 1} {...project} />
        ))}
      </ul>
    </section>
  );
}
