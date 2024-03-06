import React, { ReactElement } from 'react'; 
import css from '@/styles/projects.module.css';
import Header from '@/components/ui/Header';
import { IoConstruct } from "react-icons/io5";
import ProjectCard from '@/components/ui/ProjectCard';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiElectron
} from 'react-icons/si';

type Project = {
  id: number;
  title: string;
  status: number; // 0: Finished, 1: WIP, 2: On hold
  desc: string;
  langs: ReactElement[];
  link: string;
};

const projectList: Project[] = [
  {
    id: 1,
    title: 'Raptorino',
    status: 0,
    desc: 'My personal website',
    langs: [<SiReact />, <SiTypescript />, <SiTailwindcss />],
    link: "https://github.com/Raptor1818/raptorino-ts"
  },
  {
    id: 2,
    title: 'Order calculator',
    status: 0,
    desc: 'Webapp for my school to create order messages for the bar with ease.',
    langs: [<SiReact />, <SiJavascript />, <SiTailwindcss />],
    link: "https://github.com/Raptor1818/bar-calculator"
  },
  {
    id: 3,
    title: 'Streamino',
    status: 2,
    desc: 'Streamino is a locally-run webapp application that organizes your media all in one library.',
    langs: [<SiElectron/>, <SiReact />, <SiTypescript />, <SiTailwindcss />],
    link: "https://github.com/Raptor1818/Streamino"
  }
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
            status={project.status}
            desc={project.desc}
            langs={project.langs}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
