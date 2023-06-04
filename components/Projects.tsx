import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { FaCode, FaGithub } from "react-icons/fa"

import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { FadeDown, FadeLeft, FadeRight } from "./animations/FramerAnimations"

export default function Projects() {
  const { theme } = useTheme()

  return (
    <TooltipProvider>
      <div className="pt-44 md:pt-96 flex flex-col gap-10">
        <motion.h1
          className="font-bold text-5xl text-center"
          initial="hide"
          whileInView="show"
          variants={FadeDown}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="text-2xl text-center tracking-tighter"
          initial="hide"
          whileInView="show"
          variants={FadeDown}
          viewport={{ once: true }}
        >
          Some of my best projects
        </motion.p>
        <motion.div
          className={`pr-10 pl-5 py-5 flex flex-col-reverse md:grid rounded-md md:grid-cols-[35%_65%] border-4 ${
            theme === "light" ? "border-gray-400" : ""
          } `}
          initial="hide"
          whileInView="show"
          whileHover={{ scale: 1.1 }}
          variants={FadeRight}
          viewport={{ once: true }}
        >
          <img
            src="../images/CoolGamers2.png"
            className={`border-4 ${
              theme === "light" ? "border-gray-400" : ""
            } rounded-md mx-auto w-[300px] h-[200px] md:w-[400px] md:h-[200px] md:mx-0`}
            alt=""
          />
          <div className="mx-auto md:mx-0 md:ml-auto flex flex-col gap-5 md:gap-2 justify-center items-end">
            <h1 className="font-bold text-2xl ml-auto">Cool Gamers</h1>
            <p className="max-w-sm ml-auto text-right">
              An E-Commerce I made for my final project in the React.js
              Coderhouse course
            </p>
            <div className="flex ml-auto gap-3">
              <Badge variant="react">React.js</Badge>
              <Badge variant="tailwindcss">TailwindCSS</Badge>
              <Badge variant="chakraUi">Chakra UI</Badge>
              <Badge variant="firebase">Firebase</Badge>
            </div>
            <div className="flex ml-auto gap-5">
              <Tooltip>
                <Link
                  href={"https://e-commerce-cool-gamers-gotz.vercel.app/"}
                  target="_blank"
                >
                  <TooltipTrigger>
                    <FaCode size={24} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Demo</p>
                  </TooltipContent>
                </Link>
              </Tooltip>
              <Tooltip>
                <Link
                  href={
                    "https://github.com/lucasgotz13/E-Commerce-CoolGamers-Gotz"
                  }
                  target="_blank"
                >
                  <TooltipTrigger>
                    <FaGithub size={24} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Repository</p>
                  </TooltipContent>
                </Link>
              </Tooltip>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={`pl-10 pr-5 py-5 flex flex-col md:grid rounded-md md:grid-cols-[65%_35%] border-4 ${
            theme === "light" ? "border-gray-400" : ""
          }`}
          initial="hide"
          whileInView="show"
          variants={FadeLeft}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-5 md:gap-2 justify-center items-start">
            <h1 className="font-bold text-2xl text-center">Gotz-shop</h1>
            <p className="max-w-screen-sm md:max-w-sm">
              An E-Commerce I made for my final project in the JavaScript
              Coderhouse course
            </p>
            <div className="flex mr-auto gap-3">
              <Badge variant="html">HTML</Badge>
              <Badge variant="css">CSS</Badge>
              <Badge variant="js">JavaScript</Badge>
            </div>
            <div className="flex mx-auto md:mx-0 md:mr-auto gap-5">
              <Tooltip>
                <Link
                  href={"https://lucasgotz13.github.io/E-Commerce-CH/"}
                  target="_blank"
                >
                  <TooltipTrigger>
                    <FaCode size={24} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Demo</p>
                  </TooltipContent>
                </Link>
              </Tooltip>
              <Tooltip>
                <Link
                  href={"https://github.com/lucasgotz13/E-Commerce-CH"}
                  target="_blank"
                >
                  <TooltipTrigger>
                    <FaGithub size={24} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Repository</p>
                  </TooltipContent>
                </Link>
              </Tooltip>
            </div>
          </div>
          <img
            src="../images/E-Commerce.png"
            className={`border-4 ${
              theme === "light" ? "border-gray-400" : ""
            } rounded-md mx-auto w-[300px] h-[200px] md:w-[400px] md:h-[200px] md:mx-0`}
            alt=""
          />
        </motion.div>
        <motion.div
          className={`pr-10 pl-5 py-5 flex flex-col-reverse md:grid rounded-md md:grid-cols-[45%_55%] border-4 ${
            theme === "light" ? "border-gray-400" : ""
          } `}
          initial="hide"
          whileInView="show"
          variants={FadeRight}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true }}
        >
          <img
            src="../images/newportfolio.png"
            className={`border-4 ${
              theme === "light" ? "border-gray-400" : ""
            } rounded-md mx-auto w-[300px] h-[200px] md:w-[400px] md:h-[200px] md:mx-0`}
            alt=""
          />
          <div className="mx-auto md:mx-0 md:ml-auto flex flex-col gap-5 md:gap-2 justify-center items-center md:items-end">
            <h1 className="font-bold text-2xl text-right">Portfolio</h1>
            <p className="max-w-screen-sm md:max-w-sm text-right">
              My personal portfolio
            </p>
            <div className="flex mx-auto gap-3">
              <Badge variant="nextjs">Next.js</Badge>
              <Badge variant="tailwindcss">TailwindCSS</Badge>
            </div>
            <div className="flex mx-auto md:mx-0 md:ml-auto gap-5">
              <Tooltip>
                <Link
                  href={"https://lucasgotz-portfolio.netlify.app/"}
                  target="_blank"
                >
                  <TooltipTrigger>
                    <FaCode size={24} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Demo</p>
                  </TooltipContent>
                </Link>
              </Tooltip>
              <Tooltip>
                <Link
                  href={"https://github.com/lucasgotz13/next-portfolio"}
                  target="_blank"
                >
                  <TooltipTrigger>
                    <FaGithub size={24} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Repository</p>
                  </TooltipContent>
                </Link>
              </Tooltip>
            </div>
          </div>
        </motion.div>
      </div>
    </TooltipProvider>
  )
}
