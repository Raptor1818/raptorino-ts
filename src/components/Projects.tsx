import React from 'react';
import css from '@/styles/projects.module.css';
import Header from '@/components/ui/Header';
import { IoConstruct } from "react-icons/io5";
import ProjectCard from '@/components/ui/ProjectCard';

type Project = {
  id: number;
  title: string;
  desc: string;
};

const projectList: Project[] = [
  {
    id: 1,
    title: 'Raptorino',
    desc: 'My personal website',
  },
  {
    id: 2,
    title: 'Another Project',
    desc: 'Description of another project',
  },
];

type Props = {}

const Projects = (props: Props) => {
  return (
    <section id='projects'>
      <Header text='My Projects' icon={IoConstruct} />
      <div className={css.projectsContainer}>
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
