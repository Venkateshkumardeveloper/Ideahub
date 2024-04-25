import React from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'
import ideahub from "../../assests/IdeaHubideahub_logo.jpg"

const Homepage = () => {
  return (
    <>
    <div className={style.main}>
    <div className={style.nav}>
          <div className={style.idea_hub}>
            <p className={style.idea_txt}>
              <img src={ideahub} alt="ideahub_logo" />
              {/* I<span>dea</span>H<span>ub</span> */}
            </p>
            <div className={style.alaram}>
              <p className={style.alaramcount}>3</p>
            </div>
            <div className={style.divider}></div>
            <div className={style.profile}>
              <div className={style.user_icon}></div>
              <div className={style.profile_details}>
                <p className={style.profile_name}>Mohan Krishna</p>
                <div className={style.profile_mailid}>
                  <p className={style.profile_mail}>
                    guntikovelamohankrishna@gmail.com{" "}
                  </p>
                  <select name="" id="">
                    <option value="">Add new account</option>
                  </select>
                </div>
              </div>
            </div>
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