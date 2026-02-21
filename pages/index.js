import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from "react";
import Image from 'next/image';

let sociallist = [
["Instagram", "https://www.instagram.com/newt9.oceans?igsh=ZzBvOWVwbnZzZmF3&utm_source=qr"],
["Strava", "https://strava.app.link/19gvkw0TV0b"],
["Github", "https://github.com/MarineNewt"],
["Spotify", "https://open.spotify.com/user/newt9?si=PUn0wlZdTmiK6qwO8r-lQw"],
]
let projectlist = [
["Newt9.art", "https://www.newt9.com/"],
["Web business", "https://web-business-peach.vercel.app/"],
["Blind gomoku", "https://gomoku-pvec.onrender.com/"],
]
let interestlist = [
["Memory Palace", "https://youtu.be/PIbz_gKw0XY?si=Y6kd3g5ZMaELxjiY"],
["Game Theory", "https://youtu.be/mScpHTIi-kM"],
]
let etclist = [
["open individualism", "https://en.wikipedia.org/wiki/Open_individualism"],
]

const leetMap = {
  'A': '4',
  'E': '3',
  'I': '1',
  'O': '0',
  'S': '5',
  'T': '7',
  'B': '8',
  'G': '6',
  'Z': '2'
};

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.linktext}`);

    function scrambleElement(el) {
      const original = el.dataset.text;
      let chars = original.split('');

      // Random number of letters to glitch
      const glitches = Math.floor(Math.random() * 3) + 1;

      for (let g = 0; g < glitches; g++) {
        const index = Math.floor(Math.random() * chars.length);
        const char = chars[index].toUpperCase();
        if (leetMap[char]) {
          chars[index] = leetMap[char];
        }
      }

      el.textContent = chars.join('');

      // Revert after short delay
      setTimeout(() => {
        el.textContent = original;
      }, Math.random() * 2500 + 500);
    }

    // Run scrambling randomly forever
    const interval = setInterval(() => {
      const el = elements[Math.floor(Math.random() * elements.length)];
      if (el) scrambleElement(el);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{backgroundColor: "black"}} className={styles.container}>
      <Head>
        <title>Newt Files</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.introimgcontainer}>        
        <div className={styles.imgblock}>  
        <Image
          src="/down.png"
          fill={true}
          alt="Down the rabbit hole"
        />
        </div>
      </div>
      <div className={styles.introframe}>
        <h2 className={styles.introheading}>Who in the world am I? <br></br>Ah, that's the great puzzle.</h2>
        <p className={styles.introcomments}>This is a collective of my socials, projects, and interests. This website is transient and the types of links shared here will evolve along with my interests. If you are in the pursuit of anything similiar to what is showcased here please don't hesitate to reach out to me regarding any explored topics, I love sharing my thoughts and perspectives.</p>
      </div>
      <main className={[styles.main]}>
        <div className={styles.wordframe}><p className={styles.nonlinktext} style={{color: 'blue'}} >SOCIALS</p></div>
        {sociallist.map((x, keyn) => <div key={keyn} className={styles.wordframe}><div className={styles.focusarr}>&gt;</div><a className={styles.linktext} href={x[1]} target="_blank" rel="noopener noreferrer" data-text={x[0].toUpperCase()}>{x[0].toUpperCase()}</a></div>)}
        <div className={styles.wordframe}><p className={styles.nonlinktext} style={{color: 'teal'}}>PROJECTS</p></div>
        {projectlist.map((x, keyn) => <div key={keyn} className={styles.wordframe}><div className={styles.focusarr}>&gt;</div><a className={styles.linktext} href={x[1]} target="_blank" rel="noopener noreferrer" data-text={x[0].toUpperCase()}>{x[0].toUpperCase()}</a></div>)}
        <div className={styles.wordframe}><p className={styles.nonlinktext} style={{color: 'darksalmon'}}>INTERESTS</p></div>
        {interestlist.map((x, keyn) => <div key={keyn} className={styles.wordframe}><div className={styles.focusarr}>&gt;</div><a className={styles.linktext} href={x[1]} target="_blank" rel="noopener noreferrer" data-text={x[0].toUpperCase()}>{x[0].toUpperCase()}</a></div>)}
        <div className={styles.wordframe}><p className={styles.nonlinktext} style={{color: 'blueviolet'}}>ETC</p></div>
        {etclist.map((x, keyn) => <div key={keyn} className={styles.wordframe}><div className={styles.focusarr}>&gt;</div><a className={styles.linktext} href={x[1]} target="_blank" rel="noopener noreferrer" data-text={x[0].toUpperCase()}>{x[0].toUpperCase()}</a></div>)}
      </main>
    </div>
  );
}
