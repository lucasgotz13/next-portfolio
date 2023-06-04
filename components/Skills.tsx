"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNpm,
  FaReact,
  FaSass,
} from "react-icons/fa"
import {
  SiChakraui,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import styles from "../styles/skillsIcons.module.css"
import { FadeDown } from "./animations/FramerAnimations"

export default function Skills() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      className="pt-44 md:pt-96 flex flex-col items-center"
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      variants={FadeDown}
    >
      <motion.h1
        className="font-bold text-5xl text-center mb-20"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={FadeDown}
      >
        Skills
      </motion.h1>
      <motion.p
        className="text-2xl text-center mb-10 tracking-tighter"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={FadeDown}
        id="skills"
      >
        Languages
      </motion.p>
      <motion.div
        className="flex justify-center items-center gap-5 md:gap-10"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={FadeDown}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <FaHtml5
                className={styles.iconSize}
                style={{ color: "#e34c26" }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>HTML</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <FaCss3
                className={styles.iconSize}
                style={{ color: "#264de4" }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>CSS</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <FaJs className={styles.iconSize} style={{ color: "#F0DB4F" }} />
            </TooltipTrigger>
            <TooltipContent>
              <p>JavaScript</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
      <motion.p
        className="text-2xl text-center mt-20 mb-10 tracking-tighter"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={FadeDown}
      >
        Libraries & Frameworks
      </motion.p>
      <motion.div
        className="flex justify-center items-center gap-5 md:gap-10"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={FadeDown}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <FaReact
                className={styles.iconSize}
                style={{ color: "#61dbfb" }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>React</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <SiNextdotjs
                className={styles.iconSize}
                style={{
                  color:
                    theme === "dark" || theme === undefined ? "#fff" : "#000",
                }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Next.js</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <SiTailwindcss
                className={styles.iconSize}
                style={{ color: "#37bcf7" }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>TailwindCSS</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <FaSass className={styles.iconSize} style={{ color: "#c69" }} />
            </TooltipTrigger>
            <TooltipContent>
              <p>SASS</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <SiChakraui
                className={styles.iconSize}
                style={{ color: "#41c7bf" }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Chakra UI</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
      <motion.p
        className="text-2xl text-center mt-20 mb-10 tracking-tighter"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={FadeDown}
      >
        Technologies
      </motion.p>
      <motion.div
        className="flex justify-center items-center flex-wrap md:flex-nowrap gap-5 md:gap-10"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={FadeDown}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <FaNpm className={styles.iconSize} style={{ color: "#c53635" }} />
            </TooltipTrigger>
            <TooltipContent>
              <p>NPM</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <FaGitAlt
                className={styles.iconSize}
                style={{ color: "#f34f29" }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Git</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <FaGithub
                className={styles.iconSize}
                style={{
                  color:
                    theme === "dark" || theme === undefined ? "#fff" : "#000",
                }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <SiFirebase
                className={styles.iconSize}
                style={{ color: "#FFA611" }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Firebase Firestore</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
    </motion.div>
  )
}
