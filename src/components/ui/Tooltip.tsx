import React from 'react'
import css from "@/styles/ui/tooltip.module.css"

type Props = {
  text: string;
  children: any;
}

const Tooltip = (props: Props) => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className={css.tooltip}
          style={{ visibility: show ? 'visible' : 'hidden' }}>
        {props.text}
        <span className={css.tooltipArrow} />
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {props.children}
      </div>
    </div>
  )
}

export default Tooltip