'use client';

import { useState } from "react";
import { Modal } from "antd";


import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";

import {
  FaDartLang
} from "react-icons/fa6";

import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiNextdotjs,
  SiPhp,
  SiTypescript,
  SiFlutter,
  SiKotlin,
} from "react-icons/si";

import {
  BiLogoPostgresql,
} from "react-icons/bi";

type Detail = {
  icon: React.ReactNode;
  label: string;
  level: string;
  note: string;
};

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<Detail | null>(null);

  const languages: Detail[] = [
    {
      icon: <FaHtml5 className="text-orange-500" />,
      label: "HTML5",
      level: "ระดับเชี่ยวชาญ",
      note: "สามารถพัฒนาเว็บโดยใช้ภาษานี้ได้ร่วมกับภาษาอื่นได้",
    },
    {
      icon: <FaCss3Alt className="text-blue-600" />,
      label: "CSS3",
      level: "ระดับปานกลาง",
      note: "สามารถใช้คำสั่งพื้นฐาน และตกแต่ง Style ได้",
    },
    {
      icon: <FaPython className="text-blue-500" />,
      label: "Python",
      level: "ระดับเชี่ยวชาญ (มีประสบการณ์)",
      note: "สามารถพัฒนาระบบ และโปรแกรมด้วยภาษานี้ได้",
    },
    {
      icon: <SiJavascript className="text-yellow-400" />,
      label: "JavaScript",
      level: "ระดับเริ่มต้น",
      note: "สามารถอ่าน และทำความเข้าใจพื้นฐานในการใช้ภาษานี้เขียนโค้ดได้",
    },
    {
      icon: <SiTypescript className="text-sky-600" />,
      label: "TypeScript",
      level: "ระดับเริ่มต้น (กำลังศึกษา)",
      note: "สามารถอ่าน และทำความเข้าใจพื้นฐานในการใช้ภาษานี้เขียนโค้ดได้",
    },
    {
      icon: <SiPhp className="text-indigo-500" />,
      label: "PHP",
      level: "ระดับปานกลาง",
      note: "สามารถอ่าน และทำความเข้าใจพื้นฐานในการใช้ภาษานี้เขียนโค้ดได้",
    },
    {
      icon: <SiKotlin className="text-purple-500" />,
      label: "Kotlin",
      level: "ระดับเริ่มต้น",
      note: "สามารถอ่าน และทำความเข้าใจพื้นฐานในการใช้ภาษานี้เขียนโค้ดได้",
    },
    {
      icon: <FaDartLang className="text-[#0175C2]" />,
      label: "Dart",
      level: "ระดับเริ่มต้น",
      note: "สามารถอ่าน และทำความเข้าใจพื้นฐานในการใช้ภาษานี้เขียนโค้ดได้",
    },
  ];

  const frameworks: Detail[] = [
    {
      icon: <SiNextdotjs className="text-black" />,
      label: "Next.js",
      level: "ระดับปานกลาง (มีประสบการณ์)",
      note: "มีประสบการณ์ในการพัฒนาเว็บแอปพลิเคชันด้วย Next.js",
    },
    {
      icon: <FaNodeJs className="text-green-600" />,
      label: "Node.js",
      level: "ระดับปานกลาง (มีประสบการณ์)",
      note: "มีประสบการณ์ในการพัฒนาเว็บแอปพลิเคชันด้วย Node.js",
    },
    {
      icon: <SiMongodb className="text-green-500" />,
      label: "MongoDB",
      level: "ระดับปานกลาง (มีประสบการณ์)",
      note: "มีประสบการณ์ในการใช้งานฐานข้อมูล NoSQL และสามารถเขียน Aggregation ได้",
    },
    {
      icon: <FaReact className="text-blue-500" />,
      label: "React",
      level: "ระดับเริ่มต้น (กำลังศึกษา)",
      note: "สามารถอ่าน และทำความเข้าใจพื้นฐานในการใช้ React เขียนโค้ดได้",
    },
    {
      icon: <SiTailwindcss className="text-sky-400" />,
      label: "Tailwind CSS",
      level: "ระดับเริ่มต้น (กำลังศึกษา)",
      note: "สามารถอ่าน และทำความเข้าใจพื้นฐานในการใช้ Tailwind CSS เขียนโค้ดได้",
    },
    {
      icon: <BiLogoPostgresql className="text-blue-500" />,
      label: "PostgreSQL",
      level: "ระดับปานกลาง (มีประสบการณ์)",
      note: "มีประสบการณ์ในการใช้งานฐานข้อมูล SQL และสามารถเขียน Query ได้",
    },
    {
      icon: <SiFlutter className="text-sky-400" />,
      label: "Flutter",
      level: "ระดับปานกลาง",
      note: "สามารถอ่าน และทำความเข้าใจพื้นฐานในการใช้ Flutter เขียนโค้ดได้",
    },
  ];

  return (
    <section
      id="skills"
      className="snap-start min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      <h2 className="text-3xl font-semibold mb-10 text-black">Skills</h2>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl justify-center items-start">
        {/* ภาษา */}
        <div className="flex-1">
          <p className="text-xl font-bold mb-4 text-gray-800 text-center">Languages</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
            {languages.map((lang, index) => (
              <div key={index} onClick={() => setSelectedSkill({
                label: lang.label,
                level: lang.level,
                note: lang.note,
                icon: lang.icon,
              })} className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
                <div className="text-5xl mb-2">{lang.icon}</div>
                <p className="text-gray-700">{lang.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:block w-px bg-black h-auto mx-4" />

        {/* Frameworks / Databases */}
        <div className="flex-1">
          <p className="text-xl font-bold mb-4 text-gray-800 text-center">Frameworks / Databases</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
            {frameworks.map((tool, index) => (
              <div key={index} onClick={() => setSelectedSkill(tool)} className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
                <div className="text-5xl mb-2">{tool.icon}</div>
                <p className="text-gray-700">{tool.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedSkill && (
        <Modal
          open={!!selectedSkill}
          onCancel={() => setSelectedSkill(null)}
          footer={null}
          title={
            <div className="flex items-center text-xl font-bold text-black">
              <span className="text-2xl mr-2">{selectedSkill.icon}</span>
              <span>{selectedSkill.label}</span>
            </div>
          }
          centered
        >
          <ul className="list-disc list-inside text-gray-700 text-lg mt-2">
            <li>{selectedSkill.level}</li>
            <li>{selectedSkill.note}</li>
          </ul>
        </Modal>
      )}

    </section>
  );
}
