"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Navbar from "./components/Navbar/page";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.slide1}>
        <h1>Найдите нужную услугу рядом и просто!</h1>
        {/* <Image
            className="мастер"
            src="/images/мастер.png"
            alt="Not found"
            width={250}
            height={270}
            priority
          />
          <Image
            className="сантехник"
            src="/images/сантехник.jpg"
            alt="Not found"
            width={250}
            height={270}
            priority
          />
          <Image
            className="учитель"
            src="/images/учитель-2.jpg"
            alt="Not found"
            width={250}
            height={270}
            priority
          />
          <Image
            className="повар"
            src="/images/повар.png"
            alt="Not found"
            width={250}
            height={270}
            priority
          />
          <Image
            className="садовник"
            src="/images/садовник.png"
            alt="Not found"
            width={250}
            height={270}
            priority
          /> */}
      </div>
    </div>
  );
}
