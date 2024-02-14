import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

import css from '@/styles/ui/footerLink.module.css'

interface HeaderProps {
  text: string;
  link: string;
  icon: IconType;
}

const Header: React.FC<HeaderProps> = ({ text, link, icon: Icon }) => {
  return (
    <a href={link}
      className={css.link}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Icon/> {text}
    </a>
  );
};

export default Header;
