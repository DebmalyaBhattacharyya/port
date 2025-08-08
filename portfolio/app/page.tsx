import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.profileImageWrapper}>
            <Image
              className={styles.profileImage}
              src="/profile-placeholder.png"
              alt="Profile image"
              width={160}
              height={160}
              priority
            />
          </div>
          <h1 className={styles.name}>Alex Doe</h1>
          <h2 className={styles.title}>Web Developer</h2>
          <p className={styles.bio}>
            I build modern, performant web applications with a focus on great user experiences. Passionate about JavaScript, React, and all things web.
          </p>
          <a href="#portfolio" className={styles.ctaButton}>
            View My Work
          </a>
        </div>
      </main>
    </div>
  );
}
