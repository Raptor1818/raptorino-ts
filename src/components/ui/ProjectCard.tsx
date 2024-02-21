import React from 'react'

import css from '@/styles/ui/projectCard.module.css'

type Props = {
  title: string,
  desc: string
}

const ProjectCard = (props: Props) => {
  return (
    <div>
      <img src="" alt="" />
      <h3 className={css.cardTitle}>
        {props.title}</h3>
      <p className={css.cardDesc}>
        {props.desc}</p>
    </div>
  )
}

export default ProjectCard