import React from 'react'
import css from "@/styles/ui/tooltip.module.css"

type Props = {
  text: string;
  children: any;
}

const Tooltip = (props: Props) => {
  const [show, setShow] = React.useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div>
      <div
        className={css.tooltip}
        style={{ visibility: show ? 'visible' : 'hidden' }}
      >
        {props.text}
        <span className={css.tooltipArrow} />
      </div>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child as React.ReactElement<any>, {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        })
      )}
    </div>
  );
};

export default Tooltip