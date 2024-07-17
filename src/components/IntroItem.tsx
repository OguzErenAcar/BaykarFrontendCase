import React from 'react'

function IntroItem({ children }: { children?: React.ReactNode }) {
  return (
    <div>
        <div id='IntroItem' className='mt-5 mb-5'>
      {children}
      <h5  >Nibh viverra</h5>
      <>
      Sit bibendum donec dolor fames neque vulputate non sit aliquam.
         Consequat turpis natoque leo, massa. 
      </>
    </div>
    </div>
  )
}

export default IntroItem
