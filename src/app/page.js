import Image from 'next/image'
import React from 'react'
import Hero from '../../public/hero.png'
import styles from './page.module.css'
import Button from './components/Button/Button'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
<h1 className={styles.title}>
  Better design for your digital products.
</h1>

<p className={styles.desc}>
  Turning your Idea into Reality. We bring together global tech industry.
</p>
<Button url="/portfolio" text="See Our Works"/>
      </div>
     <Image src={Hero} className={styles.img}/>
      
    </div>
  )
}

export default Home
