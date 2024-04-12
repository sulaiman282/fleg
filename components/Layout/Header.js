import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MenuIcon from "@mui/icons-material/Menu";
import ReplyIcon from "@mui/icons-material/Reply";
import useWindowSize from "../../hooks/useWindowSize";
import LockIcon from "@mui/icons-material/Lock";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
          ? "bg-white border-b border-gray-50 shadow-md"
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
            className="object-contain hidden md:block h-8 md:h-[35px]  w-fit my-auto"
          />
          {scrollHeight > 200 ? (
            <Image
              src="/logo.png"
              width={500}
              height={500}
              alt="logo"
              className="object-contain md:hidden h-8 md:h-[35px]  w-fit my-auto"
            />
          ) : (
            <Image
              src="/logo2.png"
              width={500}
              height={500}
              alt="logo"
              className="object-contain md:hidden h-8 md:h-[35px]  w-fit my-auto"
            />
          )}
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
            }  duration-300 lg:text-[16px]   ${
              scrollHeight > 200
                ? activeSection == "hero"
                  ? "text-white"
                  : "text-gray-900"
                : "text-white"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => smoothScrollToSection("about")}
            className={`${
              activeSection == "about"
                ? "bg-primary shadow px-3 py-1 rounded-full text-white font-bold "
                : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
            }  duration-300 lg:text-[16px]   ${
              scrollHeight > 200
                ? activeSection == "about"
                  ? "text-white"
                  : "text-gray-900"
                : "text-white"
            }`}
          >
            About
          </button>
          <button
            onClick={() => smoothScrollToSection("nft_Gallery")}
            className={`${
              activeSection == "nft_Gallery"
                ? "bg-primary  shadow px-3 py-1 rounded-full text-white font-bold "
                : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
            }  duration-300 lg:text-[16px]   ${
              scrollHeight > 200
                ? activeSection == "nft_Gallery"
                  ? "text-white"
                  : "text-gray-900"
                : "text-white"
            }`}
          >
            1/1&nbsp;Gallery
          </button>

          <button
            onClick={() => smoothScrollToSection("roadmap")}
            className={`${
              activeSection == "roadmap"
                ? "bg-primary shadow px-3 py-1 rounded-full text-white font-bold "
                : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
            }  duration-300 lg:text-[16px]   ${
              scrollHeight > 200
                ? activeSection == "roadmap"
                  ? "text-white"
                  : "text-gray-900"
                : "text-white"
            }`}
          >
            Roadmap
          </button>

          <button
            onClick={() => smoothScrollToSection("team")}
            className={`${
              activeSection == "team"
                ? "bg-primary shadow px-3 py-1 rounded-full text-white font-bold "
                : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
            }  duration-300 lg:text-[16px]   ${
              scrollHeight > 200
                ? activeSection == "team"
                  ? "text-white"
                  : "text-gray-900"
                : "text-white"
            }`}
          >
            Team
          </button>

          <div className="relative group  ">
            <button
              className={`text-base ${
                scrollHeight > 200
                  ? activeSection == "tools"
                    ? "text-white"
                    : "text-gray-900"
                  : "text-white"
              }`}
            >
              Tools
            </button>
            <div
              className={`   duration-300 group-hover:block hidden absolute top-0 left-1/2 -translate-x-1/2  mt-6 ${
                scrollHeight > 200 ? "pt-7" : "pt-2"
              }`}
            >
              <Link
                href="https://gm.projectfada.com/"
                target="_blank"
                className="text-white  duration-300 "
              >
                <Button
                  variant="contained"
                  className="capitalize backdrop-blur-sm hover:bg-primary  px-2 py-1 rounded-md shadow-lg bg-white/20  text-base"
                >
                  GM&nbsp;Gallery
                </Button>
              </Link>
            </div>
          </div>
          <Link
            href="https://frs.projectfada.com/"
            target="_blank"
            className="text-white  duration-300 "
          >
            <button
              className={`flex gap-1 items-center  duration-300 lg:text-[16px]  hover:px-5 py-1 rounded-full hover:bg-primary hover:text-white  ${
                scrollHeight > 200
                  ? activeSection == "contact"
                    ? "text-white"
                    : "text-gray-900"
                  : "text-white"
              }`}
            >
              FRS
            </button>
          </Link>

          <div className="ml-3 flex gap-3 items-center">
            <Link
              className=""
              target="_blank"
              href="https://discord.com/invite/AjyE8755ZQ"
            >
              <IconButton className="text-[20px] w-10 h-10 text-primary bg-gray-100 hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-discord " />
              </IconButton>
            </Link>

            <Link
              className=""
              target="_blank"
              href="https://twitter.com/ProjectFADA"
            >
              <IconButton className="text-[20px] w-10 h-10 text-primary bg-gray-100 hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-twitter " />
              </IconButton>
            </Link>
          </div>
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
              }  duration-300 lg:text-[16px]  `}
            >
              Home
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
              }  duration-300 lg:text-[16px]  `}
            >
              About
            </button>
            <button
              onClick={() => {
                smoothScrollToSection("nft_Gallery");
                toggleDrawer();
              }}
              className={`${
                activeSection == "nft_Gallery"
                  ? "bg-primary px-3 py-1 rounded-full text-white font-bold "
                  : "hover:bg-primary hover:text-white hover:px-3 hover:py-1 hover:rounded-full duration-300"
              }  duration-300 lg:text-[16px]  `}
            >
              1/1&nbsp;Gallery
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
              }  duration-300 lg:text-[16px]  `}
            >
              Roadmap
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
              }  duration-300 lg:text-[16px]  `}
            >
              Team
            </button>
            <Link
              href="https://frs.projectfada.com/"
              target="_blank"
              className="text-white  duration-300 "
            >
              <button
                className={`flex gap-1 items-center  duration-300 lg:text-[16px]   ${
                  scrollHeight > 200
                    ? activeSection == "contact"
                      ? "text-white"
                      : "text-gray-900"
                    : "text-white"
                }`}
              >
                FRS
              </button>
            </Link>

            <div className="flex flex-col justify-center mt-10">
              <span className="underline underline-offset-4 text-base lg:text-lg">
                {" "}
                Tools
              </span>
            </div>

            <Link
              href="https://gm.projectfada.com/"
              className="hover:bg-primary px-3 py-1 rounded-full hover:text-white duration-300 lg:text-lg"
              target="_blank"
            >
              GM Gallery
            </Link>

            <div className="flex gap-1 items-center mt-10">
              <Link
                className=""
                onClick={(e) => toggleDrawer()}
                target="_blank"
                href="https://discord.com/invite/AjyE8755ZQ"
              >
                <IconButton className="text-[20px] w-10 h-10 text-primary bg-gray-100 hover:bg-primary hover:text-white duration-300">
                  <i className="fa-brands fa-discord " />
                </IconButton>
              </Link>

              <Link
                className=""
                target="_blank"
                onClick={(e) => toggleDrawer()}
                href="https://twitter.com/ProjectFADA"
              >
                <IconButton className="text-[20px] w-10 h-10 text-primary bg-gray-100 hover:bg-primary hover:text-white duration-300">
                  <i className="fa-brands fa-twitter " />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
