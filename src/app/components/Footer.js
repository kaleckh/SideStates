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
              <div className={styles.footerChoice}>XC 6253</div>
              <div className={styles.footerChoice}>XC 8163</div>
              <div className={styles.footerChoice}>XC 9335</div>
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
