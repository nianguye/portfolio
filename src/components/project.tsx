"use client";

import { useInView } from "react-intersection-observer";
import { ProjectCard } from "./ui/project-card";

export default function Project() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 md:py-32 space-y-6 w-full ${inView ? "fade-up" : ""}`}
    >
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
      </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl">
        <ProjectCard
          title="Turn Tracker"
          description="A full stack application that allows business owners to manage the workload of their employees through a round-robin system."
          longDescription="A full stack application developed using the MERN stack that allows business owners to manage employee workloads efficiently across multiple businesses. The application leverages a round-robin system for task distribution and utilizes RESTful API endpoints to create worker profiles, manage services, and record daily activities. Real-time synchronization is achieved with web sockets, ensuring seamless updates across devices and improving overall workforce management."
          tags={["React", "MongoDB", "Express.js", "Node.js"]}
          demoUrl="https://turn-tracker-vrmnk.ondigitalocean.app/"
          codeUrl="https://github.com/nianguye/turn-tracker"
        />
        <ProjectCard
          title="Pinky Nail Spa website"
          description="A comprehensive website for a nail spa, designed to showcase its range of services, pricing details, and contact information. The website offers a user-friendly experience for visitors, with an intuitive layout and quick navigation. Whether it's browsing available services or getting in touch with the spa, everything is easy to find."
          longDescription="A comprehensive website for a nail spa, designed to showcase its range of services, pricing details, and contact information. The website offers a user-friendly experience for visitors, with an intuitive layout and quick navigation. Whether it's browsing available services, exploring pricing options, or easily contacting the spa, the site ensures a smooth experience. Built with Next.js and Tailwind CSS, the project is responsive, ensuring accessibility across all devices. Additionally, email communication is powered by AWS for scalability and reliability. This project demonstrates the ability to create a functional, visually appealing, and easy-to-navigate web presence for a local business."
          tags={["React", "Next.js", "Tailwind CSS", "AWS"]}
          demoUrl="https://pinkynailspa.com"
          codeUrl=""
        />

        <ProjectCard
          title="Refra"
          description="A POS app that manages transactions via QR codes, enabling customers to earn and redeem rewards across businesses."
          longDescription="A POS application that enables businesses to create products, manage transactions, and scan QR codes, while allowing customers to generate QR codes for purchases and reward redemptions across multiple brands. Designed for multi-business use—unlike single-brand apps like Starbucks—it utilizes multiple RESTful APIs to handle CRUD operations for businesses, rewards, and transactions, thereby enhancing scalability and reward distribution. Integrated QR code functionalities seamlessly connect with API calls for efficient purchasing and reward management."
          tags={[
            "Svelte",
            "SvelteKit",
            "Tailwind CSS",
            "PostgreSQL",
            "BunJS",
            "AWS",
          ]}
          demoUrl=""
          codeUrl=""
        />

        <ProjectCard
          title="Rice Classification"
          description="A machine learning app that classifies two rice types using a neural network trained on key grain characteristics using pytorch."
          longDescription="A machine learning application that distinguishes between two rice types using a neural network built in PyTorch. The model is trained on key physical grain features—such as area, perimeter, major and minor axis lengths, eccentricity, convex area, extent, and compactness—to perform binary classification. It employs multiple hidden layers with sigmoid activations and is optimized using the Adam optimizer over 1000 epochs. Additionally, hyperparameter tuning is integrated via skorch and GridSearchCV to refine the network architecture and learning rate. This setup provides a scalable, accurate framework for rice quality assessment and agricultural analysis."
          tags={["Python", "Pytorch", "Sklearn", "Streamlit"]}
          demoUrl="https://rice-classification-machinelearning.streamlit.app"
          codeUrl="https://github.com/nianguye/Rice-Classification"
        />
      </div>
    </section>
  );
}
