import React from 'react'
import css from '@/styles/ui/statusString.module.css'

type Props = {
  status: number;
}

const StatusString = (props: Props) => {
  if (props.status == 0){
    return (
      <div className={`${css.statusDiv} ${css.finished}`}>
        <span>Finished</span>
      </div>
    )
  }
  else if(props.status == 1){
    return (
      <div className={`${css.statusDiv} ${css.wip}`}>
        <span>WIP</span>
      </div>
    )
  }
  else if (props.status == 2){
    return (
      <div className={`${css.statusDiv} ${css.onHold}`}>
        <span>On hold</span>
      </div>
    )
  }
  return (
    <></>
  )
}

export default StatusString