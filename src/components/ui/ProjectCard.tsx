import React, { ReactElement } from 'react';
import css from '@/styles/ui/projectCard.module.css';
import StatusString from './StatusString';

type Props = {
  title: string,
  status: number,
  desc: string,
  langs: ReactElement[],
  link: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className={css.cardContainer}>
      {/* <img src="" alt="" /> */}
      <div className='w-[355px] h-[200px] bg-white'></div>
      <div>
        <div className={css.titleStatusDiv}>
          <h3 className={css.cardTitle}>
            {props.title}</h3>
          <StatusString status={props.status} />
        </div>
        <p className={css.cardDesc}>
          {props.desc}</p>
      </div>
      <div className={css.langSection}>
        {props.langs.map((icon, index) => (
          React.cloneElement(icon, { key: index })
        ))}
      </div>
    </div>
  )
}

export default ProjectCard;
