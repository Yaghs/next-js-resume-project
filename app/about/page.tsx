import Image from "next/image";
import Link from "next/link"

export default function About(){
    return(
        <main>
           <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-12 lg:pt-24 max-w-6xl mx-auto px-4 lg:px-6">
                <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl mb-6 lg:mb-10">About Me</h1>
                <p>I am a recent Computer Science graduate from SUNY Farmingdale, having
                earned my Bachelor&apos;s degree on May 21, 2025, with a cumulative GPA of
                3.4. I gained professional experience as a Data Scientist Intern with
                the U.S. Food and Drug Administration during Summer 2024 and Spring
                2025. I am a dedicated and motivated individual, eager to apply my
                skills and contribute meaningfully to impactful projects and teams.</p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4 pt-6 lg:pt-10">
                        <Link className="inline-block rounded-2xl
                                    bg-white w-full sm:w-auto
                                    px-4 lg:px-6 py-3 lg:py-4 text-base lg:text-xl text-black
                                    hover:text-blue-500
                                    hover:bg-blue-50
                                    transition duration-300"
                        href="https://github.com/Yaghs">
                        <div className="flex items-center justify-center gap-3">
                           <Image src="/github.png" alt="github-logo" width={50} height={50}/>
                            Github
                        </div>
                        
                    </Link>
                    <Link className="inline-block rounded-2xl
                                    bg-white w-full sm:w-auto
                                    px-4 lg:px-6 py-3 lg:py-4 text-base lg:text-xl text-black
                                    hover:text-blue-500
                                    hover:bg-blue-50
                                    transition duration-300"
                        href="https://www.linkedin.com/in/shahin-yaghinloo-00380a1a7/">
                         <div className="flex items-center justify-center gap-3 pl-5 lg:pl-0">
                        <Image src="/linkedinlogo.png" alt="linkedIn-logo" width={50} height={50} />
                        LinkedIn
                        </div>
                    </Link>
                    <Link className="inline-block rounded-2xl
                                    bg-white w-full sm:w-auto
                                    px-4 lg:px-6 py-3 lg:py-4 text-base lg:text-xl text-black
                                    hover:text-blue-500
                                    hover:bg-blue-50
                                    transition duration-300"
                        href="mailto:syaghinloo@gmail.com">
                         <div className="flex items-center justify-center gap-3 pt-1.5">
                            <Image src="/Gmailogo.png" alt="Gmail-logo" width={50} height={50}/>
                            Gmail
                        </div>
                    </Link>
                </div>
                
                </div> 
                <Image src="/GraduationImage.jpg" alt="graduation-image" width={360} height={600} 
                className="rounded-[10px] shadow-lg object-cover shrink-0"/>
            </div>
                <div>
                    <h1 className="text-3xl pt-20 font-bold">Programming languages</h1>
                    <div className="flex justify-center gap-10 pt-10">
                        <div className="relative inline-block group">
                            <Image  src="/JavaScript.png" alt="Java-script-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">JavaScript</span>
                            </div>
                        </div>
                        <div className="relative inline-block group">
                            <Image  src="/HTML.png" alt="html-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">HTML</span>
                            </div>
                        </div>
                        <div className="relative inline-block group">
                            <Image src="/CSS.png" alt="Java-script-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">CSS</span>
                            </div>
                        </div>
                        <div className="relative inline-block group">
                            <Image  src="/TypeScript.png" alt="Type-script-logo" width={200} height={200} className="rounded-4xl"/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">Typscript</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl pt-20 font-bold">Frameworks/Libraries</h1>
                     <div className="flex justify-center gap-10 pt-10">
                        <div className="relative inline-block group">
                            <Image src="/React.png" alt="React-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">React</span>
                            </div>
                        </div>
                        <div className="relative inline-block group">
                            <Image src="/NextJs.png" alt="Next-js-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">Next JS</span>
                            </div>
                        </div>
                        <div className="relative inline-block group">
                            <Image src="/tailwindCSS.png" alt="tailwind-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">Tailwind CSS</span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl pt-20 font-bold">Technologies</h1>
                     <div className="flex justify-center gap-10 pt-10">
                        <div className="relative inline-block group">
                            <Image src="/Firebase-new.png" alt="Firebase-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">Firebase</span>
                            </div>
                        </div>
                        <div className="relative inline-block group">
                            <Image src="/github.png" alt="Next-js-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">Git</span>
                            </div>
                        </div>
                        <div className="relative inline-block group">
                            <Image src="/claude-color.svg" alt="claude-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">Claude</span>
                            </div>
                        </div>
                        <div className="relative inline-block group">
                            <Image src="/OpenAI.png" alt="claude-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">OpenAI API</span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl pt-20 font-bold">Tools</h1>
                     <div className="flex justify-center gap-10 pt-10">
                        <div className="relative inline-block group">
                            <Image src="/VS-Code.png" alt="VS-Code-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">VS-Code</span>
                            </div>
                        </div>
                        <div className="relative inline-block group">
                            <Image src="/Cursor.png" alt="Cursor-logo" width={200} height={200}/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black hover:opacity-90 rounded-4xl transition duration-300">
                                <span className="text-white text-xl font-semibold">Cursor</span>
                            </div>
                        </div>
                    </div>
                </div>
            
        </main>
    )
}