import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HooBank",
    description:
      "Built the HooBank application UI using React and Tailwind CSS, focusing on responsive, modern, and visually appealing design.",
    image: "/projects/hoobank.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://689a069f2afacb1199bf6580--rhoobank.netlify.app/",
    githubUrl: "https://github.com/rehan-11-22/hoobank",
  },
  {
    id: 2,
    title: "Movix",
    description:
      "I developed a movie app named Movix using ReactJS, offering an intuitive interface for users to explore and discover films",
    image: "/projects/movix.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://rmovix.netlify.app/",
    githubUrl: "https://github.com/rehan-11-22/movix",
  },
  {
    id: 3,
    title: "YouTube Clone",
    description:
      "I crafted a YouTube Clone using ReactJS, replicating key functionalities for seamless video streaming and user Interaction.",
    image: "/projects/youtubeclone.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://youtube-5a3f36.netlify.app/",
    githubUrl: "https://github.com/rehan-11-22/youtube-clone",
  },
  {
    id: 4,
    title: "E-Cure Hub",
    description:
      "I built E-Cure, a healthcare site for booking doctor appointments, with an admin dashboard for management and a chatbot powered by our SQL database.",
    image: "/projects/E-CureHub.png",
    tags: ["React", "CSS", "Node JS", "SQL", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/rehan-11-22/e-clinic",
  },
  {
    id: 5,
    title: "Netflix Clone",
    description:
      "I created a Netlify Clone with ReactJS, mirroring key deployment features. ",
    image: "/projects/netflix.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://netlfixapp.netlify.app/",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rehan-11-22"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
