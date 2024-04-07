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

import raptorino_img from '@/assets/img/raptorino_img.webp'
import barCalc_img from '@/assets/img/barCalc_img.webp'
import cat_wip_img from '@/assets/img/cat_wip_img.webp'

type Project = {
  id: number;
  title: string;
  status: number; //0: Finished, 1: WIP, 2: On hold, 3
  desc: string;
  langs: ReactElement[];
  link: string;
  image: any;
};

const projectList: Project[] = [
  {
    id: 1,
    title: 'Raptorino',
    status: 0,
    desc: 'My personal website',
    langs: [<SiReact />, <SiTypescript />, <SiTailwindcss />],
    link: "https://github.com/Raptor1818/raptorino-ts",
    image: raptorino_img,
  },
  {
    id: 2,
    title: 'Order calculator',
    status: 0,
    desc: 'Webapp for my school to create order messages for the bar with ease.',
    langs: [<SiReact />, <SiJavascript />, <SiTailwindcss />],
    link: "https://github.com/Raptor1818/bar-calculator",
    image: barCalc_img,
  },
  {
    id: 3,
    title: 'WIP',
    status: 1,
    desc: 'Let me cook 👨‍🍳',
    langs: [],
    link: "https://github.com/Raptor1818/",
    image: cat_wip_img,
  }
];

// {
//   id: ,
//   title: '',
//   status: ,
//   desc: '',
//   langs: [<SiElectron/>, <SiReact />, <SiTypescript />, <SiTailwindcss />],
//   link: "https://github.com/Raptor1818/"
// }

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
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
