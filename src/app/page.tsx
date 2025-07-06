'use client';

import { useEffect, useState } from "react";
import MainSection from "../components/main-section/main";
import AboutSection from "../components/about-section/main";
import SkillsSection from "../components/skills-section/main";
import ProjectsSection from "../components/project-section/main";

import { BiSolidContact } from "react-icons/bi";
import { FaFacebook, FaLine } from "react-icons/fa";

import { FloatButton } from 'antd';
import Image from "next/image";


const sectionTitles: Record<string, string> = {
  main: 'Main',
  about: 'About me',
  skills: 'Skills',
  projects: 'Projects',
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState('main');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          setCurrentSection(id);
          window.history.replaceState(null, '', '/');
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    document.title = `Portfolio - ${sectionTitles[currentSection]}`;
  }, [currentSection]);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [gmailTooltip, setGmailTooltip] = useState("Gmail");

  const handleGmailClick = () => {
    navigator.clipboard.writeText("theptewa.phuthachat@gmail.com");
    setGmailTooltip("Copied!");
    setTimeout(() => setGmailTooltip("Gmail"), 2000); // เปลี่ยนกลับหลัง 2 วินาที
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-gradient-to-r from-blue-300 to-amber-100">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-950 to-purple-900 shadow-md text-white">
        <div className="max-w-11/12 mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <div className="space-x-4 text-normal font-medium">
            <button
              onClick={() => handleNavClick("main")}
              className="border-b-2 border-transparent hover:border-white transition px-3 py-1"
            >
              Main
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="border-b-2 border-transparent hover:border-white transition px-3 py-1"
            >
              About me
            </button>
            <button
              onClick={() => handleNavClick("skills")}
              className="border-b-2 border-transparent hover:border-white transition px-3 py-1"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className="border-b-2 border-transparent hover:border-white transition px-3 py-1"
            >
              Projects
            </button>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />

      <FloatButton.Group
        trigger="click"
        type="default"
        style={{ right: 24, bottom: 24 }}
        icon={<BiSolidContact />}
      >
        <FloatButton
          tooltip={{ title: "Facebook", placement: "left" }}
          icon={<FaFacebook className="text-blue-500" />}
          href="https://www.facebook.com/game.theptewa"
          target="_blank"
        />
        <FloatButton
          tooltip={{ title: "Line", placement: "left" }}
          icon={<FaLine className="text-green-500" />}
          href="https://line.me/ti/p/y1rgmFMb6n"
          target="_blank"
        />
        <FloatButton
          tooltip={{ title: gmailTooltip, placement: "left" }}
          onClick={handleGmailClick}
          icon={
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src="/images/gmail.png"
                alt="Gmail"
                width={15}
                height={15}
              />
            </div>
          }
        />
      </FloatButton.Group>
    </div>
  );
}
