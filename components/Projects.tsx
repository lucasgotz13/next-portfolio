import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { FaCode, FaGithub } from "react-icons/fa"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
      <div className="pt-44 md:mt-96 flex flex-col gap-10" id="projects">
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
            } rounded-md mx-auto w-[300px] h-[200px] md:w-[400px] md:h-[300px] md:mx-0`}
            alt=""
          />
          <div className="mx-auto md:mx-0 md:ml-auto flex flex-col gap-5 md:gap-2 justify-center items-end">
            <h1 className="font-bold text-2xl mx-auto md:mx-0 md:ml-auto md:text-right">
              Cool Gamers
            </h1>
            <p className="max-w-sm ml-auto text-center md:text-right">
              An E-Commerce I made for my final project in the React.js
              Coderhouse course
            </p>
            <div className="flex flex-wrap justify-center md:justify-right md:mx-0 md:ml-auto gap-3">
              <Badge variant="react">React.js</Badge>
              <Badge variant="tailwindcss">TailwindCSS</Badge>
              <Badge variant="chakraUi">Chakra UI</Badge>
              <Badge variant="firebase">Firebase</Badge>
            </div>
            <div className="flex mx-auto md:mx-0 md:ml-auto gap-5">
              <Tooltip>
                <Link
                  href={"https://e-commerce-cool-gamers-gotz.vercel.app/"}
                  target="_blank"
                >
                  <TooltipTrigger>
                    <FaCode size={24} className="hover:text-foreground/90" />
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
                    <FaGithub size={24} className="hover:text-foreground/90" />
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
          <div className="flex flex-col gap-5 md:gap-2 justify-center md:items-start">
            <h1 className="font-bold text-2xl text-center md:text-left">
              Gotz-shop
            </h1>
            <p className="max-w-screen-sm md:max-w-sm text-center md:text-left">
              An E-Commerce I made for my final project in the JavaScript
              Coderhouse course
            </p>
            <div className="flex mx-auto md:mx-0 md:mr-auto gap-3">
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
                    <FaCode size={24} className="hover:text-foreground/90" />
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
                    <FaGithub size={24} className="hover:text-foreground/90" />
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
            } rounded-md mx-auto w-[300px] h-[200px] md:w-[400px] md:h-[300px] md:mx-0`}
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
            } rounded-md mx-auto w-[300px] h-[200px] md:w-[400px] md:h-[300px] md:mx-0`}
            alt=""
          />
          <div className="mx-auto md:mx-0 md:ml-auto flex flex-col gap-5 md:gap-2 justify-center items-center md:items-end">
            <h1 className="font-bold text-2xl text-center md:text-right">
              Portfolio
            </h1>
            <p className="max-w-screen-sm md:max-w-sm text-center md:text-right">
              My personal portfolio
            </p>
            <div className="flex mx-auto gap-3">
              <Badge variant="nextjs">Next.js</Badge>
              <Badge variant="tailwindcss">TailwindCSS</Badge>
            </div>
            <div className="flex mx-auto md:mx-0 md:ml-auto gap-5">
              <Tooltip>
                <Link
                  href={"https://lucasgotz-portfolio.vercel.app/"}
                  target="_blank"
                >
                  <TooltipTrigger>
                    <FaCode size={24} className="hover:text-foreground/90" />
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
                    <FaGithub size={24} className="hover:text-foreground/90" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Repository</p>
                  </TooltipContent>
                </Link>
              </Tooltip>
            </div>
          </div>
        </motion.div>
        <motion.p
          className="text-2xl text-center tracking-tighter"
          initial="hide"
          whileInView="show"
          variants={FadeDown}
          viewport={{ once: true }}
        >
          Other projects
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-5 md:gap-10 flex-wrap"
          initial="hide"
          whileInView="show"
          variants={FadeDown}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`border-2 rounded-md ${
              theme === "light" ? "border-gray-400" : ""
            }`}
          >
            <Card>
              <CardHeader>
                <img
                  src="../images/portfolio-thumbnail.png"
                  alt="Old portfolio"
                  className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] rounded-md"
                />
              </CardHeader>
              <CardContent className="flex flex-col justify-center gap-2">
                <CardTitle className="text-center">Portfolio</CardTitle>
                <CardDescription className="text-center">
                  My old portfolio
                </CardDescription>
                <div className="flex justify-center items-center gap-2">
                  <Tooltip>
                    <Link
                      href={"https://lucasgotz-portfolio.netlify.app/"}
                      target="_blank"
                    >
                      <TooltipTrigger>
                        <FaCode
                          size={24}
                          className="hover:text-foreground/90"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Demo</p>
                      </TooltipContent>
                    </Link>
                  </Tooltip>
                  <Tooltip>
                    <Link
                      href={"https://github.com/lucasgotz13/portfolio"}
                      target="_blank"
                    >
                      <TooltipTrigger>
                        <FaGithub
                          size={24}
                          className="hover:text-foreground/90"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repository</p>
                      </TooltipContent>
                    </Link>
                  </Tooltip>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Badge variant="react">React.js</Badge>
                <Badge variant="tailwindcss">TailwindCSS</Badge>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`border-2 rounded-md ${
              theme === "light" ? "border-gray-400" : ""
            }`}
          >
            <Card>
              <CardHeader className="flex justify-center items-center">
                <img
                  src="../images/holiday-calculator.jpeg"
                  alt="Old portfolio"
                  className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] rounded-md"
                />
              </CardHeader>
              <CardContent className="flex flex-col justify-center gap-2">
                <CardTitle className="text-center">
                  Holiday calculator
                </CardTitle>
                <CardDescription className="text-center">
                  A calculator to know how many days left until the next holiday
                </CardDescription>
                <div className="flex justify-center items-center gap-2">
                  <Tooltip>
                    <Link
                      href={"https://holiday-calculator.vercel.app/"}
                      target="_blank"
                    >
                      <TooltipTrigger>
                        <FaCode
                          size={24}
                          className="hover:text-foreground/90"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Demo</p>
                      </TooltipContent>
                    </Link>
                  </Tooltip>
                  <Tooltip>
                    <Link
                      href={"https://github.com/lucasgotz13/Holiday-calculator"}
                      target="_blank"
                    >
                      <TooltipTrigger>
                        <FaGithub
                          size={24}
                          className="hover:text-foreground/90"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repository</p>
                      </TooltipContent>
                    </Link>
                  </Tooltip>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-center md:justify-start gap-2">
                <Badge variant="react">React.js</Badge>
                <Badge variant="tailwindcss">TailwindCSS</Badge>
                <Badge variant="chakraUi">Chakra UI</Badge>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </TooltipProvider>
  )
}
