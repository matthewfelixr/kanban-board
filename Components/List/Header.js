import React from 'react'
import CoverImage from './CoverImage'
import Meta from './Meta'
import style from './list.module.css'

const Header = () => {
  return (
    <>
    <div className={style.header_container}>
        <CoverImage />
        <Meta />
        wat
    </div>
    </>
  )
}

export default Header