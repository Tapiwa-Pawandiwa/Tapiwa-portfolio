import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profileImage from "../../public/images/profile/PROFILE_BLACK:W.jpg";
import profileGlitch from "../../public/images/profile/profile_glitch.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import { useState } from "react";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  const [showGlitch, setShowGlitch] = useState(false);
  return (
    <>
      <Head>
        <title>Tapiwa Pawandiwa Portfolio</title>
        <meta name="description" content="Porfolio website" />
        <link rel="icon" href="../../public/favicon.ico"/>
      </Head>
      <TransitionEffect />
      <main className="flex items-center justify-center text-dark w-full min-h-screen ">
        <Layout className="pt-0 md:p-16 sm:pt-8 ">
          <div className="flex items-center justify-between w-full md:flex-col md:flex xl:flex-col">
            <div
              className="w-1/3  relative lg:!justify-start md:!inline-block sm:!justify-start md:w-full xl:w-full flex-col"
              onMouseEnter={() => setShowGlitch(true)}
              onMouseLeave={() => setShowGlitch(false)}
            >
              <Image
                src={profileImage}
                alt="Tapiwa Profile"
                className="w-full h-auto self-center md:w-full lg:!px:5 sm:mb-10"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
             {showGlitch && (
                <div className="absolute top-0 left-0 w-full h-full sm:mb-10 overflow-hidden md:!inline-block md:w-full flex-col">
                  <Image
                    src={profileGlitch}
                    alt="Profile Glitch"
                    className="w-full h-full object-cover transform scale-105  md:w-full sm:!justify-center lg:!px:5 "
                  />
                </div>
              )}
            </div>
            <div className="w-1/2 flex flex-col sm:items-center sm:self-center  md:i!tems-center md:self-center lg:w-full lg:text-center">
              <AnimatedText
                text="TAPIWA PAWANDIWA"
                className="!text-10xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-4xl"
                type="heaer"
              />
              <AnimatedText
                text="SOFTWARE DEVELOPER"
                className="!text-2xl !text-left md:!text-center lg:!text-center sm:!text-center "
                type="redaction"
              />
              <p className="my-4 font-poppinsLight md:text-lg sm:text-lg bg-text xl:text-2xl">
                As a Software Developer I am dedicated to innovation and the
                design of user centric applications. Explore my latest projects,
                showcasing my skills.
              </p>

              <div className="flex items-center mt-2 sm:!justify-start xl:!items-center xl:!justify-center  md:!items-center md:!justify-center">
                <Link
                  href="/CV.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2
               px-6  rounded text-lg sm:!justify-center md:p-2 md:px-4 md:text-base sm:!self-center hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  <span className="flex-grow">CV</span>
                </Link>
                <Link
                  href="mailto: tapiwataps14@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-2xl md:text-base rounded p-3 capitalize text-dark underline hover:bg-primary"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
