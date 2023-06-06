"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

import { FadeDown } from "./animations/FramerAnimations"

export default function Contact() {
  const { theme } = useTheme()

  return (
    <div className="pt-44 md:pt-96 flex flex-col gap-10" id="contact">
      <motion.h1
        className="font-bold text-5xl text-center"
        initial="hide"
        whileInView="show"
        variants={FadeDown}
        viewport={{ once: true }}
      >
        Let&apos;s get in touch!
      </motion.h1>
      <motion.div
        className={`border-2 rounded-md ${
          theme === "light" ? "border-gray-400" : ""
        } `}
        initial="hide"
        whileInView="show"
        variants={FadeDown}
        viewport={{ once: true }}
      >
        <Card className="p-5 md:p-10">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Contact me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Icons.mail />
              <p>lucasgotz13@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <Icons.twitter className="fill-current" />
              <p>@Fideoz_</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-5">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.linkedin className="h-7 w-7 fill-current" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <Link href={siteConfig.links.mail} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.mail className="h-7 w-7" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
