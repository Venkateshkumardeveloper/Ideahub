import React from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'
const Homepage = () => {
  return (
    <>
    <div className={style.main}>
        <div className={style.nav}>
            <div className={style.idea_hub}>
                <p className={style.idea_txt}>I<span>dea</span>H<span>ub</span></p>
            </div>
        </div>
        <div className={style.body}>
            <Link to='/ideahub'>
            <div className={style.box}>
                <div className={style.image}>
                </div>
                <p>Write your Idea Here</p>
            </div>
            </Link>
            <div className={style.box1}>
            <div className={style.image1}>
                </div>
                <p>soon</p>  
            </div>
        </div>
    </div>
    </>
  )
}

export default Homepage