import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faClockFour, faGripVertical,  } from "@fortawesome/free-solid-svg-icons";
const PageHeader = ({handleCollapse, collapse}) => {
   
  return (
    <header className='bg-dark text-light d-flex justify-content-between px-2'>
      <p className='d-flex mb-0 flex-row gap-2 align-items-center'>
        <FontAwesomeIcon icon={faGripVertical} className='fa-2x' />
        <h3 className='mb-0'>Todo</h3>
      </p>
      <button className='btn btn-transperent text-light' onClick={handleCollapse}>
        <FontAwesomeIcon className='fa-2x' icon={collapse ? faClockFour : faList} />
      </button>
    </header>  
  )
}

export default PageHeader
