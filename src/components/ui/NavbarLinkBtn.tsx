import React from 'react'

type Props = {
  link: string;
}

const NavbarLinkBtn = (props: Props) => {
  return (
    <button
    className='capitalize'
    onClick={() => {
      const element = document.getElementById(props.link);
      element?.scrollIntoView({
        behavior: 'smooth'
      })
    }}
    >
      {props.link}
    </button>
  )
}

export default NavbarLinkBtn