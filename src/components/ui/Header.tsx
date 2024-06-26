import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

import css from '@/styles/ui/headerWithIcon.module.css'

interface HeaderProps {
  children: ReactNode;
  icon: IconType;
}

const Header: React.FC<HeaderProps> = ({ children, icon: Icon }) => {
  return (
    <h1 className={css.header}>{children}<Icon/></h1>
  );
};

export default Header;
