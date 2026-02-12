import "./globals.css";

import Link from "next/link"

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
          <nav className="sticky top-0 flex flex-wrap justify-center items-center bg-white h-16 shadow-xl p-4 gap-6 w-full z-10">
            <Link className=" text-black text-sm hover:text-blue-500 transition duration-300" href="/">Home</Link>
            <Link className=" text-black text-sm hover:text-blue-500 transition duration-300" href="/about">About</Link>
            <Link className=" text-black text-sm hover:text-blue-500 transition duration-300" href="/Shahin_Yaghinloo_Resume_V16.pdf" download="Shahin-Yaghinloo-Resume">Resume</Link>
          </nav>
        {children}
      </body>
    </html>
  );
}
