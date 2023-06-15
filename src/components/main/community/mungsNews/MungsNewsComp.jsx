import React from 'react'
import style from './mungsnewscomp.module.scss'
import { Outlet } from 'react-router-dom'


export const MungsNewsComp = () => {
  return (
    <div className={style.mungsList}>
      <div className={style.mungsList_menu}>
        <h1>Mung's news</h1>
      </div>
      <Outlet/>
    </div>
  )
}
