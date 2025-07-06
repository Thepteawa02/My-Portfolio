import Image from "next/image";

export default function MainSection() {
  return (
    <section id="main" className="snap-start h-screen flex flex-col items-center justify-center">
      <div className="w-[200px] h-[200px] rounded-full p-[3px] bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg mt-8">
        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white">
          <Image
            src="/images/Theptewa_img.jpg"
            alt="Theptewa"
            width={180}
            height={180}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-black pt-6">สวัสดีครับ</h1>
      <h2 className="text-4xl font-bold text-black">ผมชื่อ เทพเทวา พุทธชาติ</h2>
      <p className="text-2xl text-black pt-8">สนใจสมัครงานในตำแหน่ง</p>
      <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 mt-4">
        Full Stack Developer | Software Developer | Backend Developer
      </p>
    </section>
  );
}
