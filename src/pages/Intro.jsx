import React from 'react'
import { IntroComp } from '../components/intro/IntroComp'
import { Link } from 'react-router-dom'

export const Intro = () => {
  return (
    <div>
      <IntroComp/>
      <Link to={`main`}>Main</Link>
    </div>
  )
}
