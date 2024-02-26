// Import ReactElement from 'react'
import React, { ReactElement } from 'react'; 
import css from '@/styles/projects.module.css';
import Header from '@/components/ui/Header';
import { IoConstruct } from "react-icons/io5";
import ProjectCard from '@/components/ui/ProjectCard';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss
} from 'react-icons/si';

type Project = {
  id: number;
  title: string;
  desc: string;
  langs: ReactElement[]; // Use ReactElement[]
};

const projectList: Project[] = [
  {
    id: 1,
    title: 'Raptorino',
    desc: 'My personal website',
    langs: [<SiReact />, <SiTypescript />, <SiTailwindcss />] // Directly use JSX elements
  },
  // Additional projects...
];

const Projects = () => {
  return (
    <section id='projects'>
      <Header icon={IoConstruct}>My projects</Header>
      <div className={css.projectsContainer}>
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.desc}
            langs={project.langs}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
