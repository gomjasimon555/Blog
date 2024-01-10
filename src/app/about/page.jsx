import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../components/Button/Button";

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
       
        <Image
          src={
            "https://images.pexels.com/photos/18405249/pexels-photo-18405249/free-photo-of-art-roof-architecture-travel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          fill={true}
          alt=""
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer} >
      <div className={styles.item} >
        <h1 className={styles.title}>Who are we?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis maiores ullam quos soluta voluptates perspiciatis consectetur beatae explicabo ipsa.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur id non exercitationem et, modi recusandae, tempore, nesciunt aliquid deserunt expedita voluptas. Ipsum fugit ipsam vero, facilis exercitationem reiciendis explicabo vitae?
        </p>
      </div>
<div className={styles.item}>

<h1 className={styles.title}>Who are we?</h1>
<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit exercitationem blanditiis accusantium dolorum hic doloribus autem consequuntur eaque error, inventore nemo voluptates similique nostrum culpa sequi ex esse? Laboriosam culpa aliquid incidunt blanditiis deserunt ipsam praesentium ratione sapiente possimus veniam, unde totam aspernatur non modi cumque velit explicabo eveniet.</p>
<Button url="/contact" text="contact"/>
</div>
      </div>
    </div>
  );
};

export default about;
