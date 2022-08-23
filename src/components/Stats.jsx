import React from "react";
import { stats } from "../constants";
import styles from "../style";
const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((s) => (
      <div className={`flex-1 flex justify-start items-center flex-row m-3`}
        key={s.id}
         >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{s.value } </h4> 
        <p className={`className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3"
   `}>{s.title}</p>
      </div>
    ))}
  </section>
);

export default Stats;
