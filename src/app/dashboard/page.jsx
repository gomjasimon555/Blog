import React from "react";
import styles from './page.module.css'


const page = () => {
  return (
    <>
    <h1 className="flex justify-center items-center font-bold text-[24px]">Narendra Modi</h1>
    <section className="p-4 lg:flex lg:m-2 lg:w-full h-[100%]">
        
      <div className="m-4 lg:w-[50%] lg:flex lg:items-center">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQCyzdroOgXf1JRT-59-ejJoIE0a9KVvyVwXUrA5xytU8gCuncLXYXL3DO2b1_-YnaUWD0lgEsd3ddXvZg&psig=AOvVaw1lQbMOwVoosOwt0ZO5q68L&ust=1695014951941000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCGoPL0sIEDFQAAAAAdAAAAABAD"
          className={styles.img}
          alt=""
         
        />
      </div>
      <div className="bg-green-200 p-4 sm:flex sm:bg-white lg:w-[50%] lg:font-normal lg:text-[14px] lg:bg-green-100">
        <p>
          Shri Narendra Modi was sworn-in as India’s Prime Minister on 30th May
          2019, marking the start of his second term in office. The first ever
          Prime Minister to be born after Independence, Shri Modi has previously
          served as the Prime Minister of India from 2014 to 2019. He also has
          the distinction of being the longest serving Chief Minister of Gujarat
          with his term spanning from October 2001 to May 2014. In the 2014 and
          2019 Parliamentary elections, Shri Modi led the Bharatiya Janata Party
          to record wins, securing absolute majority on both occasions. The last
          time that a political party secured such an absolute majority was in
          the elections of 1984. Inspired by the motto of ‘Sabka Saath, Sabka
          Vikas, Sabka Vishwas’, Shri Modi has ushered in a paradigm shift in
          governance that has led to inclusive, development-oriented and
          corruption-free governance. The Prime Minister has worked with speed
          and scale to realise the aim of Antyodaya, or ensuring last-mile
          delivery of schemes and services. Leading international agencies have
          noted that under the leadership of PM Narendra Modi, India has been
          eliminating poverty at record pace. This is attributed to a series of
          pro-poor decisions taken by the Central Government. Today, India is
          home to the world’s largest healthcare programme, Ayushman Bharat.
          Covering over 50 crore Indians, Ayushman Bharat provides top quality
          and affordable healthcare to the poor and neo-middle class. The
          Lancet, considered among the most prestigious health journals in the
          world has lauded Ayushman Bharat, stating that this scheme attends to
          the larger discontent about the health sector in India. The journal
          also noted PM Modi’s efforts to prioritise universal health coverage.
          Understanding that financial exclusion was a bane for the poor, the
          Prime Minister launched the Pradhan Mantri Jan Dhan Yojana, that aimed
          at opening bank accounts for every Indian. Now, over 35 crore Jan Dhan
          accounts have been opened. These accounts have not only banked the
          unbanked but also opened the doors for other avenues of empowerment.
          Going a step ahead of Jan Dhan, Shri Modi emphasised on Jan Suraksha,
          by giving insurance and pension cover to the most vulnerable sections
          of society. The JAM trinity (Jan Dhan- Aadhaar- Mobile) has led to
          elimination of middle men and ensured transparency and speed, powered
          by technology. In a first, over 42 crore people associated with the
          unorganised sector now have pension coverage under the Pradhan Mantri
          Shram Yogi Man Dhan Yojana. During the very first Cabinet Meeting
          after the 2019 election results, a similar pension scheme for traders
          was announced as well. The Pradhan Mantri Ujjwala Yojana, launched in
          2016 provides free cooking gas connections to the poor. It has proven
          to be a major game-changer in providing smoke-free kitchens to over 7
          crore beneficiaries, most of whom are women. 18,000 villages that were
          without electricity even after 70 long years of Independence have been
          electrified. Shri Modi believes that no Indian should be homeless and
          to realise this vision, over 1.25 crore houses were built between 2014
          and 2019. The pace of house construction remains as quick to fulfil
          the PM’s vision of ‘Housing for All’ by 2022.
        </p>
      </div>
    </section>
    </>
  );
};

export default page;
