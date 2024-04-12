import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MenuIcon from "@mui/icons-material/Menu";
import ReplyIcon from "@mui/icons-material/Reply";
import useWindowSize from "../../hooks/useWindowSize";

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the position of each section on the page
      const sections = document.querySelectorAll("section");
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // Find the section that is currently in view
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 500; // Offset by navbar height
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
        }
      });

      // Set the active section in state
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("activeSection", activeSection);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const windowsize = useWindowSize();
  const [ismobile, setIsmobile] = useState(false);
  useEffect(() => {
    if (windowsize?.width < 1200) {
      setIsmobile(true);
    } else {
      setIsOpen(false);
      setIsmobile(false);
    }
  }, [windowsize]);

  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setScrollHeight(scrollY);
    };

    // Add event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //scroll to a section
  const smoothScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const yOffset = -60;
    const targetY =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    const initialY = window.pageYOffset;
    const distance = targetY - initialY;
    const duration = 800; // Adjust the duration as desired

    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(
        0,
        easeInOutCubic(progress, initialY, distance, duration),
      );
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    const easeInOutCubic = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    window.requestAnimationFrame(step);
  };

  return (
    <nav
      className={`${
        scrollHeight > 200
          ? "backdrop-blur-md bg-white/80 shadow-md"
          : " bg-transparent"
      } duration-300 fixed w-full top-0 z-40 left-1/2 -translate-x-1/2 py-1`}
    >
      <div
        className={`container-sk  py-3 flex justify-between gap-8 items-center ${
          scrollHeight > 200 ? "" : ""
        }`}
      >
        <div
          className=" w-fit flex gap-4 items-center cursor-pointer"
          onClick={() => smoothScrollToSection("hero")}
        >
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="logo"
            className="object-contain hidden md:block h-8 md:h-[40px]  w-fit my-auto"
          />
          {scrollHeight > 200 ? (
            <Image
              src="/logo.png"
              width={500}
              height={500}
              alt="logo"
              className="object-contain md:hidden h-8 md:h-[40px]  w-fit my-auto"
            />
          ) : (
            <Image
              src="/logo2.png"
              width={500}
              height={500}
              alt="logo"
              className="object-contain md:hidden h-8 md:h-[40px]  w-fit my-auto"
            />
          )}

          <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
            Amerika Fleg
          </span>
        </div>

        <div
          className={`${
            !ismobile ? "flex" : "hidden"
          } justify-between items-center gap-6 lg:gap-8 tracking-wide lg:text-lg text-base`}
        >
          <button
            onClick={() => smoothScrollToSection("hero")}
            className={`${
              activeSection == "hero"
                ? "bg-primary shadow px-3  py-1 rounded-full text-white font-bold "
                : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
            }  duration-300 lg:text-[20px]   ${
              scrollHeight > 200
                ? activeSection == "hero"
                  ? "text-white"
                  : "text-primary"
                : "text-white"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => smoothScrollToSection("ayp")}
            className={`${
              activeSection == "ayp"
                ? "bg-primary shadow px-3  py-1 rounded-full text-white font-bold "
                : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
            }  duration-300 lg:text-[20px]   ${
              scrollHeight > 200
                ? activeSection == "ayp"
                  ? "text-white"
                  : "text-primary"
                : "text-white"
            }`}
          >
            A.Y.P
          </button>
          <button
            onClick={() => smoothScrollToSection("about")}
            className={`${
              activeSection == "about"
                ? "bg-primary shadow px-3 py-1 rounded-full text-white font-bold "
                : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
            }  duration-300 lg:text-[20px]   ${
              scrollHeight > 200
                ? activeSection == "about"
                  ? "text-white"
                  : "text-primary"
                : "text-white"
            }`}
          >
            About
          </button>

          <button
            onClick={() => smoothScrollToSection("roadmap")}
            className={`${
              activeSection == "roadmap"
                ? "bg-primary shadow px-3 py-1 rounded-full text-white font-bold "
                : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
            }  duration-300 lg:text-[20px]   ${
              scrollHeight > 200
                ? activeSection == "roadmap"
                  ? "text-white"
                  : "text-primary"
                : "text-white"
            }`}
          >
            How to buy
          </button>

          <button
            onClick={() => smoothScrollToSection("team")}
            className={`${
              activeSection == "team"
                ? "bg-primary shadow px-3 py-1 rounded-full text-white font-bold "
                : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
            }  duration-300 lg:text-[20px]   ${
              scrollHeight > 200
                ? activeSection == "team"
                  ? "text-white"
                  : "text-primary"
                : "text-white"
            }`}
          >
            Team
          </button>
          <Link href="https://raydium.io/swap/" target="_blank">
            <Button
              variant="contained"
              className="bg-red-500 hover:bg-red-700 duration-300 rounded-full"
            >
              BUY $FLEG
            </Button>
          </Link>
        </div>

        <IconButton
          onClick={toggleDrawer}
          className={`${
            ismobile ? "" : "hidden"
          }  bg-secondary/10 hover:bg-secondary/30 duration-300 `}
        >
          <MenuIcon
            className={`${
              scrollHeight > 200 ? "text-primary " : " text-white"
            }`}
          />
        </IconButton>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className=""
        lockBackgroundScroll
      >
        <div className="h-full bg-gray-200 ">
          <IconButton
            onClick={toggleDrawer}
            className=" bg-secondary/10 hover:bg-secondary/30 duration-300 md:hidden m-5"
          >
            <ReplyIcon className="text-primary" />
          </IconButton>

          <Image
            placeholder="blur"
            src="/logo.png"
            width={500}
            height={500}
            alt="logo"
            className="object-contain h-[85px] w-fit my-auto mx-auto p-5 "
            blurDataURL="/blur.png "
          />
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary text-center">
            Amerika Fleg
          </p>

          <div className=" flex justify-center items-center flex-col gap-4 tracking-wide lg:text-lg text-base mt-10">
            <button
              onClick={() => {
                smoothScrollToSection("hero");
                toggleDrawer();
              }}
              className={`${
                activeSection == "hero"
                  ? "bg-primary px-3  py-1 rounded-full text-white font-bold "
                  : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
              }  duration-300 lg:text-[20px]  `}
            >
              Home
            </button>
            <button
              onClick={() => {
                smoothScrollToSection("ayp");
                toggleDrawer();
              }}
              className={`${
                activeSection == "ayp"
                  ? "bg-primary px-3  py-1 rounded-full text-white font-bold "
                  : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
              }  duration-300 lg:text-[20px]  `}
            >
              A.Y.P
            </button>

            <button
              onClick={() => {
                smoothScrollToSection("about");
                toggleDrawer();
              }}
              className={`${
                activeSection == "about"
                  ? "bg-primary px-3 py-1 rounded-full text-white font-bold "
                  : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
              }  duration-300 lg:text-[20px]  `}
            >
              About
            </button>

            <button
              onClick={() => {
                smoothScrollToSection("roadmap");
                toggleDrawer();
              }}
              className={`${
                activeSection == "roadmap"
                  ? "bg-primary px-3 py-1 rounded-full text-white font-bold "
                  : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
              }  duration-300 lg:text-[20px]  `}
            >
              How to buy
            </button>

            <button
              onClick={() => {
                smoothScrollToSection("team");
                toggleDrawer();
              }}
              className={`${
                activeSection == "team"
                  ? "bg-primary px-3 py-1 rounded-full text-white font-bold "
                  : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
              }  duration-300 lg:text-[20px]  `}
            >
              Team
            </button>
            <Link href="https://raydium.io/swap/" target="_blank">
              <Button
                variant="contained"
                className="bg-red-500 hover:bg-red-700 duration-300 rounded-full"
              >
                BUY $FLEG
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
