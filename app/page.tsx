import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-[linear-gradient(120deg,#f9f9f9,#e3e9f6 50%,#f9f9f9)]">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-190 px-4 lg:px-20 pt-8 pb-6">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-gray-800">
            Shahin Yaghinloo
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-500 mb-6">
            Software engineer
          </h2>
        </div>
        <Image 
          src="/profile.jpg"
          alt="profile picture"
          width={150}
          height={150}
          className="circle-img w-32 h-32 lg:w-40 lg:h-40"
        />
      </div>
      <section className=" mx-4 lg:mx-52 text-sm lg:text-base text-[#444] bg-white p-6 rounded-[10px] shadow-2xl mb-12 text-left">
        <p>
        I’m a recent Computer Science graduate with practical experience in data science, automation, and full-stack development, including a high-impact internship with the U.S. Food and Drug Administration (FDA). My work has focused on building scalable, data-driven solutions and streamlining processes through thoughtful software design.
        <br /><br />
        Currently, I’m leading an early-stage venture in the AI, Software engineering and data-driven technology space, operating in stealth mode. In this role, I oversee product strategy, business development, and team formation—applying both technical and strategic thinking to drive innovation.
        <br /><br />
        Whether contributing to a fast-paced team or building systems from the ground up, I bring a strong analytical foundation, attention to detail, and a results-oriented mindset. I'm actively open to opportunities where I can deliver value through software engineering, data solutions, or technical consulting.
        </p>
      </section>
      <h1 className="text-3xl lg:text-4xl px-4">Projects</h1>
      <div className=" flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-6 justify-center pt-12 lg:pt-20 px-4">
        <Link className="inline-block rounded-2xl bg-white px-4 lg:px-6  py-3 lg:py-4 text-xl text-black hover:text-blue-500 hover:bg-blue-50 transition duration-300 w-full sm:w-auto text-center" href="https://plottwistsp.web.app/">Plot Twist Movie App </Link>
        <Link className="inline-block rounded-2xl bg-white px-4 lg:px-6  py-3 lg:py-4 text-xl text-black hover:text-blue-500 hover:bg-blue-50 transition duration-300 w-full sm:w-auto text-center" href="/medicalClassification">Portfolio Website</Link>
      </div>
      
    </main>
  );
}
