import { motion } from "framer-motion"

import styles from "../styles/aboutimage.module.css"
import { FadeDown, FadeLeft, FadeRight } from "./animations/FramerAnimations"

function AboutMe() {
  return (
    <div className="flex flex-col gap-10 pt-44 md:mt-96" id="about">
      <motion.h1
        className="inline-block font-bold text-5xl text-center"
        initial="hide"
        whileInView="show"
        variants={FadeDown}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-48">
        <motion.p
          className="max-w-md text-xl text-justify tracking-tighter"
          initial="hide"
          whileInView="show"
          variants={FadeRight}
          viewport={{ once: true }}
        >
          I&apos;m a Front-End developer specialized in Next.js and TailwindCSS.
          I&apos;ve also got a great knowledge in HTML, CSS, JavaScript, React
          and Firebase, and I&apos;m currently studying Back-End development in
          Coderhouse. <br />
          <br />I am a highly motivated and results-oriented individual. I am
          always looking for new challenges and opportunities to learn and grow.
          I am confident that I can make a significant contribution to your
          team.
        </motion.p>
        <motion.img
          src="./undraw_programming_re_kg9v.svg"
          // width={"500px"}
          className={styles.aboutImage}
          alt=""
          initial="hide"
          whileInView="show"
          variants={FadeLeft}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

export default AboutMe
