import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import ScrollAnimation from "react-animate-on-scroll";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Team() {
  const TeamData = [
    {
      img: "/allteam/1.png",
      title: "campaigner",
      name: "fares",
      position: "founder, content writer and speaker",
      description: "intuitive, feeling, prospecting.",
      twitter: "https://twitter.com/faydenfares",
    },
    {
      img: "/allteam/hadd.png",
      title: "architect",
      name: "hadd",
      position: "founder, researcher and concept creator",
      description: "detail perfection, creativity and rationality application",
      twitter: "https://twitter.com/haddfada",
    },
    {
      img: "/allteam/marc.png",
      title: "virtuoso",
      name: "marc",
      position: "founder, researcher and marketing strategist",
      description: "inquisitiveness, individualistic mindset, explorer",
      twitter: "https://twitter.com/faydenmarc",
    },
    {
      img: "/allteam/2.png",
      title: "assertive protagonist",
      name: "wiss",
      position: "dev lead",
      description: "intuitive, feeling, assertive",
      twitter: "",
      linkdin: "https://www.linkedin.com/in/wissam-atat-79b051201",
    },
    {
      img: "/allteam/3.png",
      title: "entertainer",
      name: "silo",
      position: "community manager",
      description:
        "vibrant experiences, eager engagement, discovering the unknown",
      twitter: "https://twitter.com/silox_x ",
    },
    {
      img: "/allteam/4.png",
      title: "turbulent advocate",
      name: "juju",
      position: "creative director",
      description: "perfectionist, success driven",
      twitter: "https://twitter.com/juujugirl",
    },
    {
      img: "/allteam/5.png",
      title: "advocate",
      name: "nidvl",
      position: "senior artist",
      description: "compassionate, idealistic, organized",
      twitter: "",
    },
    {
      img: "/allteam/6.png",
      title: "idealist",
      name: "jana",
      position: "project manager",
      description: "conceptual, innovative, idealistic",
      twitter: "",
    },
  ];

  return (
    <section className="bg-[#F3FCFF] lg:py-20 py-10 " id="team">
      <div className="container-sk">
        <h5 className="text-center text-primary lg:text-6xl md:text-5xl text-4xl font-extrabold">
          TEAM
        </h5>
        <div className=" lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid gap-4 lg:gap-8 mt-10">
          {TeamData?.map((data, index) => {
            return (
              <div className="text-primary" key={index}>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={2}
                >
                  <Image
                    placeholder="blur"
                    src={data?.img}
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    blurDataURL="/blur.png"
                    className="object-contain w-full aspect-square"
                  />
                </ScrollAnimation>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={2}
                >
                  <div className="flex items-center justify-between gap-2 pt-2 h-12  ">
                    <p className="w-fit font-bold uppercase lg:text-lg  h-fit">
                      {data?.name}
                    </p>
                    {data?.twitter?.length > 0 && (
                      <Link
                        className="w-fit "
                        target="_blank"
                        href={data?.twitter}
                      >
                        <IconButton>
                          <TwitterIcon className="text-primary" />
                        </IconButton>
                      </Link>
                    )}
                    {data?.linkdin?.length > 0 && (
                      <Link
                        className="w-fit "
                        target="_blank"
                        href={data?.linkdin}
                      >
                        <IconButton>
                          <LinkedInIcon className="text-primary" />
                        </IconButton>
                      </Link>
                    )}
                  </div>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeIn"
                  duration={2}
                >
                  <p className="lg:text-base text-sm font-bold capitalize">
                    {data?.title}
                  </p>
                  <p className=" text-sm capitalize">{data?.position}</p>
                  <p className="text-sm capitalize">{data?.description}</p>
                </ScrollAnimation>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
