import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../components/Button/Button'

const contact = () => {
  return (
    <div className={styles.container}>
     <div className={styles.title}>Let's keep in touch</div>
     <div className={styles.content}>
     <div className={styles.imgContainer}>
      <Image
      src="/contact.png"
      alt=''
      fill={true}
      className={styles.image}
      />
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="name" className={styles.input} />
        <input type="text" placeholder="email" className={styles.input} />
        <textarea className={styles.textArea} placeholder="message" name="" id="" cols="30" rows="10"></textarea>
<Button url="#" text="Send"/>
      </form>
     </div>
    </div>
  )
}

export default contact
