import React from 'react'

const PopOverContainer = ({children}) => {
  return (
      <div className='relative'>{children}</div>
  )
}

const PopOver = ({className, visible, children}) => {
  return (
      <div id="popover" className={`${visible ? 'z-10' : 'hidden'}
    absolute top-0 left-0 md:mt-0 mt-8 sm:ml-10 md:ml-10 w-10/12 md:w-1/2 transition duration-150 ease-in-out
    ${className}
    `}>
        {children}
    </div>
  )
}

export {PopOverContainer, PopOver}