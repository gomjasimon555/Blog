import React from 'react'
import styles from './page.module.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className={styles.container}>
     <div> &#xa9; 2023 Lamania. All rights reserved.</div>
     <div>
     <div className={styles.social}>
     <BsFacebook  className={styles.icon}/>
     <BsInstagram  className={styles.icon}/>
     <BsYoutube  className={styles.icon}/>  
     <BsTwitter  className={styles.icon}/>
     </div>
</div>
    </div>
  )
}

export default Footer
