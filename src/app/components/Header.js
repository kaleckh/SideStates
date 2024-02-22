import styles from "../Header.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState, useContext } from "react";
import Image from "next/image";
export default function Header() {
  const router = useRouter();

  return (
    <>
      <div className={styles.logoSpaceContainer}>
        <div className={styles.logoSpace}>
          <div className={styles.logoContainer}>
            <Image
              alt={"copiers arizona"}
              src={`/logo.webp`}

              fill={true}
            />
          </div>
          <div className={styles.columnContainer}>
            <div />
            <div className={styles.rowHead}>
              <Link href={'/'}>
                <div className={styles.titleSmallHeader}>Home</div>
              </Link>
              <Link href={'/products'}>
                <div className={styles.titleSmallHeader}>Our Models</div>
              </Link>
              <div className={styles.titleSmallHeader}>About Us</div>              
            </div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
              <div className={styles.infoMedium}>Ph: (801) 261-0510</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
}
