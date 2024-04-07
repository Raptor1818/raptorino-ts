import React from 'react'
import Tooltip from './Tooltip';

type Props = {
  text: string;
  children: any;
}

const LangIcon = (props: Props) => {
  return (
    <Tooltip text={props.text}>
      {props.children}
    </Tooltip>
  )
}

export default LangIcon