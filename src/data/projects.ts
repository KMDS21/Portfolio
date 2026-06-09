export interface Project {
  title: string;
  desc: string;
  tech: string;
  img: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    desc: "A brief description of what this project does and the problem it solves.",
    tech: "React · TypeScript · Tailwind CSS",
    img: "https://via.placeholder.com/600x400",
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    desc: "A brief description of what this project does and the problem it solves.",
    tech: "Node.js · Express · MongoDB",
    img: "https://via.placeholder.com/600x400",
    link: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    desc: "A brief description of what this project does and the problem it solves.",
    tech: "Next.js · Prisma · PostgreSQL",
    img: "https://via.placeholder.com/600x400",
    link: "https://github.com/yourusername/project-three",
  },
];