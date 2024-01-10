"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { notFound } from "next/navigation"




  async function getData(id) {
    const res = await fetch(`https:localhost:3000/api/posts/${id}`,{
      cache: "no-store",
    });
  
    if (!res.ok) {
     return notFound()
    }
 
  
    return res.json();
  }

  const BlogPost = async({params}) => { 
    const data = await getData(params.id)
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            
          </p>
           <div className={styles.author}>
            {/* <Image
              src={}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            /> */}
            <span className={styles.username}></span>
          </div> 
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17682918/pexels-photo-17682918/free-photo-of-woman-in-swimsuit-in-sea-foam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          
        </p>
      </div>
    </div>
  )
}

export default BlogPost
