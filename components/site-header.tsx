import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container hidden md:flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
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
                <Icons.gitHub className="h-5 w-5" />
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
                <Icons.linkedin className="h-5 w-5 fill-current" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
      <div className="md:hidden flex container h-16 items-center space-x-4 justify-between sm:space-x-0 overflow-hidden">
        <h1 className="inline-block font-bold">{siteConfig.name}</h1>
        <div>
          <ThemeToggle />
          <Sheet>
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <SheetTrigger>
                <Icons.menu />
              </SheetTrigger>
            </div>
            <SheetContent size={"lg"} position={"top"}>
              <SheetHeader>
                <SheetTitle className="mb-5">Lucas Gotz</SheetTitle>
                <SheetDescription className="flex flex-col gap-5">
                  <div className="flex flex-col gap-5">
                    <Link
                      href={"/"}
                      className="text-sm font-medium hover:text-muted-foreground/90"
                    >
                      <SheetClose>Home</SheetClose>
                    </Link>
                    <Link
                      href={"#about"}
                      className="text-sm font-medium hover:text-muted-foreground/90"
                    >
                      <SheetClose>About Me</SheetClose>
                    </Link>
                    <Link
                      href={"#skills"}
                      className="text-sm font-medium hover:text-muted-foreground/90"
                    >
                      <SheetClose>Skills</SheetClose>
                    </Link>
                    <Link
                      href={"#projects"}
                      className="text-sm font-medium hover:text-muted-foreground/90"
                    >
                      <SheetClose>Projects</SheetClose>
                    </Link>
                    <Link
                      href={"#contact"}
                      className="text-sm font-medium hover:text-muted-foreground/90"
                    >
                      <SheetClose>Contact</SheetClose>
                    </Link>
                  </div>
                  <div className="flex justify-center gap-5">
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
                        <SheetClose>
                          <Icons.gitHub className="h-5 w-5" />
                        </SheetClose>
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
                        <SheetClose>
                          <Icons.linkedin className="h-5 w-5 fill-current" />
                        </SheetClose>
                        <span className="sr-only">Linkedin</span>
                      </div>
                    </Link>
                    <Link
                      href={siteConfig.links.mail}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div
                        className={buttonVariants({
                          size: "sm",
                          variant: "ghost",
                        })}
                      >
                        <SheetClose>
                          <Icons.mail className="h-5 w-5" />
                        </SheetClose>
                        <span className="sr-only">Linkedin</span>
                      </div>
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
