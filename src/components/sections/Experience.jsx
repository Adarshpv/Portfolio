"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import sparks from "../../assets/images/sparks2.png";
import smmud from "../../assets/images/smmud1.png";
import veriteam from "../../assets/images/veriteam1.jpg";
import saayam from "../../assets/images/saayam.png";
import neuroleap from "../../assets/images/neuroleap1.jpg";
import techlance from "../../assets/images/techlance1.jpg";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "Illinois Institute of Technology",
      roles: [{ title: "Teaching Assistant", duration: "Aug 2024 - Dec 2024" }],
      description: `
        Assessed and provided constructive feedback on 50+ student assignments and projects each week, focusing on advanced database management concepts.
        Resolved SQL and cloud database challenges, contributing to a 25% improvement in student assignment quality and completion rates.
      `,
      additionalInfo: `
        Successfully implemented RESTful APIs that enhanced application efficiency by 25%.
        Improved database query execution times by 20% through advanced SQL query optimization
        and developed dynamic front-end interfaces that boosted client satisfaction by 30%.
      `,
      image: techlance,
    },
    {
      company: "CompuCom Systems",
      roles: [{ title: "IT Infrastructure Engineer", duration: "Jun 2022 - Mar 2023" }],
      description: `
        Oversaw enterprise-wide SQL databases, VMs, & storage for 100+ servers, ensuring uptime per SLAs.
        Architected high-availability database infrastructures using SQL Server Clustering, Replication & AlwaysOn. 
        Managed Active Directory & Azure AD implementations, creating secure authentication & identity management.
      `,
      additionalInfo: `
        Handled cloud & on-premises storage solutions, optimizing data performance & disaster recovery readiness.
        Developed & implemented automation scripts using PowerShell & Ansible streamlining infrastructure deployments. 
        Collaborated with DevOps teams to integrate CI/CD pipelines & Infrastructure as Code (IaC) methodologies.
      `,
      image: neuroleap,
    },
    {
      company: "Eclosia",
      roles: [{ title: "Database Engineer", duration: "May 2022 - Aug 2022" }],
      description: `
        As a Database Consultant at Eclosia, I upgraded enterprise-wide SQL servers to higher versions, optimized database performance, and led disaster recovery planning
        Boosted SQL server performance by 50% through upgrades and migrations.
      `,
      additionalInfo: `
        Led disaster recovery planning and testing, minimizing downtime for the company.
        Resolved bottleneck issues on critical production servers, ensuring operational efficiency.
      `,
      image: saayam,
    },
    {
      company: "MassMutual",
      roles: [{ title: "Database & Systems Administrator", duration: "Nov 2021 - Jun 2022" }],
      description: `
        Designed & configured 120+ high-performance infrastructures, optimizing VMs, networking, storage, & security.
        Administered SQL Server, Azure SQL, & MongoDB databases, ensuring optimal performance & uptime.
        Implemented network security policies & firewall configurations to best safeguard IT infrastructure.
      `,
      additionalInfo: `
       Automated routine database maintenance tasks using PowerShell & SQL scripts, reducing execution time by 40%. 
       Designed & maintained disaster recovery (DR) plans, including backup strategies & failover clustering.
      `,
      image: veriteam,
    },
    {
      company: "Infosys.Ltd",
      roles: [
        { title: "Senior Systems Engineer", duration: "Jan 2020 - Nov 2021" },
        { title: "Systems Engineer", duration: "Sept 2018 - Dec 2019" },
      ],
      description: `
      Managed database & network infrastructure, including servers, routers, switches, VPNs, & firewalls.
      Led cloud migration initiatives, transitioning 65+ on-premises databases to Azure SQL & Managed Instances.
      Enhanced application responsiveness by managing performance tuning, indexing strategies, and query optimization.
      `,
      additionalInfo: `
      Assisted in security audits & vulnerability assessments, enhancing overall system security & ensuring compliance.
      Created detailed technical documentation, accelerating onboarding time for new team members by 60%. 
      Designed PowerBI dashboards for system health & performance, enhancing reporting accuracy & reducing delays.
    `,
      image: smmud,
    },
    {
      company: "Treebo Hotels",
      roles: [{ title: "Data Analysis Intern", duration: "Jan 2018 - Apr 2018" }],
      description: `
        Analyzed and visualized over 1,000+ data points, generating actionable insights through comprehensive charts and reports.
        Designed and documented workflows to streamline data processing and reporting operations.
        Delivered actionable insights through predictive analytics and data visualization pipelines.
      `,
      additionalInfo: `
        Developed and deployed 5+ automated dashboards, improving data accessibility and reducing manual reporting efforts by 40%.
        Collaborated with 3 cross-functional teams, enhancing data-driven strategies and achieving a 20% improvement in reporting accuracy.
      `,
      image: sparks,
    },
  ];

  return (
    <section id="experience" className="py-12">
      <div className="mt-16">
        <SectionHeader
          title={"Work Experience."}
          subtitle={"A timeline of my professional journey."}
        />
      </div>

      <div className="relative max-w-7xl mx-auto mt-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`p-4 rounded-lg shadow-lg transition-transform duration-300 ease-out cursor-pointer flex items-center gap-4 mb-4 ${
                  activeIndex === index
                    ? "border-l-4 border-blue-500 bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "hover:from-blue-500 hover:to-purple-500 hover:shadow-2xl hover:scale-105 hover:rotate-1"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={exp.image}
                  alt={`${exp.company} logo`}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">{exp.company}</span>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              {experiences[activeIndex].company}
            </h3>
            <div className="relative pl-6">
              {experiences[activeIndex].roles.map((role, idx) => (
                <div
                  key={idx}
                  className="flex items-center mb-8 hover:scale-105 transition-transform duration-300"
                >
                  {/* Icon with Custom Shape */}
                  <div className="relative flex items-center">
                    <div className="w-4 h-4 rounded-full shadow-md bg-purple-500"></div>
                    {idx !== experiences[activeIndex].roles.length - 1 && (
                      <div className="absolute left-[50%] top-4 w-[2px] h-16 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                    )}
                  </div>

                  {/* Role Information */}
                  <div className="ml-6">
                    <span className="text-lg font-semibold text-purple-500">
                      {role.title}
                    </span>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {role.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ul className="list-disc pl-6 mt-6 mb-4 text-gray-800 dark:text-gray-300">
              <li>{experiences[activeIndex].description}</li>
            </ul>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-300">
              <li>{experiences[activeIndex].additionalInfo}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
