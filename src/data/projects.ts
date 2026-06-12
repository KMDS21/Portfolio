import SWMImage from "../images/SWM_System.jpeg";
import ParkingImage from "../images/SM_System.jpg";
import PortfolioImage from "../images/Portfolio.png";


export interface Project {
  title: string;
  desc: string;
  tech: string;
  img: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Smart Water Management for Sustainable Agriculture",
    desc: "Developed a mobile application to support efficient water management for farmers with live monitoring features. Enabled real-time data tracking to improve irrigation decision making and water usage efficiency. Focused on sustainability by optimizing agricultural water consumption.",
    tech: "Flutter, Firebase, IoT, Arduino",
    img: SWMImage,
    link: "https://github.com/KMDS21/Smart-Irrigation-System",
  },
  {
    title: "Smart Vehicle Parking System",
    desc: "Developed a desktop application to manage vehicle parking operations in a structured system. Implemented features for vehicle entry/exit tracking and parking space management. Improved efficiency of parking allocation and record management through a digital system.",
    tech: "C#, .NET (Windows Application)",
    img: ParkingImage,
    link: "https://github.com/KMDS21/Smart-Parking-Management", 
  },
  {
    title: "Portfolio Website",
    desc: "Developed a personal portfolio website to showcase projects, technical skills, and achievements. Designed a responsive and modern user interface for both mobile and desktop devices.",
    tech: "React, Tailwind CSS",
    img: PortfolioImage, 
    link: "https://github.com/KMDS21/Portfolio",
  },
];