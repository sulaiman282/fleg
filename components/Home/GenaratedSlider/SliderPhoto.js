import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCard from "./SliderCard.js";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { IconButton } from "@mui/material";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  lg: {
    breakpoint: { max: 1400, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  lgmobile: {
    breakpoint: { max: 767, min: 500 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 500, min: 200 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Sliderslider = () => {
  // console.log("featured products", FeaturedProductsList);
  const web = [
    {
      title: "The Sorcerer",
      description:
        "Coming from a long line of Fayden sorcerers, the source of all knowledge resides in him. He knows all, and the all knows him. He lives his life in solitude, continuous meditation and summoning the powers of the heavens. Though silent, his vision extends beyond the realm of sight, wielding a profound ability to master both the echoes of the past and the whispers of the future.",
      img: "/1by1/941-Sorcerer.png",
      number: "FAYDEN#941",
    },
    {
      title: "Naruto",
      description:
        "The beast within him resides peacefully for now, but is ever ready to spring to life. Kurama, the nine-tailed beast, one of the most formidable of all, vile and evil, controls Naruto's body, bringing sin to life and orchestrating destruction, with fire as its essential element. Naruto fears none, but all shall fear him.",
      img: "/1by1/945-Naruto.png",
      number: "FAYDEN#945",
    },
    {
      title: "Sumo",
      description:
        "The wrestler, powerful and playful yet devastating Fayden, Sumo, continually battles for the sheer joy of victory. He thrives on the aroma of Gohan in the morning, the scent of Sake at night, and the smell of defeat in his opponents come afternoon. Despite his pleasant appearance, he is driven by a spirit of unyielding ferocity and tumultuous impact.",
      img: "/1by1/587-Sumo.png",
      number: "FAYDEN#587",
    },
    {
      title: "Primal Fayden",
      description:
        "The chieftain of the tribe, the guardian of the lineage, his very presence sends tremors through the earth beneath our feet. He is fierce, his power undeniable, yet it is music and song that move him into the dance of the night. Primal, his bond with the spirits remains unbroken; snakes seek him out, and he revels in the mystical spectacle of the black magic parades.",
      img: "/1by1/990-Primal Fayden.png",
      number: "FAYDEN#990",
    },
    {
      title: "Fada Cop",
      description:
        "Mystery and crime hesitate at the threshold of Fada Cop's jurisdiction. Armed with intellect and his trusty gun, he methodically deconstructs the chaos, unearthing the guilty and dispensing justice—an abrupt end to wicked lives. Rising early in his upscale apartment, he savors his steaming hot coffee before embarking on his daily mission to create a safer world.",
      img: "/1by1/1000-FADACOP.png",
      number: "FAYDEN#1000",
    },
    {
      title: "Poly Rider",
      description:
        "Thriving on risks and adventures, his survival is nothing short of spectacular. He's the town's ultimate cool, the undisputed surfer of all seas, deftly navigating the chilliest breezes. Known as Poly Rider, he consistently astounds with his flawless physique, enigmatic soul, and agile mind. Everyone aspire to be by his side and yearn to embody his persona. Who indeed can surpass that?",
      img: "/1by1/1334-The Poly Rider.png",
      number: "FAYDEN#1334",
    },
    {
      title: "Greek Fayden",
      description:
        "He reflects light, and he emanates it. No one can harm him, for darkness cannot quench the radiance he holds. He possesses the attribute of the three: Apollo, Poseidon, and Zeus. The healing prowess of Apollo, the tumultuous strength of Poseidon, and the supreme authority of Zeus. His voice summons angels, elicits tears from mortals, and compels sinners to plead for absolution.",
      img: "/1by1/351-greek.png",
      number: "FAYDEN#351",
    },
    {
      title: "Monster Fayden",
      description:
        "Enchanted by the tale of the Gorgon, Medusa, he incessantly invoked her spirit, until one fateful day, she materialized. In an unexpected twist, instead of turning to stone upon meeting her gaze, he was transformed into a monstrous being. Deprived of his sight, he has lived for eons, secluded in his cocoon, too fearful to reveal himself. Yet, behind his formidable exterior, only kindness and love thrive.",
      img: "/1by1/60-Monster Fayden.png",
      number: "FAYDEN#60",
    },
    {
      title: "Mike F",
      description:
        "Indomitable, unyielding, steadfast—Mike F battles on, embodying the man everyone expects him to be. He will leave behind a legacy of strength, triumph, and compassion. Despite his grim fixation on booze, his family and friends are his world. He exists for the love of family and the thrill of a worthy fight.",
      img: "/1by1/117-Mike F.png",
      number: "FAYDEN#117",
    },
    {
      title: "Gummy",
      description:
        "Neither in the past nor in the present has Gummy ever felt truly alive, instead existing in a state of brokenness and near complete detachment. Yet, he found joy in the simple pleasure of strawberry bubble gum's flavor, and the sweet burn of rum. Anchored to the past, he clung to thoughts of what had been lost, with no foresight for the future—only a keen awareness of the price he'd paid.",
      img: "/1by1/826-Gummy.png",
      number: "FAYDEN#826",
    },
    {
      title: "Hasbi",
      description:
        "Hasbi understood that dimensions were of no consequence and embraced the reality that Faydens appear in all forms and hues, taking pride in his own unique and celebrated existence. He allowed nothing to obstruct his path; he aspired to wealth and fame, and he achieved exactly that. Hasbi daily triumphed over genetic destiny and reveled in the soft touch of a beloved koshka.",
      img: "/1by1/891-Hasbi.png",
      number: "FAYDEN#891",
    },
    {
      title: "Tafiti",
      description:
        "Enter Tafiti, the son of Mother Earth, the bearer of the sea, the true naturalist. His father was a Fayden, and his mother an earth fairy, thus on a propitious day, Tafiti came into being, embracing the lineage of Fada and the virtues of Gaia, the Earth. Tafiti cherishes nature, embarks on hikes, bathes in natural springs, and maintains cleanliness for both himself and the environment. An exemplary force, Tafiti truly is.",
      img: "/1by1/972-Tafiti.png",
      number: "FAYDEN#972",
    },
    {
      title: "The Clown",
      description:
        "Outlandish, absurd, yet immensely entertaining, the Fayden Clown brought amusement to his fellow Faydens by offering a bit of what each one needed. This jovial figure rekindled memories of the mirth they once shared on planet Fada, a joy that is persisting now on Earth. Oranges are his favored fruit to both juggle and savor, and despite the struggles in his life, the clown concealed his sorrow behind the radiant joy he bestowed upon others.",
      img: "/1by1/137-The Clown.png",
      number: "FAYDEN#137",
    },
    {
      title: "Gogh",
      description:
        "Transitioning into a realm of art and imagination, Gogh emerged as the creative mastermind, crafting the most awe-inspiring paintings of vibrant and picturesque landscapes. His talent served as a veil to conceal his inner turmoil and depression; he may not have found happiness, but he certainly possessed creativity. By gifting the world with exquisite visual narratives to behold, he infused his existence with profound significance.",
      img: "/1by1/613-Gogh.png",
      number: "FAYDEN#613",
    },
    {
      title: "Feti",
      description:
        "In the icy reaches of the world resided Feti and his tribe, a place where neither Fayden nor human dared to dwell. Covered in fur for protection against the frost, and armed with horns to fend off predators, Feti was known for his comforting embraces and the warmth he radiated. His most cherished time of the year was the prolonged sunlight of the summer months. Although food became scarce, the soulful light of the sun nourished his spirit.",
      img: "/1by1/773-Feti.png",
      number: "FAYDEN#773",
    },
    {
      title: "Khazou",
      description:
        "He selflessly gave his soul so that other Faydens might live. Khazou held little regard for himself; when the Faydens first arrived on Earth, he provided them with grains to eat and wine to drink. He was born to be sacrificed, offered for the survival of the Faydens.",
      img: "/1by1/1430-Khazou.png",
      number: "FAYDEN#1430",
    },
    {
      title: "Fyclops",
      description:
        "Although burdened with a singular eye, Fyclops, the ingenious progeny of Planet Fada and Chronos, flourished amidst unfettered chaos. His surroundings might have been characterized by a lack of order—his cave perpetually unkempt—but the order of his abilities prevailed. Often overlooked was Fyclops' deliberate pace, a trait that belied his mastery over the art of construction, living quietly beyond the rolling hills.",
      img: "/1by1/253-Fyclops.png",
      number: "FAYDEN#253",
    },
    {
      title: "Diver",
      description:
        "His home was the ocean depths, with the black seadevil his favored meal. Amidst the corals he wandered, and on the surface, he found companionship in seals. An introvert and non-conformist, yet an effortlessly dazzling flirt, all mermaids yearned for his embrace, donning pearls and lace in anticipation of the diver's attention.",
      img: "/1by1/558-Diver.png",
      number: "FAYDEN#558",
    },
    {
      title: "Fayden with a spear",
      description:
        "The legionary, guided by rigid discipline, wielded the power to conquer both lands and hearts, safeguarding his empire from hostilities. Irrespective of his own physique, the Fayden held the longest spear, capable of tearing even the most formidable mortals. After prolonged battles, he would rest under an olive tree, emptying the remnants of wine barrels.",
      img: "/1by1/711-Fayden with a spear.png",
      number: "FAYDEN#711",
    },
    {
      title: "Ricky",
      description:
        "Ricky was undeniably a sly character, using every trick at his disposal. But he was not particularly selective about the quests he took his grandson on—be it to sticky or icky worlds. The rules of physics held no authority over Ricky. One thing we know for certain: he was a genius with an inclination for alcohol!.",
      img: "/1by1/1285.png",
      number: "FAYDEN#1285",
    },
    {
      title: "Elon",
      description:
        "With a grin, he savored his first bite of a croissant and the initial sip of coke. His name, Elon, echoed space exploration and innovation. He was the driving force behind outlandish ideas that surpassed the ordinary. Elon understood that the world adjusted to his visions, allowing him to bring to life what eludes the perception of others.",
      img: "/1by1/571-Elon.png",
      number: "FAYDEN#571",
    },
    {
      title: "Split",
      description:
        "Life shattered him, and he devoted his existence to searching for the adhesive, poor little Split. However, his solace lay in the melodies of his favorite tunes, experienced under the starlit dunes. His force is adaptation, exhibiting multiple personas apt for various situations.",
      img: "/1by1/996-Split.png",
      number: "FAYDEN#996",
    },
    {
      title: "00F",
      description:
        "As the Fada's most esteemed agent, he was the object of every Faydenne's unvoiced dreams, his unflinching loyalty to the kingdom and its citizens never in question. He held an affinity for the silent watch of the night, eschewing the allure of sleep aids. Savoring his Vesper Martini paired with the languid burn of a cigarette, he exuded an effortless allure devoid of perspiration; 00F was, and shall forever remain, the quintessential Fayden of the hour.",
      img: "/1by1/1107-00F.png",
      number: "FAYDEN#1107",
    },
    {
      title: "The Viking",
      description:
        "Neither farming nor trading interested him, only the thrill of combat. He offered prayers to Odin, Freya, Thor, and the other gods. Engaging in battles day and night, he fought alongside his siblings, unafraid of death—for he believed it would lead to feasting with the gods in Valhalla.",
      img: "/1by1/508-Viking.png",
      number: "FAYDEN#508",
    },
    {
      title: "Scorpion",
      description:
        "Steadfast in his valorous feats, noble principles, and candid speech, embodying him was considered an honor. In the name of his clan and realm, he pledged his life to uphold harmony and master fire. His unwavering determination mirrored in his piercing gaze, martial prowess reflected in his chiseled physique, and unyielding loyalty embedded deep within his soul.",
      img: "/1by1/1227-Scorpion.png",
      number: "FAYDEN#1227",
    },
  ];

  return (
    <section
      className="bg-[#F3FCFF] min-h-screen h-full flex flex-col justify-center w-full "
      id="nft_Gallery"
    >
      <div className="container-sk relative py-10  h-full w-full ">
        <h4 className="font-extrabold text-center pb-10 text-primary lg:text-6xl md:text-5xl text-4xl  my-auto mt-5 ">
          1/1 GALLERY
        </h4>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={7000}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          containerClass="arrow_no_margin  flatdot   pb-10  arrow_no_margin cursor-grab my-carousel"
          dotListClassName="custom-dot-list-style"
        >
          {web?.map((data, index) => {
            return (
              <div className="" key={index}>
                <SliderCard data={data} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};
export default Sliderslider;
