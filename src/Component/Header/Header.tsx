import React from 'react'
import s from "./Header.module.scss"

export default function Header() {
    const date = new Date
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
  return (
    <div className={`${s.header}`}>
        <h3 className={`${s.headerTitle}`}>Season</h3>
        <h4 className={`${s.headerDate}`}>{`${day}-${month}-${year}`}</h4>
    </div>
  )
}
