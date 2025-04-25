import { ProjectCard } from "./ui/project-card";

export default function Project() {
  return (
    <section id="projects" className="py-24 md:py-32 space-y-6  w-full">
      <div className="text-center space-y-4">
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
          title="Rice Classification"
          description="A machine learning app that classifies two rice types using a neural network trained on key grain characteristics."
          longDescription="A machine learning application that distinguishes between two rice types using a neural network built in PyTorch. The model is trained on key physical grain features—such as area, perimeter, major and minor axis lengths, eccentricity, convex area, extent, and compactness—to perform binary classification. It employs multiple hidden layers with sigmoid activations and is optimized using the Adam optimizer over 1000 epochs. Additionally, hyperparameter tuning is integrated via skorch and GridSearchCV to refine the network architecture and learning rate. This setup provides a scalable, accurate framework for rice quality assessment and agricultural analysis."
          tags={["Python", "Pytorch", "Sklearn", "Streamlit"]}
          demoUrl="https://rice-classification-machinelearning.streamlit.app"
          codeUrl="https://github.com/nianguye/Rice-Classification"
        />
        <ProjectCard
          title="Microblog Website"
          description="A dynamic blog platform that lets users create, edit, and bid on posts while supporting secure authentication."
          longDescription="A dynamic blog platform that offers users the ability to create, edit, and delete posts complete with image uploads and an engaging like system. Uniquely, it incorporates a bidding feature that allows users to place bids on posts related to purchases. The backend is built with Express.js and SQLite, supporting secure authentication methods including traditional logins and Google OAuth. Users can sort posts by criteria such as likes and recency, providing an interactive and robust content experience."
          tags={["HTML", "CSS", "Express.js", "SQLite", "Node.js"]}
          demoUrl=""
          codeUrl="https://github.com/nianguye/Microblog"
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
          title="Pinky Nail Spa website"
          description="A simple website for a nail spa that showcases services, prices, and contact information."
          longDescription="A simple website for a nail spa that showcases services, prices, and contact information. Built with Next.js and Tailwind CSS, it features a responsive design and smooth navigation. The site includes sections for services, pricing, and contact details, ensuring easy access to essential information. Overall, this project demonstrates the ability to create a clean and user-friendly web presence for a local business."
          tags={["React", "Express.js", "Next.js", "Tailwind CSS"]}
          demoUrl=""
          codeUrl=""
        />
      </div>
    </section>
  );
}
