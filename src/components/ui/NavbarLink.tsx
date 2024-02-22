import React from 'react'
import { motion } from 'framer-motion';

import css from '@/styles/ui/navbarLink.module.css'

type Props = {
  link: string,
  selected: boolean,
  onClick: any
}

const NavbarLink = (props: Props) => {
  return (
    <motion.div 
      className={css.navbarItem}
      onClick={props.onClick} 
      animate={{ opacity: props.selected ? 1 : .5}}
    >
      {props.link}
      {props.selected && (
      <motion.div 
        className={css.underline}
        layoutId="underline" 
      />
      )}
    </motion.div>
  )
}

export default NavbarLink