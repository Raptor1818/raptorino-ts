import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

import css from '../styles/headerWithIcon.module.css'

interface HeaderProps {
  text: string;
  icon: IconType;
}

const Header: React.FC<HeaderProps> = ({ text, icon: Icon }) => {
  return (
    <h1 className={css.header}>{text}<Icon/></h1>
  );
};

export default Header;
