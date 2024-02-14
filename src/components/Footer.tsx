import React from 'react';
import css from '@/styles/footer.module.css';

import {
  FaXTwitter,
  FaGithub,
  FaSteam,
  FaRedditAlien,
  FaItchIo,
  FaYoutube,
} from 'react-icons/fa6';
import FooterLink from '@/components/ui/FooterLink';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: 'Twitter', link: 'https://twitter.com/_Raptorr', icon: FaXTwitter },
    { name: 'Github', link: 'https://github.com/Raptor1818', icon: FaGithub },
    { name: 'Youtube', link: 'https://www.youtube.com/channel/UC2GAuWf4SPIMRkCHuwVUu1g', icon: FaYoutube },
    { name: 'Steam', link: 'https://steamcommunity.com/id/rraptorr1818/', icon: FaSteam },
    { name: 'Reddit', link: 'https://www.reddit.com/u/XxF1RExX', icon: FaRedditAlien },
    { name: 'itch.io', link: 'https://raptor1818.itch.io/', icon: FaItchIo },
  ];

  return (
    <footer className={css.footer} id='links'>
      <div className={css.socialsContainer}>
        <h3>My socials</h3>
        <div className={css.footerLinkSection}>
          {socials.map((social, index) => (
            <FooterLink key={index} text={social.name} link={social.link} icon={social.icon} />
          ))}
        </div>
      </div>
      <div className={css.footerSignature}>
        <div>
          <p>Made with React, Typescript, Tailwind and Framer Motion.</p>
          <p>Hand crafted with love.</p>
        </div>
        <p>© {currentYear} | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
