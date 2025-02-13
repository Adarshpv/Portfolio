import movie from "../assets/images/movie.webp";
import demo from "../assets/images/demo.png";
import fake from "../assets/images/fake.png";
import portfolio from "../assets/images/portfolio v1.png";
import facial from "../assets/images/facial.png";
import histo from "../assets/images/histo.png";
import a1 from "../assets/images/a1.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import a4 from "../assets/images/a4.png";
import a5 from "../assets/images/a5.png";
import a6 from "../assets/images/a6.png";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoBitbucket } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import {
  FaHtml5,
  FaReact,
  FaPython,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaFileExcel,
  FaGitAlt,
  FaMicrosoft,
  FaRegListAlt,
  FaLinux,
  FaDatabase,
  FaCloud,
  FaWindows,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiGooglecloud,
  SiTailwindcss,
  SiTensorflow, 
  SiPlotly,
  SiTableau,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiR,
  SiSoundcharts,
  SiJfrogpipelines,
  SiBreaker,
  SiCinnamon,
  SiGooglemarketingplatform,
} from "react-icons/si";

export const headlines = [
  "Hi, I'm Adarsh.",
  "I'm a Database Developer",
  "IT Engineer with 5+ years of experience in Infrastructure management, Database Administration, Networking, & Security. Specializing in high availability architectures, Cloud solutions (Azure, AWS), & Automation. Proven experience in designing & managing scalable IT solutions while ensuring regulatory adherence. Passionate about automating infrastructure (IaC) and implementing DevOps strategies to drive efficiency.",
];

export const fixedNavItems = [
  { name: "Home" },
  { name: "About" },
  { name: "Experience" },
  { name: "Projects" },
  { name: "Passion" },
  { name: "Contact" },
];

export const experiences = [
  {
    title: "IT Infrastructure Engineer",
    company: "CompuCom Systems",
    duration: "Jun 2022 - Present",
    description: [
      "Oversaw enterprise-wide SQL databases, VMs, & storage for 100+ servers, ensuring uptime per SLAs.",
      "Architected high-availability database infrastructures using SQL Server Clustering, Replication & AlwaysOn",
      "Collaborated with DevOps teams to integrate CI/CD pipelines & Infrastructure as Code (IaC) methodologies.", 
    ],
  },
  {
    title: "Software Developer",
    company: "Saayam For All",
    duration: "Oct 2024 - Nov 2024",
    description: [
      "Created responsive UI components with React and TailwindCSS.",
      "Collaborated with the backend team to integrate APIs seamlessly.",
      "Boosted user engagement by 25% through improved UX design.",
    ],
  },
  {
    title: "Software Developer",
    company: "Veriteam Software Solutions Pvt.Ltd",
    duration: "Jun 2022 - Jul 2022",
    description: [
      "Created responsive UI components with React and TailwindCSS.",
      "Collaborated with the backend team to integrate APIs seamlessly.",
      "Boosted user engagement by 25% through improved UX design.",
    ],
  },
  {
    title: "Software Developer",
    company: "Smmud Technologies Pvt.Ltd",
    duration: "Jan 2022 - Jun 2022",
    description: [
      "Created responsive UI components with React and TailwindCSS.",
      "Collaborated with the backend team to integrate APIs seamlessly.",
      "Boosted user engagement by 25% through improved UX design.",
    ],
  },
  {
    title: "Data Analyst",
    company: "Smmud Technologies Pvt.Ltd",
    duration: "Jan 2021 - Dec 2021",
    description: [
      "Created responsive UI components with React and TailwindCSS.",
      "Collaborated with the backend team to integrate APIs seamlessly.",
      "Boosted user engagement by 25% through improved UX design.",
    ],
  },
  {
    title: "Data Scientist",
    company: "The Sparks Foundation",
    duration: "Dec 2020 - Jun 2021",
    description: [
      "Created responsive UI components with React and TailwindCSS.",
      "Collaborated with the backend team to integrate APIs seamlessly.",
      "Boosted user engagement by 25% through improved UX design.",
    ],
  },
];

