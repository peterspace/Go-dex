import React from 'react'

const Section = ({className='', children}) => {
  return (
      <div className={`${className}`}>{children}</div>
  )
}

const SectionImage = ({className='', src, alt=''}) => {
    return (
        <img src={src} alt={alt} className={className} />
    )
}

const SectionContainer = ({ className = '', children }) => {
    return (
        <section className={`px-20 py-20 w-full ${className}`}>
            {children}
        </section>
    )
}

const SectionContent = ({ className = 'flex flex-col gap-0', children }) => {
    return (
        <section className={`${className}`}>
            {children}
        </section>
    )
}

const SectionHeading = ({ className='', children }) => {
    return (
        <div className={`text-xl font-semibold ${className}`}>{children}</div>
    )
}

const SectionText = ({ className='', children }) => {
    return (
        <div className={`${className}`}>{children}</div>
    )
}

export {Section, SectionImage, SectionContainer, SectionContent, SectionHeading, SectionText}