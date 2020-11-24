import React from 'react'
import Hero from './hero/index'
import Mobile from './mobile/index'
import Services from './services/index'
import Team from './team/index'

const index = () => {
    return (
        <div className='index'>
            <Hero />
            <Mobile />
            <Services />
            <Team />
        </div>
    )
}

export default index