export const projects = [
  {
    title: "My Portfolio - V1",
    image: portfolio,
    linkGithub: "https://github.com/Ganya04/portfolio-ganya/",
    linkOnline: "https://ganya04.github.io/portfolio-ganya/",
    description:
      "A modern and visually engaging portfolio website showcasing my skills, projects, and professional journey, developed in 2024.",
    techStack: ["MERN Stack", "Tailwind CSS"],
  },
  {
    title: "Facial Expression Recognition using Convolutional Neural Networks",
    image: facial,
    linkGithub: "https://github.com/Ganya04/Facial_expression_recognition",
    linkOnline: null,
    description:
      "Developed a machine learning model using Custom CNN and DenseNet, showcasing deep learning expertise in image classification.",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Seaborn",
      "Matplotlib",
    ],
  },
  {
    title: "Optimizing Movie Recommendation for Enhanced User Experience",
    image: movie,
    linkGithub: "https://github.com/Ganya04/Optimizing_Movie_Recommendation",
    linkOnline: null,
    description:
      "Designed a collaborative filtering-based movie recommendation system, boosting user satisfaction and engagement",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Seaborn",
      "Matplotlib",
    ],
  },
  {
    title: "Online Fake News Detections",
    image: fake,
    linkGithub: "https://github.com/Ganya04/Online-fakenews-detection",
    linkOnline: null,

    description:
      "A ML model that harnesses the power of Machine learning and algorithms to facilitate natural and engaging fake news detection system.",
    techStack: [
      "R",
      "Python",
      "ML Models",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "ggplot2",
    ],
  },
  {
    title: "Demographic Analysis in a Population",
    image: demo,
    linkGithub: "https://github.com/Ganya04/Demographic-analysis",
    linkOnline: null,
    description:
      "Conducted demographic analysis of deceased famous individuals using historical data to uncover trends and insights into social factors over time.",
    techStack: ["Pyspark", "Python", "EDA"],
  },
  {
    title: "Histopathologic Cancer Detection Using Lymph Node Tissues",
    image: histo,
    linkGithub: "https://github.com/Ganya04/Histopthalogic_cancer_detection",
    linkOnline: null,
    description:
      "Developed a high-precision model using CNNs and Keras, achieving 94.6% precision on 250,000 lymph node tissue samples.",
    techStack: ["Python", "TensorFlow", "Keras", "CNN", "Data Cleaning"],
  },
];

export const skillsWork = [
  { name: "Python", icon: FaPython },
  { name: "SQL Server", icon: FaDatabase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Azure", icon: FaMicrosoft },
  { name: "MySQL", icon: GrMysql },
  { name: "PostgreSQL", icon: BiLogoPostgresql },
  { name: "Scrum Methodologies", icon: FaRegListAlt },
  { name: "SSIS", icon: FaMicrosoft },
  { name: "Docker", icon: FaDocker },
  { name: "Rubrik", icon: FaCloud },
  { name: "AWS", icon: FaAws },
  { name: "CI/CD", icon: SiJfrogpipelines },
  { name: "Git", icon: FaGitAlt },
  { name: "Excel", icon: FaFileExcel },
  { name: "PowerBI", icon: SiSoundcharts },
  { name: "SSRS", icon: FaMicrosoft },
  { name: "Active Directory", icon: FaWindows },
  { name: "Tableau", icon: SiTableau },
  { name: "Statistical Analysis", icon: VscGraphLine },
  { name: "Agile Methodologies", icon: SiGooglemarketingplatform },
  { name: "Linux", icon: FaLinux },  
  { name: "Delphix", icon: FaDatabase },
  { name: "SolarWinds", icon: FaCloud }
];

export const certificates = [
  "Micorsoft Azure Solutions Architect",
  "ITIL Foundations",
];

export const articles = [
  {
    title: "Data Analytics Job Simulation - Accenture North America",
    summary:
      "Achieved Certification demonstrating expertise in administering Azure databases, conferred by Microsoft for Azure Database Administrator Associate level.",
    url: "https://github.com/Adarshpv/Links.git",
    image: a1,
  },
  {
    title: "Power BI Job Simulation - Pwc Switzerland",
    resume:
      " Automated shipping data pipelines with Python-based ETL scripts, enhancing data processing efficiency and enabling faster analytics and reporting.",
    url: "https://github.com/Ganya04/PwC-Switzerland-Power-BI-Job-Simulation-on-Forage-",
    image: a2,
  },
  {
    title: "Data Analytics Job Simulation - Quantium",
    resume:
      " Automated shipping data pipelines with Python-based ETL scripts, enhancing data processing efficiency and enabling faster analytics and reporting.",
    url: "https://github.com/Ganya04/Quantium-Data-Analytics-Job-Simulation",
    image: a3,
  },
  {
    title: "HR Analytics Dashboard - Power BI",
    resume:
      " Automated shipping data pipelines with Python-based ETL scripts, enhancing data processing efficiency and enabling faster analytics and reporting.",
    url: "https://github.com/Ganya04/Power-BI-dashboards",
    image: a4,
  },
  {
    title: "Project Manager Dashboard - Power BI",
    resume:
      " Automated shipping data pipelines with Python-based ETL scripts, enhancing data processing efficiency and enabling faster analytics and reporting.",
    url: "https://github.com/Ganya04/Power-BI-dashboards",
    image: a5,
  },
  {
    title: "Sales Dashboard - Power BI",
    resume:
      " Automated shipping data pipelines with Python-based ETL scripts, enhancing data processing efficiency and enabling faster analytics and reporting.",
    url: "https://github.com/Ganya04/Power-BI-dashboards",
    image: a6,
  },
];

export const metadata = {
  title: "Adarsh Pathange",
  description:
    "This portfolio is a collection of my work that showcases my skills and creativity.",
  imageURL:
    "https://avatars.githubusercontent.com/u/108766949?s=400&u=1671b3dfc6d09709a394c94b1566e56e6e3e16cd&v=4",
  pageUrl: "https://www.johnclaytonblanc.com",
};
