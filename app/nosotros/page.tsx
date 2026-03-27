'use client'

import React from 'react'
import {HeroHeader} from '@/components/header'
import {SobreNosotros} from '@/components/timeline-demo'
import Footer  from "@/components/footer";


const nosotros = () => {
  return (
    <div>
        <HeroHeader/>
        <SobreNosotros/>
        {/* <Footer/> */}
    </div>
  )
}

export default nosotros