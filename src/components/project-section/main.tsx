'use client';

import { Image } from 'antd';
import 'antd/dist/reset.css';

export default function ProjectsSection() {
  const projects = [
    { src: "/images/project-1.jpg", caption: "หน้า CVE Statistics - แสดงสถิติช่องโหว่" },
    { src: "/images/project-2.jpg", caption: "หน้า All CVEs - แสดงรายการช่องโหว่ทั้งหมด" },
    { src: "/images/project-3.jpg", caption: "หน้า Products - แสดงรายการผลิตภัณฑ์ที่มีช่องโหว่" },
    { src: "/images/project-4.jpg", caption: "หน้า Watch List - แสดงรายการช่องโหว่ที่ผู้ใช้ติดตาม" },
    { src: "/images/project-5.jpg", caption: "หน้าแสดงสถิติช่องโหว่ของผลิตภัณฑ์ที่ผู้ใช้ติดตาม" },
    { src: "/images/project-6.jpg", caption: "ตัวอย่างแจ้งเตือนช่องโหว่ของผลิตภัณฑ์ที่ผู้ใช้ติดตาม" },
  ];

  return (
    <section id="projects" className="snap-start min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-3xl font-semibold mb-6 pt-6 text-black">Projects</h2>

      {/* Grid + PreviewGroup */}
      <Image.PreviewGroup>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {projects.map((project, index) => (
            <div key={index} className="rounded-md overflow-hidden cursor-pointer flex flex-col items-center">
              <Image
                src={project.src}
                alt={`ภาพตัวอย่าง: ${project.caption}`}
                width={300}
                height={170}
                loading="lazy"
                className="w-full max-w-[350px] h-full hover:scale-105 transition-transform duration-300"
              />
              <p className="text-center text-sm text-gray-600 pt-1">{project.caption}</p>
            </div>
          ))}
        </div>
      </Image.PreviewGroup>

      {/* Description */}
      <p className="text-center text-base/6 max-w-6xl text-gray-700 pt-4">
        ระบบค้นหาและติดตามช่องโหว่ เป็นเว็บแอพพลิเคชันที่พัฒนาเพื่อใช้สำหรับค้นหาและติดตามช่องโหว่ทางไซเบอร์ของผลิตภัณฑ์ต่าง ๆ
        โดยระบบจะมีฟังก์ชันหลัก ๆ เช่น การแสดงสถิติข้อมูลช่องโหว่ต่าง ๆ การแสดงข้อมูลรายละเอียดของช่องโหว่ การค้นหาผลิตภัณฑ์ที่มีช่องโหว่
        และฟังก์ชันเด่น ๆ อย่างการที่ผู้ใช้สามารถเลือกติดตามการแจ้งเตือนช่องโหว่ของผลิตภัณฑ์ที่สนใจ หรือกำลังใช้งานอยู่
        โดยระบบจะส่งการแจ้งเตือนอัตโนมัติเมื่อมีช่องโหว่ใหม่ที่เกี่ยวข้องกับผลิตภัณฑ์ที่ผู้ใช้ติดตามผ่านทางอีเมล
      </p>
    </section>
  );
}
