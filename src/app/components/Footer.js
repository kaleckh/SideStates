import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Footer() {
  const router = useRouter();
  return (
    <div className={styles.centerBoxFooter}>

        <div style={{ width: '80%', display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className={styles.footerChoicesContainer}>
            <div className={styles.center}>
              <div className={styles.footerTitle}>Model Choices</div>
              <Link href={'/6153'}><div className={styles.footerChoice}>XC 6153</div></Link>
              <Link href={'/8163'}><div className={styles.footerChoice}>XC 8163</div></Link>
              <Link href={'/9335'}><div className={styles.footerChoice}>XC 9335</div></Link>
              <Link href={'/7335'}><div className={styles.footerChoice}>XC 7335</div></Link>
              <Link href={'/5365'}><div className={styles.footerChoice}>XC 5365</div></Link>
              <Link href={'/5255'}><div className={styles.footerChoice}>XC 5255</div></Link>
              <Link href={'/4143'}><div className={styles.footerChoice}>XC 4143</div></Link>                                                                    
            </div>
            <div className={styles.center}>
              <div className={styles.footerTitle}>Company</div>
              <div className={styles.footerChoice}>About Us</div>
            </div>
          </div>
          <div>
            <Image alt={"copiers arizona logo"} src={'/logo.webp'} height={300} width={300} />
          </div>
        </div>
      </div>
  );
}
