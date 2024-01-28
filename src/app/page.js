"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import "./page.css";
import Logo from "../../public/vercel.svg";
import { AdditionalInfo } from "@/data/AdditionalInfo";
import Countdown from "@/components/Countdown";
export default function Home() {
  const [lastScrollTop, setLastScrollTop] = useState(0); // Initialize the state

  // Header
  useEffect(() => {
    const header = document.getElementById("site-header");

    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      let scrollPos = window.scrollY;
      if (scrollPos <= 100) {
        header.style.backgroundColor = "transparent";
      }

      if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.transform = "translateY(-100%)";
      } else {
        // Scrolling up
        header.style.transform = "translateY(0)";
        header.style.backgroundColor = "v"; // setting background to white when shown
        if (scrollPos <= 100) {
          header.style.backgroundColor = "transparent";
        }
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  //Additional Info Description Blocks
  const InfoBlock = ({ heading, description }) => {
    return (
      <div className="w-4/5 text-lg text-primary-text font-bold hover:bg-hover-color px-4 py-4 rounded-lg">
        <span className="font-extrabold text-primary-bold"> {heading} </span>
        {description}
      </div>
    );
  };

  return (
    <>
      <div className="overflow-hidden scroll-smooth bg-bg-color min-h-screen">
        <div
          className="h-20 flex items-center lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 z-50 header w-full fixed"
          id="site-header"
        >
          <div className="pt-10 pb-10">
            <a href="#home">
              <Image src={Logo} height={100} width={100} />
            </a>
          </div>
          <div className="h-20 ml-2 xl:ml-8 gap-4 xl:gap-8 font-semibold flex items-center py-10 text-primary-text">
            <a
              className="pb-1 cursor-pointer link link-underline link-underline-black "
              href="#about"
            >
              About
            </a>
            <a
              className=" pb-1 cursor-pointer link link-underline link-underline-black "
              href="#home"
            >
              Home
            </a>
            <a
              className=" pb-1 cursor-pointer link link-underline link-underline-black "
              href="#tracks"
            >
              Tracks
            </a>
            <a
              className="pb-1 cursor-pointer link link-underline link-underline-black "
              href="#sponsors"
            >
              Sponsors
            </a>
            <a
              className="pb-1 cursor-pointer link link-underline link-underline-black "
              href="#faqs"
            >
              FAQs
            </a>
            <a
              className="pb-1 cursor-pointer link link-underline link-underline-black "
              href=""
            >
              2023
            </a>
            <a
              className="pb-1 cursor-pointer  link link-underline link-underline-black "
              href=""
            >
              Apply
            </a>
          </div>
        </div>
        <section
          id="home"
          className="w-full pt-36 lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 flex flex-col relative pb lg:items-center"
        >
          <div className="flex flex-col items-center container mx-auto px-4">
            <h1 className="text-4xl text-center font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 animate-text">
              Stanford x MIT Impactathon<br />Join us for our first
              year to dream and build the future!
            </h1>
            <p className="font-bold text-center text-primary-text text-lg w-4/5 m-auto">
              The country’s brightest engineering students from Stanford and MIT{" "}
              <br />
              collaborate to build solutions to the world’s largest challenges.
              <br />
            </p>
            <div className="bg-primary-bold text-white container flex flex-col items-start justify-center mt-4 w-min whitespace-nowrap px-8 py-6 rounded-xl">
              <div className="inline-block">
                <p className="font-semibold mb-0.5 xl:text-lg lg:text-md text-lg">
                  April 5th @ MIT and Stanford Virtually
                </p>
                <div className="h-1 mb-4 bg-white rounded-xl w-full" />
              </div>
              <Countdown targetDate="2024-04-15T00:00:00" />
            </div>
          </div>
        </section>
        <section
          className="w-full xl:pt-36 lg:pt-8 md:pt-14 pt-14 xl:pl-40 xl:pr-40 lg:pl-10 lg:pr-10 md:pl-20 md:pr-20 px-4 pb-12 flex flex-col relative justify-center items-center"
          id="about"
        >
          <h1 className="text-4xl text-center font-extrabold mb-4 text-primary-bold">
            About
          </h1>
          <p className="font-bold text-center text-primary-text text-lg w-4/5 m-auto">
            The Stanford x MIT Social Good Hackathon will be a collaboration
            Hackathon <br /> between Code for Good at MIT and CS for Social Good
            at Stanford.
            <br /> It will run first as a virtual hackathon with entrants <br />
            limited to undergrad students within the two schools.
          </p>
        </section>
        <section
          className="w-full xl:pt-36 lg:pt-8 md:pt-14 pt-14 xl:pl-40 xl:pr-40 lg:pl-10 lg:pr-10 md:pl-20 md:pr-20 px-4 pb-12 flex flex-col relative justify-center items-center"
          id="info"
        >
          <h1 className="text-4xl text-center font-extrabold mb-4 text-primary-bold">
            Additional Info
          </h1>
          {AdditionalInfo.map((info, index) => {
            return (
              <InfoBlock
                key={index}
                heading={info.heading}
                description={info.description}
              />
            );
          })}
        </section>
        <div className="w-full py-10 flex flex-col relative overflow-hidden border-b">
          <h1 className="font-bold text-lg text-primary-bold text-center mb-2">
            Made with ❤︎ by the CodeforGood
          </h1>
          <h1 className="font-base text-md text-primary-bold text-center">
          Copyright © 2024 MIT CodeforGood | Code Released under MIT license
          </h1>
        </div>
      </div>
    </>
  );
}
