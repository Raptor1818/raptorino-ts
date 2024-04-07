import { ReactNode } from 'react'

type Props = {
  hrefID: string,
  children: ReactNode;
}

const DocumentATag = (props: Props) => {
  return (
    <a onClick={ () => {
      const element = document.getElementById(props.hrefID);
      element?.scrollIntoView({
        behavior: 'smooth',
      });
    }}
    className='underline'>
      {props.children}
    </a>
  )
}

export default DocumentATag