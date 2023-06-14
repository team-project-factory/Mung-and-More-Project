import React from 'react'

import { TitleCircle, DogCircle
  
} from './styles/MaincomStylecomp'

export const MainComp1 = () => {
  return (
    <div style={{minWidth : '1920px',height : `100vh`}} >
      <TitleCircle>
      <img src="/img/circle.png" alt=""  style={{width:"730px"}}/>
      </TitleCircle>
      
      <DogCircle>
        <img src="/img/maindog2.png" alt=""  style={{width:"550px"}}/>
      </DogCircle>
    </div>
  )
}