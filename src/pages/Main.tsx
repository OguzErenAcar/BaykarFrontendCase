import React from 'react'
import Intro from './mainSections/Intro'
import Thebest from './mainSections/Thebest'
import WhyJoin from './mainSections/WhyJoin'
import TheyLoveus from './mainSections/TheyLoveus'
import YourCollection from './mainSections/YourCollection'
import Worldmap from './mainSections/Worldmap'

 function Main() {
  return (
    <div> 
      <Intro/> 
      <Thebest/> 
      <WhyJoin/>
      <TheyLoveus/>
      <YourCollection/>
        <Worldmap/>   
    </div>
  )
}

export default Main
