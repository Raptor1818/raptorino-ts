import { useState, useEffect } from 'react';
import NavbarLink from '@/components/ui/NavbarLink';
import css from '@/styles/ui/navbarLinkMenu.module.css';

const links = ["home", "about", "projects", "links"];

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const NavbarLinkMenu = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestSectionIndex = -1;
      let smallestDistanceToCenter = Infinity;

      links.forEach((link, i) => {
        const section = document.getElementById(link);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distanceToCenter = Math.abs(viewportCenter - sectionCenter);

          if (distanceToCenter < smallestDistanceToCenter) {
            smallestDistanceToCenter = distanceToCenter;
            closestSectionIndex = i;
          }
        }
      });

      if (closestSectionIndex !== -1 && closestSectionIndex !== selected) {
        setSelected(closestSectionIndex);
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 50); 

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [selected]);

  return (
    <div className={css.navSectionLinks}>
      <div className={css.wrapper}>
        {links.map((link, i) => (
          <NavbarLink
            link={link}
            key={i}
            selected={selected === i}
            onClick={() => {
              setSelected(i);
              const element = document.getElementById(link);
              element?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NavbarLinkMenu;
