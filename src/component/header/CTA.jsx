import React from 'react'
import MayurGadakh from "../../assets/MayurGadakh.pdf";

const CTA = () => {
  return (
    <div className='cta'>
        <a  className='btn' href={MayurGadakh}> Download CV</a>
        <a className='btn btn-primary ' href='#contact'>Let's Talk</a>
    </div>
  )
}

export default CTA
