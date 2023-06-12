import React from 'react'
import style from './mungsnewscomp.module.scss'


export const MungsNewsComp = () => {
  return (
    <div className={style.mungsList}>
      <div className={style.mungsList_menu}>
        <h1>Mung's news</h1>
      </div>
      <div className={style.mungsList_news}>
        멍스 뉴스 나오는곳
      </div>
    </div>
  )
}
