"use client"

import Link from "next/link"
import { Typewriter } from "react-simple-typewriter"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import AboutMe from "@/components/AboutMe"
import Contact from "@/components/Contact"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export default function IndexPage() {
  return (
    <>
      <section className="container mt-52 flex flex-col justify-center items-center gap-6 md:py-10">
        <div className="flex flex-col-reverse md:flex-row max-w-[980px] items-center justify-between gap-10 md:gap-32 mb-32">
          <div className="flex flex-col items-center md:items-start gap-5">
            <span className="text-4xl text-center md:text-start font-extrabold">
              <Typewriter
                words={[
                  "Hi, I'm Lucas Gotz",
                  "I ❤️ coding",
                  "Hi, I'm Lucas Gotz",
                  "I ❤️ coding",
                  "Hi, I'm Lucas Gotz",
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <h2 className="max-w-xl text-3xl text-center md:text-start leading-tight tracking-tighter md:text-4xl">
              18y/o Front-End developer currently living in Buenos Aires,
              Argentina.
            </h2>
            <div className="flex justify-start gap-4">
              <Link
                href="https://linkedin.com/in/lucas-gotz-baliner"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants()}
              >
                Resume
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={buttonVariants({ variant: "outline" })}
              >
                GitHub
              </Link>
            </div>
          </div>
          <img
            src="/portrait-photo.jpeg"
            alt="Portait photo"
            className="w-60 rounded-full border-4 "
          />
        </div>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </section>
    </>
  )
}
