import React from 'react'

function ClosedSidebar({setOpen}) {

    const openSidebar = () => {
        setOpen(true)
      }

  return (
    <div className='closed_sidebar'>
        <div className='btn' onClick={openSidebar}>
            <i className="fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

export default ClosedSidebar